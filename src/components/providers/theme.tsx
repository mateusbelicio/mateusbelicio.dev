import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider attribute="data-theme" enableSystem {...props}>
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;
