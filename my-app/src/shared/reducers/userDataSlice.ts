import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'shared/store';
import UserDataType from '../../../shared/types/userDataType';

export interface UserDataState {
  value: UserDataType | null;
}

const initialState: UserDataState = {
  value: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDataType>) => {
      state.value = action.payload;
    }
  },
});

export const { setUserData } = userDataSlice.actions;

export const subscribeUserDataValue = (state: RootState) => state.userData.value;

export default userDataSlice.reducer;
