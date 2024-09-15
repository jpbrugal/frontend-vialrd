import axios, { AxiosResponse } from "axios";

const baseURL = "https://localhost:7111/api";

const API = axios.create({
  baseURL,
});

interface User {
  email: string;
  password: string;
  nombres: string;
  apellidos: string;
  numerocelular: string;
}

export const RegisterUser = async (userData: User): Promise<User | null> => {
  try {
    const response: AxiosResponse<User> = await API.post("/register", userData);
    console.log(response.data);
    if (response.data) {
      console.log("SI!");
      return response.data; // Return the User object directly
    }

    return null;
  } catch (error) {
    console.error("Catch: Error creating user--", error);
    return null;
  }
};
