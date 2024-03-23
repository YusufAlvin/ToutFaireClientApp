import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {appSlice} from 'src/store/slice';

const reduxLogger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
  logErrors: true,
  diff: true,
});

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
  },
  middleware: (getDefultMiddleware) => {
    return getDefultMiddleware().concat([reduxLogger]);
  },
});

export default store;
