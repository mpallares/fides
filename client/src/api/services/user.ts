import { User } from "../../utils/types";
import api from "../api";

export const getUsers = async (): Promise<User[]> => {
  try {
    const result = await api.get("/users");
    return result.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteUser = async (userId: string): Promise<boolean> => {
  try {
    const result = await api.delete(`/users/${userId}`);
    return result.status === 200;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addUser = async () => {
  try {
    const result = await api.post(`/users`);
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUser = async (userId: string) => {
  try {
    const result = await api.get(`/users/${userId}`);
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateUser = async (userId: string, updatedUser: User) => {
  try {
    const result = await api.put(`/users/${userId}`, updatedUser);
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
