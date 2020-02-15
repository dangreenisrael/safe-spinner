import * as React from 'react';
import { render } from '@testing-library/react';
import SafeSpinner from '.';

test('Should render child component', async () => {
  const Inner = () => <>hello world</>;
  const { getByText } = render(
    <SafeSpinner>
      <Inner />
    </SafeSpinner>,
  );

  expect(getByText('hello world'));
});
