import { Button, Flex, Input } from "antd";
import React, { useState } from "react";
import loginImage from "@/assets/login.png";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/router";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {
    // TODO: Implement login logic
    try {
      const userData = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        data: { username, password },
      });

      let userInfo = null;
      if (userData?.data?.data?.user?.role === "superAdmin") {
        userInfo = await axios({
          method: "GET",
          headers: {
            Authorization: userData?.data?.data?.token,
          },
        });
      } else if (userData?.data?.data?.user?.role === "admin") {
        userInfo = await axios({
          method: "GET",
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/admins/${userData?.data?.data?.user?.admin}`,
          headers: {
            Authorization: userData?.data?.data?.token,
          },
        });
      }
      console.log("🚀 ~ handleLogin ~ userInfo:", userInfo);
      let newUserInfo = {
        userData: userData?.data?.data,
        userDetails: userInfo?.data?.data,
      };
      dispatch(setUser(newUserInfo));
      router.push("/");
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <>
      <Flex justify="space-between" align="center" className="h-full">
        <div className="w-full min-h-screen">
          <Image
            src={loginImage}
            width={1000}
            height={1000}
            alt="Cravings Logo"
            className="h-screen"
          />
        </div>
        <div className="w-full  min-h-screen flex items-center justify-center flex-col gap-3">
          <h2 className="font-semibold text-5xl mb-10">Login</h2>
          <div className="flex flex-col justify-center items-center gap-3 w-3/6">
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input.Password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="primary"
              icon={<UserOutlined />}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Login;