import React from 'react';
import {
  styled,
  classNamesFunction,
} from 'office-ui-fabric-react/lib/Utilities';

const getClassNames = classNamesFunction();
const withStyles = (WrappedComponent, styles) => {
  return styled(props => {
    const classNames = getClassNames(props?.styles, props?.theme);
    return <WrappedComponent {...props} classNames={classNames} />;
  }, styles);
};

export default withStyles;
