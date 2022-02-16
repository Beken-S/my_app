const selectProfile = (state) => state.profile;

const selectProfileUsername = (state) => state.profile.username;

const selectProfileShowUsername = (state) => state.profile.showUsername;

export { selectProfile, selectProfileShowUsername, selectProfileUsername };
