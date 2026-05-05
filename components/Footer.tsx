export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 px-6 md:px-16 mt-10">
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Left */}
        <h3 className="text-xl font-bold">
          Al Anas Academy
        </h3>

        {/* Right Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Terms</p>
          <p className="hover:underline cursor-pointer">Contact</p>
        </div>

      </div>

      <p className="text-center text-sm mt-6 text-blue-100">
        © {new Date().getFullYear()} Al Anas Academy. All rights reserved.
      </p>
    </footer>
  );
}