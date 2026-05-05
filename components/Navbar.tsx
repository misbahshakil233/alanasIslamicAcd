"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
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
            className={`text-lg md:text-xl font-bold transition-all duration-300 ${
              scrolled ? "text-blue-600" : "text-white"
            }`}
          >
            Al Anas Islamic Academy
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 font-medium">

          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.path}
                className={`relative transition-colors duration-300
                  ${
                    pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : scrolled
                      ? "text-gray-700"
                      : "text-white"
                  }
                  hover:text-blue-500
                `}
              >
                {link.name}

                {/* Active underline */}
                {pathname === link.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"></span>
                )}
              </Link>
            </li>
          ))}

          {/* Register */}
          <li>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] z-50"
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
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-white shadow-2xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col mt-24 px-6 gap-6 font-medium">

          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`text-lg ${
                pathname === link.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white text-center py-2 rounded-lg mt-4"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}