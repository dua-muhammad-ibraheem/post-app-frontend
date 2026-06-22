import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import VerifyOtp from "./pages/auth/VerifyOtp";
import CompleteProfile from "./pages/auth/CompleteProfile";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/auth" element={<Auth />} />
      <Route
  path="/complete-profile"
  element={<CompleteProfile />}
/>
      </Routes>

         
    </BrowserRouter>
  );
}

export default App;