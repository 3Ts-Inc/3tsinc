"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/perspectives", label: "Perspectives" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const linkContainerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const overlayDark = transparentOnTop && !hasScrolled && !isOpen;

  useEffect(() => {
    if (!transparentOnTop) return;

    const updateScrolled = () => setHasScrolled(window.scrollY > 12);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, [transparentOnTop]);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;

      setIsOpen(false);
      document.body.style.removeProperty("overflow-y");
      document.documentElement.style.removeProperty("overflow-y");
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // Prevent vertical page scrolling when the mobile menu is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`w-full top-0 z-[60] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
          transparentOnTop ? "fixed" : "sticky"
        } ${
          overlayDark
            ? "border-b border-cream/10 bg-transparent text-cream"
            : "border-b border-charcoal/5 bg-cream text-charcoal shadow-[0_10px_35px_-32px_rgba(0,0,0,0.45)]"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full items-center justify-between px-5 py-4 sm:px-6 md:px-10 xl:px-12 xl:py-6"
        >
          <div className="flex items-center space-x-4">
            <Link href="/" className="z-[70] flex items-center space-x-3">
              <Image
                src={overlayDark ? "/3ts-logo-full-light.png" : "/3ts-logo-full-dark.png"}
                alt="3Ts Consulting logo"
                width={378}
                height={225}
                className="h-[4.5rem] w-auto shrink-0 transition-opacity duration-500 sm:hidden"
                priority
              />
              <Image
                src="/3ts-logo-cups.png"
                alt="3Ts Consulting cups"
                width={126}
                height={50}
                className={`hidden h-10 w-auto shrink-0 transition-[filter,opacity] duration-500 sm:block xl:h-11 ${
                  overlayDark ? "brightness-[1.08] drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]" : "drop-shadow-sm"
                }`}
                priority
              />
              <div className="hidden flex-col sm:flex">
                <span className={`whitespace-nowrap font-serif text-xl tracking-tight transition-colors duration-500 md:text-2xl ${overlayDark ? "text-cream" : "text-charcoal"}`}>
                  Shareef 3Ts Consulting
                </span>
                <span className="mt-1 whitespace-nowrap font-sans text-[10px] uppercase tracking-widest text-gold md:text-xs">
                  Thoroughly Thought Through.
                </span>
              </div>
            </Link>
            <div className={`hidden h-10 w-px transition-colors duration-500 xl:block ${overlayDark ? "bg-cream/22" : "bg-charcoal/20"}`}></div>
          </div>

          {/* Desktop Links */}
          <nav
            className="hidden items-center space-x-7 text-sm font-medium uppercase tracking-widest xl:flex 2xl:space-x-8"
          >
            {links.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-150 ease-out hover:text-gold ${
                  overlayDark ? "text-cream/82" : "text-charcoal/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden items-center space-x-6 xl:flex">
            <div className={`h-10 w-px transition-colors duration-500 ${overlayDark ? "bg-cream/22" : "bg-charcoal/20"}`}></div>
            <Link
              href="/contact"
              className={`text-sm font-medium uppercase tracking-widest transition-colors duration-150 ease-out hover:text-gold ${
                overlayDark ? "text-cream/82" : "text-charcoal/80"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`group z-[70] -mr-2 flex h-11 w-11 items-center justify-center p-2 transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/60 xl:hidden ${
              overlayDark ? "text-cream" : "text-charcoal"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                d="M4 12H20"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </button>
        </motion.div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex h-[100dvh] flex-col justify-center overflow-hidden bg-cream px-8 touch-none overscroll-none xl:hidden"
          >
            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-start space-y-8"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-charcoal hover:text-gold transition-colors inline-block relative group"
                  >
                    {link.label}
                    <div className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              variants={linkVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute bottom-12 left-8 border-t border-charcoal/10 pt-8 w-[calc(100%-4rem)]"
            >
              <a
                href="mailto:shareef@3ts-inc.com"
                className="text-gold text-sm tracking-[0.2em] uppercase font-medium"
              >
                shareef@3ts-inc.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
