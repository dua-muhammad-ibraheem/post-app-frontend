import {
  LayoutDashboard,
  FileText,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 sticky top-24">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-8">
        Dashboard
      </h2>

      <nav className="space-y-3">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <FileText size={20} />
          My Posts
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <User size={20} />
          Profile
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition">
          <Settings size={20} />
          Settings
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;