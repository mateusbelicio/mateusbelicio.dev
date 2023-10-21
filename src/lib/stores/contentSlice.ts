import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Language } from '../lang/lang.types';

import { pt } from '../lang/locales/pt';
import { en } from '../lang/locales/en';

const initialState: Language = { ...en };

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    toggleContent(_state, action: PayloadAction<'pt' | 'en'>) {
      return action.payload === 'pt' ? pt : en;
    }
  }
});

export const { toggleContent } = contentSlice.actions;

export default contentSlice.reducer;
