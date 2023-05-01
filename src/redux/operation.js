import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL ="https://63b0466df9a53fa202653bbb.mockapi.io/api/v1/"

axios.defaults.baseURL = BASE_URL;
//TODO додати файл inv

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

