import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import GamePage from './GamePage';
import CreaturesPage from './CreaturesPage';
import GenerationsPage from './GenerationsPage';
import HabitatsPage from './HabitatsPage';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <GamePage path="/" />
      <CreaturesPage path="/creatures" />
      <GenerationsPage path="/generations" />
      <HabitatsPage path="/habitats" />
    </Router>
  );
}
