import { configureStore } from "@reduxjs/toolkit";
import projectDetailSlice from "modules/projects/reducers/projectDetailSlice";
import projectListSlice from "modules/projects/reducers/projectListSlice";
import userDataSlice from "shared/reducers/userDataSlice";
import themeSlice from "./reducers/themeSlice";

export const store = configureStore({
  reducer: {
    projectList: projectListSlice,
    projectDetail: projectDetailSlice,
    userData: userDataSlice,
    theme: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
