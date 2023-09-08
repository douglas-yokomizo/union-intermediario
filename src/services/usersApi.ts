import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://randomuser.me/api"
})

const getAllUsers = async () => {
  const seed = 'abc';
  const numberOfPages = 5;
  const results = 100;
  const nationality = 'br'
  const response = await usersApi.get(`?results=${results}&?page=${numberOfPages}&?seed=${seed}&?nat=${nationality}`)
  return response.data
}

export const api = {
  getAllUsers
}
