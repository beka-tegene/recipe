import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
export const SignUp = async (data) => {
  const useData = await axios.post(
    "http://localhost:5000/api/v1/auth/register",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(useData);
  if (useData.status === 201) {
    window.location.href = "/login";
  } else {
    window.location.href = "/register";
  }
};

export const Login = async (data) => {
  try {
    console.log(data);
    //email, password
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 401) {
      toast.error(response.data.message);
    }
    if (response.status === 201) {
      const role = response.data.user.role;
      Cookies.set("token", response.data.token);
      if (role === "user") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/login";
      }
    }
  } catch (error) {
    toast.error(error.response.data.msg);
    toast.error(error.response.data.error);
    console.error("Login Error:", error);
  }
};

export const ForgotPassword = async (data) => {
  console.log(data);
  const useData = await axios.post(
    "http://localhost:5000/api/v1/auth/forgot-password",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (useData.status === 200) {
    window.location.href = "/verify";
  } else {
    return useData;
  }
};

export const RestPassword = async (data) => {
  const useData = await axios.post(
    "http://localhost:5000/api/v1/auth/register",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(useData);
  if (useData.status === 201) {
    window.location.href = "/login";
  } else {
    return useData;
  }
};
