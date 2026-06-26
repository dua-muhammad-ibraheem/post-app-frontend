import {
  House,
  BookOpenText,
  Compass,
  Info,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1D3374] text-white mt-16">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-4xl font-black">
            zine<span className="text-[#EB8223]">.</span>
          </h2>

          <p className="mt-4 text-slate-300 leading-7">
            Share your thoughts, stories and moments with people around
            the world through a simple and beautiful blogging platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#EB8223] transition">
                <House size={18} />
                Home
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#EB8223] transition">
                <BookOpenText size={18} />
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#EB8223] transition">
                <Compass size={18} />
                Explore
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#EB8223] transition">
                <Info size={18} />
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <a
            href="mailto:hello@zine.com"
            className="flex items-center gap-2 text-slate-300 hover:text-[#EB8223] transition"
          >
            <Mail size={18} />
            hello@zine.com
          </a>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <button className="p-3 rounded-full bg-[#28468f] hover:bg-[#EB8223] transition">
              <Github size={20} />
            </button>

            <button className="p-3 rounded-full bg-[#28468f] hover:bg-[#EB8223] transition">
              <Linkedin size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#31508F]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center text-slate-300 text-sm">

          <p>© 2026 zine. All rights reserved.</p>

          <p>Made with ❤️ using React & Tailwind CSS</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
