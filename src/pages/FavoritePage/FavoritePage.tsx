import { useSelector } from "react-redux";
import { UserCard } from "../../components/UserCard/UserCard";
import { toggleFavorite, User } from "../../lib/store/slice/userSlice";
import { useAppDispatch } from "../../lib/store/store";

export const FavoritesPage = () => {
  const favorites = useSelector((state: any) => state.users.favorites);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (user: User) => {
    dispatch(toggleFavorite(user));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        {favorites.length > 0 ? (
          favorites.map((user: User) => (
            <UserCard
              key={user.id}
              user={user}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
    </div>
  );
};
