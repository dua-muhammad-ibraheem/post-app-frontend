import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#1D3374] p-6 fixed left-0 top-0 border-r border-[#1B518D]">
      <h2 className="text-3xl font-bold text-white mb-10">
        zine<span className="text-[#EB8223]">.</span>
      </h2>
      <nav className="space-y-3">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#EB8223] text-white"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/my-posts"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#1B518D] transition"
        >
          <FileText size={20} />
          My Posts
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#1B518D] transition"
        >
          <User size={20} />
          Profile
        </Link>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#1B518D] transition w-full">
          <Settings size={20} />
          Settings
        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#EB8223] hover:bg-[#FFEBD2] transition w-full">
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
