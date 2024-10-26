import loginImage from "@/assets/images/login.png";
import { setUser } from "@/redux/features/authSlice";
import requestHandler from "@/services/requestHandler";
import { UserOutlined } from "@ant-design/icons";
import { Button, Flex, Input } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // TODO: Implement login logic
    try {
      const user = await requestHandler("POST", "auth/login", {
        username,
        password,
      });

      let userInfo = null;
      if (user?.user?.role === "superAdmin") {
        userInfo = user?.user?.superAdmin;
      } else if (user?.user?.role === "admin") {
        userInfo = user?.user?.admin;
      } else if (user?.user?.role === "user") {
        userInfo = user?.user?.user;
      }

      let newUserInfo = {
        userData: user,
        userDetails: userInfo,
      };
      dispatch(setUser(newUserInfo));
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Flex justify="space-between" align="center">
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
              placeholder="E-mail"
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
              loading={isLoading}
              disabled={!username || !password || isLoading}
            >
              Login
            </Button>
          </div>
          <div>
            <p className="text-md">
              Don't have any account?{" "}
              <Link href="/register" className="text-blue-500 font-bold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Login;
