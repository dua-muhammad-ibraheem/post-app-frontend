import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Complete Your Profile
          </h1>

          <p className="text-slate-500 mt-3">
            Just a few details to finish setting up your account.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Username
            </label>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Profile Picture
              </label>

              <input
                type="file"
                accept="image/*"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 file:mr-4 file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:rounded-lg file:text-blue-700"
              />

              <p className="mt-2 text-sm text-slate-500">
                Optional. Upload a profile photo.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Bio
              </label>

              <textarea
                rows={4}
                maxLength={150}
                placeholder="Tell people a little about yourself..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-600"
              />

              <p className="mt-2 text-sm text-slate-500">
                Maximum 150 characters.
              </p>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                @
              </span>

              <input
                type="text"
                placeholder="Choose a username"
                className="w-full border border-slate-300 rounded-xl py-3 pl-8 pr-4 outline-none focus:border-blue-600"
              />
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Username must be unique and cannot contain spaces.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
