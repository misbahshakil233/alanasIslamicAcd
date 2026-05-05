"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`${
        isHome
          ? "absolute top-0 left-0 w-full z-20 text-white"
          : "bg-white shadow-md text-gray-700"
      } flex justify-between items-center p-6 fixed`}
    >
      
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        
        <img
          src="/logo.png"
          alt="logo"
          className="w-10 h-10 object-contain"
        />

        <h1
          className={`text-lg font-bold ${
            isHome ? "text-white" : "text-blue-600"
          }`}
        >
          Al Anas Academy
        </h1>

      </div>

      {/* Links */}
      <ul className="flex gap-6 font-medium text-sm md:text-base">
        
        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
        <li><Link href="/courses" className="hover:text-blue-500">Courses</Link></li>
        <li><Link href="/teachers" className="hover:text-blue-500">Teachers</Link></li>
        <li><Link href="/blogs" className="hover:text-blue-500">Blogs</Link></li>
        <li><Link href="/faqs" className="hover:text-blue-500">FAQs</Link></li>
        <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>

        <li>
          <Link
            href="/register"
            className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </li>

      </ul>
    </nav>
  );
}