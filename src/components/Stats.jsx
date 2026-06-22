import { FileText, Users, Heart } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Posts",
    value: "1.2K+",
    icon: FileText,
  },
  {
    id: 2,
    title: "Users",
    value: "850+",
    icon: Users,
  },
  {
    id: 3,
    title: "Likes",
    value: "5K+",
    icon: Heart,
  },
];

const Stats = () => {
  return (
    <section className="bg-[#EFEFEF] py-16 px-6 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white border border-[#315762]/10 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  {/* Title with muted Dark Slate for clean editorial look */}
                  <p className="text-sm font-medium tracking-wide text-[#315762]/60 uppercase">
                    {item.title}
                  </p>

                  {/* Value/Numbers with prominent bold styling */}
                  <h3 className="text-4xl font-bold text-[#315762] mt-1 tracking-tight">
                    {item.value}
                  </h3>
                </div>

                {/* Icon wrapper with soft orange glow tint and rounded corners */}
                <div className="bg-[#E9631A]/10 p-4 rounded-xl transition-colors duration-300">
                  <Icon className="text-[#E9631A]" size={26} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;