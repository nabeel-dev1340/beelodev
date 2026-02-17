'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../config/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteConfig.navLinks;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'
          }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Logo mark */}
            <Logo size={32} />
            <span className="font-display font-bold text-lg text-white">
              {siteConfig.personal.brandName}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-lg"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                whileTap={{ scale: 0.97 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <motion.a
              href={siteConfig.personal.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-shadow"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(14,165,233,0.35)' }}
              whileTap={{ scale: 0.96 }}
            >
              <Calendar className="w-4 h-4" />
              {siteConfig.personal.booking.shortLabel}
            </motion.a>

            {/* Mobile toggle */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu — Full overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-3xl font-display font-bold text-white py-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ color: '#0ea5e9' }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="mt-8 px-8 py-4 rounded-xl font-semibold text-base text-white"
              style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
