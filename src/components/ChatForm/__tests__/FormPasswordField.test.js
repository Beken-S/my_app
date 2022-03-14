import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormPasswordField } from '..';

describe('ChatForm тест', () => {
  it('input должен содержать value', () => {
    render(<FormPasswordField value={'test'} />);

    const input = screen.getByLabelText('Password');
    expect(input.value).toEqual('test');
  });

  it('изменение в input должны вызывать onChange', () => {
    const onChange = jest.fn();

    render(<FormPasswordField onChange={onChange} />);
    const input = screen.getByLabelText('Password');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('должен отображать переданный helperText', () => {
    render(<FormPasswordField helperText={'test'} />);

    const helperText = screen.getByText('test');
    expect(helperText).toBeTruthy();
  });

  it('должен менять type у input (с password на text) при клике на кнопку', () => {
    const onChange = jest.fn();

    render(<FormPasswordField onChange={onChange} />);
    const input = screen.getByLabelText('Password');
    const button = screen.getByRole('button');

    expect(input.type).toEqual('password');

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(input.type).toEqual('text');
  });

  it('должен отображать иконку VisibilityIcon', () => {
    render(<FormPasswordField />);
    const icon = screen.getByTestId('VisibilityIcon');

    expect(icon).toBeTruthy();
  });

  it('должен менять иконку VisibilityIcon на VisibilityOffIcon при клике на кнопку', () => {
    render(<FormPasswordField />);
    const button = screen.getByRole('button');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    const icon = screen.getByTestId('VisibilityOffIcon');

    expect(icon).toBeTruthy();
  });
});
