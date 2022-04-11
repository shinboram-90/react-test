// https://api.themoviedb.org/3/search/movie?api_key=###&query=the+avengers
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchMovies } from '../reducers/films';
import { searchFilms } from '../reducers/films';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Similar to the List, getting the title from the user and doing the search depending on it
// An error will show when the string is empty because the url needs a string after "query"

const Search = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const moviesObject = useSelector(searchFilms);

  const moviesList = moviesObject.payload.films.list;

  useEffect(() => {
    dispatch(searchMovies(title));
  }, [dispatch, title]);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText="Minimum of 3 characters"
          id="demo-helper-text-misaligned"
          label="Search a movie"
          type="text"
          onInput={handleInput}
          size="small"
        />
      </Box>
      {title.length > 2 ? (
        <ul className="card__list--container">
          {moviesList.map((movie) => (
            <li className="card__list--items" key={`search${movie.id}`}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <span>popularity: {movie.popularity}</span>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

export default Search;
