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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change effect
  useEffect(() => {
    setRouteChange(true);

    const timer = setTimeout(() => {
      setRouteChange(false);
    }, 400);

    return () => clearTimeout(timer);
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
      {/* TOP CONTACT BAR */}
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

      {/* TOP LOADER */}
      {routeChange && (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse"></div>
        </div>
      )}

      {/* NAVBAR */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white shadow-lg py-3 top-0"
            : "bg-transparent py-4 top-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src="/anaslogo.png"
              alt="logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "w-14 h-14" : "w-20 h-20"
              }`}
            />

            <h1
              className={`font-bold transition-all duration-300 text-lg md:text-xl ${
                scrolled || !isHome
                  ? "text-blue-600"
                  : "text-white"
              }`}
            >
              Al Anas Islamic Academy
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">

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
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-600 rounded-full"></span>
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden flex flex-col gap-[5px] ${
              scrolled || !isHome
                ? "text-black"
                : "text-white"
            }`}
          >
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col mt-24 px-6 gap-6 font-medium">

            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition ${
                  pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white text-center py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}