import { persistStore } from "redux-persist";
import { useStore } from "react-redux";
import { rootReducer } from "./reducer";
import { baseApi } from "../api/base";
import { configureStore } from "@reduxjs/toolkit";

export const store: any = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useMyStore = (): typeof store => useStore();
