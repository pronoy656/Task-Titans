import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import authReducer from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";

const persistConfigure = {
  key: "auth",
  storage,
  whitelist: [ "token"],
};

const persistAuthReducer = persistReducer(persistConfigure, authReducer);

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export default store;

export const persistor = persistStore(store);
