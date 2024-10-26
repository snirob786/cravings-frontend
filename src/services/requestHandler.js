import axios from "axios";
import { jwtDecode } from "jwt-decode";

const requestHandler = async (method, route, payload) => {
  const res = await axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`,
    data: payload,
  });
  const decodedData = jwtDecode(res?.data?.data);
  console.log("🚀 ~ requestHandler ~ decodedData:", decodedData);

  return decodedData;
};

export default requestHandler;
