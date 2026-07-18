import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Sidebar from "../components/Sidebar";
import API from "../api/api";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  // ================= FETCH MY POSTS =================
  const fetchMyPosts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/posts/myposts", {
        headers: {
          Authorization: token,
        },
      });

      setPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await API.get("/posts/myposts", {
          headers: {
            Authorization: token,
          },
        });

        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    loadPosts();
  }, []);

  // ================= DELETE POST =================
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/posts/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Post deleted successfully");

      fetchMyPosts();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <div className="flex">
        <Sidebar />

        <main className="ml-64 flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-[#1D3374]">My Posts</h1>

                <p className="text-sm text-[#EB8223] font-medium mt-1">
                  {posts.length} Posts Published
                </p>

                <p className="text-slate-500 mt-2">
                  View, edit and manage your published posts.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col h-130"
                >
                  <img
                    src={
                      post.image || "https://placehold.co/600x400?text=No+Image"
                    }
                    alt={post.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-semibold text-[#1D3374] line-clamp-2">
                      {post.title}
                    </h2>

                   <p className="text-slate-700 mt-3 line-clamp-4">
                      {post.description}
                    </p>

                   <p className="text-sm text-slate-400 mt-2">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>

                    <div className="flex gap-3 mt-auto">
                      <button className="flex items-center gap-2 bg-[#EB8223] text-white px-4 py-2 rounded-xl hover:bg-[#d97318] transition">
                        <Pencil size={18} />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(post._id)}
                        className="flex items-center gap-2 border-2 border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold text-[#1D3374]">
                  No Posts Yet
                </h2>

                <p className="text-slate-500 mt-2">
                  Create your first post from Dashboard.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPosts;
