import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import HomeLayout from "./Pages/HomeLayout";
import FavoriteLayout from "./Pages/FavoriteLayout";
import MyprofileLayout from "./Pages/MyprofileLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<HomeLayout />} />
      <Route path="/favorite" element={<FavoriteLayout />} />
      <Route path="/my-profile" element={<MyprofileLayout />} />
    </Routes>
  );
}

export default App;
