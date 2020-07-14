import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { Grid, Cell } from 'baseui/layout-grid';

export default function DefaultLayout({ children }) {
  return (
    <>
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>Game Of Life</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right}>
          Creatures
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          Generations
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>Genes</StyledNavigationList>
      </HeaderNavigation>
      <Grid>
        <Cell>{children}</Cell>
      </Grid>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
