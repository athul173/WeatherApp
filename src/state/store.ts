import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {yrAPI} from './weather/slices.ts';

export const store = configureStore({
  reducer: {
    [yrAPI.reducerPath]: yrAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(yrAPI.middleware),
});

setupListeners(store.dispatch);
