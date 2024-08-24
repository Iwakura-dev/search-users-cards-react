import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/store/store";
import { Input } from "../../components/UI/Input/Input";
import { UserCard } from "../../components/UserCard/UserCard";
import { fetchUsers } from "../../utils/getUser";
import {
  setUsers,
  toggleFavorite,
  User,
} from "../../lib/store/slice/userSlice";

export const HomePage = (): React.ReactNode => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async () => {
    const fetchedUsers = await fetchUsers(searchTerm);
    if (fetchedUsers.length > 0) {
      dispatch(setUsers(fetchedUsers));
    } else {
      console.log("No users found");
    }
  };

  const handleToggleFavorite = (user: User) => {
    dispatch(toggleFavorite(user));
  };

  return (
    <div>
      <div>
        <Input
          placeholder="Search for users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};
