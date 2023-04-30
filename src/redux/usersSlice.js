import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operation";

const usersInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    toggleFollowing: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      state.items[index] = {
        ...state.items[index],
        followers: state.items[index].isFollowing
          ? state.items[index].followers - 1
          : state.items[index].followers + 1,
        isFollowing: !state.items[index].isFollowing,
      };
    },
    updateUsers: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  // .addCase(followingUser.pending, (state) => {
  //   state.isRefreshing = true;
  // })
  // .addCase(followingUser.fulfilled, (state, action) => {
  //   state.user = action.payload;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // })
  // .addCase(followingUser.rejected, (state) => {
  //   state.isRefreshing = false;
  // }),
});

export const { toggleFollowing, updateUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
