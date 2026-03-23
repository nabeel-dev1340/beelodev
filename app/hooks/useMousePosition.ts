'use client';

import { useState, useEffect, useRef } from 'react';

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const rafId = useRef<number>(0);
    const latest = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            latest.current = { x: e.clientX, y: e.clientY };
            if (!rafId.current) {
                rafId.current = requestAnimationFrame(() => {
                    setMousePosition(latest.current);
                    rafId.current = 0;
                });
            }
        };

        window.addEventListener('mousemove', updateMousePosition, { passive: true });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return mousePosition;
}
