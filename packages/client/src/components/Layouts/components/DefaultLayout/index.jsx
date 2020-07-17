import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import withStyles from '../../../../hocs/withStyles';

const styles = theme => {
  return {
    root: {
      display: 'flex',
      selectors: {
        ':global(body)': {
          backgroundColor: theme?.semanticColors?.bodyBackground,
        },
      },
    },
    menu: {
      width: 300,
      minWidth: 300,
      maxWidth: 300,
    },
    context: {},
  };
};

function DefaultLayout({
  children,
  navLinkGroups,
  classNames,
  history: { push },
}) {
  function handleLinkClick(e, { key }) {
    e.preventDefault();
    push(key);
  }

  return (
    <div className={classNames.root}>
      <Nav
        className={classNames.menu}
        onLinkClick={handleLinkClick}
        ariaLabel="Navigation"
        groups={navLinkGroups}
      />
      <div className={classNames.content}>
        <div>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.object,
  history: PropTypes.object,
  navLinkGroups: PropTypes.array,
};

export default withStyles(DefaultLayout, styles);
