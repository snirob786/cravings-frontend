import axios from "axios";
import { jwtDecode } from "jwt-decode";

const requestHandler = async (method, route, payload, headers, params) => {
  const res = await axios({
    method: method,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${route}`,
    data: payload,
    headers,
    params,
  });
  const decodedData =
    typeof res?.data?.data === "string"
      ? jwtDecode(res?.data?.data)
      : res?.data?.data;

  return decodedData;
};

export default requestHandler;
