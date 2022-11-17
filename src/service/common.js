import axios from "axios";

export default axios.create({
  baseURL: "https://qtre6x9ri2.execute-api.ap-northeast-1.amazonaws.com/Prod/api/",
  headers: {
    "Content-type": "application/json"
  }
});