import { useState } from "react";
import Sidebar from "../components/Sidebar";
import RecentActivity from "../components/RecentActivity";
import Posts from "../components/Posts";
import CreatePostModal from "../components/CreatePostModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handlePostCreated = () => {
    setIsModalOpen(false);
    setRefreshPosts((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <div className="flex">
        <Sidebar />

        <main className="ml-64 flex-1 flex justify-center">
          <div className="w-full px-8 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h1 className="text-4xl font-bold text-[#0F172A]">
                Welcome back {user?.username || "User"}
              </h1>

              <p className="text-slate-500 mt-3">
                Create posts, manage your content, and grow your community.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#1D3374] mb-3">
                Share Something
              </h2>

              <p className="text-slate-500 mb-5">
                Create a new post and share it with your community.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#EB8223] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                + Create Post
              </button>
            </div>

            <RecentActivity />

            <Posts refreshPosts={refreshPosts} />
          </div>
        </main>
      </div>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPostCreated={handlePostCreated}
      />
    </div>
  );
};

export default Dashboard;