import { useState } from "react";
import { X, ImagePlus } from "lucide-react";
import API from "../api/api";
const CreatePostModal = ({
  isOpen,
  onClose,
  onPostCreated,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.post(
        "/posts/create",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      alert(response.data.message);

      setTitle("");
setDescription("");

onPostCreated();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1D3374]">Create Post</h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-slate-300 rounded-2xl p-4 mb-4 outline-none"
        />
        <textarea
          rows={5}
          placeholder="What's on your mind?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-slate-300 rounded-2xl p-4 resize-none outline-none"
        />

        <label className="mt-5 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-8 cursor-pointer">
          <ImagePlus size={40} className="text-slate-400" />

          <p className="mt-3 text-slate-500">Upload an image</p>

          <input type="file" className="hidden" />
        </label>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-5 py-2 rounded-xl border">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#EB8223] text-white px-5 py-2 rounded-xl"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
