import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ChatForm } from '..';
import { theme } from '../../../theme';
import { ThemeProvider } from '@mui/material/styles';

describe('ChatForm тест', () => {
  it('должен отображать переданный в качестве children компонент', () => {
    render(
      <ThemeProvider theme={theme}>
        <ChatForm>
          <ChatForm.Title>Test</ChatForm.Title>
        </ChatForm>
      </ThemeProvider>
    );

    const text = screen.getByText('Test');
    expect(text).toBeTruthy();
  });

  it('должен вызвать onSubmit при нажатии на кнопку', () => {
    const onSubmit = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <ChatForm onSubmit={onSubmit} value='test'>
          <ChatForm.Button />
        </ChatForm>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith('test');
  });
});
