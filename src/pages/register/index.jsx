import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  notification,
  Radio,
} from "antd";
import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: null,
    role: "user",
    user: {
      role: "user",
      name: {
        firstName: null,
        middleName: null,
        lastName: null,
      },
      email: null,
      gender: null,
      dateOfBirth: null,
    },
  });

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

  const handleRegister = async () => {
    setIsLoading(true);
    // TODO: Implement login logic
    try {
      const userData = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        data: formData,
      });

      notification.success({
        placement: "bottomLeft",
        message: userData?.data?.message,
        showProgress: true,
      });

      router.push("/login");
    } catch (error) {
      notification.error({
        placement: "bottomLeft",
        message: error.response.data.message,
        showProgress: true,
      });
      setIsLoading(false);
    }
  };

  const disabledDate = (current) => {
    const startDate = new Date("1950-01-01").getTime();
    const endDate = new Date().getTime();
    return (
      current && (current.valueOf() < startDate || current.valueOf() > endDate)
    );
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
              <Form.Item label="Name">
                {/* <div className="flex items-center justify-between w-full gap-3"></div> */}
                <Flex align="center" justify="space-between" gap={15}>
                  <Form.Item
                    name="firstName"
                    className="w-full m-0"
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
                        setFormData({
                          ...formData,
                          user: {
                            ...formData.user,
                            name: {
                              ...formData.user.name,
                              firstName: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Item>
                  <Form.Item name="middleName" className="w-full m-0">
                    {/* label="Middle Name" */}
                    <Input
                      placeholder="Middle Name"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user: {
                            ...formData.user,
                            name: {
                              ...formData.user.name,
                              middleName: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    name="lastName"
                    className="w-full m-0"
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
                        setFormData({
                          ...formData,
                          user: {
                            ...formData.user,
                            name: {
                              ...formData.user.name,
                              lastName: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Item>
                </Flex>
              </Form.Item>
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input an e-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="E-mail"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: {
                        ...formData.user,
                        email: e.target.value,
                      },
                    })
                  }
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
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
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user: {
                        ...formData.user,
                        gender: e.target.value,
                      },
                    })
                  }
                >
                  <Radio value="male"> Male </Radio>
                  <Radio value="female"> Female </Radio>
                  <Radio value="other"> Other </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Date of Birth">
                <DatePicker
                  disabledDate={disabledDate}
                  format="DD-MM-YYYY"
                  className="w-full"
                  onChange={(_, dateStr) =>
                    setFormData({
                      ...formData,
                      user: {
                        ...formData.user,
                        dateOfBirth: dateStr,
                      },
                    })
                  }
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
