const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            PostSphere
          </h2>

          <p className="text-slate-400 mt-2">
            Share your moments with the world.
          </p>
        </div>

        <div className="flex gap-6 text-slate-300">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Login
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Register
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;