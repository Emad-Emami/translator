import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import GamePage from './GamePage';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <GamePage path="/" />
    </Router>
  );
}
