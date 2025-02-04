import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from 'shared/constants/enums';
import { RootState } from 'shared/store';

export interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: Theme.Light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    }
  },
});

export const { setTheme } = themeSlice.actions;

export const subscribeThemeValue = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
