import React from 'react';
import { render } from '@testing-library/react';
import { StyledFormTextField } from '..';
import { theme } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';

describe('StyledFormTextField тест', () => {
  it('соответствует снимку', () => {
    const view = render(
      <ThemeProvider theme={theme}>
        <StyledFormTextField />
      </ThemeProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
