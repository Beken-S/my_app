import './style.scss';
import { useState } from 'react';
import { Button } from '../Button';

export function Form({ onSubmit }) {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
      onSubmit({ text: value, author: 'Me' });
      setValue('');
    }
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='form__input' value={value} onChange={handleChange} />
      <Button name='Send' />
    </form>
  );
}
