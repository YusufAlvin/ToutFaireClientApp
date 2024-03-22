import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './slice/appSlice';
import {createLogger} from 'redux-logger';

const reduxLogger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
  logErrors: true,
  diff: true,
});

const store = configureStore({
  reducer: {
    appReducer,
  },
  middleware: (getDefultMiddleware) => {
    return getDefultMiddleware().concat([reduxLogger]);
  },
});

export default store;
