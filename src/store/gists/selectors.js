import { STATUSES } from '../../utils';

const selectGists = (state) => state.gists;

const selectGistsLoading = (state) =>
  state.gistsRequest.status === STATUSES.REQUEST;

const selectGistsError = (state) => state.gistsRequest.error;

export { selectGists, selectGistsError, selectGistsLoading };
