import {
  Bell,
  Shield,
  HelpCircle,
  Info,
  LogOut,
  Trash2,
  ChevronRight,
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
          Settings
        </h1>

        <p className="text-slate-500 mb-8">
          Manage your account and preferences.
        </p>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <Bell className="text-blue-600" />
              <span className="font-medium">Notifications</span>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <Shield className="text-blue-600" />
              <span className="font-medium">Privacy & Security</span>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <HelpCircle className="text-blue-600" />
              <span className="font-medium">Help & Support</span>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <Info className="text-blue-600" />
              <span className="font-medium">About App</span>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <LogOut className="text-red-500" />
              <span className="font-medium">Logout</span>
            </div>
            <ChevronRight />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition border border-red-200">
            <div className="flex items-center gap-4">
              <Trash2 className="text-red-500" />
              <span className="font-medium text-red-500">
                Delete Account
              </span>
            </div>
            <ChevronRight className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;