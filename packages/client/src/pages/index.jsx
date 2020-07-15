import React from 'react';
import { Router } from '@reach/router';
import DefaultLayout from '../components/Layouts/components/DefaultLayout';
import GamePage from './GamePage';
import CreaturesPage from './CreaturesPage';
import GenerationsPage from './GenerationsPage';
import GenesPage from './GenesPage';
import useThemeLoader from '../hooks/use-theme-loader';

export default function Pages() {
  const isThemeLoaded = useThemeLoader();
  if (!isThemeLoaded) {
    return false;
  }
  return (
    <Router>
      <DefaultLayout path="/">
        <GamePage path="/" />
        <CreaturesPage path="/creatures" />
        <GenerationsPage path="/generations" />
        <GenesPage path="/genes" />
      </DefaultLayout>
    </Router>
  );
}
