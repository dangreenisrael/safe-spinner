import * as React from 'react';

interface ISafeSpinner {
  children: React.ReactElement;
  /**
   * Defaults to 10000 ms
   */
  timeout?: number;
  /**
   * This is called if the spinner is shown for longer than the timeout
   */
  onTimeout: () => void;
}

const SafeSpinner: React.FunctionComponent<ISafeSpinner> = props => {
  React.useEffect(() => {
    let timeoutId: number;
    if (props.onTimeout) {
      timeoutId = setTimeout(props.onTimeout, props.timeout || 10000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  });
  return props.children;
};

export default SafeSpinner;
