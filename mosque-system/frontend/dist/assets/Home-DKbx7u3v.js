import{r as Kt,j,u as fl,L as Er,a as gi,C as hl,M as Ma}from"./index-BLtO30Zk.js";import{u as pl}from"./useFetchMosques-c-wNPOnu.js";import{S as ml}from"./SkeletonCard-tWKhZKFE.js";import{S as br}from"./search-B6Z5X0tB.js";import{N as gl}from"./navigation-Sx690m4E.js";const Ks="184",_l=0,Ea=1,xl=2,rr=1,vl=2,Ti=3,Pn=0,Rt=1,dn=2,hn=0,li=1,ba=2,Ta=3,ya=4,Sl=5,On=100,Ml=101,El=102,bl=103,Tl=104,yl=200,Al=201,Rl=202,wl=203,rs=204,ss=205,Cl=206,Pl=207,Dl=208,Ll=209,Ul=210,Il=211,Nl=212,Fl=213,Ol=214,as=0,os=1,ls=2,ui=3,cs=4,us=5,ds=6,fs=7,Eo=0,Bl=1,zl=2,Qt=0,bo=1,To=2,yo=3,Ao=4,Ro=5,wo=6,Co=7,Po=300,Vn=301,di=302,Tr=303,yr=304,gr=306,hs=1e3,fn=1001,ps=1002,vt=1003,Gl=1004,Ni=1005,St=1006,Ar=1007,zn=1008,Ft=1009,Do=1010,Lo=1011,Ai=1012,Zs=1013,nn=1014,$t=1015,gn=1016,$s=1017,Js=1018,Ri=1020,Uo=35902,Io=35899,No=1021,Fo=1022,Ht=1023,_n=1026,Gn=1027,Oo=1028,Qs=1029,Hn=1030,ea=1031,ta=1033,sr=33776,ar=33777,or=33778,lr=33779,ms=35840,gs=35841,_s=35842,xs=35843,vs=36196,Ss=37492,Ms=37496,Es=37488,bs=37489,ur=37490,Ts=37491,ys=37808,As=37809,Rs=37810,ws=37811,Cs=37812,Ps=37813,Ds=37814,Ls=37815,Us=37816,Is=37817,Ns=37818,Fs=37819,Os=37820,Bs=37821,zs=36492,Gs=36494,Vs=36495,Hs=36283,ks=36284,dr=36285,Ws=36286,Vl=3200,Aa=0,Hl=1,wn="",Nt="srgb",fr="srgb-linear",hr="linear",qe="srgb",Yn=7680,Ra=519,kl=512,Wl=513,Xl=514,na=515,ql=516,Yl=517,ia=518,jl=519,wa=35044,Ca="300 es",Jt=2e3,pr=2001;function Kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zl(){const i=wi("canvas");return i.style.display="block",i}const Pa={};function Da(...i){const e="THREE."+i.shift();console.log(e,...i)}function Bo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Bo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Bo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xs(...i){const e=i.join(" ");e in Pa||(Pa[e]=!0,Re(...i))}function $l(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Jl={[as]:os,[ls]:ds,[cs]:fs,[ui]:us,[os]:as,[ds]:ls,[fs]:cs,[us]:ui};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,qs=180/Math.PI;function Ci(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Ql(i,e){return(i%e+e)%e}function wr(i,e,t){return(1-t)*i+t*e}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const la=class la{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};la.prototype.isVector2=!0;let Je=la;class pi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],g=s[a+1],v=s[a+2],E=s[a+3];if(d!==E||c!==u||l!==g||h!==v){let p=c*u+l*g+h*v+d*E;p<0&&(u=-u,g=-g,v=-v,E=-E,p=-p);let f=1-o;if(p<.9995){const M=Math.acos(p),y=Math.sin(M);f=Math.sin(f*M)/y,o=Math.sin(o*M)/y,c=c*f+u*o,l=l*f+g*o,h=h*f+v*o,d=d*f+E*o}else{c=c*f+u*o,l=l*f+g*o,h=h*f+v*o,d=d*f+E*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],u=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+h*d+c*g-l*u,e[t+1]=c*v+h*u+l*d-o*g,e[t+2]=l*v+h*g+o*u-c*d,e[t+3]=h*v-o*d-c*u-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=c(n/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*g*v,this._y=l*g*d-u*h*v,this._z=l*h*v+u*g*d,this._w=l*h*d-u*g*v;break;case"YXZ":this._x=u*h*d+l*g*v,this._y=l*g*d-u*h*v,this._z=l*h*v-u*g*d,this._w=l*h*d+u*g*v;break;case"ZXY":this._x=u*h*d-l*g*v,this._y=l*g*d+u*h*v,this._z=l*h*v+u*g*d,this._w=l*h*d-u*g*v;break;case"ZYX":this._x=u*h*d-l*g*v,this._y=l*g*d+u*h*v,this._z=l*h*v-u*g*d,this._w=l*h*d+u*g*v;break;case"YZX":this._x=u*h*d+l*g*v,this._y=l*g*d+u*h*v,this._z=l*h*v-u*g*d,this._w=l*h*d-u*g*v;break;case"XZY":this._x=u*h*d-l*g*v,this._y=l*g*d-u*h*v,this._z=l*h*v+u*g*d,this._w=l*h*d+u*g*v;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ca=class ca{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cr.copy(this).projectOnVector(e),this.sub(Cr)}reflect(e){return this.sub(Cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ca.prototype.isVector3=!0;let B=ca;const Cr=new B,La=new pi,ua=class ua{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],g=n[5],v=n[8],E=r[0],p=r[3],f=r[6],M=r[1],y=r[4],T=r[7],P=r[2],b=r[5],D=r[8];return s[0]=a*E+o*M+c*P,s[3]=a*p+o*y+c*b,s[6]=a*f+o*T+c*D,s[1]=l*E+h*M+d*P,s[4]=l*p+h*y+d*b,s[7]=l*f+h*T+d*D,s[2]=u*E+g*M+v*P,s[5]=u*p+g*y+v*b,s[8]=u*f+g*T+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,g=l*s-a*c,v=t*d+n*u+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=d*E,e[1]=(r*l-h*n)*E,e[2]=(o*n-r*a)*E,e[3]=u*E,e[4]=(h*t-r*c)*E,e[5]=(r*s-o*t)*E,e[6]=g*E,e[7]=(n*c-l*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ua.prototype.isMatrix3=!0;let Pe=ua;const Pr=new Pe,Ua=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ec(){const i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===qe&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qe&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wn?hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:Ua,fromXYZ:Ia,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:qe,toXYZ:Ua,fromXYZ:Ia,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const Ge=ec();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class tc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=wi("canvas")),jn.width=e.width,jn.height=e.height;const r=jn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nc=0;class ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dr(r[a].image)):s.push(Dr(r[a]))}else s=Dr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let ic=0;const Lr=new B;class Tt extends Wn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=fn,r=fn,s=St,a=zn,o=Ht,c=Ft,l=Tt.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Ci(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Po;Tt.DEFAULT_ANISOTROPY=1;const da=class da{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],g=c[5],v=c[9],E=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(v+p)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,T=(g+1)/2,P=(f+1)/2,b=(h+u)/4,D=(d+E)/4,x=(v+p)/4;return y>T&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=D/n):T>P?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=b/r,s=x/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=x/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-v)*(p-v)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(d-E)/M,this.z=(u-h)/M,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};da.prototype.isVector4=!0;let dt=da;class rc extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zo extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sc extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mr=class mr{constructor(e,t,n,r,s,a,o,c,l,h,d,u,g,v,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,u,g,v,E,p)}set(e,t,n,r,s,a,o,c,l,h,d,u,g,v,E,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=g,f[7]=v,f[11]=E,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,g=a*d,v=o*h,E=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=g+v*l,t[5]=u-E*l,t[9]=-o*c,t[2]=E-u*l,t[6]=v+g*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,g=c*d,v=l*h,E=l*d;t[0]=u+E*o,t[4]=v*o-g,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=g*o-v,t[6]=E+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,g=c*d,v=l*h,E=l*d;t[0]=u-E*o,t[4]=-a*d,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*h,t[9]=E-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,g=a*d,v=o*h,E=o*d;t[0]=c*h,t[4]=v*l-g,t[8]=u*l+E,t[1]=c*d,t[5]=E*l+u,t[9]=g*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,g=a*l,v=o*c,E=o*l;t[0]=c*h,t[4]=E-u*d,t[8]=v*d+g,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*d+v,t[10]=u-E*d}else if(e.order==="XZY"){const u=a*c,g=a*l,v=o*c,E=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+E,t[5]=a*h,t[9]=g*d-v,t[2]=v*d-g,t[6]=o*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ac,e,oc)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),En.crossVectors(n,Pt),En.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),En.crossVectors(n,Pt)),En.normalize(),Fi.crossVectors(Pt,En),r[0]=En.x,r[4]=Fi.x,r[8]=Pt.x,r[1]=En.y,r[5]=Fi.y,r[9]=Pt.y,r[2]=En.z,r[6]=Fi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],g=n[13],v=n[2],E=n[6],p=n[10],f=n[14],M=n[3],y=n[7],T=n[11],P=n[15],b=r[0],D=r[4],x=r[8],A=r[12],I=r[1],w=r[5],z=r[9],W=r[13],q=r[2],U=r[6],V=r[10],H=r[14],Q=r[3],ee=r[7],ue=r[11],ve=r[15];return s[0]=a*b+o*I+c*q+l*Q,s[4]=a*D+o*w+c*U+l*ee,s[8]=a*x+o*z+c*V+l*ue,s[12]=a*A+o*W+c*H+l*ve,s[1]=h*b+d*I+u*q+g*Q,s[5]=h*D+d*w+u*U+g*ee,s[9]=h*x+d*z+u*V+g*ue,s[13]=h*A+d*W+u*H+g*ve,s[2]=v*b+E*I+p*q+f*Q,s[6]=v*D+E*w+p*U+f*ee,s[10]=v*x+E*z+p*V+f*ue,s[14]=v*A+E*W+p*H+f*ve,s[3]=M*b+y*I+T*q+P*Q,s[7]=M*D+y*w+T*U+P*ee,s[11]=M*x+y*z+T*V+P*ue,s[15]=M*A+y*W+T*H+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],g=e[14],v=e[3],E=e[7],p=e[11],f=e[15],M=c*g-l*u,y=o*g-l*d,T=o*u-c*d,P=a*g-l*h,b=a*u-c*h,D=a*d-o*h;return t*(E*M-p*y+f*T)-n*(v*M-p*P+f*b)+r*(v*y-E*P+f*D)-s*(v*T-E*b+p*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],g=e[11],v=e[12],E=e[13],p=e[14],f=e[15],M=t*o-n*a,y=t*c-r*a,T=t*l-s*a,P=n*c-r*o,b=n*l-s*o,D=r*l-s*c,x=h*E-d*v,A=h*p-u*v,I=h*f-g*v,w=d*p-u*E,z=d*f-g*E,W=u*f-g*p,q=M*W-y*z+T*w+P*I-b*A+D*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/q;return e[0]=(o*W-c*z+l*w)*U,e[1]=(r*z-n*W-s*w)*U,e[2]=(E*D-p*b+f*P)*U,e[3]=(u*b-d*D-g*P)*U,e[4]=(c*I-a*W-l*A)*U,e[5]=(t*W-r*I+s*A)*U,e[6]=(p*T-v*D-f*y)*U,e[7]=(h*D-u*T+g*y)*U,e[8]=(a*z-o*I+l*x)*U,e[9]=(n*I-t*z-s*x)*U,e[10]=(v*b-E*T+f*M)*U,e[11]=(d*T-h*b-g*M)*U,e[12]=(o*A-a*w-c*x)*U,e[13]=(t*w-n*A+r*x)*U,e[14]=(E*y-v*P-p*M)*U,e[15]=(h*P-d*y+u*M)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,g=s*h,v=s*d,E=a*h,p=a*d,f=o*d,M=c*l,y=c*h,T=c*d,P=n.x,b=n.y,D=n.z;return r[0]=(1-(E+f))*P,r[1]=(g+T)*P,r[2]=(v-y)*P,r[3]=0,r[4]=(g-T)*b,r[5]=(1-(u+f))*b,r[6]=(p+M)*b,r[7]=0,r[8]=(v+y)*D,r[9]=(p-M)*D,r[10]=(1-(u+E))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Kn.set(r[0],r[1],r[2]).length();const o=Kn.set(r[4],r[5],r[6]).length(),c=Kn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ot.copy(this);const l=1/a,h=1/o,d=1/c;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=h,Ot.elements[5]*=h,Ot.elements[6]*=h,Ot.elements[8]*=d,Ot.elements[9]*=d,Ot.elements[10]*=d,t.setFromRotationMatrix(Ot),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Jt,c=!1){const l=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),g=(n+r)/(n-r);let v,E;if(c)v=s/(a-s),E=a*s/(a-s);else if(o===Jt)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===pr)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Jt,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),g=-(n+r)/(n-r);let v,E;if(c)v=1/(a-s),E=a/(a-s);else if(o===Jt)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===pr)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};mr.prototype.isMatrix4=!0;let mt=mr;const Kn=new B,Ot=new mt,ac=new B(0,0,0),oc=new B(1,1,1),En=new B,Fi=new B,Pt=new B,Na=new mt,Fa=new pi;class kn{constructor(e=0,t=0,n=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lc=0;const Oa=new B,Zn=new pi,an=new mt,Oi=new B,xi=new B,cc=new B,uc=new pi,Ba=new B(1,0,0),za=new B(0,1,0),Ga=new B(0,0,1),Va={type:"added"},dc={type:"removed"},$n={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Lt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,t=new kn,n=new pi,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Pe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Ba,e)}rotateY(e){return this.rotateOnAxis(za,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ba,e)}translateY(e){return this.translateOnAxis(za,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(xi,Oi,this.up):an.lookAt(Oi,xi,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(an),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Va),$n.child=e,this.dispatchEvent($n),$n.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dc),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Va),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,cc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bi extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fc={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,n),f=this._getHandJoint(l,E);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),g=.02,v=.005;l.inputState.pinching&&u>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=Ql(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Nr(a,s,e+1/3),this.g=Nr(a,s,e),this.b=Nr(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Vo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ge.workingToColorSpace(bt.copy(this),e),Math.round(Ve(bt.r*255,0,255))*65536+Math.round(Ve(bt.g*255,0,255))*256+Math.round(Ve(bt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Nt){Ge.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(zi);const n=wr(bn.h,zi.h,t),r=wr(bn.s,zi.s,t),s=wr(bn.l,zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new $e;$e.NAMES=Vo;class hc extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bt=new B,on=new B,Fr=new B,ln=new B,Jn=new B,Qn=new B,Ha=new B,Or=new B,Br=new B,zr=new B,Gr=new dt,Vr=new dt,Hr=new dt;class Vt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bt.subVectors(r,t),on.subVectors(n,t),Fr.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(on),c=Bt.dot(Fr),l=on.dot(on),h=on.dot(Fr),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,g=(l*c-o*h)*u,v=(a*h-o*c)*u;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ln.x),c.addScaledVector(a,ln.y),c.addScaledVector(o,ln.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Gr.setScalar(0),Vr.setScalar(0),Hr.setScalar(0),Gr.fromBufferAttribute(e,t),Vr.fromBufferAttribute(e,n),Hr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gr,s.x),a.addScaledVector(Vr,s.y),a.addScaledVector(Hr,s.z),a}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),on.subVectors(e,t),Bt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Bt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Jn.subVectors(r,n),Qn.subVectors(s,n),Or.subVectors(e,n);const c=Jn.dot(Or),l=Qn.dot(Or);if(c<=0&&l<=0)return t.copy(n);Br.subVectors(e,r);const h=Jn.dot(Br),d=Qn.dot(Br);if(h>=0&&d<=h)return t.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Jn,a);zr.subVectors(e,s);const g=Jn.dot(zr),v=Qn.dot(zr);if(v>=0&&g<=v)return t.copy(s);const E=g*l-c*v;if(E<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Qn,o);const p=h*v-g*d;if(p<=0&&d-h>=0&&g-v>=0)return Ha.subVectors(s,r),o=(d-h)/(d-h+(g-v)),t.copy(r).addScaledVector(Ha,o);const f=1/(p+E+u);return a=E*f,o=u*f,t.copy(n).addScaledVector(Jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Vi.subVectors(this.max,vi),ei.subVectors(e.a,vi),ti.subVectors(e.b,vi),ni.subVectors(e.c,vi),Tn.subVectors(ti,ei),yn.subVectors(ni,ti),Ln.subVectors(ei,ni);let t=[0,-Tn.z,Tn.y,0,-yn.z,yn.y,0,-Ln.z,Ln.y,Tn.z,0,-Tn.x,yn.z,0,-yn.x,Ln.z,0,-Ln.x,-Tn.y,Tn.x,0,-yn.y,yn.x,0,-Ln.y,Ln.x,0];return!kr(t,ei,ti,ni,Vi)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,ei,ti,ni,Vi))?!1:(Hi.crossVectors(Tn,yn),t=[Hi.x,Hi.y,Hi.z],kr(t,ei,ti,ni,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cn=[new B,new B,new B,new B,new B,new B,new B,new B],zt=new B,Gi=new Pi,ei=new B,ti=new B,ni=new B,Tn=new B,yn=new B,Ln=new B,vi=new B,Vi=new B,Hi=new B,Un=new B;function kr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Un.fromArray(i,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ft=new B,ki=new Je;let pc=0;class tn extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ho extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ko extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mn extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const mc=new Pi,Si=new B,Wr=new B;class sa{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Si,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(Wr)),this.expandByPoint(Si.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gc=0;const It=new mt,Xr=new Lt,ii=new B,Dt=new Pi,Mi=new Pi,xt=new B;class xn extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?ko:Ho)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Dt.min,Mi.min),Dt.expandByPoint(xt),xt.addVectors(Dt.max,Mi.max),Dt.expandByPoint(xt)):(Dt.expandByPoint(Mi.min),Dt.expandByPoint(Mi.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xt.fromBufferAttribute(o,l),c&&(ii.fromBufferAttribute(e,l),xt.add(ii)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new B,c[x]=new B;const l=new B,h=new B,d=new B,u=new Je,g=new Je,v=new Je,E=new B,p=new B;function f(x,A,I){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,I),u.fromBufferAttribute(s,x),g.fromBufferAttribute(s,A),v.fromBufferAttribute(s,I),h.sub(l),d.sub(l),g.sub(u),v.sub(u);const w=1/(g.x*v.y-v.x*g.y);isFinite(w)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(w),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(w),o[x].add(E),o[A].add(E),o[I].add(E),c[x].add(p),c[A].add(p),c[I].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,A=M.length;x<A;++x){const I=M[x],w=I.start,z=I.count;for(let W=w,q=w+z;W<q;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new B,T=new B,P=new B,b=new B;function D(x){P.fromBufferAttribute(r,x),b.copy(P);const A=o[x];y.copy(A),y.sub(P.multiplyScalar(P.dot(A))).normalize(),T.crossVectors(b,A);const w=T.dot(c[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,w)}for(let x=0,A=M.length;x<A;++x){const I=M[x],w=I.start,z=I.count;for(let W=w,q=w+z;W<q;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,h=new B,d=new B;if(e)for(let u=0,g=e.count;u<g;u+=3){const v=e.getX(u+0),E=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,g=t.count;u<g;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let g=0,v=0;for(let E=0,p=c.length;E<p;E++){o.isInterleavedBufferAttribute?g=c[E]*o.data.stride+o.offset:g=c[E]*h;for(let f=0;f<h;f++)u[v++]=l[g++]}return new tn(u,h,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],g=e(u,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const g=l[d];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,g=d.length;u<g;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _c=0;class _r extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=li,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rs,this.blendDst=ss,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rs&&(n.blendSrc=this.blendSrc),this.blendDst!==ss&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const un=new B,qr=new B,Wi=new B,An=new B,Yr=new B,Xi=new B,jr=new B;class xc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),An.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wi),o=An.dot(this.direction),c=-An.dot(Wi),l=An.lengthSq(),h=Math.abs(1-a*a);let d,u,g,v;if(h>0)if(d=a*c-o,u=a*o-c,v=s*h,d>=0)if(u>=-v)if(u<=v){const E=1/h;d*=E,u*=E,g=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),g=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),g=-d*d+u*(u+2*c)+l;else u<=-v?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+u*(u+2*c)+l):u<=v?(d=0,u=Math.min(Math.max(-s,-c),s),g=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),g=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qr).addScaledVector(Wi,u),g}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){Yr.subVectors(t,e),Xi.subVectors(n,e),jr.crossVectors(Yr,Xi);let a=this.direction.dot(jr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const c=o*this.direction.dot(Xi.crossVectors(An,Xi));if(c<0)return null;const l=o*this.direction.dot(Yr.cross(An));if(l<0||c+l>a)return null;const h=-o*An.dot(jr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wo extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ka=new mt,In=new xc,qi=new sa,Wa=new B,Yi=new B,ji=new B,Ki=new B,Kr=new B,Zi=new B,Xa=new B,$i=new B;class rn extends Lt{constructor(e=new xn,t=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Kr.fromBufferAttribute(d,e),a?Zi.addScaledVector(Kr,h):Zi.addScaledVector(Kr.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(qi.containsPoint(In.origin)===!1&&(In.intersectSphere(qi,Wa)===null||In.origin.distanceToSquared(Wa)>(e.far-e.near)**2))&&(ka.copy(s).invert(),In.copy(e.ray).applyMatrix4(ka),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=u.length;v<E;v++){const p=u[v],f=a[p.materialIndex],M=Math.max(p.start,g.start),y=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=M,P=y;T<P;T+=3){const b=o.getX(T),D=o.getX(T+1),x=o.getX(T+2);r=Ji(this,f,e,n,l,h,d,b,D,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let p=v,f=E;p<f;p+=3){const M=o.getX(p),y=o.getX(p+1),T=o.getX(p+2);r=Ji(this,a,e,n,l,h,d,M,y,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=u.length;v<E;v++){const p=u[v],f=a[p.materialIndex],M=Math.max(p.start,g.start),y=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let T=M,P=y;T<P;T+=3){const b=T,D=T+1,x=T+2;r=Ji(this,f,e,n,l,h,d,b,D,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let p=v,f=E;p<f;p+=3){const M=p,y=p+1,T=p+2;r=Ji(this,a,e,n,l,h,d,M,y,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function vc(i,e,t,n,r,s,a,o){let c;if(e.side===Rt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Pn,o),c===null)return null;$i.copy(o),$i.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($i);return l<t.near||l>t.far?null:{distance:l,point:$i.clone(),object:i}}function Ji(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Yi),i.getVertexPosition(c,ji),i.getVertexPosition(l,Ki);const h=vc(i,e,t,n,Yi,ji,Ki,Xa);if(h){const d=new B;Vt.getBarycoord(Xa,Yi,ji,Ki,d),r&&(h.uv=Vt.getInterpolatedAttribute(r,o,c,l,d,new Je)),s&&(h.uv1=Vt.getInterpolatedAttribute(s,o,c,l,d,new Je)),a&&(h.normal=Vt.getInterpolatedAttribute(a,o,c,l,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new B,materialIndex:0};Vt.getNormal(Yi,ji,Ki,u.normal),h.face=u,h.barycoord=d}return h}class Sc extends Tt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=vt,h=vt,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new B,Mc=new B,Ec=new Pe;class Fn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zr.subVectors(n,t).cross(Mc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Zr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),r=this.coplanarPoint(Zr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new sa,bc=new Je(.5,.5),Qi=new B;class Xo{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],g=s[7],v=s[8],E=s[9],p=s[10],f=s[11],M=s[12],y=s[13],T=s[14],P=s[15];if(r[0].setComponents(l-a,g-h,f-v,P-M).normalize(),r[1].setComponents(l+a,g+h,f+v,P+M).normalize(),r[2].setComponents(l+o,g+d,f+E,P+y).normalize(),r[3].setComponents(l-o,g-d,f-E,P-y).normalize(),n)r[4].setComponents(c,u,p,T).normalize(),r[5].setComponents(l-c,g-u,f-p,P-T).normalize();else if(r[4].setComponents(l-c,g-u,f-p,P-T).normalize(),t===Jt)r[5].setComponents(l+c,g+u,f+p,P+T).normalize();else if(t===pr)r[5].setComponents(c,u,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=bc.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qi.x=r.normal.x>0?e.max.x:e.min.x,Qi.y=r.normal.y>0?e.max.y:e.min.y,Qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qo extends Tt{constructor(e=[],t=Vn,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fi extends Tt{constructor(e,t,n=nn,r,s,a,o=vt,c=vt,l,h=_n,d=1){if(h!==_n&&h!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tc extends fi{constructor(e,t=nn,n=Vn,r,s,a=vt,o=vt,c,l=_n){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yo extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Di extends xn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(d,2));function v(E,p,f,M,y,T,P,b,D,x,A){const I=T/D,w=P/x,z=T/2,W=P/2,q=b/2,U=D+1,V=x+1;let H=0,Q=0;const ee=new B;for(let ue=0;ue<V;ue++){const ve=ue*w-W;for(let be=0;be<U;be++){const He=be*I-z;ee[E]=He*M,ee[p]=ve*y,ee[f]=q,l.push(ee.x,ee.y,ee.z),ee[E]=0,ee[p]=0,ee[f]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(be/D),d.push(1-ue/x),H+=1}}for(let ue=0;ue<x;ue++)for(let ve=0;ve<D;ve++){const be=u+ve+U*ue,He=u+ve+U*(ue+1),Ye=u+(ve+1)+U*(ue+1),Ue=u+(ve+1)+U*ue;c.push(be,He,Ue),c.push(He,Ye,Ue),Q+=6}o.addGroup(g,Q,A),g+=Q,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Li extends xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,u=t/c,g=[],v=[],E=[],p=[];for(let f=0;f<h;f++){const M=f*u-a;for(let y=0;y<l;y++){const T=y*d-s;v.push(T,-M,0),E.push(0,0,1),p.push(y/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const y=M+l*f,T=M+l*(f+1),P=M+1+l*(f+1),b=M+1+l*f;g.push(y,T,b),g.push(T,P,b)}this.setIndex(g),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(E,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}function hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(qa(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(qa(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=hi(i[t]);for(const r in n)e[r]=n[r]}return e}function qa(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Ac={clone:hi,merge:yt};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=yc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cc extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pc extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dc extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $r={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ya(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ya(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ya(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Lc{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const g=l[d],v=l[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Uc=new Lc;class aa{constructor(e){this.manager=e!==void 0?e:Uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}aa.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri=new WeakMap;class Ic extends aa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$r.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ri.get(a);d===void 0&&(d=[],ri.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=wi("img");function c(){h(),t&&t(this);const d=ri.get(this)||[];for(let u=0;u<d.length;u++){const g=d[u];g.onLoad&&g.onLoad(this)}ri.delete(this),s.manager.itemEnd(e)}function l(d){h(),r&&r(d),$r.remove(`image:${e}`);const u=ri.get(this)||[];for(let g=0;g<u.length;g++){const v=u[g];v.onError&&v.onError(d)}ri.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$r.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Nc extends aa{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,a=new Ic(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const er=new B,tr=new pi,qt=new B;class Ko extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(er,tr,qt),qt.x===1&&qt.y===1&&qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,qt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(er,tr,qt),qt.x===1&&qt.y===1&&qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new B,ja=new Je,Ka=new Je;class Gt extends Ko{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,ja,Ka),t.subVectors(Ka,ja)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class oa extends Ko{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=-90,ai=1;class Fc extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new Gt(si,ai,e,t);s.layers=this.layers,this.add(s);const a=new Gt(si,ai,e,t);a.layers=this.layers,this.add(a);const o=new Gt(si,ai,e,t);o.layers=this.layers,this.add(o);const c=new Gt(si,ai,e,t);c.layers=this.layers,this.add(c);const l=new Gt(si,ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Jt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Oc extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const fa=class fa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};fa.prototype.isMatrix2=!0;let Za=fa;function $a(i,e,t,n){const r=zc(n);switch(t){case No:return i*e;case Oo:return i*e/r.components*r.byteLength;case Qs:return i*e/r.components*r.byteLength;case Hn:return i*e*2/r.components*r.byteLength;case ea:return i*e*2/r.components*r.byteLength;case Fo:return i*e*3/r.components*r.byteLength;case Ht:return i*e*4/r.components*r.byteLength;case ta:return i*e*4/r.components*r.byteLength;case sr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gs:case xs:return Math.max(i,16)*Math.max(e,8)/4;case ms:case _s:return Math.max(i,8)*Math.max(e,8)/2;case vs:case Ss:case Es:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ms:case ur:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case As:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Us:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Os:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zs:case Gs:case Vs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hs:case ks:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dr:case Ws:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zc(i){switch(i){case Ft:case Do:return{byteLength:1,components:1};case Ai:case Lo:case gn:return{byteLength:2,components:1};case $s:case Js:return{byteLength:2,components:4};case nn:case Zs:case $t:return{byteLength:4,components:1};case Uo:case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);function Zo(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gc(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<d.length;g++){const v=d[u],E=d[g];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,d[u]=E)}d.length=u+1;for(let g=0,v=d.length;g<v;g++){const E=d[g];i.bufferSubData(l,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$c=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",xu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Uu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$u=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Vc,alphahash_pars_fragment:Hc,alphamap_fragment:kc,alphamap_pars_fragment:Wc,alphatest_fragment:Xc,alphatest_pars_fragment:qc,aomap_fragment:Yc,aomap_pars_fragment:jc,batching_pars_vertex:Kc,batching_vertex:Zc,begin_vertex:$c,beginnormal_vertex:Jc,bsdfs:Qc,iridescence_fragment:eu,bumpmap_pars_fragment:tu,clipping_planes_fragment:nu,clipping_planes_pars_fragment:iu,clipping_planes_pars_vertex:ru,clipping_planes_vertex:su,color_fragment:au,color_pars_fragment:ou,color_pars_vertex:lu,color_vertex:cu,common:uu,cube_uv_reflection_fragment:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:hu,displacementmap_vertex:pu,emissivemap_fragment:mu,emissivemap_pars_fragment:gu,colorspace_fragment:_u,colorspace_pars_fragment:xu,envmap_fragment:vu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Mu,envmap_pars_vertex:Eu,envmap_physical_pars_fragment:Uu,envmap_vertex:bu,fog_vertex:Tu,fog_pars_vertex:yu,fog_fragment:Au,fog_pars_fragment:Ru,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Cu,lights_lambert_fragment:Pu,lights_lambert_pars_fragment:Du,lights_pars_begin:Lu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Nu,lights_phong_fragment:Fu,lights_phong_pars_fragment:Ou,lights_physical_fragment:Bu,lights_physical_pars_fragment:zu,lights_fragment_begin:Gu,lights_fragment_maps:Vu,lights_fragment_end:Hu,lightprobes_pars_fragment:ku,logdepthbuf_fragment:Wu,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Yu,map_fragment:ju,map_pars_fragment:Ku,map_particle_fragment:Zu,map_particle_pars_fragment:$u,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:ed,morphcolor_vertex:td,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:rd,normal_fragment_begin:sd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:ld,normal_vertex:cd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:xd,dithering_fragment:vd,dithering_pars_fragment:Sd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Td,shadowmap_vertex:yd,shadowmask_pars_fragment:Ad,skinbase_vertex:Rd,skinning_pars_vertex:wd,skinning_vertex:Cd,skinnormal_vertex:Pd,specularmap_fragment:Dd,specularmap_pars_fragment:Ld,tonemapping_fragment:Ud,tonemapping_pars_fragment:Id,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:Bd,uv_vertex:zd,worldpos_vertex:Gd,background_vert:Vd,background_frag:Hd,backgroundCube_vert:kd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:Yd,depth_frag:jd,distance_vert:Kd,distance_frag:Zd,equirect_vert:$d,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:rf,meshlambert_frag:sf,meshmatcap_vert:af,meshmatcap_frag:of,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:uf,meshphong_frag:df,meshphysical_vert:ff,meshphysical_frag:hf,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:_f,shadow_vert:xf,shadow_frag:vf,sprite_vert:Sf,sprite_frag:Mf},ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Zt={basic:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:yt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:yt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:yt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:yt([ce.common,ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:yt([ce.lights,ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Zt.physical={uniforms:yt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const nr={r:0,b:0,g:0},Ef=new mt,$o=new Pe;$o.set(-1,0,0,0,1,0,0,0,1);function bf(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,c,l,h=null,d=0,u=null;function g(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const T=M.backgroundBlurriness>0;y=e.get(y,T)}return y}function v(M){let y=!1;const T=g(M);T===null?p(a,o):T&&T.isColor&&(p(T,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(M,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===gr)?(l===void 0&&(l=new rn(new Di(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:hi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(y.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($o),l.material.toneMapped=Ge.getTransfer(T.colorSpace)!==qe,(h!==T||d!==T.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new rn(new Li(2,2),new kt({name:"BackgroundMaterial",uniforms:hi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(T.colorSpace)!==qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(nr,jo(i)),t.buffers.color.setClear(nr.r,nr.g,nr.b,y,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:v,addToRenderList:E,dispose:f}}function Tf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(w,z,W,q,U){let V=!1;const H=d(w,q,W,z);s!==H&&(s=H,l(s.object)),V=g(w,q,W,U),V&&v(w,q,W,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,T(w,z,W,q),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function d(w,z,W,q){const U=q.wireframe===!0;let V=n[z.id];V===void 0&&(V={},n[z.id]=V);const H=w.isInstancedMesh===!0?w.id:0;let Q=V[H];Q===void 0&&(Q={},V[H]=Q);let ee=Q[W.id];ee===void 0&&(ee={},Q[W.id]=ee);let ue=ee[U];return ue===void 0&&(ue=u(c()),ee[U]=ue),ue}function u(w){const z=[],W=[],q=[];for(let U=0;U<t;U++)z[U]=0,W[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:q,object:w,attributes:{},index:null}}function g(w,z,W,q){const U=s.attributes,V=z.attributes;let H=0;const Q=W.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const ve=U[ee];let be=V[ee];if(be===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(be=w.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;H++}return s.attributesNum!==H||s.index!==q}function v(w,z,W,q){const U={},V=z.attributes;let H=0;const Q=W.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let ve=V[ee];ve===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor));const be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),U[ee]=be,H++}s.attributes=U,s.attributesNum=H,s.index=q}function E(){const w=s.newAttributes;for(let z=0,W=w.length;z<W;z++)w[z]=0}function p(w){f(w,0)}function f(w,z){const W=s.newAttributes,q=s.enabledAttributes,U=s.attributeDivisors;W[w]=1,q[w]===0&&(i.enableVertexAttribArray(w),q[w]=1),U[w]!==z&&(i.vertexAttribDivisor(w,z),U[w]=z)}function M(){const w=s.newAttributes,z=s.enabledAttributes;for(let W=0,q=z.length;W<q;W++)z[W]!==w[W]&&(i.disableVertexAttribArray(W),z[W]=0)}function y(w,z,W,q,U,V,H){H===!0?i.vertexAttribIPointer(w,z,W,U,V):i.vertexAttribPointer(w,z,W,q,U,V)}function T(w,z,W,q){E();const U=q.attributes,V=W.getAttributes(),H=z.defaultAttributeValues;for(const Q in V){const ee=V[Q];if(ee.location>=0){let ue=U[Q];if(ue===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const ve=ue.normalized,be=ue.itemSize,He=e.get(ue);if(He===void 0)continue;const Ye=He.buffer,Ue=He.type,Z=He.bytesPerElement,he=Ue===i.INT||Ue===i.UNSIGNED_INT||ue.gpuType===Zs;if(ue.isInterleavedBufferAttribute){const re=ue.data,ye=re.stride,Ce=ue.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ee.locationSize;Ae++)f(ee.location+Ae,re.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<ee.locationSize;Ae++)p(ee.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ae=0;Ae<ee.locationSize;Ae++)y(ee.location+Ae,be/ee.locationSize,Ue,ve,ye*Z,(Ce+be/ee.locationSize*Ae)*Z,he)}else{if(ue.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)f(ee.location+re,ue.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let re=0;re<ee.locationSize;re++)p(ee.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let re=0;re<ee.locationSize;re++)y(ee.location+re,be/ee.locationSize,Ue,ve,be*Z,be/ee.locationSize*re*Z,he)}}else if(H!==void 0){const ve=H[Q];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(ee.location,ve);break;case 3:i.vertexAttrib3fv(ee.location,ve);break;case 4:i.vertexAttrib4fv(ee.location,ve);break;default:i.vertexAttrib1fv(ee.location,ve)}}}}M()}function P(){A();for(const w in n){const z=n[w];for(const W in z){const q=z[W];for(const U in q){const V=q[U];for(const H in V)h(V[H].object),delete V[H];delete q[U]}}delete n[w]}}function b(w){if(n[w.id]===void 0)return;const z=n[w.id];for(const W in z){const q=z[W];for(const U in q){const V=q[U];for(const H in V)h(V[H].object),delete V[H];delete q[U]}}delete n[w.id]}function D(w){for(const z in n){const W=n[z];for(const q in W){const U=W[q];if(U[w.id]===void 0)continue;const V=U[w.id];for(const H in V)h(V[H].object),delete V[H];delete U[w.id]}}}function x(w){for(const z in n){const W=n[z],q=w.isInstancedMesh===!0?w.id:0,U=W[q];if(U!==void 0){for(const V in U){const H=U[V];for(const Q in H)h(H[Q].object),delete H[Q];delete U[V]}delete W[q],Object.keys(W).length===0&&delete n[z]}}}function A(){I(),a=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:p,disableUnusedAttributes:M}}function yf(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let g=0;g<h;g++)u+=l[g];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Af(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Ht&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ft&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==$t&&!x)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Re("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:T,maxSamples:P,samples:b}}function Rf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fn,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const g=d.length!==0||u||n!==0||r;return r=u,n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,g){const v=d.clippingPlanes,E=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!r||v===null||v.length===0||s&&!p)s?h(null):l();else{const M=s?0:n,y=M*4;let T=f.clippingState||null;c.value=T,T=h(v,u,y,g);for(let P=0;P!==y;++P)T[P]=t[P];f.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,g,v){const E=d!==null?d.length:0;let p=null;if(E!==0){if(p=c.value,v!==!0||p===null){const f=g+E*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,T=g;y!==E;++y,T+=4)a.copy(d[y]).applyMatrix4(M,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const Cn=4,Ja=[.125,.215,.35,.446,.526,.582],Bn=20,wf=256,Ei=new oa,Qa=new $e;let Jr=null,Qr=0,es=0,ts=!1;const Cf=new B;class eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Cf}=s;Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Qr,es),this._renderer.xr.enabled=ts,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:gn,format:Ht,colorSpace:fr,depthBuffer:!1},r=to(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pf(s)),this._blurMaterial=Lf(s,e,t),this._ggxMaterial=Df(s,e,t)}return r}_compileMaterial(e){const t=new rn(new xn,e);this._renderer.compile(t,Ei)}_sceneToCubeUV(e,t,n,r,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,g=d.toneMapping;d.getClearColor(Qa),d.toneMapping=Qt,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new Di,new Wo({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let f=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,f=!0):(p.color.copy(Qa),f=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):T===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const P=this._cubeSize;oi(r,T*P,y>2?P:0,P,P),d.setRenderTarget(r),f&&d.render(E,c),d.render(e,c)}d.toneMapping=g,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vn||e.mapping===di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;oi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ei)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,g=d*u,{_lodMax:v}=this,E=this._sizeLods[n],p=3*E*(n>v-Cn?n-v+Cn:0),f=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=v-t,oi(s,p,f,3*E,2*E),r.setRenderTarget(s),r.render(o,Ei),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,oi(e,p,f,3*E,2*E),r.setRenderTarget(e),r.render(o,Ei)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=l;const u=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Bn-1),E=s/v,p=isFinite(s)?1+Math.floor(h*E):Bn;p>Bn&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const f=[];let M=0;for(let D=0;D<Bn;++D){const x=D/E,A=Math.exp(-x*x/2);f.push(A),D===0?M+=A:D<p&&(M+=2*A)}for(let D=0;D<f.length;D++)f[D]=f[D]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-n;const T=this._sizeLods[r],P=3*T*(r>y-Cn?r-y+Cn:0),b=4*(this._cubeSize-T);oi(t,P,b,3*T,2*T),c.setRenderTarget(t),c.render(d,Ei)}}function Pf(i){const e=[],t=[],n=[];let r=i;const s=i-Cn+1+Ja.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Cn?c=Ja[a-i+Cn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,v=6,E=3,p=2,f=1,M=new Float32Array(E*v*g),y=new Float32Array(p*v*g),T=new Float32Array(f*v*g);for(let b=0;b<g;b++){const D=b%3*2/3-1,x=b>2?0:-1,A=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];M.set(A,E*v*b),y.set(u,p*v*b);const I=[b,b,b,b,b,b];T.set(I,f*v*b)}const P=new xn;P.setAttribute("position",new tn(M,E)),P.setAttribute("uv",new tn(y,p)),P.setAttribute("faceIndex",new tn(T,f)),n.push(new rn(P,null)),r>Cn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function to(i,e,t){const n=new en(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Df(i,e,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Lf(i,e,t){const n=new Float32Array(Bn),r=new B(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function no(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function io(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function xr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jo extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Di(5,5,5),s=new kt({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:hn});s.uniforms.tEquirect.value=t;const a=new rn(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=St),new Fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Uf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,g=!1){return u==null?null:g?a(u):s(u)}function s(u){if(u&&u.isTexture){const g=u.mapping;if(g===Tr||g===yr)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new Jo(v.height);return E.fromEquirectangularTexture(i,u),e.set(u,E),u.addEventListener("dispose",l),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const g=u.mapping,v=g===Tr||g===yr,E=g===Vn||g===di;if(v||E){let p=t.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new eo(i)),p=v?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return v&&M&&M.height>0||E&&M&&c(M)?(n===null&&(n=new eo(i)),p=v?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,g){return g===Tr?u.mapping=Vn:g===yr&&(u.mapping=di),u}function c(u){let g=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&g++;return g===v}function l(u){const g=u.target;g.removeEventListener("dispose",l);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function h(u){const g=u.target;g.removeEventListener("dispose",h);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function If(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Xs("WebGLRenderer: "+n+" extension not supported."),r}}}function Nf(i,e,t,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const g=s.get(u);g&&(e.remove(g),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER)}function l(d){const u=[],g=d.index,v=d.attributes.position;let E=0;if(v===void 0)return;if(g!==null){const M=g.array;E=g.version;for(let y=0,T=M.length;y<T;y+=3){const P=M[y+0],b=M[y+1],D=M[y+2];u.push(P,b,b,D,D,P)}}else{const M=v.array;E=v.version;for(let y=0,T=M.length/3-1;y<T;y+=3){const P=y+0,b=y+1,D=y+2;u.push(P,b,b,D,D,P)}}const p=new(v.count>=65535?ko:Ho)(u,1);p.version=E;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const g=d.index;g!==null&&u.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Ff(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,s,d*a),t.update(u,n,1)}function l(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,s,d*a,g),t.update(u,n,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,g);let E=0;for(let p=0;p<g;p++)E+=u[p];t.update(E,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Of(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bf(i,e,t){const n=new WeakMap,r=new dt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let A=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),E===!0&&(y=3);let T=o.attributes.position.count*y,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*P*4*d),D=new zo(b,T,P,d);D.type=$t,D.needsUpdate=!0;const x=y*4;for(let I=0;I<d;I++){const w=p[I],z=f[I],W=M[I],q=T*P*4*I;for(let U=0;U<w.count;U++){const V=U*x;g===!0&&(r.fromBufferAttribute(w,U),b[q+V+0]=r.x,b[q+V+1]=r.y,b[q+V+2]=r.z,b[q+V+3]=0),v===!0&&(r.fromBufferAttribute(z,U),b[q+V+4]=r.x,b[q+V+5]=r.y,b[q+V+6]=r.z,b[q+V+7]=0),E===!0&&(r.fromBufferAttribute(W,U),b[q+V+8]=r.x,b[q+V+9]=r.y,b[q+V+10]=r.z,b[q+V+11]=W.itemSize===4?r.w:1)}}u={count:d,texture:D,size:new Je(T,P)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let E=0;E<l.length;E++)g+=l[E];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function zf(i,e,t,n,r){let s=new WeakMap;function a(l){const h=r.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Gf={[bo]:"LINEAR_TONE_MAPPING",[To]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[Ao]:"ACES_FILMIC_TONE_MAPPING",[wo]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[Ro]:"CUSTOM_TONE_MAPPING"};function Vf(i,e,t,n,r){const s=new en(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new fi(e,t):void 0}),a=new en(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),o=new xn;o.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new mn([0,2,0,0,2,0],2));const c=new Cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new rn(o,c),h=new oa(-1,1,1,-1,0,1);let d=null,u=null,g=!1,v,E=null,p=[],f=!1;this.setSize=function(M,y){s.setSize(M,y),a.setSize(M,y);for(let T=0;T<p.length;T++){const P=p[T];P.setSize&&P.setSize(M,y)}},this.setEffects=function(M){p=M,f=p.length>0&&p[0].isRenderPass===!0;const y=s.width,T=s.height;for(let P=0;P<p.length;P++){const b=p[P];b.setSize&&b.setSize(y,T)}},this.begin=function(M,y){if(g||M.toneMapping===Qt&&p.length===0)return!1;if(E=y,y!==null){const T=y.width,P=y.height;(s.width!==T||s.height!==P)&&this.setSize(T,P)}return f===!1&&M.setRenderTarget(s),v=M.toneMapping,M.toneMapping=Qt,!0},this.hasRenderPass=function(){return f},this.end=function(M,y){M.toneMapping=v,g=!0;let T=s,P=a;for(let b=0;b<p.length;b++){const D=p[b];if(D.enabled!==!1&&(D.render(M,P,T,y),D.needsSwap!==!1)){const x=T;T=P,P=x}}if(d!==M.outputColorSpace||u!==M.toneMapping){d=M.outputColorSpace,u=M.toneMapping,c.defines={},Ge.getTransfer(d)===qe&&(c.defines.SRGB_TRANSFER="");const b=Gf[u];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(E),M.render(l,h),E=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Qo=new Tt,Ys=new fi(1,1),el=new zo,tl=new sc,nl=new qo,ro=[],so=[],ao=new Float32Array(16),oo=new Float32Array(9),lo=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ro[r];if(s===void 0&&(s=new Float32Array(r),ro[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vr(i,e){let t=so[e];t===void 0&&(t=new Int32Array(e),so[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;lo.set(n),i.uniformMatrix2fv(this.addr,!1,lo),_t(t,n)}}function Yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;oo.set(n),i.uniformMatrix3fv(this.addr,!1,oo),_t(t,n)}}function jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ao.set(n),i.uniformMatrix4fv(this.addr,!1,ao),_t(t,n)}}function Kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function th(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function nh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function ih(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ys.compareFunction=t.isReversedDepthBuffer()?ia:na,s=Ys):s=Qo,t.setTexture2D(e||s,r)}function rh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tl,r)}function sh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nl,r)}function ah(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||el,r)}function oh(i){switch(i){case 5126:return Hf;case 35664:return kf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return jf;case 5124:case 35670:return Kf;case 35667:case 35671:return Zf;case 35668:case 35672:return $f;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return eh;case 36295:return th;case 36296:return nh;case 35678:case 36198:case 36298:case 36306:case 35682:return ih;case 35679:case 36299:case 36307:return rh;case 35680:case 36300:case 36308:case 36293:return sh;case 36289:case 36303:case 36311:case 36292:return ah}}function lh(i,e){i.uniform1fv(this.addr,e)}function ch(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function uh(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function dh(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function fh(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hh(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ph(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mh(i,e){i.uniform1iv(this.addr,e)}function gh(i,e){i.uniform2iv(this.addr,e)}function _h(i,e){i.uniform3iv(this.addr,e)}function xh(i,e){i.uniform4iv(this.addr,e)}function vh(i,e){i.uniform1uiv(this.addr,e)}function Sh(i,e){i.uniform2uiv(this.addr,e)}function Mh(i,e){i.uniform3uiv(this.addr,e)}function Eh(i,e){i.uniform4uiv(this.addr,e)}function bh(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ys:a=Qo;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Th(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||tl,s[a])}function yh(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nl,s[a])}function Ah(i,e,t){const n=this.cache,r=e.length,s=vr(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||el,s[a])}function Rh(i){switch(i){case 5126:return lh;case 35664:return ch;case 35665:return uh;case 35666:return dh;case 35674:return fh;case 35675:return hh;case 35676:return ph;case 5124:case 35670:return mh;case 35667:case 35671:return gh;case 35668:case 35672:return _h;case 35669:case 35673:return xh;case 5125:return vh;case 36294:return Sh;case 36295:return Mh;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return bh;case 35679:case 36299:case 36307:return Th;case 35680:case 36300:case 36308:case 36293:return yh;case 36289:case 36303:case 36311:case 36292:return Ah}}class wh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oh(t.type)}}class Ch{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rh(t.type)}}class Ph{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function co(i,e){i.seq.push(e),i.map[e.id]=e}function Dh(i,e,t){const n=i.name,r=n.length;for(ns.lastIndex=0;;){const s=ns.exec(n),a=ns.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){co(t,l===void 0?new wh(o,i,e):new Ch(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ph(o),co(t,d)),t=d}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Dh(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lh=37297;let Uh=0;function Ih(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fo=new Pe;function Nh(i){Ge._getMatrix(fo,Ge.workingColorSpace,i);const e=`mat3( ${fo.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ho(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ih(i.getShaderSource(e),o)}else return s}function Fh(i,e){const t=Nh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Oh={[bo]:"Linear",[To]:"Reinhard",[yo]:"Cineon",[Ao]:"ACESFilmic",[wo]:"AgX",[Co]:"Neutral",[Ro]:"Custom"};function Bh(i,e){const t=Oh[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new B;function zh(){Ge.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function Vh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hh(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yi(i){return i!==""}function po(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kh=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(kh,Xh)}const Wh=new Map;function Xh(i,e){let t=Ne[e];if(t===void 0){const n=Wh.get(e);if(n!==void 0)t=Ne[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return js(t)}const qh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(i){return i.replace(qh,Yh)}function Yh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _o(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jh={[rr]:"SHADOWMAP_TYPE_PCF",[Ti]:"SHADOWMAP_TYPE_VSM"};function Kh(i){return jh[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zh={[Vn]:"ENVMAP_TYPE_CUBE",[di]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function $h(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zh[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Jh={[di]:"ENVMAP_MODE_REFRACTION"};function Qh(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jh[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ep={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[Bl]:"ENVMAP_BLENDING_MIX",[zl]:"ENVMAP_BLENDING_ADD"};function tp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ep[i.combine]||"ENVMAP_BLENDING_NONE"}function np(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ip(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Kh(t),l=$h(t),h=Qh(t),d=tp(t),u=np(t),g=Gh(t),v=Vh(s),E=r.createProgram();let p,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(yi).join(`
`),f.length>0&&(f+=`
`)):(p=[_o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),f=[_o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Qt?Bh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Fh("linearToOutputTexel",t.outputColorSpace),zh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),a=js(a),a=po(a,t),a=mo(a,t),o=js(o),o=po(o,t),o=mo(o,t),a=go(a),o=go(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=M+p+a,T=M+f+o,P=uo(r,r.VERTEX_SHADER,y),b=uo(r,r.FRAGMENT_SHADER,T);r.attachShader(E,P),r.attachShader(E,b),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function D(w){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(P)||"",q=r.getShaderInfoLog(b)||"",U=z.trim(),V=W.trim(),H=q.trim();let Q=!0,ee=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,P,b);else{const ue=ho(r,P,"vertex"),ve=ho(r,b,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+ue+`
`+ve)}else U!==""?Re("WebGLProgram: Program Info Log:",U):(V===""||H==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Q,programLog:U,vertexShader:{log:V,prefix:p},fragmentShader:{log:H,prefix:f}})}r.deleteShader(P),r.deleteShader(b),x=new cr(r,E),A=Hh(r,E)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(E,Lh)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uh++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=b,this}let rp=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ap(e),t.set(e,n)),n}}class ap{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}}function op(i){return i===Hn||i===ur||i===dr}function lp(i,e,t,n,r,s){const a=new Go,o=new sp,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,A,I,w,z,W){const q=w.fog,U=z.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||V,H),ee=Q&&Q.mapping===gr?Q.image.height:null,ue=g[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ve=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,be=ve!==void 0?ve.length:0;let He=0;U.morphAttributes.position!==void 0&&(He=1),U.morphAttributes.normal!==void 0&&(He=2),U.morphAttributes.color!==void 0&&(He=3);let Ye,Ue,Z,he;if(ue){const De=Zt[ue];Ye=De.vertexShader,Ue=De.fragmentShader}else Ye=x.vertexShader,Ue=x.fragmentShader,o.update(x),Z=o.getVertexShaderID(x),he=o.getFragmentShaderID(x);const re=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,rt=!!x.map,Be=!!x.matcap,je=!!Q,it=!!x.aoMap,Oe=!!x.lightMap,ht=!!x.bumpMap,st=!!x.normalMap,wt=!!x.displacementMap,C=!!x.emissiveMap,pt=!!x.metalnessMap,ze=!!x.roughnessMap,tt=x.anisotropy>0,le=x.clearcoat>0,at=x.dispersion>0,S=x.iridescence>0,m=x.sheen>0,N=x.transmission>0,Y=tt&&!!x.anisotropyMap,J=le&&!!x.clearcoatMap,te=le&&!!x.clearcoatNormalMap,oe=le&&!!x.clearcoatRoughnessMap,k=S&&!!x.iridescenceMap,K=S&&!!x.iridescenceThicknessMap,pe=m&&!!x.sheenColorMap,_e=m&&!!x.sheenRoughnessMap,se=!!x.specularMap,ne=!!x.specularColorMap,we=!!x.specularIntensityMap,Ie=N&&!!x.transmissionMap,Xe=N&&!!x.thicknessMap,R=!!x.gradientMap,ie=!!x.alphaMap,X=x.alphaTest>0,me=!!x.alphaHash,ae=!!x.extensions;let $=Qt;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&($=i.toneMapping);const Me={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:Ue,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:Be,envMap:je,envMapMode:je&&Q.mapping,envMapCubeUVHeight:ee,aoMap:it,lightMap:Oe,bumpMap:ht,normalMap:st,displacementMap:wt,emissiveMap:C,normalMapObjectSpace:st&&x.normalMapType===Hl,normalMapTangentSpace:st&&x.normalMapType===Aa,packedNormalMap:st&&x.normalMapType===Aa&&op(x.normalMap.format),metalnessMap:pt,roughnessMap:ze,anisotropy:tt,anisotropyMap:Y,clearcoat:le,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:at,iridescence:S,iridescenceMap:k,iridescenceThicknessMap:K,sheen:m,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:se,specularColorMap:ne,specularIntensityMap:we,transmission:N,transmissionMap:Ie,thicknessMap:Xe,gradientMap:R,opaque:x.transparent===!1&&x.blending===li&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:X,alphaHash:me,combine:x.combine,mapUv:rt&&v(x.map.channel),aoMapUv:it&&v(x.aoMap.channel),lightMapUv:Oe&&v(x.lightMap.channel),bumpMapUv:ht&&v(x.bumpMap.channel),normalMapUv:st&&v(x.normalMap.channel),displacementMapUv:wt&&v(x.displacementMap.channel),emissiveMapUv:C&&v(x.emissiveMap.channel),metalnessMapUv:pt&&v(x.metalnessMap.channel),roughnessMapUv:ze&&v(x.roughnessMap.channel),anisotropyMapUv:Y&&v(x.anisotropyMap.channel),clearcoatMapUv:J&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(x.sheenRoughnessMap.channel),specularMapUv:se&&v(x.specularMap.channel),specularColorMapUv:ne&&v(x.specularColorMap.channel),specularIntensityMapUv:we&&v(x.specularIntensityMap.channel),transmissionMapUv:Ie&&v(x.transmissionMap.channel),thicknessMapUv:Xe&&v(x.thicknessMap.channel),alphaMapUv:ie&&v(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(st||tt),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(rt||ie),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===qe,decodeVideoTextureEmissive:C&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===Rt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)A.push(I),A.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(f(A,x),M(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function y(x){const A=g[x.type];let I;if(A){const w=Zt[A];I=Ac.clone(w.uniforms)}else I=x.uniforms;return I}function T(x,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new ip(i,A,x,r),l.push(I),h.set(A,I)),I}function P(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function D(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:P,releaseShaderCache:b,programs:l,dispose:D}}function cp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,v,E,p,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:g,material:v,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:p,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=g,M.material=v,M.materialVariant=a(u),M.groupOrder=E,M.renderOrder=u.renderOrder,M.z=p,M.group=f),e++,M}function c(u,g,v,E,p,f){const M=o(u,g,v,E,p,f);v.transmission>0?n.push(M):v.transparent===!0?r.push(M):t.push(M)}function l(u,g,v,E,p,f){const M=o(u,g,v,E,p,f);v.transmission>0?n.unshift(M):v.transparent===!0?r.unshift(M):t.unshift(M)}function h(u,g){t.length>1&&t.sort(u||up),n.length>1&&n.sort(g||xo),r.length>1&&r.sort(g||xo)}function d(){for(let u=e,g=i.length;u<g;u++){const v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:h}}function dp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vo,i.set(n,[a])):r>=s.length?(a=new vo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pp=0;function mp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gp(i){const e=new fp,t=hp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const r=new B,s=new mt,a=new mt;function o(l){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,v=0,E=0,p=0,f=0,M=0,y=0,T=0,P=0,b=0,D=0;l.sort(mp);for(let A=0,I=l.length;A<I;A++){const w=l[A],z=w.color,W=w.intensity,q=w.distance;let U=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Hn?U=w.shadow.map.texture:U=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=z.r*W,d+=z.g*W,u+=z.b*W;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],W);D++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const H=w.shadow,Q=t.get(w);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=U,n.directionalShadowMatrix[g]=w.shadow.matrix,M++}n.directional[g]=V,g++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(z).multiplyScalar(W),V.distance=q,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[E]=V;const H=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,H.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[E]=H.matrix,w.castShadow){const Q=t.get(w);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[E]=Q,n.spotShadowMap[E]=U,T++}E++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const H=w.shadow,Q=t.get(w);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[v]=Q,n.pointShadowMap[v]=U,n.pointShadowMatrix[v]=w.shadow.matrix,y++}n.point[v]=V,v++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(W),V.groundColor.copy(w.groundColor).multiplyScalar(W),n.hemi[f]=V,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==p||x.hemiLength!==f||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==T||x.numSpotMaps!==P||x.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=E,n.rectArea.length=p,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,x.directionalLength=g,x.pointLength=v,x.spotLength=E,x.rectAreaLength=p,x.hemiLength=f,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=T,x.numSpotMaps=P,x.numLightProbes=D,n.version=pp++)}function c(l,h){let d=0,u=0,g=0,v=0,E=0;const p=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const y=l[f];if(y.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(y.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const T=n.hemi[E];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),E++}}}return{setup:o,setupView:c,state:n}}function So(i){const e=new gp(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function _p(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new So(i),e.set(r,[o])):s>=a.length?(o=new So(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sp=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Mp=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Mo=new mt,bi=new B,is=new B;function Ep(i,e,t){let n=new Xo;const r=new Je,s=new Je,a=new dt,o=new Pc,c=new Dc,l={},h=t.maxTextureSize,d={[Pn]:Rt,[Rt]:Pn,[dn]:dn},u=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:xp,fragmentShader:vp}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const v=new xn;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rn(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let f=this.type;this.render=function(b,D,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===vl&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rr);const A=i.getRenderTarget(),I=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(hn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=f!==this.type;W&&D.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(U=>U.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,U=b.length;q<U;q++){const V=b[q],H=V.shadow;if(H===void 0){Re("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Q=H.getFrameExtents();r.multiply(Q),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,H.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ee,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ti){if(V.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new en(r.x,r.y,{format:Hn,type:gn,minFilter:St,magFilter:St,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new fi(r.x,r.y,$t),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=_n,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=vt,H.map.depthTexture.magFilter=vt}else V.isPointLight?(H.map=new Jo(r.x),H.map.depthTexture=new Tc(r.x,nn)):(H.map=new en(r.x,r.y),H.map.depthTexture=new fi(r.x,r.y,nn)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=_n,this.type===rr?(H.map.depthTexture.compareFunction=ee?ia:na,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=vt,H.map.depthTexture.magFilter=vt);H.camera.updateProjectionMatrix()}const ue=H.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ue;ve++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(H.map),i.clear());const be=H.getViewport(ve);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),z.viewport(a)}if(V.isPointLight){const be=H.camera,He=H.matrix,Ye=V.distance||be.far;Ye!==be.far&&(be.far=Ye,be.updateProjectionMatrix()),bi.setFromMatrixPosition(V.matrixWorld),be.position.copy(bi),is.copy(be.position),is.add(Sp[ve]),be.up.copy(Mp[ve]),be.lookAt(is),be.updateMatrixWorld(),He.makeTranslation(-bi.x,-bi.y,-bi.z),Mo.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mo,be.coordinateSystem,be.reversedDepth)}else H.updateMatrices(V);n=H.getFrustum(),T(D,x,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&M(H,x),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(A,I,w)};function M(b,D){const x=e.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new en(r.x,r.y,{format:Hn,type:gn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(D,null,x,u,E,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(D,null,x,g,E,null)}function y(b,D,x,A){let I=null;const w=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)I=w;else if(I=x.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const z=I.uuid,W=D.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let U=q[W];U===void 0&&(U=I.clone(),q[W]=U,D.addEventListener("dispose",P)),I=U}if(I.visible=D.visible,I.wireframe=D.wireframe,A===Ti?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:d[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const z=i.properties.get(I);z.light=x}return I}function T(b,D,x,A,I){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Ti)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const W=e.update(b),q=b.material;if(Array.isArray(q)){const U=W.groups;for(let V=0,H=U.length;V<H;V++){const Q=U[V],ee=q[Q.materialIndex];if(ee&&ee.visible){const ue=y(b,ee,A,I);b.onBeforeShadow(i,b,D,x,W,ue,Q),i.renderBufferDirect(x,null,W,ue,b,Q),b.onAfterShadow(i,b,D,x,W,ue,Q)}}}else if(q.visible){const U=y(b,q,A,I);b.onBeforeShadow(i,b,D,x,W,U,null),i.renderBufferDirect(x,null,W,U,b,null),b.onAfterShadow(i,b,D,x,W,U,null)}}const z=b.children;for(let W=0,q=z.length;W<q;W++)T(z[W],D,x,A,I)}function P(b){b.target.removeEventListener("dispose",P);for(const x in l){const A=l[x],I=b.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function bp(i,e){function t(){let R=!1;const ie=new dt;let X=null;const me=new dt(0,0,0,0);return{setMask:function(ae){X!==ae&&!R&&(i.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){R=ae},setClear:function(ae,$,Me,De,lt){lt===!0&&(ae*=De,$*=De,Me*=De),ie.set(ae,$,Me,De),me.equals(ie)===!1&&(i.clearColor(ae,$,Me,De),me.copy(ie))},reset:function(){R=!1,X=null,me.set(-1,0,0,0)}}}function n(){let R=!1,ie=!1,X=null,me=null,ae=null;return{setReversed:function($){if(ie!==$){const Me=e.get("EXT_clip_control");$?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=$;const De=ae;ae=null,this.setClear(De)}},getReversed:function(){return ie},setTest:function($){$?re(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function($){X!==$&&!R&&(i.depthMask($),X=$)},setFunc:function($){if(ie&&($=Jl[$]),me!==$){switch($){case as:i.depthFunc(i.NEVER);break;case os:i.depthFunc(i.ALWAYS);break;case ls:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case cs:i.depthFunc(i.EQUAL);break;case us:i.depthFunc(i.GEQUAL);break;case ds:i.depthFunc(i.GREATER);break;case fs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=$}},setLocked:function($){R=$},setClear:function($){ae!==$&&(ae=$,ie&&($=1-$),i.clearDepth($))},reset:function(){R=!1,X=null,me=null,ae=null,ie=!1}}}function r(){let R=!1,ie=null,X=null,me=null,ae=null,$=null,Me=null,De=null,lt=null;return{setTest:function(Ke){R||(Ke?re(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!R&&(i.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,sn,Wt){(X!==Ke||me!==sn||ae!==Wt)&&(i.stencilFunc(Ke,sn,Wt),X=Ke,me=sn,ae=Wt)},setOp:function(Ke,sn,Wt){($!==Ke||Me!==sn||De!==Wt)&&(i.stencilOp(Ke,sn,Wt),$=Ke,Me=sn,De=Wt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){lt!==Ke&&(i.clearStencil(Ke),lt=Ke)},reset:function(){R=!1,ie=null,X=null,me=null,ae=null,$=null,Me=null,De=null,lt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},u={},g=new WeakMap,v=[],E=null,p=!1,f=null,M=null,y=null,T=null,P=null,b=null,D=null,x=new $e(0,0,0),A=0,I=!1,w=null,z=null,W=null,q=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=Q>=2);let ue=null,ve={};const be=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),Ye=new dt().fromArray(be),Ue=new dt().fromArray(He);function Z(R,ie,X,me){const ae=new Uint8Array(4),$=i.createTexture();i.bindTexture(R,$),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<X;Me++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ie+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return $}const he={};he[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(ui),ht(!1),st(Ea),re(i.CULL_FACE),it(hn);function re(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function ye(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ce(R,ie){return u[R]!==ie?(i.bindFramebuffer(R,ie),u[R]=ie,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(R,ie){let X=v,me=!1;if(R){X=g.get(ie),X===void 0&&(X=[],g.set(ie,X));const ae=R.textures;if(X.length!==ae.length||X[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Me=ae.length;$<Me;$++)X[$]=i.COLOR_ATTACHMENT0+$;X.length=ae.length,me=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,me=!0);me&&i.drawBuffers(X)}function rt(R){return E!==R?(i.useProgram(R),E=R,!0):!1}const Be={[On]:i.FUNC_ADD,[Ml]:i.FUNC_SUBTRACT,[El]:i.FUNC_REVERSE_SUBTRACT};Be[bl]=i.MIN,Be[Tl]=i.MAX;const je={[yl]:i.ZERO,[Al]:i.ONE,[Rl]:i.SRC_COLOR,[rs]:i.SRC_ALPHA,[Ul]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[wl]:i.ONE_MINUS_SRC_COLOR,[ss]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function it(R,ie,X,me,ae,$,Me,De,lt,Ke){if(R===hn){p===!0&&(ye(i.BLEND),p=!1);return}if(p===!1&&(re(i.BLEND),p=!0),R!==Sl){if(R!==f||Ke!==I){if((M!==On||P!==On)&&(i.blendEquation(i.FUNC_ADD),M=On,P=On),Ke)switch(R){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.ONE,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",R);break}else switch(R){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ta:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ya:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",R);break}y=null,T=null,b=null,D=null,x.set(0,0,0),A=0,f=R,I=Ke}return}ae=ae||ie,$=$||X,Me=Me||me,(ie!==M||ae!==P)&&(i.blendEquationSeparate(Be[ie],Be[ae]),M=ie,P=ae),(X!==y||me!==T||$!==b||Me!==D)&&(i.blendFuncSeparate(je[X],je[me],je[$],je[Me]),y=X,T=me,b=$,D=Me),(De.equals(x)===!1||lt!==A)&&(i.blendColor(De.r,De.g,De.b,lt),x.copy(De),A=lt),f=R,I=!1}function Oe(R,ie){R.side===dn?ye(i.CULL_FACE):re(i.CULL_FACE);let X=R.side===Rt;ie&&(X=!X),ht(X),R.blending===li&&R.transparent===!1?it(hn):it(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const me=R.stencilWrite;o.setTest(me),me&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),C(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(R){w!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),w=R)}function st(R){R!==_l?(re(i.CULL_FACE),R!==z&&(R===Ea?i.cullFace(i.BACK):R===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),z=R}function wt(R){R!==W&&(H&&i.lineWidth(R),W=R)}function C(R,ie,X){R?(re(i.POLYGON_OFFSET_FILL),(q!==ie||U!==X)&&(q=ie,U=X,a.getReversed()&&(ie=-ie),i.polygonOffset(ie,X))):ye(i.POLYGON_OFFSET_FILL)}function pt(R){R?re(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function ze(R){R===void 0&&(R=i.TEXTURE0+V-1),ue!==R&&(i.activeTexture(R),ue=R)}function tt(R,ie,X){X===void 0&&(ue===null?X=i.TEXTURE0+V-1:X=ue);let me=ve[X];me===void 0&&(me={type:void 0,texture:void 0},ve[X]=me),(me.type!==R||me.texture!==ie)&&(ue!==X&&(i.activeTexture(X),ue=X),i.bindTexture(R,ie||he[R]),me.type=R,me.texture=ie)}function le(){const R=ve[ue];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function at(){try{i.compressedTexImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function m(){try{i.texSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function N(){try{i.texSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function te(){try{i.texStorage2D(...arguments)}catch(R){We("WebGLState:",R)}}function oe(){try{i.texStorage3D(...arguments)}catch(R){We("WebGLState:",R)}}function k(){try{i.texImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function K(){try{i.texImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function pe(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function _e(R,ie){d[R]!==ie&&(i.pixelStorei(R,ie),d[R]=ie)}function se(R){Ye.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ye.copy(R))}function ne(R){Ue.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ue.copy(R))}function we(R,ie){let X=l.get(ie);X===void 0&&(X=new WeakMap,l.set(ie,X));let me=X.get(R);me===void 0&&(me=i.getUniformBlockIndex(ie,R.name),X.set(R,me))}function Ie(R,ie){const me=l.get(ie).get(R);c.get(ie)!==me&&(i.uniformBlockBinding(ie,me,R.__bindingPointIndex),c.set(ie,me))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ue=null,ve={},u={},g=new WeakMap,v=[],E=null,p=!1,f=null,M=null,y=null,T=null,P=null,b=null,D=null,x=new $e(0,0,0),A=0,I=!1,w=null,z=null,W=null,q=null,U=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:ye,bindFramebuffer:Ce,drawBuffers:Ae,useProgram:rt,setBlending:it,setMaterial:Oe,setFlipSided:ht,setCullFace:st,setLineWidth:wt,setPolygonOffset:C,setScissorTest:pt,activeTexture:ze,bindTexture:tt,unbindTexture:le,compressedTexImage2D:at,compressedTexImage3D:S,texImage2D:k,texImage3D:K,pixelStorei:_e,getParameter:pe,updateUBOMapping:we,uniformBlockBinding:Ie,texStorage2D:te,texStorage3D:oe,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:se,viewport:ne,reset:Xe}}function Tp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,h=new WeakMap,d=new Set;let u;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,m){return v?new OffscreenCanvas(S,m):wi("canvas")}function p(S,m,N){let Y=1;const J=at(S);if((J.width>N||J.height>N)&&(Y=N/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const te=Math.floor(Y*J.width),oe=Math.floor(Y*J.height);u===void 0&&(u=E(te,oe));const k=m?E(te,oe):u;return k.width=te,k.height=oe,k.getContext("2d").drawImage(S,0,0,te,oe),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+oe+")."),k}else return"data"in S&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function f(S){return S.generateMipmaps}function M(S){i.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,m,N,Y,J,te=!1){if(S!==null){if(i[S]!==void 0)return i[S];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe;Y&&(oe=e.get("EXT_texture_norm16"),oe||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=m;if(m===i.RED&&(N===i.FLOAT&&(k=i.R32F),N===i.HALF_FLOAT&&(k=i.R16F),N===i.UNSIGNED_BYTE&&(k=i.R8),N===i.UNSIGNED_SHORT&&oe&&(k=oe.R16_EXT),N===i.SHORT&&oe&&(k=oe.R16_SNORM_EXT)),m===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.R8UI),N===i.UNSIGNED_SHORT&&(k=i.R16UI),N===i.UNSIGNED_INT&&(k=i.R32UI),N===i.BYTE&&(k=i.R8I),N===i.SHORT&&(k=i.R16I),N===i.INT&&(k=i.R32I)),m===i.RG&&(N===i.FLOAT&&(k=i.RG32F),N===i.HALF_FLOAT&&(k=i.RG16F),N===i.UNSIGNED_BYTE&&(k=i.RG8),N===i.UNSIGNED_SHORT&&oe&&(k=oe.RG16_EXT),N===i.SHORT&&oe&&(k=oe.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RG8UI),N===i.UNSIGNED_SHORT&&(k=i.RG16UI),N===i.UNSIGNED_INT&&(k=i.RG32UI),N===i.BYTE&&(k=i.RG8I),N===i.SHORT&&(k=i.RG16I),N===i.INT&&(k=i.RG32I)),m===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RGB8UI),N===i.UNSIGNED_SHORT&&(k=i.RGB16UI),N===i.UNSIGNED_INT&&(k=i.RGB32UI),N===i.BYTE&&(k=i.RGB8I),N===i.SHORT&&(k=i.RGB16I),N===i.INT&&(k=i.RGB32I)),m===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),N===i.UNSIGNED_INT&&(k=i.RGBA32UI),N===i.BYTE&&(k=i.RGBA8I),N===i.SHORT&&(k=i.RGBA16I),N===i.INT&&(k=i.RGBA32I)),m===i.RGB&&(N===i.UNSIGNED_SHORT&&oe&&(k=oe.RGB16_EXT),N===i.SHORT&&oe&&(k=oe.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),m===i.RGBA){const K=te?hr:Ge.getTransfer(J);N===i.FLOAT&&(k=i.RGBA32F),N===i.HALF_FLOAT&&(k=i.RGBA16F),N===i.UNSIGNED_BYTE&&(k=K===qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&oe&&(k=oe.RGBA16_EXT),N===i.SHORT&&oe&&(k=oe.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function P(S,m){let N;return S?m===null||m===nn||m===Ri?N=i.DEPTH24_STENCIL8:m===$t?N=i.DEPTH32F_STENCIL8:m===Ai&&(N=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===nn||m===Ri?N=i.DEPTH_COMPONENT24:m===$t?N=i.DEPTH_COMPONENT32F:m===Ai&&(N=i.DEPTH_COMPONENT16),N}function b(S,m){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==vt&&S.minFilter!==St?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function D(S){const m=S.target;m.removeEventListener("dispose",D),A(m),m.isVideoTexture&&h.delete(m),m.isHTMLTexture&&d.delete(m)}function x(S){const m=S.target;m.removeEventListener("dispose",x),w(m)}function A(S){const m=n.get(S);if(m.__webglInit===void 0)return;const N=S.source,Y=g.get(N);if(Y){const J=Y[m.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(S),Object.keys(Y).length===0&&g.delete(N)}n.remove(S)}function I(S){const m=n.get(S);i.deleteTexture(m.__webglTexture);const N=S.source,Y=g.get(N);delete Y[m.__cacheKey],a.memory.textures--}function w(S){const m=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(m.__webglFramebuffer[Y]))for(let J=0;J<m.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(m.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(m.__webglFramebuffer[Y]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[Y])}else{if(Array.isArray(m.__webglFramebuffer))for(let Y=0;Y<m.__webglFramebuffer.length;Y++)i.deleteFramebuffer(m.__webglFramebuffer[Y]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Y=0;Y<m.__webglColorRenderbuffer.length;Y++)m.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[Y]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const N=S.textures;for(let Y=0,J=N.length;Y<J;Y++){const te=n.get(N[Y]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(S)}let z=0;function W(){z=0}function q(){return z}function U(S){z=S}function V(){const S=z;return S>=r.maxTextures&&Re("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),z+=1,S}function H(S){const m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function Q(S,m){const N=n.get(S);if(S.isVideoTexture&&tt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){const Y=S.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,S,m);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+m)}function ee(S,m){const N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){ye(N,S,m);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+m)}function ue(S,m){const N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){ye(N,S,m);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+m)}function ve(S,m){const N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){Ce(N,S,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+m)}const be={[hs]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[ps]:i.MIRRORED_REPEAT},He={[vt]:i.NEAREST,[Gl]:i.NEAREST_MIPMAP_NEAREST,[Ni]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},Ye={[kl]:i.NEVER,[jl]:i.ALWAYS,[Wl]:i.LESS,[na]:i.LEQUAL,[Xl]:i.EQUAL,[ia]:i.GEQUAL,[ql]:i.GREATER,[Yl]:i.NOTEQUAL};function Ue(S,m){if(m.type===$t&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===St||m.magFilter===Ar||m.magFilter===Ni||m.magFilter===zn||m.minFilter===St||m.minFilter===Ar||m.minFilter===Ni||m.minFilter===zn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,be[m.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,be[m.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,be[m.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,He[m.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,He[m.minFilter]),m.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ye[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===vt||m.minFilter!==Ni&&m.minFilter!==zn||m.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Z(S,m){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",D));const Y=m.source;let J=g.get(Y);J===void 0&&(J={},g.set(Y,J));const te=H(m);if(te!==S.__cacheKey){J[te]===void 0&&(J[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[te].usedTimes++;const oe=J[S.__cacheKey];oe!==void 0&&(J[S.__cacheKey].usedTimes--,oe.usedTimes===0&&I(m)),S.__cacheKey=te,S.__webglTexture=J[te].texture}return N}function he(S,m,N){return Math.floor(Math.floor(S/N)/m)}function re(S,m,N,Y){const te=S.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,N,Y,m.data);else{te.sort((_e,se)=>_e.start-se.start);let oe=0;for(let _e=1;_e<te.length;_e++){const se=te[oe],ne=te[_e],we=se.start+se.count,Ie=he(ne.start,m.width,4),Xe=he(se.start,m.width,4);ne.start<=we+1&&Ie===Xe&&he(ne.start+ne.count-1,m.width,4)===Ie?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++oe,te[oe]=ne)}te.length=oe+1;const k=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let _e=0,se=te.length;_e<se;_e++){const ne=te[_e],we=Math.floor(ne.start/4),Ie=Math.ceil(ne.count/4),Xe=we%m.width,R=Math.floor(we/m.width),ie=Ie,X=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Xe,R,ie,X,N,Y,m.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,k),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ye(S,m,N){let Y=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Z(S,m),te=m.source;t.bindTexture(Y,S.__webglTexture,i.TEXTURE0+N);const oe=n.get(te);if(te.version!==oe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const X=Ge.getPrimaries(Ge.workingColorSpace),me=m.colorSpace===wn?null:Ge.getPrimaries(m.colorSpace),ae=m.colorSpace===wn||X===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let K=p(m.image,!1,r.maxTextureSize);K=le(m,K);const pe=s.convert(m.format,m.colorSpace),_e=s.convert(m.type);let se=T(m.internalFormat,pe,_e,m.normalized,m.colorSpace,m.isVideoTexture);Ue(Y,m);let ne;const we=m.mipmaps,Ie=m.isVideoTexture!==!0,Xe=oe.__version===void 0||J===!0,R=te.dataReady,ie=b(m,K);if(m.isDepthTexture)se=P(m.format===Gn,m.type),Xe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,se,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,se,K.width,K.height,0,pe,_e,null));else if(m.isDataTexture)if(we.length>0){Ie&&Xe&&t.texStorage2D(i.TEXTURE_2D,ie,se,we[0].width,we[0].height);for(let X=0,me=we.length;X<me;X++)ne=we[X],Ie?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ne.width,ne.height,pe,_e,ne.data):t.texImage2D(i.TEXTURE_2D,X,se,ne.width,ne.height,0,pe,_e,ne.data);m.generateMipmaps=!1}else Ie?(Xe&&t.texStorage2D(i.TEXTURE_2D,ie,se,K.width,K.height),R&&re(m,K,pe,_e)):t.texImage2D(i.TEXTURE_2D,0,se,K.width,K.height,0,pe,_e,K.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ie&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,se,we[0].width,we[0].height,K.depth);for(let X=0,me=we.length;X<me;X++)if(ne=we[X],m.format!==Ht)if(pe!==null)if(Ie){if(R)if(m.layerUpdates.size>0){const ae=$a(ne.width,ne.height,m.format,m.type);for(const $ of m.layerUpdates){const Me=ne.data.subarray($*ae/ne.data.BYTES_PER_ELEMENT,($+1)*ae/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,$,ne.width,ne.height,1,pe,Me)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ne.width,ne.height,K.depth,pe,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,se,ne.width,ne.height,K.depth,0,ne.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ne.width,ne.height,K.depth,pe,_e,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,se,ne.width,ne.height,K.depth,0,pe,_e,ne.data)}else{Ie&&Xe&&t.texStorage2D(i.TEXTURE_2D,ie,se,we[0].width,we[0].height);for(let X=0,me=we.length;X<me;X++)ne=we[X],m.format!==Ht?pe!==null?Ie?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,X,se,ne.width,ne.height,0,ne.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ne.width,ne.height,pe,_e,ne.data):t.texImage2D(i.TEXTURE_2D,X,se,ne.width,ne.height,0,pe,_e,ne.data)}else if(m.isDataArrayTexture)if(Ie){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,se,K.width,K.height,K.depth),R)if(m.layerUpdates.size>0){const X=$a(K.width,K.height,m.format,m.type);for(const me of m.layerUpdates){const ae=K.data.subarray(me*X/K.data.BYTES_PER_ELEMENT,(me+1)*X/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,K.width,K.height,1,pe,_e,ae)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,pe,_e,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,K.width,K.height,K.depth,0,pe,_e,K.data);else if(m.isData3DTexture)Ie?(Xe&&t.texStorage3D(i.TEXTURE_3D,ie,se,K.width,K.height,K.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,pe,_e,K.data)):t.texImage3D(i.TEXTURE_3D,0,se,K.width,K.height,K.depth,0,pe,_e,K.data);else if(m.isFramebufferTexture){if(Xe)if(Ie)t.texStorage2D(i.TEXTURE_2D,ie,se,K.width,K.height);else{let X=K.width,me=K.height;for(let ae=0;ae<ie;ae++)t.texImage2D(i.TEXTURE_2D,ae,se,X,me,0,pe,_e,null),X>>=1,me>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),K.parentNode!==X){X.appendChild(K),d.add(m),X.onpaint=De=>{const lt=De.changedElements;for(const Ke of d)lt.includes(Ke.image)&&(Ke.needsUpdate=!0)},X.requestPaint();return}const me=0,ae=i.RGBA,$=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,me,ae,$,Me,K),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ie&&Xe){const X=at(we[0]);t.texStorage2D(i.TEXTURE_2D,ie,se,X.width,X.height)}for(let X=0,me=we.length;X<me;X++)ne=we[X],Ie?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,pe,_e,ne):t.texImage2D(i.TEXTURE_2D,X,se,pe,_e,ne);m.generateMipmaps=!1}else if(Ie){if(Xe){const X=at(K);t.texStorage2D(i.TEXTURE_2D,ie,se,X.width,X.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,_e,K)}else t.texImage2D(i.TEXTURE_2D,0,se,pe,_e,K);f(m)&&M(Y),oe.__version=te.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function Ce(S,m,N){if(m.image.length!==6)return;const Y=Z(S,m),J=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);const te=n.get(J);if(J.version!==te.__version||Y===!0){t.activeTexture(i.TEXTURE0+N);const oe=Ge.getPrimaries(Ge.workingColorSpace),k=m.colorSpace===wn?null:Ge.getPrimaries(m.colorSpace),K=m.colorSpace===wn||oe===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const pe=m.isCompressedTexture||m.image[0].isCompressedTexture,_e=m.image[0]&&m.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!pe&&!_e?se[$]=p(m.image[$],!0,r.maxCubemapSize):se[$]=_e?m.image[$].image:m.image[$],se[$]=le(m,se[$]);const ne=se[0],we=s.convert(m.format,m.colorSpace),Ie=s.convert(m.type),Xe=T(m.internalFormat,we,Ie,m.normalized,m.colorSpace),R=m.isVideoTexture!==!0,ie=te.__version===void 0||Y===!0,X=J.dataReady;let me=b(m,ne);Ue(i.TEXTURE_CUBE_MAP,m);let ae;if(pe){R&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Xe,ne.width,ne.height);for(let $=0;$<6;$++){ae=se[$].mipmaps;for(let Me=0;Me<ae.length;Me++){const De=ae[Me];m.format!==Ht?we!==null?R?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,De.width,De.height,we,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Xe,De.width,De.height,0,De.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,0,0,De.width,De.height,we,Ie,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me,Xe,De.width,De.height,0,we,Ie,De.data)}}}else{if(ae=m.mipmaps,R&&ie){ae.length>0&&me++;const $=at(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(_e){R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,we,Ie,se[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,se[$].width,se[$].height,0,we,Ie,se[$].data);for(let Me=0;Me<ae.length;Me++){const lt=ae[Me].image[$].image;R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,lt.width,lt.height,we,Ie,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Xe,lt.width,lt.height,0,we,Ie,lt.data)}}else{R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,Ie,se[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,we,Ie,se[$]);for(let Me=0;Me<ae.length;Me++){const De=ae[Me];R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,0,0,we,Ie,De.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Me+1,Xe,we,Ie,De.image[$])}}}f(m)&&M(i.TEXTURE_CUBE_MAP),te.__version=J.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function Ae(S,m,N,Y,J,te){const oe=s.convert(N.format,N.colorSpace),k=s.convert(N.type),K=T(N.internalFormat,oe,k,N.normalized,N.colorSpace),pe=n.get(m),_e=n.get(N);if(_e.__renderTarget=m,!pe.__hasExternalTextures){const se=Math.max(1,m.width>>te),ne=Math.max(1,m.height>>te);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,te,K,se,ne,m.depth,0,oe,k,null):t.texImage2D(J,te,K,se,ne,0,oe,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ze(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,_e.__webglTexture,0,pt(m)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,_e.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(S,m,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),m.depthBuffer){const Y=m.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,te=P(m.stencilBuffer,J),oe=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ze(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(m),te,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(m),te,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,te,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,S)}else{const Y=m.textures;for(let J=0;J<Y.length;J++){const te=Y[J],oe=s.convert(te.format,te.colorSpace),k=s.convert(te.type),K=T(te.internalFormat,oe,k,te.normalized,te.colorSpace);ze(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(m),K,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(m),K,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,K,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(S,m,N){const Y=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(m.depthTexture);if(J.__renderTarget=m,(!J.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,m.depthTexture.addEventListener("dispose",D)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,m.depthTexture);const pe=s.convert(m.depthTexture.format),_e=s.convert(m.depthTexture.type);let se;m.depthTexture.format===_n?se=i.DEPTH_COMPONENT24:m.depthTexture.format===Gn&&(se=i.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,m.width,m.height,0,pe,_e,null)}}else Q(m.depthTexture,0);const te=J.__webglTexture,oe=pt(m),k=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,K=m.depthTexture.format===Gn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===_n)ze(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,k,te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,K,k,te,0);else if(m.depthTexture.format===Gn)ze(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,k,te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,K,k,te,0);else throw new Error("Unknown depthTexture format")}function je(S){const m=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Y){const J=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),m.__depthDisposeCallback=J}m.__boundDepthTexture=Y}if(S.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Be(m.__webglFramebuffer[Y],S,Y);else{const Y=S.texture.mipmaps;Y&&Y.length>0?Be(m.__webglFramebuffer[0],S,0):Be(m.__webglFramebuffer,S,0)}else if(N){m.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[Y]),m.__webglDepthbuffer[Y]===void 0)m.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(m.__webglDepthbuffer[Y],S,!1);else{const J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=m.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),rt(m.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(S,m,N){const Y=n.get(S);m!==void 0&&Ae(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&je(S)}function Oe(S){const m=S.texture,N=n.get(S),Y=n.get(m);S.addEventListener("dispose",x);const J=S.textures,te=S.isWebGLCubeRenderTarget===!0,oe=J.length>1;if(oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=m.version,a.memory.textures++),te){N.__webglFramebuffer=[];for(let k=0;k<6;k++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[k]=[];for(let K=0;K<m.mipmaps.length;K++)N.__webglFramebuffer[k][K]=i.createFramebuffer()}else N.__webglFramebuffer[k]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let k=0;k<m.mipmaps.length;k++)N.__webglFramebuffer[k]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(oe)for(let k=0,K=J.length;k<K;k++){const pe=n.get(J[k]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&ze(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let k=0;k<J.length;k++){const K=J[k];N.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[k]);const pe=s.convert(K.format,K.colorSpace),_e=s.convert(K.type),se=T(K.internalFormat,pe,_e,K.normalized,K.colorSpace,S.isXRRenderTarget===!0),ne=pt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,N.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,m);for(let k=0;k<6;k++)if(m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)Ae(N.__webglFramebuffer[k][K],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,K);else Ae(N.__webglFramebuffer[k],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(m)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let k=0,K=J.length;k<K;k++){const pe=J[k],_e=n.get(pe);let se=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,_e.__webglTexture),Ue(se,pe),Ae(N.__webglFramebuffer,S,pe,i.COLOR_ATTACHMENT0+k,se,0),f(pe)&&M(se)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(k=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,Y.__webglTexture),Ue(k,m),m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)Ae(N.__webglFramebuffer[K],S,m,i.COLOR_ATTACHMENT0,k,K);else Ae(N.__webglFramebuffer,S,m,i.COLOR_ATTACHMENT0,k,0);f(m)&&M(k),t.unbindTexture()}S.depthBuffer&&je(S)}function ht(S){const m=S.textures;for(let N=0,Y=m.length;N<Y;N++){const J=m[N];if(f(J)){const te=y(S),oe=n.get(J).__webglTexture;t.bindTexture(te,oe),M(te),t.unbindTexture()}}}const st=[],wt=[];function C(S){if(S.samples>0){if(ze(S)===!1){const m=S.textures,N=S.width,Y=S.height;let J=i.COLOR_BUFFER_BIT;const te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(S),k=m.length>1;if(k)for(let pe=0;pe<m.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const K=S.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let pe=0;pe<m.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const _e=n.get(m[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,J,i.NEAREST),c===!0&&(st.length=0,wt.length=0,st.push(i.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(st.push(te),wt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let pe=0;pe<m.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,oe.__webglColorRenderbuffer[pe]);const _e=n.get(m[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const m=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function pt(S){return Math.min(r.maxSamples,S.samples)}function ze(S){const m=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function tt(S){const m=a.render.frame;h.get(S)!==m&&(h.set(S,m),S.update())}function le(S,m){const N=S.colorSpace,Y=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==fr&&N!==wn&&(Ge.getTransfer(N)===qe?(Y!==Ht||J!==Ft)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",N)),m}function at(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ue,this.setTextureCube=ve,this.rebindTextures=it,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yp(i,e){function t(n,r=wn){let s;const a=Ge.getTransfer(r);if(n===Ft)return i.UNSIGNED_BYTE;if(n===$s)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Js)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Io)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Do)return i.BYTE;if(n===Lo)return i.SHORT;if(n===Ai)return i.UNSIGNED_SHORT;if(n===Zs)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Fo)return i.RGB;if(n===Ht)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===Gn)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Qs)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===ea)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===sr||n===ar||n===or||n===lr)if(a===qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ms||n===gs||n===_s||n===xs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_s)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vs||n===Ss||n===Ms||n===Es||n===bs||n===ur||n===Ts)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vs||n===Ss)return a===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ms)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Es)return s.COMPRESSED_R11_EAC;if(n===bs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return s.COMPRESSED_RG11_EAC;if(n===Ts)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ys||n===As||n===Rs||n===ws||n===Cs||n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ys)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===As)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ws)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ps)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ds)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ls)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Us)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Is)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ns)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Os)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bs)return a===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Gs||n===Vs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===zs)return a===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hs||n===ks||n===dr||n===Ws)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ks)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ws)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:Ap,fragmentShader:Rp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cp extends Wn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,g=null,v=null;const E=typeof XRWebGLBinding<"u",p=new wp,f={},M=t.getContextAttributes();let y=null,T=null;const P=[],b=[],D=new Je;let x=null;const A=new Gt;A.viewport=new dt;const I=new Gt;I.viewport=new dt;const w=[A,I],z=new Oc;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=P[Z];return he===void 0&&(he=new Ir,P[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=P[Z];return he===void 0&&(he=new Ir,P[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=P[Z];return he===void 0&&(he=new Ir,P[Z]=he),he.getHandSpace()};function U(Z){const he=b.indexOf(Z.inputSource);if(he===-1)return;const re=P[he];re!==void 0&&(re.update(Z.inputSource,Z.frame,l||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let Z=0;Z<P.length;Z++){const he=b[Z];he!==null&&(b[Z]=null,P[Z].disconnect(he))}W=null,q=null,p.reset();for(const Z in f)delete f[Z];e.setRenderTarget(y),g=null,u=null,d=null,r=null,T=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ye=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?Gn:_n,ye=M.stencil?Ri:nn);const Ae={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new en(u.textureWidth,u.textureHeight,{format:Ht,type:Ft,depthTexture:new fi(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new en(g.framebufferWidth,g.framebufferHeight,{format:Ht,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(Z){for(let he=0;he<Z.removed.length;he++){const re=Z.removed[he],ye=b.indexOf(re);ye>=0&&(b[ye]=null,P[ye].disconnect(re))}for(let he=0;he<Z.added.length;he++){const re=Z.added[he];let ye=b.indexOf(re);if(ye===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=b.length){b.push(re),ye=Ae;break}else if(b[Ae]===null){b[Ae]=re,ye=Ae;break}if(ye===-1)break}const Ce=P[ye];Ce&&Ce.connect(re)}}const Q=new B,ee=new B;function ue(Z,he,re){Q.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const ye=Q.distanceTo(ee),Ce=he.projectionMatrix.elements,Ae=re.projectionMatrix.elements,rt=Ce[14]/(Ce[10]-1),Be=Ce[14]/(Ce[10]+1),je=(Ce[9]+1)/Ce[5],it=(Ce[9]-1)/Ce[5],Oe=(Ce[8]-1)/Ce[0],ht=(Ae[8]+1)/Ae[0],st=rt*Oe,wt=rt*ht,C=ye/(-Oe+ht),pt=C*-Oe;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pt),Z.translateZ(C),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ze=rt+C,tt=Be+C,le=st-pt,at=wt+(ye-pt),S=je*Be/tt*ze,m=it*Be/tt*ze;Z.projectionMatrix.makePerspective(le,at,S,m,ze,tt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let he=Z.near,re=Z.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(re=p.depthFar)),z.near=I.near=A.near=he,z.far=I.far=A.far=re,(W!==z.near||q!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,q=z.far),z.layers.mask=Z.layers.mask|6,A.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const ye=Z.parent,Ce=z.cameras;ve(z,ye);for(let Ae=0;Ae<Ce.length;Ae++)ve(Ce[Ae],ye);Ce.length===2?ue(z,A,I):z.projectionMatrix.copy(A.projectionMatrix),be(Z,z,ye)};function be(Z,he,re){re===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Z){return f[Z]};let He=null;function Ye(Z,he){if(h=he.getViewerPose(l||a),v=he,h!==null){const re=h.views;g!==null&&(e.setRenderTargetFramebuffer(T,g.framebuffer),e.setRenderTarget(T));let ye=!1;re.length!==z.cameras.length&&(z.cameras.length=0,ye=!0);for(let Be=0;Be<re.length;Be++){const je=re[Be];let it=null;if(g!==null)it=g.getViewport(je);else{const ht=d.getViewSubImage(u,je);it=ht.viewport,Be===0&&(e.setRenderTargetTextures(T,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(T))}let Oe=w[Be];Oe===void 0&&(Oe=new Gt,Oe.layers.enable(Be),Oe.viewport=new dt,w[Be]=Oe),Oe.matrix.fromArray(je.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(je.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(it.x,it.y,it.width,it.height),Be===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ye===!0&&z.cameras.push(Oe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=n.getBinding();const Be=d.getDepthInformation(re[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,r.renderState)}if(Ce&&Ce.includes("camera-access")&&E){e.state.unbindTexture(),d=n.getBinding();for(let Be=0;Be<re.length;Be++){const je=re[Be].camera;if(je){let it=f[je];it||(it=new Yo,f[je]=it);const Oe=d.getCameraImage(je);it.sourceTexture=Oe}}}}for(let re=0;re<P.length;re++){const ye=b[re],Ce=P[re];ye!==null&&Ce!==void 0&&Ce.update(ye,he,l||a)}He&&He(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),v=null}const Ue=new Zo;Ue.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}}const Pp=new mt,il=new Pe;il.set(-1,0,0,0,1,0,0,0,1);function Dp(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,jo(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,M,y,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&g(p,f,T)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),E(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Rt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Rt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),y=M.envMap,T=M.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(T)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(il),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function E(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const T=y.program;n.uniformBlockBinding(M,T)}function l(M,y){let T=r[M.id];T===void 0&&(v(M),T=h(M),r[M.id]=T,M.addEventListener("dispose",p));const P=y.program;n.updateUBOMapping(M,P);const b=e.render.frame;s[M.id]!==b&&(u(M),s[M.id]=b)}function h(M){const y=d();M.__bindingPointIndex=y;const T=i.createBuffer(),P=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=r[M.id],T=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,D=T.length;b<D;b++){const x=Array.isArray(T[b])?T[b]:[T[b]];for(let A=0,I=x.length;A<I;A++){const w=x[A];if(g(w,b,A,P)===!0){const z=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let U=0;U<W.length;U++){const V=W[U],H=E(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,z+q,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):ArrayBuffer.isView(V)?w.__data.set(new V.constructor(V.buffer,V.byteOffset,w.__data.length)):(V.toArray(w.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,y,T,P){const b=M.value,D=y+"_"+T;if(P[D]===void 0)return typeof b=="number"||typeof b=="boolean"?P[D]=b:ArrayBuffer.isView(b)?P[D]=b.slice():P[D]=b.clone(),!0;{const x=P[D];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return P[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(M){const y=M.uniforms;let T=0;const P=16;for(let D=0,x=y.length;D<x;D++){const A=Array.isArray(y[D])?y[D]:[y[D]];for(let I=0,w=A.length;I<w;I++){const z=A[I],W=Array.isArray(z.value)?z.value:[z.value];for(let q=0,U=W.length;q<U;q++){const V=W[q],H=E(V),Q=T%P,ee=Q%H.boundary,ue=Q+ee;T+=ee,ue!==0&&P-ue<H.storage&&(T+=P-ue),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=H.storage}}}const b=T%P;return b>0&&(T+=P-b),M.__size=T,M.__cache={},this}function E(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const Up=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yt=null;function Ip(){return Yt===null&&(Yt=new Sc(Up,16,16,Hn,gn),Yt.name="DFG_LUT",Yt.minFilter=St,Yt.magFilter=St,Yt.wrapS=fn,Yt.wrapT=fn,Yt.generateMipmaps=!1,Yt.needsUpdate=!0),Yt}class Np{constructor(e={}){const{canvas:t=Zl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Ft}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const E=g,p=new Set([ta,ea,Qs]),f=new Set([Ft,nn,Ai,Ri,$s,Js]),M=new Uint32Array(4),y=new Int32Array(4),T=new B;let P=null,b=null;const D=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let w=!1,z=null;this._outputColorSpace=Nt;let W=0,q=0,U=null,V=-1,H=null;const Q=new dt,ee=new dt;let ue=null;const ve=new $e(0);let be=0,He=t.width,Ye=t.height,Ue=1,Z=null,he=null;const re=new dt(0,0,He,Ye),ye=new dt(0,0,He,Ye);let Ce=!1;const Ae=new Xo;let rt=!1,Be=!1;const je=new mt,it=new B,Oe=new dt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function wt(){return U===null?Ue:1}let C=n;function pt(_,L){return t.getContext(_,L)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ks}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",De,!1),C===null){const L="webgl2";if(C=pt(L,_),C===null)throw pt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw We("WebGLRenderer: "+_.message),_}let ze,tt,le,at,S,m,N,Y,J,te,oe,k,K,pe,_e,se,ne,we,Ie,Xe,R,ie,X;function me(){ze=new If(C),ze.init(),R=new yp(C,ze),tt=new Af(C,ze,e,R),le=new bp(C,ze),tt.reversedDepthBuffer&&u&&le.buffers.depth.setReversed(!0),at=new Of(C),S=new cp,m=new Tp(C,ze,le,S,tt,R,at),N=new Uf(I),Y=new Gc(C),ie=new Tf(C,Y),J=new Nf(C,Y,at,ie),te=new zf(C,J,Y,ie,at),we=new Bf(C,tt,m),_e=new Rf(S),oe=new lp(I,N,ze,tt,ie,_e),k=new Dp(I,S),K=new dp,pe=new _p(ze),ne=new bf(I,N,le,te,v,c),se=new Ep(I,te,tt),X=new Lp(C,at,tt,le),Ie=new yf(C,ze,at),Xe=new Ff(C,ze,at),at.programs=oe.programs,I.capabilities=tt,I.extensions=ze,I.properties=S,I.renderLists=K,I.shadowMap=se,I.state=le,I.info=at}me(),E!==Ft&&(A=new Vf(E,t.width,t.height,r,s));const ae=new Cp(I,C);this.xr=ae,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const _=ze.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=ze.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(_){_!==void 0&&(Ue=_,this.setSize(He,Ye,!1))},this.getSize=function(_){return _.set(He,Ye)},this.setSize=function(_,L,G=!0){if(ae.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}He=_,Ye=L,t.width=Math.floor(_*Ue),t.height=Math.floor(L*Ue),G===!0&&(t.style.width=_+"px",t.style.height=L+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(He*Ue,Ye*Ue).floor()},this.setDrawingBufferSize=function(_,L,G){He=_,Ye=L,Ue=G,t.width=Math.floor(_*G),t.height=Math.floor(L*G),this.setViewport(0,0,_,L)},this.setEffects=function(_){if(E===Ft){We("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let L=0;L<_.length;L++)if(_[L].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(Q)},this.getViewport=function(_){return _.copy(re)},this.setViewport=function(_,L,G,F){_.isVector4?re.set(_.x,_.y,_.z,_.w):re.set(_,L,G,F),le.viewport(Q.copy(re).multiplyScalar(Ue).round())},this.getScissor=function(_){return _.copy(ye)},this.setScissor=function(_,L,G,F){_.isVector4?ye.set(_.x,_.y,_.z,_.w):ye.set(_,L,G,F),le.scissor(ee.copy(ye).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(_){le.setScissorTest(Ce=_)},this.setOpaqueSort=function(_){Z=_},this.setTransparentSort=function(_){he=_},this.getClearColor=function(_){return _.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,G=!0){let F=0;if(_){let O=!1;if(U!==null){const fe=U.texture.format;O=p.has(fe)}if(O){const fe=U.texture.type,xe=f.has(fe),de=ne.getClearColor(),Se=ne.getClearAlpha(),Ee=de.r,Le=de.g,Fe=de.b;xe?(M[0]=Ee,M[1]=Le,M[2]=Fe,M[3]=Se,C.clearBufferuiv(C.COLOR,0,M)):(y[0]=Ee,y[1]=Le,y[2]=Fe,y[3]=Se,C.clearBufferiv(C.COLOR,0,y))}else F|=C.COLOR_BUFFER_BIT}L&&(F|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(F|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),z=_},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ne.dispose(),K.dispose(),pe.dispose(),S.dispose(),N.dispose(),te.dispose(),ie.dispose(),X.dispose(),oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ha),ae.removeEventListener("sessionend",pa),Dn.stop()};function $(_){_.preventDefault(),Da("WebGLRenderer: Context Lost."),w=!0}function Me(){Da("WebGLRenderer: Context Restored."),w=!1;const _=at.autoReset,L=se.enabled,G=se.autoUpdate,F=se.needsUpdate,O=se.type;me(),at.autoReset=_,se.enabled=L,se.autoUpdate=G,se.needsUpdate=F,se.type=O}function De(_){We("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function lt(_){const L=_.target;L.removeEventListener("dispose",lt),Ke(L)}function Ke(_){sn(_),S.remove(_)}function sn(_){const L=S.get(_).programs;L!==void 0&&(L.forEach(function(G){oe.releaseProgram(G)}),_.isShaderMaterial&&oe.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,G,F,O,fe){L===null&&(L=ht);const xe=O.isMesh&&O.matrixWorld.determinant()<0,de=al(_,L,G,F,O);le.setMaterial(F,xe);let Se=G.index,Ee=1;if(F.wireframe===!0){if(Se=J.getWireframeAttribute(G),Se===void 0)return;Ee=2}const Le=G.drawRange,Fe=G.attributes.position;let Te=Le.start*Ee,Ze=(Le.start+Le.count)*Ee;fe!==null&&(Te=Math.max(Te,fe.start*Ee),Ze=Math.min(Ze,(fe.start+fe.count)*Ee)),Se!==null?(Te=Math.max(Te,0),Ze=Math.min(Ze,Se.count)):Fe!=null&&(Te=Math.max(Te,0),Ze=Math.min(Ze,Fe.count));const ct=Ze-Te;if(ct<0||ct===1/0)return;ie.setup(O,F,de,G,Se);let ot,Qe=Ie;if(Se!==null&&(ot=Y.get(Se),Qe=Xe,Qe.setIndex(ot)),O.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*wt()),Qe.setMode(C.LINES)):Qe.setMode(C.TRIANGLES);else if(O.isLine){let Mt=F.linewidth;Mt===void 0&&(Mt=1),le.setLineWidth(Mt*wt()),O.isLineSegments?Qe.setMode(C.LINES):O.isLineLoop?Qe.setMode(C.LINE_LOOP):Qe.setMode(C.LINE_STRIP)}else O.isPoints?Qe.setMode(C.POINTS):O.isSprite&&Qe.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Mt=O._multiDrawStarts,ge=O._multiDrawCounts,Ct=O._multiDrawCount,ke=Se?Y.get(Se).bytesPerElement:1,Ut=S.get(F).currentProgram.getUniforms();for(let Xt=0;Xt<Ct;Xt++)Ut.setValue(C,"_gl_DrawID",Xt),Qe.render(Mt[Xt]/ke,ge[Xt])}else if(O.isInstancedMesh)Qe.renderInstances(Te,ct,O.count);else if(G.isInstancedBufferGeometry){const Mt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ge=Math.min(G.instanceCount,Mt);Qe.renderInstances(Te,ct,ge)}else Qe.render(Te,ct)};function Wt(_,L,G){_.transparent===!0&&_.side===dn&&_.forceSinglePass===!1?(_.side=Rt,_.needsUpdate=!0,Ii(_,L,G),_.side=Pn,_.needsUpdate=!0,Ii(_,L,G),_.side=dn):Ii(_,L,G)}this.compile=function(_,L,G=null){G===null&&(G=_),b=pe.get(G),b.init(L),x.push(b),G.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),_!==G&&_.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),b.setupLights();const F=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const fe=O.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const de=fe[xe];Wt(de,G,O),F.add(de)}else Wt(fe,G,O),F.add(fe)}),b=x.pop(),F},this.compileAsync=function(_,L,G=null){const F=this.compile(_,L,G);return new Promise(O=>{function fe(){if(F.forEach(function(xe){S.get(xe).currentProgram.isReady()&&F.delete(xe)}),F.size===0){O(_);return}setTimeout(fe,10)}ze.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Sr=null;function rl(_){Sr&&Sr(_)}function ha(){Dn.stop()}function pa(){Dn.start()}const Dn=new Zo;Dn.setAnimationLoop(rl),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(_){Sr=_,ae.setAnimationLoop(_),_===null?Dn.stop():Dn.start()},ae.addEventListener("sessionstart",ha),ae.addEventListener("sessionend",pa),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;z!==null&&z.renderStart(_,L);const G=ae.enabled===!0&&ae.isPresenting===!0,F=A!==null&&(U===null||G)&&A.begin(I,U);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(L),L=ae.getCamera()),_.isScene===!0&&_.onBeforeRender(I,_,L,U),b=pe.get(_,x.length),b.init(L),b.state.textureUnits=m.getTextureUnits(),x.push(b),je.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ae.setFromProjectionMatrix(je,Jt,L.reversedDepth),Be=this.localClippingEnabled,rt=_e.init(this.clippingPlanes,Be),P=K.get(_,D.length),P.init(),D.push(P),ae.enabled===!0&&ae.isPresenting===!0){const xe=I.xr.getDepthSensingMesh();xe!==null&&Mr(xe,L,-1/0,I.sortObjects)}Mr(_,L,0,I.sortObjects),P.finish(),I.sortObjects===!0&&P.sort(Z,he),st=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,st&&ne.addToRenderList(P,_),this.info.render.frame++,rt===!0&&_e.beginShadows();const O=b.state.shadowsArray;if(se.render(O,_,L),rt===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&A.hasRenderPass())===!1){const xe=P.opaque,de=P.transmissive;if(b.setupLights(),L.isArrayCamera){const Se=L.cameras;if(de.length>0)for(let Ee=0,Le=Se.length;Ee<Le;Ee++){const Fe=Se[Ee];ga(xe,de,_,Fe)}st&&ne.render(_);for(let Ee=0,Le=Se.length;Ee<Le;Ee++){const Fe=Se[Ee];ma(P,_,Fe,Fe.viewport)}}else de.length>0&&ga(xe,de,_,L),st&&ne.render(_),ma(P,_,L)}U!==null&&q===0&&(m.updateMultisampleRenderTarget(U),m.updateRenderTargetMipmap(U)),F&&A.end(I),_.isScene===!0&&_.onAfterRender(I,_,L),ie.resetDefaultState(),V=-1,H=null,x.pop(),x.length>0?(b=x[x.length-1],m.setTextureUnits(b.state.textureUnits),rt===!0&&_e.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,D.pop(),D.length>0?P=D[D.length-1]:P=null,z!==null&&z.renderEnd()};function Mr(_,L,G,F){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLightProbeGrid)b.pushLightProbeGrid(_);else if(_.isLight)b.pushLight(_),_.castShadow&&b.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ae.intersectsSprite(_)){F&&Oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(je);const xe=te.update(_),de=_.material;de.visible&&P.push(_,xe,de,G,Oe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ae.intersectsObject(_))){const xe=te.update(_),de=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Oe.copy(_.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(_.matrixWorld).applyMatrix4(je)),Array.isArray(de)){const Se=xe.groups;for(let Ee=0,Le=Se.length;Ee<Le;Ee++){const Fe=Se[Ee],Te=de[Fe.materialIndex];Te&&Te.visible&&P.push(_,xe,Te,G,Oe.z,Fe)}}else de.visible&&P.push(_,xe,de,G,Oe.z,null)}}const fe=_.children;for(let xe=0,de=fe.length;xe<de;xe++)Mr(fe[xe],L,G,F)}function ma(_,L,G,F){const{opaque:O,transmissive:fe,transparent:xe}=_;b.setupLightsView(G),rt===!0&&_e.setGlobalState(I.clippingPlanes,G),F&&le.viewport(Q.copy(F)),O.length>0&&Ui(O,L,G),fe.length>0&&Ui(fe,L,G),xe.length>0&&Ui(xe,L,G),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ga(_,L,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){const Te=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new en(1,1,{generateMipmaps:!0,type:Te?gn:Ft,minFilter:zn,samples:Math.max(4,tt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const fe=b.state.transmissionRenderTarget[F.id],xe=F.viewport||Q;fe.setSize(xe.z*I.transmissionResolutionScale,xe.w*I.transmissionResolutionScale);const de=I.getRenderTarget(),Se=I.getActiveCubeFace(),Ee=I.getActiveMipmapLevel();I.setRenderTarget(fe),I.getClearColor(ve),be=I.getClearAlpha(),be<1&&I.setClearColor(16777215,.5),I.clear(),st&&ne.render(G);const Le=I.toneMapping;I.toneMapping=Qt;const Fe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),rt===!0&&_e.setGlobalState(I.clippingPlanes,F),Ui(_,G,F),m.updateMultisampleRenderTarget(fe),m.updateRenderTargetMipmap(fe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ze=0,ct=L.length;Ze<ct;Ze++){const ot=L[Ze],{object:Qe,geometry:Mt,material:ge,group:Ct}=ot;if(ge.side===dn&&Qe.layers.test(F.layers)){const ke=ge.side;ge.side=Rt,ge.needsUpdate=!0,_a(Qe,G,F,Mt,ge,Ct),ge.side=ke,ge.needsUpdate=!0,Te=!0}}Te===!0&&(m.updateMultisampleRenderTarget(fe),m.updateRenderTargetMipmap(fe))}I.setRenderTarget(de,Se,Ee),I.setClearColor(ve,be),Fe!==void 0&&(F.viewport=Fe),I.toneMapping=Le}function Ui(_,L,G){const F=L.isScene===!0?L.overrideMaterial:null;for(let O=0,fe=_.length;O<fe;O++){const xe=_[O],{object:de,geometry:Se,group:Ee}=xe;let Le=xe.material;Le.allowOverride===!0&&F!==null&&(Le=F),de.layers.test(G.layers)&&_a(de,L,G,Se,Le,Ee)}}function _a(_,L,G,F,O,fe){_.onBeforeRender(I,L,G,F,O,fe),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(I,L,G,F,_,fe),O.transparent===!0&&O.side===dn&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,I.renderBufferDirect(G,L,F,O,_,fe),O.side=Pn,O.needsUpdate=!0,I.renderBufferDirect(G,L,F,O,_,fe),O.side=dn):I.renderBufferDirect(G,L,F,O,_,fe),_.onAfterRender(I,L,G,F,O,fe)}function Ii(_,L,G){L.isScene!==!0&&(L=ht);const F=S.get(_),O=b.state.lights,fe=b.state.shadowsArray,xe=O.state.version,de=oe.getParameters(_,O.state,fe,L,G,b.state.lightProbeGridArray),Se=oe.getProgramCacheKey(de);let Ee=F.programs;F.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;const Le=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;F.envMap=N.get(_.envMap||F.environment,Le),F.envMapRotation=F.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Ee===void 0&&(_.addEventListener("dispose",lt),Ee=new Map,F.programs=Ee);let Fe=Ee.get(Se);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===xe)return va(_,de),Fe}else de.uniforms=oe.getUniforms(_),z!==null&&_.isNodeMaterial&&z.build(_,G,de),_.onBeforeCompile(de,I),Fe=oe.acquireProgram(de,Se),Ee.set(Se,Fe),F.uniforms=de.uniforms;const Te=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Te.clippingPlanes=_e.uniform),va(_,de),F.needsLights=ll(_),F.lightsStateVersion=xe,F.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=b.state.lightProbeGridArray.length>0,F.currentProgram=Fe,F.uniformsList=null,Fe}function xa(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=cr.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function va(_,L){const G=S.get(_);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function sl(_,L){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;T.setFromMatrixPosition(L.matrixWorld);for(let G=0,F=_.length;G<F;G++){const O=_[G];if(O.texture!==null&&O.boundingBox.containsPoint(T))return O}return null}function al(_,L,G,F,O){L.isScene!==!0&&(L=ht),m.resetTextureUnits();const fe=L.fog,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,de=U===null?I.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ge.workingColorSpace,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ee=N.get(F.envMap||xe,Se),Le=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Te=!!G.morphAttributes.position,Ze=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let ot=Qt;F.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ot=I.toneMapping);const Qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=Qe!==void 0?Qe.length:0,ge=S.get(F),Ct=b.state.lights;if(rt===!0&&(Be===!0||_!==H)){const nt=_===H&&F.id===V;_e.setState(F,_,nt)}let ke=!1;F.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ct.state.version||ge.outputColorSpace!==de||O.isBatchedMesh&&ge.batching===!1||!O.isBatchedMesh&&ge.batching===!0||O.isBatchedMesh&&ge.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ge.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ge.instancing===!1||!O.isInstancedMesh&&ge.instancing===!0||O.isSkinnedMesh&&ge.skinning===!1||!O.isSkinnedMesh&&ge.skinning===!0||O.isInstancedMesh&&ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ge.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ge.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ge.instancingMorph===!1&&O.morphTexture!==null||ge.envMap!==Ee||F.fog===!0&&ge.fog!==fe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==_e.numPlanes||ge.numIntersection!==_e.numIntersection)||ge.vertexAlphas!==Le||ge.vertexTangents!==Fe||ge.morphTargets!==Te||ge.morphNormals!==Ze||ge.morphColors!==ct||ge.toneMapping!==ot||ge.morphTargetsCount!==Mt||!!ge.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,ge.__version=F.version);let Ut=ge.currentProgram;ke===!0&&(Ut=Ii(F,L,O),z&&F.isNodeMaterial&&z.onUpdateProgram(F,Ut,ge));let Xt=!1,vn=!1,Xn=!1;const et=Ut.getUniforms(),ut=ge.uniforms;if(le.useProgram(Ut.program)&&(Xt=!0,vn=!0,Xn=!0),F.id!==V&&(V=F.id,vn=!0),ge.needsLights){const nt=sl(b.state.lightProbeGridArray,O);ge.lightProbeGrid!==nt&&(ge.lightProbeGrid=nt,vn=!0)}if(Xt||H!==_){le.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),et.setValue(C,"projectionMatrix",_.projectionMatrix),et.setValue(C,"viewMatrix",_.matrixWorldInverse);const Mn=et.map.cameraPosition;Mn!==void 0&&Mn.setValue(C,it.setFromMatrixPosition(_.matrixWorld)),tt.logarithmicDepthBuffer&&et.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&et.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),H!==_&&(H=_,vn=!0,Xn=!0)}if(ge.needsLights&&(Ct.state.directionalShadowMap.length>0&&et.setValue(C,"directionalShadowMap",Ct.state.directionalShadowMap,m),Ct.state.spotShadowMap.length>0&&et.setValue(C,"spotShadowMap",Ct.state.spotShadowMap,m),Ct.state.pointShadowMap.length>0&&et.setValue(C,"pointShadowMap",Ct.state.pointShadowMap,m)),O.isSkinnedMesh){et.setOptional(C,O,"bindMatrix"),et.setOptional(C,O,"bindMatrixInverse");const nt=O.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),et.setValue(C,"boneTexture",nt.boneTexture,m))}O.isBatchedMesh&&(et.setOptional(C,O,"batchingTexture"),et.setValue(C,"batchingTexture",O._matricesTexture,m),et.setOptional(C,O,"batchingIdTexture"),et.setValue(C,"batchingIdTexture",O._indirectTexture,m),et.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&et.setValue(C,"batchingColorTexture",O._colorsTexture,m));const Sn=G.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&we.update(O,G,Ut),(vn||ge.receiveShadow!==O.receiveShadow)&&(ge.receiveShadow=O.receiveShadow,et.setValue(C,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(ut.envMapIntensity.value=L.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=Ip()),vn){if(et.setValue(C,"toneMappingExposure",I.toneMappingExposure),ge.needsLights&&ol(ut,Xn),fe&&F.fog===!0&&k.refreshFogUniforms(ut,fe),k.refreshMaterialUniforms(ut,F,Ue,Ye,b.state.transmissionRenderTarget[_.id]),ge.needsLights&&ge.lightProbeGrid){const nt=ge.lightProbeGrid;ut.probesSH.value=nt.texture,ut.probesMin.value.copy(nt.boundingBox.min),ut.probesMax.value.copy(nt.boundingBox.max),ut.probesResolution.value.copy(nt.resolution)}cr.upload(C,xa(ge),ut,m)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(cr.upload(C,xa(ge),ut,m),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&et.setValue(C,"center",O.center),et.setValue(C,"modelViewMatrix",O.modelViewMatrix),et.setValue(C,"normalMatrix",O.normalMatrix),et.setValue(C,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){const nt=F.uniformsGroups;for(let Mn=0,qn=nt.length;Mn<qn;Mn++){const Sa=nt[Mn];X.update(Sa,Ut),X.bind(Sa,Ut)}}return Ut}function ol(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function ll(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,L,G){const F=S.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),S.get(_.texture).__webglTexture=L,S.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){const G=S.get(_);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0};const cl=C.createFramebuffer();this.setRenderTarget=function(_,L=0,G=0){U=_,W=L,q=G;let F=null,O=!1,fe=!1;if(_){const de=S.get(_);if(de.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(C.FRAMEBUFFER,de.__webglFramebuffer),Q.copy(_.viewport),ee.copy(_.scissor),ue=_.scissorTest,le.viewport(Q),le.scissor(ee),le.setScissorTest(ue),V=-1;return}else if(de.__webglFramebuffer===void 0)m.setupRenderTarget(_);else if(de.__hasExternalTextures)m.rebindTextures(_,S.get(_.texture).__webglTexture,S.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Le=_.depthTexture;if(de.__boundDepthTexture!==Le){if(Le!==null&&S.has(Le)&&(_.width!==Le.image.width||_.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(_)}}const Se=_.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(fe=!0);const Ee=S.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ee[L])?F=Ee[L][G]:F=Ee[L],O=!0):_.samples>0&&m.useMultisampledRTT(_)===!1?F=S.get(_).__webglMultisampledFramebuffer:Array.isArray(Ee)?F=Ee[G]:F=Ee,Q.copy(_.viewport),ee.copy(_.scissor),ue=_.scissorTest}else Q.copy(re).multiplyScalar(Ue).floor(),ee.copy(ye).multiplyScalar(Ue).floor(),ue=Ce;if(G!==0&&(F=cl),le.bindFramebuffer(C.FRAMEBUFFER,F)&&le.drawBuffers(_,F),le.viewport(Q),le.scissor(ee),le.setScissorTest(ue),O){const de=S.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,G)}else if(fe){const de=L;for(let Se=0;Se<_.textures.length;Se++){const Ee=S.get(_.textures[Se]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,G,de)}}else if(_!==null&&G!==0){const de=S.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,G)}V=-1},this.readRenderTargetPixels=function(_,L,G,F,O,fe,xe,de=0){if(!(_&&_.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){le.bindFramebuffer(C.FRAMEBUFFER,Se);try{const Ee=_.textures[de],Le=Ee.format,Fe=Ee.type;if(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),!tt.textureFormatReadable(Le)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Fe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-F&&G>=0&&G<=_.height-O&&C.readPixels(L,G,F,O,R.convert(Le),R.convert(Fe),fe)}finally{const Ee=U!==null?S.get(U).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(_,L,G,F,O,fe,xe,de=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(L>=0&&L<=_.width-F&&G>=0&&G<=_.height-O){le.bindFramebuffer(C.FRAMEBUFFER,Se);const Ee=_.textures[de],Le=Ee.format,Fe=Ee.type;if(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),!tt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Te),C.bufferData(C.PIXEL_PACK_BUFFER,fe.byteLength,C.STREAM_READ),C.readPixels(L,G,F,O,R.convert(Le),R.convert(Fe),0);const Ze=U!==null?S.get(U).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,Ze);const ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await $l(C,ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Te),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,fe),C.deleteBuffer(Te),C.deleteSync(ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,G=0){const F=Math.pow(2,-G),O=Math.floor(_.image.width*F),fe=Math.floor(_.image.height*F),xe=L!==null?L.x:0,de=L!==null?L.y:0;m.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,xe,de,O,fe),le.unbindTexture()};const ul=C.createFramebuffer(),dl=C.createFramebuffer();this.copyTextureToTexture=function(_,L,G=null,F=null,O=0,fe=0){let xe,de,Se,Ee,Le,Fe,Te,Ze,ct;const ot=_.isCompressedTexture?_.mipmaps[fe]:_.image;if(G!==null)xe=G.max.x-G.min.x,de=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Le=G.min.y,Fe=G.isBox3?G.min.z:0;else{const ut=Math.pow(2,-O);xe=Math.floor(ot.width*ut),de=Math.floor(ot.height*ut),_.isDataArrayTexture?Se=ot.depth:_.isData3DTexture?Se=Math.floor(ot.depth*ut):Se=1,Ee=0,Le=0,Fe=0}F!==null?(Te=F.x,Ze=F.y,ct=F.z):(Te=0,Ze=0,ct=0);const Qe=R.convert(L.format),Mt=R.convert(L.type);let ge;L.isData3DTexture?(m.setTexture3D(L,0),ge=C.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(m.setTexture2DArray(L,0),ge=C.TEXTURE_2D_ARRAY):(m.setTexture2D(L,0),ge=C.TEXTURE_2D),le.activeTexture(C.TEXTURE0),le.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),le.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),le.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const Ct=le.getParameter(C.UNPACK_ROW_LENGTH),ke=le.getParameter(C.UNPACK_IMAGE_HEIGHT),Ut=le.getParameter(C.UNPACK_SKIP_PIXELS),Xt=le.getParameter(C.UNPACK_SKIP_ROWS),vn=le.getParameter(C.UNPACK_SKIP_IMAGES);le.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),le.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),le.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),le.pixelStorei(C.UNPACK_SKIP_ROWS,Le),le.pixelStorei(C.UNPACK_SKIP_IMAGES,Fe);const Xn=_.isDataArrayTexture||_.isData3DTexture,et=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){const ut=S.get(_),Sn=S.get(L),nt=S.get(ut.__renderTarget),Mn=S.get(Sn.__renderTarget);le.bindFramebuffer(C.READ_FRAMEBUFFER,nt.__webglFramebuffer),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let qn=0;qn<Se;qn++)Xn&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,S.get(_).__webglTexture,O,Fe+qn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,S.get(L).__webglTexture,fe,ct+qn)),C.blitFramebuffer(Ee,Le,xe,de,Te,Ze,xe,de,C.DEPTH_BUFFER_BIT,C.NEAREST);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||S.has(_)){const ut=S.get(_),Sn=S.get(L);le.bindFramebuffer(C.READ_FRAMEBUFFER,ul),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,dl);for(let nt=0;nt<Se;nt++)Xn?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ut.__webglTexture,O,Fe+nt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ut.__webglTexture,O),et?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Sn.__webglTexture,fe,ct+nt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Sn.__webglTexture,fe),O!==0?C.blitFramebuffer(Ee,Le,xe,de,Te,Ze,xe,de,C.COLOR_BUFFER_BIT,C.NEAREST):et?C.copyTexSubImage3D(ge,fe,Te,Ze,ct+nt,Ee,Le,xe,de):C.copyTexSubImage2D(ge,fe,Te,Ze,Ee,Le,xe,de);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else et?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(ge,fe,Te,Ze,ct,xe,de,Se,Qe,Mt,ot.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(ge,fe,Te,Ze,ct,xe,de,Se,Qe,ot.data):C.texSubImage3D(ge,fe,Te,Ze,ct,xe,de,Se,Qe,Mt,ot):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,fe,Te,Ze,xe,de,Qe,Mt,ot.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,fe,Te,Ze,ot.width,ot.height,Qe,ot.data):C.texSubImage2D(C.TEXTURE_2D,fe,Te,Ze,xe,de,Qe,Mt,ot);le.pixelStorei(C.UNPACK_ROW_LENGTH,Ct),le.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ke),le.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),le.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),le.pixelStorei(C.UNPACK_SKIP_IMAGES,vn),fe===0&&L.generateMipmaps&&C.generateMipmap(ge),le.unbindTexture()},this.initRenderTarget=function(_){S.get(_).__webglFramebuffer===void 0&&m.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?m.setTextureCube(_,0):_.isData3DTexture?m.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?m.setTexture2DArray(_,0):m.setTexture2D(_,0),le.unbindTexture()},this.resetState=function(){W=0,q=0,U=null,le.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const Fp="/assets/image-z8DN15Is.jpg",Op="/assets/image1-Dp1Zha5I.jpg",Bp="/assets/image2-HDGwwdem.jpg",zp="/assets/image3-BdYbnZ90.jpg",jt=[Fp,Op,Bp,zp],Gp=5e3,Vp=1400,Hp=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kp=`
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
`;function Wp(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Xp(){const i=Kt.useRef(null),[e,t]=Kt.useState(0),[n,r]=Kt.useState(!1),s=Kt.useRef(null),a=Kt.useRef(o=>{const c=s.current;!c||!c.material||c.transitioning||o===c.currentIndex||(c.nextIndex=o,c.transitioning=!0,c.transitionStart=performance.now(),c.material.uniforms.uTex1.value=c.textures[c.currentIndex],c.material.uniforms.uTex2.value=c.textures[c.nextIndex],c.material.uniforms.uImageAspect1.value=c.aspects[c.currentIndex],c.material.uniforms.uImageAspect2.value=c.aspects[c.nextIndex],c.material.uniforms.uProgress.value=0)}).current;return Kt.useEffect(()=>{const o=i.current;if(!o)return;let c=!1;const l={renderer:null,scene:null,camera:null,material:null,textures:new Array(jt.length).fill(null),aspects:new Array(jt.length).fill(1),currentIndex:0,nextIndex:1,transitioning:!1,transitionStart:null,clock:new Bc,rafId:null,timerId:null};s.current=l;const h=(E,p)=>{l.scene=new hc,l.camera=new oa(-1,1,1,-1,.1,10),l.camera.position.z=1,l.renderer=new Np({antialias:!0,powerPreference:"high-performance"}),l.renderer.setSize(E,p),l.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=l.renderer.domElement;f.style.display="block",f.style.width="100%",f.style.height="100%",o.appendChild(f)},d=E=>{if(c)return;const p=new Li(2,2);l.material=new kt({vertexShader:Hp,fragmentShader:kp,uniforms:{uTex1:{value:l.textures[0]},uTex2:{value:l.textures[1]},uProgress:{value:0},uTime:{value:0},uContainerAspect:{value:E},uImageAspect1:{value:l.aspects[0]},uImageAspect2:{value:l.aspects[1]}}}),l.scene.add(new rn(p,l.material)),r(!0),l.timerId=setInterval(()=>a((l.currentIndex+1)%jt.length),Gp);const f=()=>{if(!c){if(l.rafId=requestAnimationFrame(f),l.material.uniforms.uTime.value=l.clock.getElapsedTime(),l.transitioning){const M=Math.min((performance.now()-l.transitionStart)/Vp,1);l.material.uniforms.uProgress.value=Wp(M),M>=1&&(l.transitioning=!1,l.currentIndex=l.nextIndex,t(l.currentIndex),l.material.uniforms.uTex1.value=l.textures[l.currentIndex],l.material.uniforms.uProgress.value=0)}l.renderer.render(l.scene,l.camera)}};f()};let u=!1;const g=()=>{if(u||c)return;const E=o.clientWidth,p=o.clientHeight;if(E===0||p===0)return;u=!0,h(E,p);const f=new Nc;let M=0;jt.forEach((y,T)=>{f.load(y,P=>{if(c){P.dispose();return}P.minFilter=St,P.generateMipmaps=!1,l.textures[T]=P,l.aspects[T]=P.image.naturalWidth/P.image.naturalHeight||4/3,M++,M===jt.length&&d(E/p)},void 0,()=>{M++,M===jt.length&&!c&&d(E/p)})})},v=new ResizeObserver(()=>{if(g(),u&&l.renderer&&!c){const E=o.clientWidth,p=o.clientHeight;E>0&&p>0&&(l.renderer.setSize(E,p),l.material&&(l.material.uniforms.uContainerAspect.value=E/p))}});return v.observe(o),g(),()=>{c=!0,v.disconnect(),cancelAnimationFrame(l.rafId),clearInterval(l.timerId),l.textures.forEach(E=>E?.dispose()),l.material?.dispose(),l.renderer&&(o.contains(l.renderer.domElement)&&o.removeChild(l.renderer.domElement),l.renderer.dispose()),s.current=null}},[]),j.jsxs("div",{className:"relative h-full w-full",children:[!n&&j.jsx("div",{className:"absolute inset-0 animate-pulse bg-green-50"}),j.jsx("div",{ref:i,className:"h-full w-full"}),j.jsx("div",{className:"absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2",children:jt.map((o,c)=>j.jsx("button",{onClick:()=>a(c),"aria-label":`Slide ${c+1}`,className:`h-2 rounded-full transition-all duration-300 ${c===e?"w-7 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]":"w-2 bg-white/40 hover:bg-white/70"}`},c))}),j.jsx("button",{onClick:()=>a((s.current?.currentIndex-1+jt.length)%jt.length),"aria-label":"Previous slide",className:"absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 hover:scale-105 active:scale-95",children:j.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:j.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}),j.jsx("button",{onClick:()=>a((s.current?.currentIndex+1)%jt.length),"aria-label":"Next slide",className:"absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 hover:scale-105 active:scale-95",children:j.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:j.jsx("path",{d:"M9 18l6-6-6-6",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}const qp=[{title:"Mosque Directory",description:"Browse verified mosque details, images, and location information in one place.",icon:j.jsxs("svg",{viewBox:"0 0 24 24",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[j.jsx("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z",strokeLinecap:"round",strokeLinejoin:"round"}),j.jsx("path",{d:"M9 21V12h6v9",strokeLinecap:"round",strokeLinejoin:"round"})]})},{title:"Smart Search",description:"Find mosques quickly by name, imam, address, or barangay with auto-suggestions.",icon:j.jsxs("svg",{viewBox:"0 0 24 24",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[j.jsx("circle",{cx:"11",cy:"11",r:"8"}),j.jsx("path",{d:"M21 21l-4.35-4.35",strokeLinecap:"round"})]})},{title:"Interactive Map",description:"View mosque locations with accurate coordinates on an easy-to-use map.",icon:j.jsxs("svg",{viewBox:"0 0 24 24",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[j.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),j.jsx("circle",{cx:"12",cy:"9",r:"2.5"})]})},{title:"Directions",description:"Open Google Maps instantly and navigate to the selected mosque.",icon:j.jsx("svg",{viewBox:"0 0 24 24",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:j.jsx("path",{d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7",strokeLinecap:"round",strokeLinejoin:"round"})})}],Yp=6,jp=6;function em(){const i=fl(),[e,t]=Kt.useState({search:"",barangay:""}),{mosques:n,loading:r,error:s}=pl(),a=Kt.useMemo(()=>[...new Set(n.map(d=>d.barangay).filter(Boolean))].sort(),[n]),o=Kt.useMemo(()=>[...n.map(d=>d.mosque_name),...n.map(d=>d.imam_name).filter(Boolean),...n.map(d=>d.barangay).filter(Boolean)].filter((d,u,g)=>g.indexOf(d)===u),[n]),c=Kt.useMemo(()=>e.search.trim()?o.filter(d=>d.toLowerCase().includes(e.search.toLowerCase())).slice(0,6):[],[e.search,o]),l=n.slice(0,Yp),h=()=>{const d=new URLSearchParams;e.search&&d.set("search",e.search),e.barangay&&d.set("barangay",e.barangay),i(`/mosques${d.toString()?`?${d.toString()}`:""}`)};return j.jsxs("div",{className:"min-h-screen bg-white text-slate-900",children:[j.jsx("section",{className:"border-b border-slate-100 bg-white",children:j.jsxs("div",{className:"section-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20",children:[j.jsxs("div",{children:[j.jsxs("span",{className:"label-chip",children:[j.jsx(Er,{className:"mr-1.5 h-3 w-3",strokeWidth:2.5}),"Kalamansig, Sultan Kudarat"]}),j.jsxs("h1",{className:"mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl",children:["Discover mosques in"," ",j.jsx("span",{className:"text-green-800",children:"Kalamansig"})," — your complete digital directory."]}),j.jsx("p",{className:"mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg",children:"Explore mosque information, search by barangay, and open locations on the map with a faster and more user-friendly experience."}),j.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[j.jsxs(gi,{to:"/mosques",className:"btn-primary",children:[j.jsx(Er,{className:"h-4 w-4",strokeWidth:2}),"Explore Directory",j.jsx(hl,{className:"h-4 w-4",strokeWidth:2.5})]}),j.jsxs(gi,{to:"/map",className:"btn-secondary",children:[j.jsx(Ma,{className:"h-4 w-4",strokeWidth:2}),"View Map"]})]})]}),j.jsxs("div",{className:"relative overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]",children:[j.jsx("div",{className:"h-[380px] overflow-hidden sm:h-[440px] lg:h-[520px]",children:j.jsx(Xp,{})}),j.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent"}),j.jsx("div",{className:"absolute left-5 top-5 z-20",children:j.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md",children:[j.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]"}),j.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-white",children:"Live Directory"})]})}),j.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-20 px-6 pb-[3.75rem] pt-4",children:[j.jsx("h3",{className:"text-lg font-bold text-white drop-shadow-sm",children:"Kalamansig Mosque Directory"}),j.jsx("p",{className:"mt-1 text-sm text-white/70",children:"Explore mosques across all barangays"}),!r&&j.jsxs("div",{className:"mt-4 flex gap-2.5",children:[j.jsxs("div",{className:"flex-1 rounded-xl border border-white/20 bg-white/15 px-3 py-2.5 text-center backdrop-blur-md",children:[j.jsx("p",{className:"text-xl font-black text-white",children:n.length}),j.jsx("p",{className:"text-[11px] font-medium text-white/65",children:"Mosques"})]}),j.jsxs("div",{className:"flex-1 rounded-xl border border-white/20 bg-white/15 px-3 py-2.5 text-center backdrop-blur-md",children:[j.jsx("p",{className:"text-xl font-black text-white",children:a.length}),j.jsx("p",{className:"text-[11px] font-medium text-white/65",children:"Barangays"})]}),j.jsxs("div",{className:"flex-1 rounded-xl border border-white/20 bg-white/15 px-3 py-2.5 text-center backdrop-blur-md",children:[j.jsx("p",{className:"text-xl font-black text-white",children:"Free"}),j.jsx("p",{className:"text-[11px] font-medium text-white/65",children:"Access"})]})]})]})]})]})}),j.jsx("section",{className:"section-shell py-14",children:j.jsxs("div",{className:"rounded-3xl border border-slate-100 bg-white p-6 shadow-md sm:p-8",children:[j.jsx("div",{className:"flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",children:j.jsxs("div",{children:[j.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.18em] text-green-800",children:"Quick Search"}),j.jsx("h2",{className:"mt-2 text-2xl font-bold text-slate-900",children:"Find a mosque near you"}),j.jsx("p",{className:"mt-2 text-sm leading-7 text-slate-600",children:"Search by mosque name, imam, or address, then narrow results by barangay."})]})}),j.jsxs("div",{className:"relative mt-6 grid gap-4 lg:grid-cols-[1fr_240px_160px]",children:[j.jsxs("div",{className:"relative",children:[j.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-3.5 flex items-center",children:j.jsx(br,{className:"h-4 w-4 text-slate-400",strokeWidth:2.5})}),j.jsx("input",{type:"text",value:e.search,onChange:d=>t(u=>({...u,search:d.target.value})),onKeyDown:d=>d.key==="Enter"&&h(),placeholder:"Search mosque name, imam, or address",autoComplete:"off",className:"field-input h-13 rounded-xl pl-10 text-base"}),c.length>0&&j.jsx("div",{className:"absolute top-full left-0 right-0 z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl",children:c.map(d=>{const u=d.toLowerCase().indexOf(e.search.toLowerCase()),g=d.slice(0,u),v=d.slice(u,u+e.search.length),E=d.slice(u+e.search.length);return j.jsxs("button",{type:"button",className:"flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-green-50",onClick:()=>{t(p=>({...p,search:d}))},children:[j.jsx(br,{className:"h-4 w-4 shrink-0 text-green-700",strokeWidth:2}),j.jsxs("span",{className:"text-sm text-slate-700",children:[g,j.jsx("span",{className:"font-bold text-green-800",children:v}),E]})]},d)})})]}),j.jsxs("select",{value:e.barangay,onChange:d=>t(u=>({...u,barangay:d.target.value})),className:"field-input h-13 rounded-xl text-base",children:[j.jsx("option",{value:"",children:"All Barangays"}),a.map(d=>j.jsx("option",{value:d,children:d},d))]}),j.jsxs("button",{onClick:h,className:"btn-primary h-13 justify-center text-base",children:[j.jsx(br,{className:"h-4 w-4",strokeWidth:2.5}),"Search"]})]})]})}),j.jsxs("section",{className:"section-shell pb-14",children:[j.jsx("div",{className:"flex items-end justify-between gap-4",children:j.jsxs("div",{children:[j.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.18em] text-green-800",children:"Features"}),j.jsx("h2",{className:"mt-2 text-2xl font-bold text-slate-900 sm:text-3xl",children:"Designed to be simple, useful, and clear"})]})}),j.jsx("div",{className:"mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4",children:qp.map(d=>j.jsxs("div",{className:"rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-100 hover:shadow-md",children:[j.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-800",children:d.icon}),j.jsx("h3",{className:"mt-4 text-lg font-bold text-slate-900",children:d.title}),j.jsx("p",{className:"mt-2 text-sm leading-7 text-slate-600",children:d.description})]},d.title))})]}),j.jsxs("section",{className:"section-shell pb-16",children:[j.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[j.jsxs("div",{children:[j.jsx("p",{className:"text-sm font-bold uppercase tracking-[0.18em] text-green-800",children:"Featured Mosques"}),j.jsx("h2",{className:"mt-2 text-2xl font-bold text-slate-900 sm:text-3xl",children:"Start exploring the directory"}),j.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base",children:"A quick preview of mosques currently available in the system."})]}),j.jsxs(gi,{to:"/mosques",className:"btn-secondary",children:[j.jsx(Er,{className:"h-4 w-4",strokeWidth:2}),"View All"]})]}),s?j.jsx("div",{className:"mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-700",children:s}):j.jsx("div",{className:"mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3",children:r?Array.from({length:jp}).map((d,u)=>j.jsx(ml,{},u)):l.map(d=>{const u=`https://www.google.com/maps/dir/?api=1&destination=${d.latitude},${d.longitude}`;return j.jsxs("article",{className:"overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md",children:[j.jsx("div",{className:"aspect-16/10 overflow-hidden bg-slate-100",children:j.jsx("img",{src:d.image_url||"/placeholder-mosque.svg",alt:d.mosque_name,loading:"lazy",decoding:"async",className:"h-full w-full object-cover"})}),j.jsxs("div",{className:"p-5",children:[j.jsxs("div",{className:"flex items-center justify-between gap-3",children:[j.jsx("span",{className:"rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800",children:d.barangay||"Kalamansig"}),j.jsxs("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-sm font-semibold text-green-800 transition hover:text-green-900",title:"Get Directions",children:[j.jsx(gl,{className:"h-3.5 w-3.5",strokeWidth:2.5}),"Directions"]})]}),j.jsx("h3",{className:"mt-4 text-lg font-bold text-slate-900",children:d.mosque_name}),j.jsx("p",{className:"mt-1 line-clamp-1 text-sm text-slate-500",children:d.address}),j.jsxs("p",{className:"mt-1 text-sm text-slate-500",children:["Imam: ",d.imam_name||"Not available"]}),j.jsxs("div",{className:"mt-5 flex gap-3",children:[j.jsx(gi,{to:`/mosques/${d.id}`,className:"btn-primary flex-1 justify-center py-2.5 text-sm",children:"View Details"}),j.jsx(gi,{to:`/map?focus=${d.id}`,className:"btn-secondary px-4 py-2.5 text-sm",children:j.jsx(Ma,{className:"h-4 w-4",strokeWidth:2})})]})]})]},d.id)})})]})]})}export{em as default};
