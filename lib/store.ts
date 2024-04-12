import { configureStore } from "@reduxjs/toolkit";
import documentsReducer from "./features/documents/documentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      documentsReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];