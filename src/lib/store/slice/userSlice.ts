import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  picture: string;
  country: string;
}

export interface UserState {
  users: User[];
  favorites: User[];
}

const initialState: UserState = {
  users: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<User>) {
      const index = state.favorites.findIndex(user => user.id === action.payload.id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { setUsers, toggleFavorite } = userSlice.actions;
export default userSlice.reducer;