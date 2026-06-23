const EditProfile = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
          Edit Profile
        </h1>

        <p className="text-slate-500 mb-8">
          Update your profile information.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Profile Picture
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Bio
            </label>

            <textarea
              rows={4}
              placeholder="Write your bio..."
              className="w-full border rounded-xl p-3 resize-none"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;