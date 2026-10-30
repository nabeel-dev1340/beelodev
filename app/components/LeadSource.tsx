'use client';

import { useEffect } from 'react';

const storageKey = 'beelodev-lead-source';

export function readLeadSource(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(storageKey) ?? '{}');
  } catch {
    return {};
  }
}

// Remembers where a session started so an inquiry can report its source.
export default function LeadSource() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey)) return;
      sessionStorage.setItem(
        storageKey,
        JSON.stringify({
          landingPage: location.pathname + location.search,
          referrer: document.referrer,
        }),
      );
    } catch {
      // Storage can be blocked; the inquiry still sends without a source.
    }
  }, []);
  return null;
}
