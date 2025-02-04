import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'shared/store';
import ProjectType from '../types/projectType';

export interface ProjectListState {
  value: ProjectType[];
}

const initialState: ProjectListState = {
  value: [],
};

const projectListSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
    setProjectList: (state, action: PayloadAction<ProjectType[]>) => {
      state.value = action.payload;
    },
    resetProjectList: (state) => {
      state.value = [];
    },
  },
});

export const { setProjectList, resetProjectList } = projectListSlice.actions;

export const subscribeProjectListValue = (state: RootState) => state.projectList.value;

export default projectListSlice.reducer;
