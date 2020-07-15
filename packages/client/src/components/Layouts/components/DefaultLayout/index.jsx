import React from 'react';
import withStyles from '../../../../hocs/withStyles';
import PropTypes from 'prop-types';

const styles = theme => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      selectors: {
        ':global(body)': {
          backgroundColor: theme?.semanticColors?.bodyBackground,
        },
      },
    },
  };
};

function DefaultLayout({ children, classNames, ...rest }) {
  return (
    <div className={classNames.root}>
      <div>
        <div>
          <div>Game Of Life</div>
        </div>
        <div />
        <div>Creatures</div>
        <div>Generations</div>
        <div>Genes</div>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default withStyles(DefaultLayout, styles);
