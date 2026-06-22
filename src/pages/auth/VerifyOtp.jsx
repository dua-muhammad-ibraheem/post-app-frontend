import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0F172A]">Verify Code</h1>

          <p className="text-slate-500 mt-3">
            Enter the 6-digit code sent to your email.
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <input
              key={item}
              type="text"
              maxLength="1"
              className="w-12 h-14 text-center text-xl font-semibold border border-slate-300 rounded-xl outline-none focus:border-blue-600"
            />
          ))}
        </div>
        <button
          onClick={() => navigate("/complete-profile")}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Verify Code
        </button>

        <button className="w-full mt-4 text-blue-600 font-medium hover:underline">
          Resend Code
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
