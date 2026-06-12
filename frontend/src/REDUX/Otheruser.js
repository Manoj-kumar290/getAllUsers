import { createSlice } from "@reduxjs/toolkit";

const otherUsersSlice = createSlice({
  name: "otherUsers",
  initialState: {
    users: []
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

export const { setUsers } = otherUsersSlice.actions;

export default otherUsersSlice.reducer;