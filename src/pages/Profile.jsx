const Profile = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7] p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600">
            D
          </div>

          <h1 className="text-3xl font-bold text-[#0F172A] mt-4">
            Dua Ibrahim
          </h1>

          <p className="text-slate-500 mt-1">@bydua</p>

          <p className="text-slate-600 mt-4 max-w-md">
            Learning React, Node.js and building awesome projects 🚀
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;