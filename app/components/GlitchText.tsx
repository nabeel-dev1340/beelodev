'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GlitchTextProps {
    children: string;
    className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    return (
        <motion.span
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsGlitching(true)}
            onMouseLeave={() => setIsGlitching(false)}
            onFocus={() => setIsGlitching(true)}
            onBlur={() => setIsGlitching(false)}
            tabIndex={0}
            role="text"
        >
            {/* Main text */}
            <span className="relative z-10">{children}</span>

            {/* Glitch layers */}
            {isGlitching && (
                <span aria-hidden="true">
                    <motion.span
                        className="absolute inset-0 z-0"
                        style={{ color: 'rgb(var(--brand-blue))', left: '-2px' }}
                        animate={{
                            left: ['-2px', '2px', '-2px'],
                            opacity: [0.8, 0.4, 0.8],
                        }}
                        transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        }}
                    >
                        {children}
                    </motion.span>

                    <motion.span
                        className="absolute inset-0 z-0"
                        style={{ color: 'rgb(var(--brand-cyan))', left: '2px' }}
                        animate={{
                            left: ['2px', '-2px', '2px'],
                            opacity: [0.8, 0.4, 0.8],
                        }}
                        transition={{
                            duration: 0.15,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        }}
                    >
                        {children}
                    </motion.span>

                    {/* Scanline effect */}
                    <motion.div
                        className="absolute inset-0 z-20 pointer-events-none"
                        style={{
                            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(var(--brand-blue) / 0.1) 2px, rgb(var(--brand-blue) / 0.1) 4px)',
                        }}
                        animate={{
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                        }}
                    />
                </span>
            )}
        </motion.span>
    );
}
