import { Heart, MessageCircle } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">
      <img
        src={post.image || "https://placehold.co/600x400?text=No+Image"}
        alt={post.title}
        className="w-full h-64 object-cover"
      />

      <div  className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={post.user?.profileImage || "https://i.pravatar.cc/150?img=1"}
            alt={post.user?.username}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-[#0F172A]">
              {post.user?.username}
            </h3>

            <p className="text-sm text-slate-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-[#1D3374] mb-2">
          {post.title}
        </h2>

        <p className="text-slate-700 line-clamp-3">{post.description}</p>

        <div className="mt-auto pt-5 flex items-center gap-5 text-slate-500">
          <div className="flex items-center gap-2">
            <Heart size={18} />
            <span>{post.likes.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
