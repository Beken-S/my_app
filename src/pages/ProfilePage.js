import { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Container from '@mui/material/Container';
import { changeUsername, toggleShowUsername, selectProfile } from '../store';

export function ProfilePage() {
  const dispatch = useDispatch();
  const { username, showUsername } = useSelector(selectProfile, shallowEqual);
  const [newName, setNewName] = useState('');

  const handleToggleShowName = () => {
    dispatch(toggleShowUsername());
  };

  const handleChangeName = () => {
    dispatch(changeUsername(newName));
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
        checked={showUsername}
        onChange={handleToggleShowName}
      />
      {showUsername && <h3>{username}</h3>}
    </Container>
  );
}
