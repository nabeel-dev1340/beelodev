'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/app/hooks/useMousePosition';

export default function CustomCursor() {
    const { x, y } = useMousePosition();
    const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'button' | 'card'>('default');

    const cursorX = useSpring(x, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(y, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const updateCursorVariant = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (target.closest('a')) {
                setCursorVariant('link');
            } else if (target.closest('button')) {
                setCursorVariant('button');
            } else if (target.closest('[data-magnetic]')) {
                setCursorVariant('card');
            } else {
                setCursorVariant('default');
            }
        };

        document.addEventListener('mouseover', updateCursorVariant);

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
        ? 'rgba(20, 184, 166, 0.6)'
        : cursorVariant === 'button'
            ? 'rgba(6, 182, 212, 0.6)'
            : 'rgba(14, 165, 233, 0.4)';

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
                    background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: cursorVariant === 'default' ? 0.4 : 0.7,
                }}
            />
        </>
    );
}
