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
    <section className="bg-[#FFF8E7] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0F172A] mb-8">
          Recent Posts
        </h2>

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