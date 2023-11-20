import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ConfigProvider, theme } from 'antd';

export type ThemeContextType = 'light' | 'dark';

export type ThemeContextProviderProps = {
  children: ReactNode;
};

export type ThemeContextConsumerProps = {
  currentTheme: ThemeContextType;
  changeTheme: () => void;
};

const THEME_KEY = '@finances:theme';

const { defaultAlgorithm, darkAlgorithm } = theme;

const ThemeContext = createContext({} as ThemeContextConsumerProps);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setTheme] = useState<ThemeContextType>(() => {
    const themeFromStorage = localStorage.getItem(
      THEME_KEY,
    ) as ThemeContextType;

    if (themeFromStorage) return themeFromStorage;

    const themeFromSystem = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    return themeFromSystem ?? 'light';
  });

  const changeTheme = useCallback(() => {
    setTheme(previousValue => {
      const newTheme = previousValue === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, newTheme);
      return newTheme;
    });
  }, []);

  const value = useMemo(
    () => ({
      currentTheme,
      changeTheme,
    }),
    [currentTheme, changeTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          algorithm: currentTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (Object.keys(context).length === 0) {
    throw new Error('useThemeContext must be used within a ThemeContext');
  }

  return context;
}
