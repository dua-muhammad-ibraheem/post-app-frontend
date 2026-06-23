import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    message: "Ahmed liked your post ❤️",
    time: "2 minutes ago",
  },
  {
    id: 2,
    message: "Sara commented on your post 💬",
    time: "10 minutes ago",
  },
  {
    id: 3,
    message: "Welcome to PostSphere 🎉",
    time: "1 day ago",
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Bell className="text-blue-600" size={32} />
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Notifications
          </h1>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-5 rounded-2xl shadow-md"
            >
              <p className="text-slate-800 font-medium">
                {notification.message}
              </p>

              <p className="text-sm text-slate-500 mt-2">
                {notification.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;