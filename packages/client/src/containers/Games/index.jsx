import React from 'react';
import { random } from 'lodash-es';
import GameBoardCanvas from 'components/GameBoardCanvas';

function createRandomGeneration(width = 40, height = 40) {
  const generation = new Array(width);
  for (let i = 0; i < generation.length; i += 1) {
    generation[i] = [];
    for (let j = 0; j < height; j += 1) {
      generation[i][j] = random(0, 1, false);
    }
  }
  return generation;
}
const cells = createRandomGeneration();

function Games() {
  return <GameBoardCanvas data={cells} />;
}

export default Games;
