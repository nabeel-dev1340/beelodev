'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

const subscribe = (callback: () => void) => {
  window.addEventListener('beelodev-theme', callback);
  return () => window.removeEventListener('beelodev-theme', callback);
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? 'light',
    () => 'light',
  );
  const dark = theme === 'dark';
  function toggleTheme() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('beelodev-theme', next);
    } catch {
      /* Theme still works without storage. */
    }
    window.dispatchEvent(new Event('beelodev-theme'));
  }
  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
      title={`Switch to ${dark ? 'light' : 'dark'} mode`}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
