import {
  authReducer,
  getLogout,
  getSignIn,
  getSignInFailure,
  getSignUp,
  getSignUpFailure,
} from '..';

describe('authReducer тест', () => {
  it('SIGN_IN тест', () => {
    const state = {
      status: false,
      userId: null,
      error: null,
    };
    const action = getSignIn('test');
    const expected = {
      status: true,
      userId: 'test',
      error: null,
    };
    const result = authReducer(state, action);
    expect(expected).toEqual(result);
  });

  it('SIGN_IN_FAILURE тест', () => {
    const state = {
      status: false,
      userId: null,
      error: null,
    };
    const action = getSignInFailure('error message');
    const expected = {
      status: false,
      userId: null,
      error: 'error message',
    };
    const result = authReducer(state, action);
    expect(expected).toEqual(result);
  });

  it('SIGN_UP тест', () => {
    const state = {
      status: false,
      userId: null,
      error: null,
    };
    const action = getSignUp('test');
    const expected = {
      status: true,
      userId: 'test',
      error: null,
    };
    const result = authReducer(state, action);
    expect(expected).toEqual(result);
  });

  it('SIGN_UP_FAILURE тест', () => {
    const state = {
      status: false,
      userId: null,
      error: null,
    };
    const action = getSignUpFailure('error message');
    const expected = {
      status: false,
      userId: null,
      error: 'error message',
    };
    const result = authReducer(state, action);
    expect(expected).toEqual(result);
  });

  it('LOGOUT тест', () => {
    const state = {
      status: true,
      userId: 'test',
      error: 'test',
    };
    const action = getLogout();
    const expected = {
      status: false,
      userId: null,
      error: null,
    };
    const result = authReducer(state, action);
    expect(expected).toEqual(result);
  });

  it('default тест', () => {
    const state = {
      status: true,
      userId: 'test',
      error: 'test',
    };
    const action = { type: 'TEST' };
    const expected = state;
    const result = authReducer(state, action);
    expect(expected).toEqual(result);
  });
});
