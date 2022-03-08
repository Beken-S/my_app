const selectAuthStatus = (state) => state.auth.status;
const selectUserId = (state) => state.auth.userId;

export { selectAuthStatus, selectUserId };
