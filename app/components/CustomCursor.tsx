'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/app/hooks/useMousePosition';

export default function CustomCursor() {
    const { x, y } = useMousePosition();
    const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'button' | 'card'>('default');
    const lastVariant = useRef(cursorVariant);

    const cursorX = useSpring(x, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(y, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const updateCursorVariant = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            let next: typeof cursorVariant = 'default';

            if (target.closest('a')) {
                next = 'link';
            } else if (target.closest('button')) {
                next = 'button';
            } else if (target.closest('[data-magnetic]')) {
                next = 'card';
            }

            // Only update state when variant actually changes
            if (next !== lastVariant.current) {
                lastVariant.current = next;
                setCursorVariant(next);
            }
        };

        document.addEventListener('mouseover', updateCursorVariant, { passive: true });

        return () => {
            document.removeEventListener('mouseover', updateCursorVariant);
        };
    }, []);

    const sizes: Record<string, number> = {
        default: 32,
        link: 48,
        button: 56,
        card: 72,
    };

    const size = sizes[cursorVariant] || 32;

    const borderColor = cursorVariant === 'card'
        ? 'rgb(var(--brand-teal) / 0.6)'
        : cursorVariant === 'button'
            ? 'rgb(var(--brand-cyan) / 0.6)'
            : 'rgb(var(--brand-blue) / 0.4)';

    return (
        <>
            {/* Decorative ring follower */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    mixBlendMode: 'difference',
                }}
                animate={{
                    width: size,
                    height: size,
                    borderColor,
                    borderWidth: '1.5px',
                    borderStyle: 'solid',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />

            {/* Glow follower */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full blur-xl"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 80,
                    height: 80,
                    background: 'radial-gradient(circle, rgb(var(--brand-blue) / 0.15) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: cursorVariant === 'default' ? 0.4 : 0.7,
                }}
            />
        </>
    );
}
