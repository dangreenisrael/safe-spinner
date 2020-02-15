import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import SafeSpinner from '.';

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  cleanup();
});

const Inner = () => <>hello world</>;

describe('SafeSpinner', () => {
  it('Should render child component', async () => {
    const { getByText } = render(
      <SafeSpinner onTimeout={() => {}}>
        <Inner />
      </SafeSpinner>,
    );

    expect(getByText('hello world'));
  });

  it('Should call the `onTimeout` function at the default timeout', () => {
    const handleSpinnerTimeout = jest.fn();
    render(
      <SafeSpinner onTimeout={handleSpinnerTimeout}>
        <Inner />
      </SafeSpinner>,
    );
    expect(handleSpinnerTimeout).not.toHaveBeenCalled();
    jest.advanceTimersByTime(10000);
    expect(handleSpinnerTimeout).toHaveBeenCalled();
  });

  it('Should call the `onTimeout` function at the specified timeout (shorter than default)', () => {
    const handleSpinnerTimeout = jest.fn();
    render(
      <SafeSpinner onTimeout={handleSpinnerTimeout} timeout={5000}>
        <Inner />
      </SafeSpinner>,
    );
    expect(handleSpinnerTimeout).not.toHaveBeenCalled();
    jest.advanceTimersByTime(5000);
    expect(handleSpinnerTimeout).toHaveBeenCalled();
  });

  it('Should call the `onTimeout` function at the specified timeout (longer than default)', () => {
    const handleSpinnerTimeout = jest.fn();
    render(
      <SafeSpinner onTimeout={handleSpinnerTimeout} timeout={15000}>
        <Inner />
      </SafeSpinner>,
    );
    jest.advanceTimersByTime(10001);
    expect(handleSpinnerTimeout).not.toHaveBeenCalled();
    jest.advanceTimersByTime(5000);
    expect(handleSpinnerTimeout).toHaveBeenCalled();
  });

  it('Should NOT call the `onTimeout` function if the component unmounted before the timeout', () => {
    const handleSpinnerTimeout = jest.fn();
    render(
      <SafeSpinner onTimeout={handleSpinnerTimeout} timeout={5000}>
        <Inner />
      </SafeSpinner>,
    );
    expect(handleSpinnerTimeout).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    cleanup();
    jest.advanceTimersByTime(6000);
    expect(handleSpinnerTimeout).not.toHaveBeenCalled();
  });
});
