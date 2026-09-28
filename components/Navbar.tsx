"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [routeChange, setRouteChange] = useState(false);

  // Check if home page
  const isHome = pathname === "/";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Route change effect
  useEffect(() => {
    setRouteChange(true);

    const timer = setTimeout(() => {
      setRouteChange(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Teachers", path: "/teachers" },
    { name: "Blogs", path: "/blogs" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* =========================================
          TOP CONTACT BAR
      ========================================= */}
      <div className="hidden md:flex items-center justify-between bg-blue-950 text-white px-6 md:px-16 py-2 text-sm">
        <div className="flex items-center gap-6">
          <p>📞 0336-2388766</p>
          <p>✉ alanasislamicacedmay@gmail.com</p>
        </div>

        <div className="flex items-center gap-4">
          <p>Facebook: Al Anas Islamic Academy</p>
          <p>Instagram: @alanasislamicacedmay</p>
        </div>
      </div>

      {/* =========================================
          TOP LOADER
      ========================================= */}
      {routeChange && (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse" />
        </div>
      )}

      {/* =========================================
          NAVBAR
      ========================================= */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white shadow-lg py-3 top-0"
            : "bg-transparent py-4 top-0"
        }`}
      >
        {/* NAVBAR INNER */}
        <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-16">
          
          {/* =====================================
              LOGO + ACADEMY NAME
          ===================================== */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            
            {/* LOGO */}
            <img
              src="/anaslogo.png"
              alt="Al Anas Islamic Academy Logo"
              className={`object-contain flex-shrink-0 transition-all duration-300 ${
                scrolled
                  ? "w-12 h-12 sm:w-14 sm:h-14"
                  : "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              }`}
            />

            {/* ACADEMY NAME */}
            <h1
              className={`font-bold transition-all duration-300 truncate ${
                scrolled || !isHome
                  ? "text-blue-600"
                  : "text-white"
              } text-base sm:text-lg md:text-xl`}
            >
              Al Anas Islamic Academy
            </h1>
          </div>

          {/* =====================================
              DESKTOP MENU
          ===================================== */}
          <ul className="hidden md:flex items-center gap-8 font-medium flex-shrink-0">
            
            {navLinks.map((link, i) => (
              <li key={i} className="relative">
                
                <Link
                  href={link.path}
                  className={`transition duration-300 hover:text-blue-600 ${
                    pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : scrolled || !isHome
                      ? "text-gray-700"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>

                {/* ACTIVE INDICATOR */}
                {pathname === link.path && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-600 rounded-full" />
                )}
              </li>
            ))}

            {/* REGISTER BUTTON */}
            <li>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </li>
          </ul>

          {/* =====================================
              MOBILE HAMBURGER BUTTON
          ===================================== */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`md:hidden .flex-shrink-0 {
    flex-shrink: 0;
} w-11 h-11 ml-2 items-center justify-center rounded-lg ${
              scrolled || !isHome
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            {/* HAMBURGER ICON */}
            <div className="flex flex-col .gap-\[5px\] {
    gap: 5px;
} items-center justify-center">
              
              {/* LINE 1 */}
              <span
                className={`block .h-\[3px\] {
    height: 3px;
} w-7 rounded-full bg-current transition-all duration-300 ${
                  open
                    ? "rotate-45 translate-y-[8px]"
                    : ""
                }`}
              />

              {/* LINE 2 */}
              <span
                className={`block .h-\[3px\] {
    height: 3px;
} w-7 rounded-full bg-current transition-all duration-300 ${
                  open
                    ? "opacity-0"
                    : ""
                }`}
              />

              {/* LINE 3 */}
              <span
                className={`block .h-\[3px\] {
    height: 3px;
} w-7 rounded-full bg-current transition-all duration-300 ${
                  open
                    ? "-rotate-45 -translate-y-[8px]"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* =========================================
            MOBILE MENU OVERLAY
        ========================================= */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 bg-black/40 z-[55]"
          />
        )}

        {/* =========================================
            MOBILE SIDE MENU
        ========================================= */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-[78%] max-w-sm bg-white shadow-2xl transition-transform duration-300 z-[60] ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          
          {/* MOBILE MENU HEADER */}
          <div className="flex items-center justify-between px-5 py-5 border-b">
            
            {/* MOBILE LOGO + NAME */}
            <div className="flex items-center gap-2">
              
              <img
                src="/anaslogo.png"
                alt="Al Anas Islamic Academy"
                className="w-10 h-10 object-contain"
              />

              <span className="font-bold text-blue-600 text-sm">
                Al Anas
              </span>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-gray-700 text-3xl"
            >
              ×
            </button>
          </div>

          {/* =====================================
              MOBILE NAVIGATION LINKS
          ===================================== */}
          <div className="flex flex-col px-6 py-6 gap-6 font-medium">
            
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition ${
                  pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE REGISTER BUTTON */}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white text-center py-3 rounded-lg mt-2 hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}