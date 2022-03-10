import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  getGists,
  selectGists,
  selectGistsLoading,
  selectGistsError,
} from '../store';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

export default function GistsPage() {
  const dispatch = useDispatch();
  const gistsList = useSelector(selectGists, shallowEqual);
  const isLoading = useSelector(selectGistsLoading, shallowEqual);
  const error = useSelector(selectGistsError, shallowEqual);

  const handleClick = () => {
    dispatch(getGists());
  };

  return (
    <Container>
      {error && <h3>{`Error: ${error}`}</h3>}
      <button onClick={handleClick}>{error ? 'Retry' : 'Get Gists'}</button>
      <ol>
        {isLoading ? (
          <CircularProgress />
        ) : (
          gistsList.map((e) => (
            <li key={e.id}>
              <a href={e.url}>{e.author}</a>
            </li>
          ))
        )}
      </ol>
    </Container>
  );
}
