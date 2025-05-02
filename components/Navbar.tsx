"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detectar scroll para aplicar efectos
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/10 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-10">
                <Image
                  src="/Ewake.svg"
                  alt="Ewake logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Menú de navegación para pantallas medianas y grandes */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-green-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/progetti"
              className="text-white hover:text-green-400 transition-colors"
            >
              Progetti
            </Link>
            <Link
              href="/servizi"
              className="text-white hover:text-green-400 transition-colors"
            >
              Servizi
            </Link>
            <Link
              href="/candidati"
              className="text-white hover:text-green-400 transition-colors"
            >
              Candidati
            </Link>
            <Link
              href="/contatti"
              className="text-white hover:text-green-400 transition-colors"
            >
              Contatti
            </Link>
          </nav>

          {/* Botón de menú para móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-green-400 text-white focus:outline-none"
              aria-label="Menu"
            >
              <span
                className={`block w-5 relative ${
                  isMenuOpen ? "h-0" : "h-0.5 bg-white"
                }`}
              >
                <span
                  className={`block absolute w-5 h-0.5 bg-white transform transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 top-0" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute w-5 h-0.5 bg-white transform transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 top-0" : "translate-y-1.5"
                  }`}
                ></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-black/90 backdrop-blur-md space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/progetti"
            className="block px-3 py-2 text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Progetti
          </Link>
          <Link
            href="/servizi"
            className="block px-3 py-2 text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Servizi
          </Link>
          <Link
            href="/candidati"
            className="block px-3 py-2 text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Candidati
          </Link>
          <Link
            href="/contatti"
            className="block px-3 py-2 text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contatti
          </Link>
        </div>
      </div>
    </header>
  );
};
