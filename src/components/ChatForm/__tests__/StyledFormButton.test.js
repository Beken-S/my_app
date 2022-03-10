import React from 'react';
import { render } from '@testing-library/react';
import { StyledFormButton } from '..';
import { theme } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';

describe('StyledFormButton тест', () => {
  it('соответствует снимку', () => {
    const view = render(
      <ThemeProvider theme={theme}>
        <StyledFormButton />
      </ThemeProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
