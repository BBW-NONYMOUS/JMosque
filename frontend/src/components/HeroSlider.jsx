import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import img0 from '../assets/images/sliderImage/image.jpg';
import img1 from '../assets/images/sliderImage/image1.jpg';
import img2 from '../assets/images/sliderImage/image2.jpg';
import img3 from '../assets/images/sliderImage/image3.jpg';

const SLIDES = [img0, img1, img2, img3];
const AUTO_INTERVAL = 5000;
const TRANSITION_MS = 1400;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTex1;
  uniform sampler2D uTex2;
  uniform float uProgress;
  uniform float uTime;
  uniform float uContainerAspect;
  uniform float uImageAspect1;
  uniform float uImageAspect2;

  varying vec2 vUv;

  vec2 coverUv(vec2 uv, float containerAspect, float imageAspect) {
    if (imageAspect > containerAspect) {
      float scale = containerAspect / imageAspect;
      return vec2((uv.x - 0.5) * scale + 0.5, uv.y);
    } else {
      float scale = imageAspect / containerAspect;
      return vec2(uv.x, (uv.y - 0.5) * scale + 0.5);
    }
  }

  void main() {
    float wave = sin(vUv.x * 12.0 + uTime * 3.0) * sin(vUv.y * 9.0 + uTime * 2.5);
    float dist = wave * uProgress * (1.0 - uProgress) * 0.055;

    vec2 uv1 = coverUv(vec2(vUv.x + dist, vUv.y + dist), uContainerAspect, uImageAspect1);
    vec2 uv2 = coverUv(vec2(vUv.x - dist, vUv.y - dist), uContainerAspect, uImageAspect2);

    vec4 c1 = texture2D(uTex1, clamp(uv1, 0.001, 0.999));
    vec4 c2 = texture2D(uTex2, clamp(uv2, 0.001, 0.999));

    float brightness = 1.0 - sin(uProgress * 3.14159) * 0.12;
    gl_FragColor = mix(c1, c2, uProgress) * brightness;
  }
`;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function HeroSlider() {
  const mountRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const gl = useRef(null);

  // Stable transition function — reads current state from ref
  const beginTransition = useRef((toIndex) => {
    const g = gl.current;
    if (!g || !g.material || g.transitioning || toIndex === g.currentIndex) return;
    g.nextIndex = toIndex;
    g.transitioning = true;
    g.transitionStart = performance.now();
    g.material.uniforms.uTex1.value = g.textures[g.currentIndex];
    g.material.uniforms.uTex2.value = g.textures[g.nextIndex];
    g.material.uniforms.uImageAspect1.value = g.aspects[g.currentIndex];
    g.material.uniforms.uImageAspect2.value = g.aspects[g.nextIndex];
    g.material.uniforms.uProgress.value = 0;
  }).current;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Guard against Strict Mode double-invoke / cleanup races
    let aborted = false;

    const g = {
      renderer: null,
      scene: null,
      camera: null,
      material: null,
      textures: new Array(SLIDES.length).fill(null),
      aspects: new Array(SLIDES.length).fill(1),
      currentIndex: 0,
      nextIndex: 1,
      transitioning: false,
      transitionStart: null,
      clock: new THREE.Clock(),
      rafId: null,
      timerId: null,
    };
    gl.current = g;

    // ── Renderer ──────────────────────────────────────────────────
    const buildRenderer = (w, h) => {
      g.scene = new THREE.Scene();
      g.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      g.camera.position.z = 1;

      g.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
      g.renderer.setSize(w, h);
      g.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Make the canvas fill its parent via CSS too
      const canvas = g.renderer.domElement;
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      mount.appendChild(canvas);
    };

    // ── Boot scene once all textures are ready ────────────────────
    const boot = (containerAspect) => {
      if (aborted) return;

      const geo = new THREE.PlaneGeometry(2, 2);
      g.material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTex1:            { value: g.textures[0] },
          uTex2:            { value: g.textures[1] },
          uProgress:        { value: 0.0 },
          uTime:            { value: 0.0 },
          uContainerAspect: { value: containerAspect },
          uImageAspect1:    { value: g.aspects[0] },
          uImageAspect2:    { value: g.aspects[1] },
        },
      });

      g.scene.add(new THREE.Mesh(geo, g.material));
      setReady(true);

      g.timerId = setInterval(
        () => beginTransition((g.currentIndex + 1) % SLIDES.length),
        AUTO_INTERVAL,
      );

      const loop = () => {
        if (aborted) return;
        g.rafId = requestAnimationFrame(loop);
        g.material.uniforms.uTime.value = g.clock.getElapsedTime();

        if (g.transitioning) {
          const raw = Math.min((performance.now() - g.transitionStart) / TRANSITION_MS, 1);
          g.material.uniforms.uProgress.value = easeInOutCubic(raw);

          if (raw >= 1) {
            g.transitioning = false;
            g.currentIndex = g.nextIndex;
            setActiveIndex(g.currentIndex);
            g.material.uniforms.uTex1.value = g.textures[g.currentIndex];
            g.material.uniforms.uProgress.value = 0;
          }
        }

        g.renderer.render(g.scene, g.camera);
      };
      loop();
    };

    // ── Initialise (waits for real dimensions via ResizeObserver) ─
    let inited = false;
    const init = () => {
      if (inited || aborted) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return; // not laid out yet — ResizeObserver will retry

      inited = true;
      buildRenderer(w, h);

      const loader = new THREE.TextureLoader();
      let loaded = 0;

      SLIDES.forEach((src, i) => {
        loader.load(
          src,
          (tex) => {
            if (aborted) { tex.dispose(); return; }
            tex.minFilter = THREE.LinearFilter;
            tex.generateMipmaps = false;
            g.textures[i] = tex;
            g.aspects[i] = tex.image.naturalWidth / tex.image.naturalHeight || 4 / 3;
            loaded++;
            if (loaded === SLIDES.length) boot(w / h);
          },
          undefined,
          () => { loaded++; if (loaded === SLIDES.length && !aborted) boot(w / h); },
        );
      });
    };

    const ro = new ResizeObserver(() => {
      init();
      // After init, keep canvas buffer in sync with container
      if (inited && g.renderer && !aborted) {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        if (w > 0 && h > 0) {
          g.renderer.setSize(w, h);
          if (g.material) g.material.uniforms.uContainerAspect.value = w / h;
        }
      }
    });
    ro.observe(mount);
    init(); // attempt immediately in case dimensions are already available

    return () => {
      aborted = true;
      ro.disconnect();
      cancelAnimationFrame(g.rafId);
      clearInterval(g.timerId);
      g.textures.forEach((t) => t?.dispose());
      g.material?.dispose();
      if (g.renderer) {
        if (mount.contains(g.renderer.domElement)) mount.removeChild(g.renderer.domElement);
        g.renderer.dispose();
      }
      gl.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative h-full w-full">
      {!ready && (
        <div className="absolute inset-0 animate-pulse bg-green-50" />
      )}

      <div ref={mountRef} className="h-full w-full" />

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => beginTransition(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-7 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => beginTransition((gl.current?.currentIndex - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => beginTransition((gl.current?.currentIndex + 1) % SLIDES.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
