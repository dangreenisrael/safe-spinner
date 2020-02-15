import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import SafeSpinner from 'safe-spinner';

export default {
  title: 'alert after 2 seconds',
  component: Button,
};

export const ShowSpinnerFor1Second = () => {
  const [showSpinner, setShowSpinner] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  });
  console.log(showSpinner);
  if (showSpinner) {
    return (
      <SafeSpinner
        timeout={2000}
        onTimeout={() => {
          window.alert('Its been 2 seconds');
        }}
      >
        Spinner
      </SafeSpinner>
    );
  }
  return <Button onClick={action('clicked')}>Hello Button</Button>;
};

export const ShowSpinnerForever = () => (
  <SafeSpinner
    timeout={2000}
    onTimeout={() => {
      window.alert('Its been 2 seconds');
    }}
  >
    Spinner
  </SafeSpinner>
);
