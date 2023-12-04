import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import HomeLayout from "./Pages/HomeLayout";
import FavoriteLayout from "./Pages/FavoriteLayout";
import MyprofileLayout from "./Pages/MyprofileLayout";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import ProtectedRoute from "./ProtectedRoute";
const LoginRoute = () => {
  const isAuthenticated = !!Cookies.get("token");

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Login />;
};
function App() {
  const token = Cookies.get("token") || "guest";
  const decodedToken = token !== "guest" ? jwt_decode(token) : "guest";
  const role = decodedToken.role;
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={role === "user" ? <HomeLayout /> : <Navigate to="/" />}
        />
        <Route
          path="/favorite"
          element={
            role === "user" ? <FavoriteLayout /> : <Navigate to="/" />
          }
        />
        <Route
          path="/my-profile"
          element={
            role === "user" ? <MyprofileLayout /> : <Navigate to="/" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
