import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Stats from "../components/Stats";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 lg:flex gap-6">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>

        <div className="lg:w-3/4 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h1 className="text-4xl font-bold text-[#0F172A]">
              Welcome back 👋
            </h1>

            <p className="text-slate-500 mt-3">
              Create posts, manage your content, and grow your community.
            </p>
          </div>

          <Stats />

          <CreatePost />

          <Posts />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;