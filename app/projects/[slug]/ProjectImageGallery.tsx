'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ProjectImageGalleryProps = {
    images: string[];
    title: string;
};

export default function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        if (activeIndex === null) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveIndex(null);
            }
            if (event.key === 'ArrowRight') {
                setActiveIndex((prev) => {
                    if (prev === null) {
                        return prev;
                    }
                    return (prev + 1) % images.length;
                });
            }
            if (event.key === 'ArrowLeft') {
                setActiveIndex((prev) => {
                    if (prev === null) {
                        return prev;
                    }
                    return (prev - 1 + images.length) % images.length;
                });
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeIndex, images.length]);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((src, index) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="relative aspect-16/10 rounded-xl overflow-hidden border border-white/10 text-left group"
                    >
                        <Image
                            src={src}
                            alt={`${title} screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                    </button>
                ))}
            </div>

            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
                    onClick={() => setActiveIndex(null)}
                >
                    <button
                        type="button"
                        onClick={() => setActiveIndex(null)}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white"
                        aria-label="Close image viewer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setActiveIndex((prev) => (prev === null ? prev : (prev - 1 + images.length) % images.length));
                                }}
                                className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setActiveIndex((prev) => (prev === null ? prev : (prev + 1) % images.length));
                                }}
                                className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}

                    <div
                        className="relative w-full max-w-6xl h-[75vh] sm:h-[82vh]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`${title} screenshot ${activeIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    );
}
