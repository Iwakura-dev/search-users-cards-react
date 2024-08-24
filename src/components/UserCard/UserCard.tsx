import React from "react";
import { User } from "../../lib/store/slice/userSlice";
import styles from "./UserCard.module.scss";

interface UserCardProps {
  user: User;
  onToggleFavorite: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onToggleFavorite,
}) => {
  return (
    <div className={styles.card}>
      <img src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.country}</p>
      <button onClick={() => onToggleFavorite(user)}>Toggle Favorite</button>
    </div>
  );
};
