import { useEffect, useState } from 'react';
import { loadTheme } from '@fluentui/react';

export const defaultTheme = {
  palette: {
    themePrimary: '#6e30ba',
    themeLighterAlt: '#f8f5fc',
    themeLighter: '#e4d7f4',
    themeLight: '#ceb6ea',
    themeTertiary: '#a277d6',
    themeSecondary: '#7d44c2',
    themeDarkAlt: '#632ca8',
    themeDark: '#54258d',
    themeDarker: '#3e1b68',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
};

function useThemeLoader() {
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  useEffect(() => {
    loadTheme(defaultTheme);
    setIsThemeLoaded(true);
  }, []);
  return isThemeLoaded;
}

export default useThemeLoader;
