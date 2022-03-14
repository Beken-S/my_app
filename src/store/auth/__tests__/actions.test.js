import {
  FETCH_LOGOUT,
  FETCH_SIGN_IN,
  FETCH_SIGN_UP,
  getFetchLogout,
  getFetchSignIn,
  getFetchSignUp,
  getLogout,
  getSignIn,
  getSignInFailure,
  getSignUp,
  getSignUpFailure,
  LOGOUT,
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_UP,
  SIGN_UP_FAILURE,
} from '..';

describe('getSignIn тест', () => {
  it('получает аргументом userId, возвращает объект с type и payload', () => {
    const payload = 'userId';
    const expected = {
      type: SIGN_IN,
      payload,
    };
    const result = getSignIn(payload);
    expect(expected).toEqual(result);
  });
});

describe('getFetchSignIn тест', () => {
  it('получает аргументом объект с email и password, возвращает объект с type и payload', () => {
    const payload = {
      email: 'test@test.com',
      password: '123',
    };
    const expected = {
      type: FETCH_SIGN_IN,
      payload,
    };
    const result = getFetchSignIn(payload);
    expect(expected).toEqual(result);
  });
});

describe('getSignInFailure тест', () => {
  it('получает аргументом error, возвращает объект с type и payload', () => {
    const payload = 'error message';
    const expected = {
      type: SIGN_IN_FAILURE,
      payload,
    };
    const result = getSignInFailure(payload);
    expect(expected).toEqual(result);
  });
});

describe('getSignUp тест', () => {
  it('получает аргументом userId, возвращает объект с type и payload', () => {
    const payload = 'userId';
    const expected = {
      type: SIGN_UP,
      payload,
    };
    const result = getSignUp(payload);
    expect(expected).toEqual(result);
  });
});

describe('getFetchSignUp тест', () => {
  it('получает аргументом объект с name, email и password, возвращает объект с type и payload', () => {
    const payload = {
      name: 'test',
      email: 'test@test.com',
      password: '123',
    };
    const expected = {
      type: FETCH_SIGN_UP,
      payload,
    };
    const result = getFetchSignUp(payload);
    expect(expected).toEqual(result);
  });
});

describe('getSignUpFailure тест', () => {
  it('получает аргументом error, возвращает объект с type и payload', () => {
    const payload = 'error message';
    const expected = {
      type: SIGN_UP_FAILURE,
      payload,
    };
    const result = getSignUpFailure(payload);
    expect(expected).toEqual(result);
  });
});

describe('getLogout тест', () => {
  it('возвращает объект с type и payload', () => {
    const expected = {
      type: LOGOUT,
    };
    const result = getLogout();
    expect(expected).toEqual(result);
  });
});

describe('getFetchLogout тест', () => {
  it('возвращает объект с type и payload', () => {
    const expected = {
      type: FETCH_LOGOUT,
    };
    const result = getFetchLogout();
    expect(expected).toEqual(result);
  });
});
