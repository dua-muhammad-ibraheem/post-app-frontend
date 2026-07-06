import { useEffect, useState } from "react";
import API from "../api/api";
import PostCard from "./PostCard";

const Posts = ({ refreshPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get("/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
}, [refreshPosts]);
  
if (loading) {
  return <h2 className="text-center py-10">Loading...</h2>;
}
  return (
    <section className="w-full bg-white py-28 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#EB8223] font-semibold uppercase tracking-wider text-sm">
              Community Feed
            </span>

            <h2 className="text-4xl font-bold text-[#1D3374] mt-2">
              Explore Recent Posts
            </h2>

            <p className="text-slate-500 mt-3 max-w-xl">
              Discover inspiring stories, ideas and moments shared by our
              community.
            </p>
          </div>

          <button className="hidden md:block border-2 border-[#EB8223] text-[#EB8223] px-5 py-3 rounded-xl font-semibold hover:bg-[#EB8223] hover:text-white transition">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;