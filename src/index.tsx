import * as React from 'react';

interface ISafeSpinner {
  children: React.ReactElement;
}

const SafeSpinner: React.FunctionComponent<ISafeSpinner> = props => {
  return props.children;
};

export default SafeSpinner;
