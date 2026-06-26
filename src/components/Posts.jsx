import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    user: "Dua",
    userImage: "https://i.pravatar.cc/150?img=5",
    image: "https://picsum.photos/600/400?random=1",
    caption: "Exploring new ideas today ✨",
    likes: 24,
    comments: 5,
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Sara",
    userImage: "https://i.pravatar.cc/150?img=32",
    image: "https://picsum.photos/600/400?random=2",
    caption: "Coffee and code ☕",
    likes: 18,
    comments: 3,
    time: "5 hours ago",
  },
  {
    id: 3,
    user: "Ali",
    userImage: "https://i.pravatar.cc/150?img=15",
    image: "https://picsum.photos/600/400?random=3",
    caption: "Building something amazing 🚀",
    likes: 41,
    comments: 12,
    time: "1 day ago",
  },
];

const Posts = () => {
  return (
<section className="w-full bg-[#FCFCFC] py-28 font-['Poppins',sans-serif]">
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
              Discover inspiring stories, ideas and moments shared by our community.
            </p>
          </div>

          <button className="hidden md:block border-2 border-[#EB8223] text-[#EB8223] px-5 py-3 rounded-xl font-semibold hover:bg-[#EB8223] hover:text-white transition">
            View All →
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Posts;