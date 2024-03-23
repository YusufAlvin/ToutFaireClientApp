import {createSlice} from '@reduxjs/toolkit';
import {EPage} from 'src/enum';

const initialState = {
  user: null,
  view: EPage.MAIN,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export default appSlice;
