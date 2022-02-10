import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { changeName, toggleShowName } from '../store';

export function ProfilePage() {
  const dispatch = useDispatch();
  const { name, showName } = useSelector((state) => state);
  const [newName, setNewName] = useState('');

  const handleToggleShowName = () => {
    dispatch(toggleShowName);
  };

  const handleChangeName = () => {
    dispatch(changeName(newName));
  };

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <Container>
      <h2>Profile Page</h2>
      <fieldset>
        <label htmlFor='newUserName'>Change user name: </label>
        <input
          id='newUserName'
          value={newName}
          onChange={handleChangeNewName}
        />
        <button onClick={handleChangeName}>Change</button>
      </fieldset>
      <label htmlFor='userName'>Show user name: </label>
      <input
        id='userName'
        type='checkbox'
        value={showName}
        onChange={handleToggleShowName}
      />
      {showName && <h3>{name}</h3>}
    </Container>
  );
}
