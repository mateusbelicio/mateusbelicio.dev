import { useEffect } from 'react';

import * as settingsSlice from '@/lib/stores/settingsSlice';
import * as contentSlice from '@/lib/stores/contentSlice';
import type { SettingsType } from '@/lib/stores/settingsSlice';

import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useAppRedux';

export function useSettings() {
  const [settings, setSettings] = useLocalStorage('settings', null);
  const { theme, language } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!settings || !('settings' in localStorage)) {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const userLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en';

      const defaultSettings: SettingsType = {
        theme: userPrefersDark ? 'dark' : 'light',
        language: userLanguage
      };

      dispatch(settingsSlice.loadSettings(defaultSettings));
      dispatch(contentSlice.toggleContent(userLanguage));
    } else {
      dispatch(settingsSlice.loadSettings(settings));
    }
  }, []);

  useEffect(() => {
    setSettings({ theme, language });
    dispatch(contentSlice.toggleContent(language));
  }, [theme, language]);

  function changeTheme(value: string) {
    if (value === 'dark') dispatch(settingsSlice.updateTheme('dark'));
    else dispatch(settingsSlice.updateTheme('light'));
  }

  function changeLanguage(value: string) {
    if (value === 'pt') dispatch(settingsSlice.updateLanguage('pt'));
    else dispatch(settingsSlice.updateLanguage('en'));
  }

  return {
    theme,
    changeTheme,
    language,
    changeLanguage
  };
}
