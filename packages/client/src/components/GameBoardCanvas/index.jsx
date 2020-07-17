import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function GameBoardCanvas({
  data,
  width = 800,
  height = 800,
  radius = 8,
  style,
  className,
}) {
  const [ctx, setCtx] = useState();
  const getRefCallback = useCallback(
    el => el && setCtx(el.getContext('2d')),
    [],
  );
  useEffect(() => {
    if (ctx && data.length) {
      const ratio = width / data[0].length;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < data.length; i += 1) {
        const row = data[i];
        for (let j = 0; j < row.length; j += 1) {
          const cell = row[j];
          ctx.beginPath();
          ctx.arc(
            i * ratio + ratio / 2,
            j * ratio + ratio / 2,
            radius,
            0,
            2 * Math.PI,
          );
          ctx.strokeStyle = '#c114c1';
          ctx.lineWidth = 0.2;
          ctx.stroke();
          if (cell) {
            ctx.fillStyle = '#c114c1';
            ctx.fill();
          }
        }
      }
    }
  }, [ctx, width, height, data, radius]);

  return (
    <canvas
      ref={getRefCallback}
      width={width}
      height={height}
      style={style}
      className={className}
    />
  );
}

GameBoardCanvas.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.bool])),
  ).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  className: PropTypes.string,
  radius: PropTypes.number,
};

export default GameBoardCanvas;
