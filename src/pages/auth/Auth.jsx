import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Welcome to PostSphere
          </h1>

          <p className="text-slate-500 mt-3">
            Continue with Google or get a login code by email.
          </p>
        </div>

        <button className="w-full mt-8 border border-slate-300 rounded-xl py-3 font-medium flex items-center justify-center gap-3 hover:bg-slate-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />

          Continue with Google
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-slate-300 flex-1"></div>

          <span className="text-slate-400 text-sm">OR</span>

          <div className="h-px bg-slate-300 flex-1"></div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-slate-300 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-600"
            />
          </div>
        </div>

      <button
  onClick={() => navigate("/verify-otp")}
  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
>
  Send Code
</button>
      </div>
    </div>
  );
};

export default Auth;