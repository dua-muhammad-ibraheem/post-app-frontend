import { useEffect, useState } from "react";
import { X } from "lucide-react";
import API from "../api/api";

const EditModal = ({ isOpen, onClose, post, refreshPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Sync state when modal opens
  useEffect(() => {
    if (!post) return;

    queueMicrotask(() => {
      setTitle(post.title);
      setDescription(post.description);
    });
  }, [post]);

  const handleUpdate = async () => {
    if (!title.trim() || !description.trim()) {
      return alert("Please fill all fields");
    }

    try {
      const token = localStorage.getItem("token");

      const response = await API.put(
        `/posts/${post._id}`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(response.data.message);

      refreshPosts();
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-9999 px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-[#1D3374]">
            Edit Post
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4 outline-none"
        />

        <textarea
          rows={5}
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-xl p-3 outline-none"
        />

        <button
          onClick={handleUpdate}
          className="mt-5 w-full bg-[#EB8223] text-white py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditModal;