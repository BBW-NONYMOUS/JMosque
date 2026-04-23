import { useEffect, useRef, useState } from 'react';
import { Clock, Search, X } from 'lucide-react';

const MAX_RECENT = 5;

function loadRecent() {
  try {
    return JSON.parse(localStorage.getItem('mosqueRecentSearches') || '[]');
  } catch {
    return [];
  }
}

function saveRecent(term, current) {
  const updated = [term, ...current.filter((s) => s !== term)].slice(0, MAX_RECENT);
  localStorage.setItem('mosqueRecentSearches', JSON.stringify(updated));
  return updated;
}

export default function SearchBar({
  filters,
  onChange,
  onSubmit,
  barangays = [],
  suggestions = [],
  buttonLabel = 'Search',
  className = '',
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState(loadRecent);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  /* Filter live suggestions from the suggestions prop */
  const liveSuggestions =
    filters.search.trim().length > 0
      ? suggestions
          .filter((s) => s.toLowerCase().includes(filters.search.toLowerCase()))
          .slice(0, 6)
      : [];

  const shouldShowDropdown =
    showDropdown &&
    (liveSuggestions.length > 0 || (recentSearches.length > 0 && !filters.search.trim()));

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    onChange((current) => ({ ...current, [name]: value }));
  };

  const selectSuggestion = (value) => {
    onChange((current) => ({ ...current, search: value }));
    setRecentSearches((prev) => saveRecent(value, prev));
    setShowDropdown(false);
    inputRef.current?.blur();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filters.search.trim()) {
      setRecentSearches((prev) => saveRecent(filters.search.trim(), prev));
    }
    setShowDropdown(false);
    onSubmit(e);
  };

  const clearRecent = (term) => {
    setRecentSearches((prev) => {
      const updated = prev.filter((s) => s !== term);
      localStorage.setItem('mosqueRecentSearches', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`card-surface p-4 sm:p-5 ${className}`}>
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_auto]">

        {/* ── Search input with suggestions ── */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
            <Search className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
          </div>

          <input
            ref={inputRef}
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFieldChange}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search mosque name, address, or imam"
            autoComplete="off"
            className="field-input pl-10 pr-9"
          />

          {filters.search && (
            <button
              type="button"
              onClick={() => {
                onChange((c) => ({ ...c, search: '' }));
                inputRef.current?.focus();
              }}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>
          )}

          {/* ── Dropdown ── */}
          {shouldShowDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
            >
              {/* Recent searches (shown when input is empty) */}
              {!filters.search.trim() && recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                      Recent Searches
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setRecentSearches([]);
                        localStorage.removeItem('mosqueRecentSearches');
                      }}
                      className="text-[0.65rem] font-semibold text-slate-400 hover:text-rose-500"
                    >
                      Clear all
                    </button>
                  </div>
                  {recentSearches.map((term) => (
                    <div key={term} className="group flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50">
                      <Clock className="h-4 w-4 shrink-0 text-slate-300" strokeWidth={2} />
                      <button
                        type="button"
                        className="flex-1 text-left text-sm text-slate-700 hover:text-green-800"
                        onClick={() => selectSuggestion(term)}
                      >
                        {term}
                      </button>
                      <button
                        type="button"
                        onClick={() => clearRecent(term)}
                        className="hidden text-slate-300 hover:text-rose-400 group-hover:flex"
                        aria-label="Remove"
                      >
                        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Live suggestions (shown while typing) */}
              {filters.search.trim() && liveSuggestions.length > 0 && (
                <div>
                  <div className="border-b border-slate-100 px-4 py-2">
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                      Suggestions
                    </span>
                  </div>
                  {liveSuggestions.map((s) => {
                    const idx = s.toLowerCase().indexOf(filters.search.toLowerCase());
                    const before = s.slice(0, idx);
                    const match = s.slice(idx, idx + filters.search.length);
                    const after = s.slice(idx + filters.search.length);
                    return (
                      <button
                        key={s}
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-green-50"
                        onClick={() => selectSuggestion(s)}
                      >
                        <Search className="h-4 w-4 shrink-0 text-green-600" strokeWidth={2} />
                        <span className="text-sm text-slate-700">
                          {before}
                          <span className="font-bold text-green-800">{match}</span>
                          {after}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* No matches message */}
              {filters.search.trim() && liveSuggestions.length === 0 && (
                <div className="px-4 py-3 text-sm text-slate-400">
                  No suggestions for "<span className="font-semibold">{filters.search}</span>"
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Barangay select ── */}
        <select
          name="barangay"
          value={filters.barangay}
          onChange={handleFieldChange}
          className="field-input"
        >
          <option value="">All Barangays</option>
          {barangays.map((barangay) => (
            <option key={barangay} value={barangay}>
              {barangay}
            </option>
          ))}
        </select>

        {/* ── Submit button ── */}
        <button type="submit" className="btn-primary w-full justify-center lg:w-auto">
          <Search className="h-4 w-4" strokeWidth={2.5} />
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
