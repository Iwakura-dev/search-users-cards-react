import axios from "axios";
import { User } from "../lib/store/slice/userSlice";

export const fetchUsers = async (searchTerm: string): Promise<User[]> => {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=10&name=${searchTerm}`);
    return response.data.results.map((user: any) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      picture: user.picture.medium,
      country: user.location.country,
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching users:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};
