// https://api.themoviedb.org/3/search/movie?api_key=###&query=the+avengers
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { searchMovies } from '../reducers/films';
import { searchFilms } from '../reducers/films';

import Pagination from '@mui/material/Pagination';

const Search = () => {
  const { payload } = useSelector(searchFilms);
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const moviesObject = useSelector(searchFilms);

  const moviesList = moviesObject.payload.films.list;
  const totalPages = moviesObject?.payload?.films?.list?.total?.total_pages;
  const totalResults = payload?.films?.list?.total?.total_results;
  // const page = payload.films.list.total.page;

  const handleChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(searchMovies(title));
  }, [dispatch, title]);

  const moviesArray = Object.keys(moviesList).map((key) => {
    return moviesList[key];
  });
  console.log(moviesObject?.payload?.films?.list?.total?.page);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="...search a movie"
          onChange={handleInput}
        />
      </div>
      {title.length > 2 ? (
        <ul>
          {/* <p>Results: {totalResults}</p> */}
          {moviesArray[0].map((movie) => (
            <li className="" key={`search${movie.id}`}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <span>popularity: {movie.popularity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>Minimum of 3 characters</span>
      )}
      {title.length > 2 ? (
        <Pagination
          page={page}
          onChange={handleChange}
          count={500}
          variant="outlined"
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Search;
