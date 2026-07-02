import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import API from "../../api/authApi";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await API.post("/login", {
          email,
          password,
        });

        console.log(response.data);
      } else {
        const response = await API.post("/register", {
          username,
          email,
          password,
        });

        console.log(response.data);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-[#1A1A1A] rounded-3xl shadow-2xl border border-[#EB8223]/30 p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-[#1D3374]">
            zine<span className="text-[#EB8223]">.</span>
          </h1>

          <h2 className="text-2xl font-bold mt-6 text-gray-800">
            {isLogin ? "Welcome Back 👋" : "Create Account"}
          </h2>

          <p className="text-gray-500 mt-2">
            {isLogin
              ? "Login to continue your journey."
              : "Create your account to get started."}
          </p>
        </div>

        {/* Google Button */}

        <button className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="text-sm text-gray-400">OR</span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Username */}

          {!isLogin && (
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">Username</label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:border-[#EB8223]"
                />
              </div>
            </div>
          )}

          {/* Email */}

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:border-[#EB8223]"
              />
            </div>
          </div>

          {/* Password */}

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Password</label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl py-3 pl-11 pr-12 outline-none focus:border-[#EB8223]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          {!isLogin && (
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border rounded-xl py-3 pl-11 pr-12 outline-none focus:border-[#EB8223]"
                />
              </div>
            </div>
          )}

          {/* Forgot Password */}

          {isLogin && (
            <div className="flex justify-end mb-6">
              <Link
                to="/forgot-password"
                className="text-sm text-[#EB8223] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          {/* Submit Button */}

          <button className="w-full bg-[#EB8223] hover:bg-[#d97318] text-white py-3 rounded-xl font-semibold transition">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {/* Toggle */}

        <p className="text-center mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-[#EB8223] font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};
export default Auth;
