import UserInstance from "./axios";
import { AuthErrorHandler, ErrorHandler } from "./error";

export const signin = async (email, password) => {
  try {
    const response = await UserInstance.post("/api/auth/login", {
      email,
      password,
    });

    if (response.status !== 200) {
      if (response.status === 400)
        throw new AuthErrorHandler(400, "Invalid email or password");
      throw new ErrorHandler(response.status, response.statusText);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const me = async () => {
  try {
    const response = await UserInstance.get("/api/auth/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};
