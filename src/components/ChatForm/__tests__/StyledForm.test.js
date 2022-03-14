import React from 'react';
import { render } from '@testing-library/react';
import { StyledForm } from '..';
import { theme } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';

describe('StyledForm тест', () => {
  it('соответствует снимку', () => {
    const view = render(
      <ThemeProvider theme={theme}>
        <StyledForm />
      </ThemeProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
