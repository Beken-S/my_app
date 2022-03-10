import { signOut } from 'firebase/auth';
import { call } from 'redux-saga/effects';
import { auth } from '../../../services';
import { fetchLogout } from '../sagas';

describe('fetchLogout тест', () => {
  const generator = fetchLogout();

  it('должна вызвать функцию signOut', () => {
    const expected = generator.next().value;

    expect(expected).toEqual(call(signOut, auth));
  });
  it('ожидание новой итерации', () => {
    const expected = generator.next().done;

    expect(expected).toBeTruthy();
  });
});
