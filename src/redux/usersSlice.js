import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operation";

const usersInitialState = {
  items: [],
  total: null,
  isLoading: false,
  error: null,
  usersFollowers: [],
  page: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    toggleFollowing: (state, action) => {
      const index = state.usersFollowers.indexOf(action.payload);
      if (index === -1) {
        state.usersFollowers.push(action.payload);
      } else {
        state.usersFollowers.splice(index, 1);
      }
    },
    updateTotal: (state, action) => {
      state.total = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.total = action.payload.length;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const { toggleFollowing, updateTotal } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
