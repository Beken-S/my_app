import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormTitle } from '..';
import { theme } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';

describe('FormTitle тест', () => {
  it('должен отображать переданный в качестве children текст', () => {
    render(
      <ThemeProvider theme={theme}>
        <FormTitle>Test</FormTitle>
      </ThemeProvider>
    );
    const text = screen.getByText('Test');
    expect(text).toBeTruthy();
  });
});
