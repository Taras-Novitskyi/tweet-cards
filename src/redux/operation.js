import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63b0466df9a53fa202653bbb.mockapi.io/api/v1/";
//TODO додати файл inv

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async ({ limit = 6, page = 1 }, thunkAPI) => {
    try {
      const response = await axios.get("/users", {
        params: {
          limit,
          page,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
