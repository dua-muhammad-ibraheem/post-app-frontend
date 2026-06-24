import { Pencil, Trash2 } from "lucide-react";

const posts = [
  {
    id: 1,
    caption: "Learning React and building awesome projects 🚀",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    date: "2 hours ago",
  },
  {
    id: 2,
    caption: "My first post app UI is almost complete 🎉",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    date: "1 day ago",
  },
];

const MyPosts = () => {
  return (
    <div className="min-h-screenbg-[#1D3374] bg-[#1B518D] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">My Posts</h1>

        <p className="text-slate-500 mb-8">Manage your posts here.</p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt="Post"
                className="w-full h-44 object-cover"
              />

              <div className="p-6">
                <p className="text-slate-800">{post.caption}</p>

                <p className="text-sm text-slate-400 mt-3">{post.date}</p>

                <div className="flex gap-3 mt-6">
                  <button className="flex items-center gap-2 bg-[#EB8223] text-white px-4 py-2 rounded-xl hover:bg-[#d97318] transition">
                    <Pencil size={18} />
                    Edit
                  </button>

                  <button className="flex items-center gap-2 border-2 border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition">
                    <Trash2 size={18} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
