import axios from "axios";
import _ from "lodash";
const BASE_URL = "https://taskeeperv2.herokuapp.com";

// export const loginUser = () => {
//     return axios.get("https://fakestoreapi.com/products?limit=5")
// }

export const loginUser = (payload) => {
  return axios.post(`${BASE_URL}/auth/login`, payload).then((response) => {
    if (_.get(response, "data.data.access_token")) {
      localStorage.setItem("user", _.get(response, "data.data.access_token"));
    }
    return response.data;
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};
