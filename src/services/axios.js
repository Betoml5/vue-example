import axios from "axios";

const UserInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export default UserInstance;
