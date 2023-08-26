import axios from "axios";

const usersApi = axios.create({
  baseURL: 'https://randomuser.me/api/'
});

export const getUsersAll = async () => {
  const response = await usersApi.get('/api')
  return response.data
}

export default usersApi
