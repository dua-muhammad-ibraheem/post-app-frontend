import { useState, useEffect } from "react";
import { X } from "lucide-react";
import API from "../api/api";

const CommentModal = ({ isOpen, onClose, postId }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  // ================= LOAD COMMENTS =================
  useEffect(() => {
    if (!isOpen) return;

    const loadComments = async () => {
      try {
        const response = await API.get(`/comments/${postId}`);
        setComments(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    loadComments();
  }, [isOpen, postId]);

  // ================= ADD COMMENT =================
  const handleComment = async () => {
    if (!text.trim()) {
      alert("Please write a comment");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await API.post(
        `/comments/${postId}`,
        { text },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(response.data.message);

      setText("");

      // Reload comments
      const commentsResponse = await API.get(`/comments/${postId}`);
      setComments(commentsResponse.data.comments);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-[#1D3374]">
            Comments
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="space-y-3 max-h-60 overflow-y-auto mb-5">
          {comments.length === 0 ? (
            <p className="text-center text-slate-500">
              No comments yet
            </p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="border rounded-xl p-3"
              >
                <h4 className="font-semibold text-[#1D3374]">
                  {comment.user?.username}
                </h4>

                <p className="text-slate-600">
                  {comment.text}
                </p>
              </div>
            ))
          )}
        </div>

        <textarea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full border rounded-xl p-3 outline-none resize-none"
        />

        <button
          onClick={handleComment}
          className="mt-4 w-full bg-[#EB8223] text-white py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Add Comment
        </button>

      </div>
    </div>
  );
};

export default CommentModal;