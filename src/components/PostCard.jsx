import { Heart, MessageCircle } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
      <img
        src={post.image}
        alt={post.caption}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={post.userImage}
            alt={post.user}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-[#0F172A]">
              {post.user}
            </h3>

            <p className="text-sm text-slate-500">
              {post.time}
            </p>
          </div>
        </div>

        <p className="text-slate-700">{post.caption}</p>

        <div className="mt-5 flex items-center gap-5 text-slate-500">
          <div className="flex items-center gap-2">
            <Heart size={18} />
            <span>{post.likes}</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;