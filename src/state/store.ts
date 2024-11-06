import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {yrAPI} from './weather/slices';

export const store = configureStore({
  reducer: {
    [yrAPI.reducerPath]: yrAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 50},
      serializableCheck: {warnAfter: 50},
    }).concat(yrAPI.middleware),
});

setupListeners(store.dispatch);
