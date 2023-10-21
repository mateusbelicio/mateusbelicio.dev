import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SettingsType = {
  language: 'en' | 'pt';
  theme: 'dark' | 'light';
};

const initialState: SettingsType = {
  language: 'en',
  theme: 'dark'
};

const root = document.documentElement;

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateLanguage(state, action: PayloadAction<typeof initialState.language>) {
      state.language = action.payload;
      root.setAttribute('lang', action.payload);
    },
    updateTheme(state, action: PayloadAction<typeof initialState.theme>) {
      state.theme = action.payload;
      root.dataset.theme = action.payload;
    },

    loadSettings(state, action: PayloadAction<SettingsType>) {
      state.language = action.payload.language;
      state.theme = action.payload.theme;

      root.setAttribute('lang', action.payload.language);
      root.dataset.theme = action.payload.theme;
    }
  }
});

export const { updateLanguage, updateTheme, loadSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
