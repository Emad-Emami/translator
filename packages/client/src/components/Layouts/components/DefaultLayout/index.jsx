import React from 'react';
import withStyles from '../../../../hocs/withStyles';
import PropTypes from 'prop-types';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

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

function DefaultLayout({ children, classNames, history: { push }, ...rest }) {
  const navLinkGroups = [
    {
      links: [
        {
          name: 'Home',
          url: '/',
          key: 'home',
        },
        {
          name: 'Creatures',
          url: '/creatures',
          key: '/creatures',
        },
        {
          name: 'Generations',
          url: '/generations',
          key: '/generations',
        },
        {
          name: 'Genes',
          url: '/genes',
          key: '/genes',
        },
      ],
    },
  ];

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
};

export default withStyles(DefaultLayout, styles);
