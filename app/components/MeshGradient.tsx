'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MeshGradient() {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'blur(60px)' }}
            >
                <defs>
                    <radialGradient id="mesh-gradient-1" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="mesh-gradient-2" cx="70%" cy="40%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="mesh-gradient-3" cx="50%" cy="70%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Animated mesh blobs */}
                <motion.circle
                    cx={`${30 + mousePos.x * 10}%`}
                    cy={`${30 + mousePos.y * 10}%`}
                    r="30%"
                    fill="url(#mesh-gradient-1)"
                    animate={{
                        cx: [`${30 + mousePos.x * 10}%`, `${35 + mousePos.x * 10}%`, `${30 + mousePos.x * 10}%`],
                        cy: [`${30 + mousePos.y * 10}%`, `${25 + mousePos.y * 10}%`, `${30 + mousePos.y * 10}%`],
                        r: ['30%', '35%', '30%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <motion.circle
                    cx={`${70 - mousePos.x * 10}%`}
                    cy={`${40 - mousePos.y * 10}%`}
                    r="35%"
                    fill="url(#mesh-gradient-2)"
                    animate={{
                        cx: [`${70 - mousePos.x * 10}%`, `${65 - mousePos.x * 10}%`, `${70 - mousePos.x * 10}%`],
                        cy: [`${40 - mousePos.y * 10}%`, `${45 - mousePos.y * 10}%`, `${40 - mousePos.y * 10}%`],
                        r: ['35%', '40%', '35%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />

                <motion.circle
                    cx={`${50 + mousePos.x * 5}%`}
                    cy={`${70 + mousePos.y * 5}%`}
                    r="25%"
                    fill="url(#mesh-gradient-3)"
                    animate={{
                        cx: [`${50 + mousePos.x * 5}%`, `${55 + mousePos.x * 5}%`, `${50 + mousePos.x * 5}%`],
                        cy: [`${70 + mousePos.y * 5}%`, `${75 + mousePos.y * 5}%`, `${70 + mousePos.y * 5}%`],
                        r: ['25%', '30%', '25%'],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
            </svg>
        </div>
    );
}
