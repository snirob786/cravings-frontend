import { Button, Flex, Form, Input } from "antd";
import React, { useState } from "react";
import registerImage from "@/assets/register.png";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/router";

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(null);

  const handleRegister = async () => {
    setIsLoading(true);
    console.log("name: ", name);
    // TODO: Implement login logic
    // try {
    //   const userData = await axios({
    //     method: "POST",
    //     url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    //     data: { username, password },
    //   });
    //   console.log("userData: ", userData);

    //   let userInfo = null;
    //   if (userData?.data?.data?.user?.role === "superAdmin") {
    //     console.log("userData: ", userData?.data?.data?.token);
    //     userInfo = await axios({
    //       method: "GET",
    //       url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/super-admins/${userData?.data?.data?.user?.superAdmin}`,
    //       headers: {
    //         Authorization: userData?.data?.data?.token,
    //       },
    //     });
    //     console.log("userInfo: ", userInfo);
    //   } else if (userData?.data?.data?.user?.role === "admin") {
    //     userInfo = await axios({
    //       method: "GET",
    //       url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/admins/${userData?.data?.data?.user?.admin}`,
    //       headers: {
    //         Authorization: userData?.data?.data?.token,
    //       },
    //     });
    //   }
    //   console.log("🚀 ~ handleLogin ~ userInfo:", userInfo);
    //   let newUserInfo = {
    //     userData: userData?.data?.data,
    //     userDetails: userInfo?.data?.data,
    //   };
    //   dispatch(setUser(newUserInfo));
    //   router.push("/dashboard");
    // } catch (error) {
    //   console.error("Login error: ", error);
    //   setIsLoading(false);
    // }
    setIsLoading(false);
  };

  return (
    <>
      <Flex justify="space-between" align="center" className="h-full">
        <div className="w-full min-h-screen">
          <Image
            src={registerImage}
            width={1000}
            height={1000}
            alt="Cravings Logo"
            className="h-screen"
          />
        </div>
        <div className="w-full  min-h-screen flex items-center justify-center flex-col gap-3">
          <h2 className="font-semibold text-5xl mb-10">Register</h2>
          <div className="flex flex-col justify-center items-center gap-3 w-full">
            <Form
              name="basic"
              labelCol={{
                span: 5,
              }}
              wrapperCol={{
                span: 19,
              }}
              className="w-5/6 px-8"
              // style={{
              //   maxWidth: "100%",
              // }}
              initialValues={{
                remember: true,
                password: "",
                confirmPassword: "",
              }}
              onFinish={handleRegister}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="w-full">
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="First Name"
                    onChange={(e) =>
                      setName((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
                <Form.Item label="Middle Name" name="middleName">
                  <Input
                    placeholder="Middle Name"
                    onChange={(e) =>
                      setName((prev) => ({
                        ...prev,
                        middlename: e.target.value,
                      }))
                    }
                  />
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Last Name"
                    onChange={(e) =>
                      setName((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </Form.Item>
              </div>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input an username!",
                  },
                ]}
              >
                <Input
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input an password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                hasFeedback
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please input an confirm password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Item>

              <div className="flex items-center justify-center">
                <Button
                  type="primary"
                  icon={<UserOutlined />}
                  // onClick={handleLogin}
                  htmlType="submit"
                  loading={isLoading}
                  // disabled={!username || !password || isLoading}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Register;
