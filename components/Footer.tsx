import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo / Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-wide">
              Al Anas Islamic Academy
            </h3>
            <p className="text-blue-100 text-sm mt-2">
              Learn Quran with excellence & guidance
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">

            <Link href="/privacy" className="hover:text-yellow-300 transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-yellow-300 transition">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>

            <Link href="/courses" className="hover:text-yellow-300 transition">
              Courses
            </Link>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">

          <p>
            © {new Date().getFullYear()} Al Anas Academy. All rights reserved.
          </p>

          {/* Social Icons (simple) */}
          <div className="flex gap-4 mt-4 md:mt-0">

            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">YouTube</a>

          </div>

        </div>

      </div>
    </footer>
  );
}