import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { orderApi } from './Slices/orderSlice';
import { questionApi } from './Slices/questionSlice';

const store = configureStore({
  reducer: {
    [orderApi.reducerPath]: orderApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware, questionApi.middleware),
});

setupListeners(store.dispatch);
//мне не обязатален

export default store;
