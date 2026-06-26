import {
  House,
  BookOpenText,
  Compass,
  Info,
  LogIn,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-4xl font-black tracking-tight text-[#1D3374]">
          zine<span className="text-[#EB8223]">.</span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-4">

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[#1D3374] hover:bg-[#EB8223] hover:text-white transition-all duration-300"
          >
            <House size={18} />
            Home
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[#1D3374] hover:bg-[#EB8223] hover:text-white transition-all duration-300"
          >
            <BookOpenText size={18} />
            Blog
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[#1D3374] hover:bg-[#EB8223] hover:text-white transition-all duration-300"
          >
            <Compass size={18} />
            Explore
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[#1D3374] hover:bg-[#EB8223] hover:text-white transition-all duration-300"
          >
            <Info size={18} />
            About
          </a>

        </div>

        {/* Login Button */}
        <button className="flex items-center gap-2 bg-[#EB8223] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d97318] transition-all duration-300 shadow-md">
          <LogIn size={18} />
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;