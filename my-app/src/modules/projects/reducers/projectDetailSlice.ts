import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'shared/store';
import ProjectType from '../types/projectType';

export interface ProjectDetailState {
  value: ProjectType | null;
}

const initialState: ProjectDetailState = {
  value: null,
};

const projectDetailSlice = createSlice({
  name: 'projectDetail',
  initialState,
  reducers: {
    setProjectDetail: (state, action: PayloadAction<ProjectType | null>) => {
      state.value = action.payload;
    }
  },
});

export const { setProjectDetail } = projectDetailSlice.actions;

export const subscribeProjectDetailValue = (state: RootState) => state.projectDetail.value;

export default projectDetailSlice.reducer;
