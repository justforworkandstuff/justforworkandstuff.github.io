import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "modules/about/reducers/userDataSlice";
import projectDetailSlice from "modules/projects/reducers/projectDetailSlice";
import projectListSlice from "modules/projects/reducers/projectListSlice";

export const store = configureStore({
  reducer: {
    projectList: projectListSlice,
    projectDetail: projectDetailSlice,
    userData: userDataSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
