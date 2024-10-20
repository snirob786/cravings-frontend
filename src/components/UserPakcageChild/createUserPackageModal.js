import {
  Modal,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  notification,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export const CreateUserPackageModal = ({
  isModalOpen,
  handleCancel,
  data,
  setData,
}) => {
  const auth = useSelector((state) => state?.auth);
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(null);

  const handleOk = async () => {
    try {
      const userPackageData = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-packages/create`,
        headers: {
          Authorization: auth?.userData?.token,
        },
        data: values,
      });
      let newData = data;
      newData.push(userPackageData?.data?.data);
      setData(newData);
      setIsLoading(true);
      handleCancel();
    } catch (error) {
      console.log("error: ", error);
      api.error({
        message: "User Package Creating Error",
        description: `${error?.message}`,
        placement: "bottomLeft",
        duration: 5,
      });
      setIsLoading(true);
      handleCancel();
    }
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Create Package"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        centered
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleOk}
              loading={isLoading}
              disabled={isLoading}
            >
              Submit
            </Button>
          </>
        )}
      >
        <Form
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Title" name="title">
            <Input
              onChange={(e) =>
                setValues({
                  ...values,
                  title: e.target.value,
                })
              }
            />
          </Form.Item>

          <Form.Item label="Price (BDT)" name="price">
            <InputNumber
              accessKey=""
              style={{
                width: "100%",
              }}
              onChange={(value) =>
                setValues({
                  ...values,
                  price: value,
                })
              }
              rules={[
                {
                  validator: (_, value) =>
                    value && /^[0-9]+$/.test(value)
                      ? Promise.resolve()
                      : Promise.reject("Only numeric values are allowed!"),
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Validity Days" name="validityDays">
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(value) =>
                setValues({
                  ...values,
                  validityDays: value,
                })
              }
            />
          </Form.Item>
          <Form.Item label="Menu Item Limit" name="menuItemLimit">
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(value) =>
                setValues({
                  ...values,
                  menuItemLimit: value,
                })
              }
            />
          </Form.Item>
          <Form.Item label="Special Menu Limit" name="specialMenuLimit">
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(value) =>
                setValues({
                  ...values,
                  specialMenuLimit: value,
                })
              }
            />
          </Form.Item>
          <Form.Item label="Platter Limit" name="platterLimit">
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(value) =>
                setValues({
                  ...values,
                  platterLimit: value,
                })
              }
            />
          </Form.Item>
          <Form.Item label="Moderator Limit" name="moderatorLimit">
            <InputNumber
              style={{
                width: "100%",
              }}
              onChange={(value) =>
                setValues({
                  ...values,
                  moderatorLimit: value,
                })
              }
            />
          </Form.Item>

          {/* <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};
