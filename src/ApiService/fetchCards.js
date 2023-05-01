import axios from "axios";

axios.defaults.baseURL = "https://63b0466df9a53fa202653bbb.mockapi.io/api/v1/";

export async function fetchCards({page = 1, limit = 6}) {
  try {
    const {data} = await axios.get("/users", {
      params: {
        limit,
        page,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
