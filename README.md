# Safe Spinner

This package helps address the risk of 'infinite spinners' by allowing you to fire a handler when they occur. Generally this would send an event to a service like [Sentry](https://getsentry.com/).

This component only renders it's children, it does not add any new UI element.

## Installation

`npm install safe-spinner`

`yarn add safe-spinner`

Note: typescript definitions are included out of the box

## Usage

### Props

| name        | type          | required | default     |
| ----------- | ------------- | -------- | ----------- |
| `onTimeout` | `() => void`  | yes      | `undefined` |
| `timeout`   | `number` (ms) | `no`     | `10000`     |

### Using the default 10 second timeout

```jsx
import React from 'react';
import SafeSpinner from 'safe-spinner';
import Spinner from './Spinner';

const handleSpinnerTimeout = () => {
  console.log('the spinner timed out after the 10 second default');
};
const MyComponent = () => {
  <SafeSpinner onTimeout={handleSpinnerTimeout}>
    <Spinner />
  </SafeSpinner>;
};
```

### Using a custom timeout

```jsx
import React from 'react';
import SafeSpinner from 'safe-spinner';
import Spinner from './Spinner';

const handleSpinnerTimeout = () => {
  console.log('the spinner timed out after 60 seconds ');
};
const MyComponent = () => {
  <SafeSpinner onTimeout={handleSpinnerTimeout} timeout={60000}>
    <Spinner />
  </SafeSpinner>;
};
```
