import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovies } from '../../reducers/films/index';
import { populateFilms } from '../../reducers/films/index';

import Pagination from '@mui/material/Pagination';

const FilmList = () => {
  const dispatch = useDispatch();
  const moviesObject = useSelector(populateFilms);

  const [page, setPage] = useState(1);

  const moviesList = moviesObject.payload.films.list;
  const totalPages = moviesObject.payload.films.total; //492 pages in the api

  const moviesArray = Object.keys(moviesList).map((key) => {
    return moviesList[key];
  });

  const handleChange = (e, value) => {
    setPage(value);
  };

  //Renders on first page load but need to add dispatch and the page number in the array to avoid unwanted side effects
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  return (
    <>
      <ul>
        {moviesArray.map((movie) => (
          <li className="" key={movie.id}>
            <Link to={`/films/${movie.id}`}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        onChange={handleChange}
        count={totalPages}
        variant="outlined"
      />
    </>
  );
};

export default FilmList;
