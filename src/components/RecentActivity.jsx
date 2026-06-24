import { Activity } from "lucide-react";

const activities = [
  {
    id: 1,
    text: "You created a new post",
    time: "2 hours ago",
  },
  {
    id: 2,
    text: "You updated your profile",
    time: "Yesterday",
  },
  {
    id: 3,
    text: "Welcome to PostSphere",
    time: "2 days ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-5">
        <Activity className="text-blue-600" />
        <h2 className="text-2xl font-bold text-[#0F172A]">
          Recent Activity
        </h2>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-b border-slate-100 pb-3 last:border-0"
          >
            <p className="text-slate-800">{activity.text}</p>
            <p className="text-sm text-slate-400 mt-1">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;