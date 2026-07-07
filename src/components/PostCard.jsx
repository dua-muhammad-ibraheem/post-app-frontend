import { useState } from "react";
import { Heart, MessageCircle, Trash2 } from "lucide-react";
import API from "../api/api";
import CommentModal from "./CommentModal";

const PostCard = ({ post, refreshPosts }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [likes, setLikes] = useState(post.likes);

  const [liked, setLiked] = useState(post.likes.includes(user?._id));

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  // ================= DELETE POST =================
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/posts/${post._id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Post deleted successfully");

      refreshPosts();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // ================= LIKE / UNLIKE =================
  const handleLike = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/posts/like/${post._id}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (liked) {
        setLikes((prev) => prev.filter((id) => id !== user._id));
      } else {
        setLikes((prev) => [...prev, user._id]);
      }

      setLiked(!liked);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">
        <img
          src={post.image || "https://placehold.co/600x400?text=No+Image"}
          alt={post.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={post.user?.profileImage || "https://i.pravatar.cc/150?img=1"}
              alt={post.user?.username}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex justify-between items-start w-full">
              <div>
                <h3 className="font-semibold text-[#0F172A]">
                  {post.user?.username}
                </h3>

                <p className="text-sm text-slate-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>

              {user?._id === post.user?._id && (
                <button
                  onClick={handleDelete}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#1D3374] mb-2">
            {post.title}
          </h2>

          <p className="text-slate-700 line-clamp-3">{post.description}</p>

          <div className="mt-auto pt-5 flex items-center gap-5 text-slate-500">
            <div
              onClick={handleLike}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Heart
                size={18}
                fill={liked ? "red" : "none"}
                color={liked ? "red" : "gray"}
              />

              <span>{likes.length}</span>
            </div>

            <div
              onClick={() => setIsCommentOpen(true)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <CommentModal
        isOpen={isCommentOpen}
        onClose={() => setIsCommentOpen(false)}
        postId={post._id}
      />
    </>
  );
};

export default PostCard;
