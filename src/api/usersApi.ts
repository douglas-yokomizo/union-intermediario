import axios from "axios";

const usersApi = axios.create({
  baseURL: 'https://randomuser.me'
});

export const getUsers = async () => {
  const response = await usersApi.get('/api')
  return response.data
}

export default usersApi
