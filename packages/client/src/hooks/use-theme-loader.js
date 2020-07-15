import { useEffect, useState } from 'react';
import { loadTheme } from '@fluentui/react';

export const defaultTheme = {
  palette: {
    themePrimary: '#00e8e0',
    themeLighterAlt: '#000909',
    themeLighter: '#002524',
    themeLight: '#004643',
    themeTertiary: '#008b87',
    themeSecondary: '#00ccc5',
    themeDarkAlt: '#17eae3',
    themeDark: '#39eee8',
    themeDarker: '#6bf2ee',
    neutralLighterAlt: '#300632',
    neutralLighter: '#380a3a',
    neutralLight: '#451048',
    neutralQuaternaryAlt: '#4d1550',
    neutralQuaternary: '#541957',
    neutralTertiaryAlt: '#702f74',
    neutralTertiary: '#fff3d4',
    neutralSecondary: '#fff5db',
    neutralPrimaryAlt: '#fff7e2',
    neutralPrimary: '#ffedbf',
    neutralDark: '#fffbf0',
    black: '#fffdf7',
    white: '#270429',
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
