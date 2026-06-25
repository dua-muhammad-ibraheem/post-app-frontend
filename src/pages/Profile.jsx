import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <div className="flex">
        <Sidebar />

        <main className="ml-64 flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-md p-10">
              <h1 className="text-4xl font-bold text-[#1D3374]">
                Profile
              </h1>

              <p className="text-slate-500 mt-2 mb-8">
                Manage your account information.
              </p>

              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-[#1B518D]">
                    D
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-[#0F172A] mt-6">
                  Dua Ibrahim
                </h2>

                <p className="text-slate-500 mt-1">
                  @bydua
                </p>

                <p className="text-slate-600 mt-6 max-w-lg">
                  Learning React, Node.js and building awesome projects 🚀
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-[#FFF8E7] rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-[#1D3374]">
                    dua@example.com
                  </p>
                </div>

                <div className="bg-[#FFF8E7] rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Role</p>
                  <p className="font-semibold text-[#1D3374]">
                    Frontend Developer
                  </p>
                </div>

                <div className="bg-[#FFF8E7] rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Joined</p>
                  <p className="font-semibold text-[#1D3374]">
                    2025
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <button className="bg-[#EB8223] text-white px-6 py-3 rounded-xl hover:bg-[#d97318] transition">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;