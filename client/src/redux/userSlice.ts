import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "../utils/types";

interface UserState {
  value: User[];
}

const initialState: UserState = {
  value: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.value = action.payload;
    },
    deleteUser: (state, action) => {
      const filteredArr = state.value.filter((user) => {
        return user.id !== action.payload;
      });
      state.value = filteredArr;
    },
    addUser: (state, action) => {
      state.value.unshift(action.payload);
    },
    updateUser: (state, action) => {
      return {
        ...state,
        value: state.value.map((user, i) =>
          user.id === action.payload.updatedUser.id
            ? { ...action.payload.updatedUser }
            : { ...user }
        ),
      };
    },
  },
});

export const { deleteUser, addUsers, addUser, updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
