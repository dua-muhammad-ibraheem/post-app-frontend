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
    <section className="relative -mt-16 z-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between px-8 py-8 hover:bg-orange-50 transition duration-300"
              >
                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500 font-medium">
                    {item.title}
                  </p>

                  <h3 className="text-4xl font-bold text-[#1D3374] mt-2">
                    {item.value}
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#EB8223]/10 flex items-center justify-center">
                  <Icon
                    size={30}
                    className="text-[#EB8223]"
                  />
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;