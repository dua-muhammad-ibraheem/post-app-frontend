const Navbar = () => {
  return (
    <nav className="bg-[#315762] text-[#EFEFEF] font-['Poppins',sans-serif] shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo: Modern lowercase with the vibrant orange dot */}
        <h1 className="text-2xl font-bold tracking-tight text-[#EFEFEF]">
          zine<span className="text-[#E9631A]">.</span>
        </h1>

        {/* Links: Same original names, clean spacing, sharp look */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#E9631A] transition-colors duration-200">
            Home
          </a>
          
          <a href="#" className="hover:text-[#E9631A] transition-colors duration-200">
            My Posts
          </a>
        </div>

        {/* Action Button: Filled with vibrant Orange, smooth rounded corners */}
        <div>
          <button className="bg-[#E9631A] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#d05312] active:scale-95 transition-all duration-250 shadow-sm">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;