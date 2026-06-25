import { Pencil, Trash2 } from "lucide-react";
import Sidebar from "../components/Sidebar";

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
    <div className="min-h-screen bg-[#FFF8E7]">
      {" "}
      <div className="flex">
        {" "}
        <Sidebar />
        ```
        <main className="ml-64 flex-1 p-6">
          <div className="max-w-4xl ml-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-[#1D3374]">My Posts</h1>
                <p className="text-sm text-[#EB8223] font-medium mt-1">
                  2 Posts Published
                </p>
                <p className="text-slate-500 mt-2">
                  View, edit and manage your published posts.
                </p>
              </div>
            </div>

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

                  <div className="p-6 flex flex-col h-52">
                    <p className="text-slate-800 font-medium">{post.caption}</p>

                    <p className="text-sm text-slate-400 mt-3">{post.date}</p>

                    <div className="flex gap-3 mt-auto">
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
        </main>
      </div>
    </div>
  );
};

export default MyPosts;
