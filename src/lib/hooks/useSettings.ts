import { useEffect } from 'react';

import * as settingsSlice from '@/lib/stores/settingsSlice';
import type { SettingsType } from '@/lib/stores/settingsSlice';

import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useAppRedux';

export function useSettings() {
  const [settings, setSettings] = useLocalStorage('settings', null);
  const { theme, language } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  function changeTheme(value: string) {
    if (value === 'dark') dispatch(settingsSlice.updateTheme('dark'));
    else dispatch(settingsSlice.updateTheme('light'));
  }

  function changeLanguage(value: string) {
    if (value === 'pt') dispatch(settingsSlice.updateLanguage('pt'));
    else dispatch(settingsSlice.updateLanguage('en'));
  }

  useEffect(() => {
    if (!settings || !('settings' in localStorage)) {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const defaultSettings: SettingsType = {
        theme: userPrefersDark ? 'dark' : 'light',
        language: 'en'
      };

      dispatch(settingsSlice.loadSettings(defaultSettings));
    } else {
      dispatch(settingsSlice.loadSettings(settings));
    }
  }, []);

  useEffect(() => {
    setSettings({ theme, language });
  }, [theme, language]);

  return {
    theme,
    changeTheme,
    language,
    changeLanguage
  };
}
