import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/auth/Auth";
import VerifyOtp from "./pages/auth/VerifyOtp";
import CompleteProfile from "./pages/auth/CompleteProfile";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MyPosts from "./pages/MyPosts";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/my-posts" element={<MyPosts />} />
      <Route
  path="/complete-profile"
  element={<CompleteProfile />}
/>
      </Routes>

         
    </BrowserRouter>
  );
}

export default App;