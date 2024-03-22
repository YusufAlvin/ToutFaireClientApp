import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const {setUser} = appSlice.actions;
