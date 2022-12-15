import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import App from './src/index.jsx';

describe('Jest+RTL Workshop', () => {
  const user = userEvent.setup();
  it('Overview should render', () => {
    render(<Overview />);

  })
});