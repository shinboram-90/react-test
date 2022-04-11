import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { fetchMovies } from '../../reducers/films/index';
import { populateFilms } from '../../reducers/films/index';

import Pagination from '@mui/material/Pagination';

import axios from 'axios';

const FilmList = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const moviesObject = useSelector(populateFilms);

  // Starts fetching movies fom page 1
  const [page, setPage] = useState(1);

  const MovieExcerpt = ({ movie }) => {
    return (
      <article key={movie.id}>
        <Link to={`/films/${movie.id}`}>
          <h3>{movie.title}</h3>
          <div>{movie.overview}</div>
        </Link>
      </article>
    );
  };

  const handleInput = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const handleChange = (e, value) => {
    setPage(value);
  };
  // useSelector returns an object, in my opinion it'll be easier to transform it to an array to display data
  const moviesList = moviesObject.payload.films.list;
  const totalPages = moviesObject.payload.films.total; //492 pages in the api

  // Converting the object to an array
  const moviesArray = Object.keys(moviesList).map((key) => {
    return moviesList[key];
  });

  // Renders on first page load but need to add dispatch and the page number in the array to avoid unwanted side effects
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, searchParams, page]);

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
        {/* <div>
          <input
            type="text"
            placeholder="...search a movie"
            value={searchParams.get('filter') || ''}
            onChange={handleInput}
          />
        </div> */}
        {/* {Object.values(moviesArray)
          .filter((movie) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let movieTitle = movie.title.toLowerCase();

            return movieTitle.includes(filter.toLowerCase());
          })
          .map((movie) => (
            <MovieExcerpt key={movie.id} movie={movie} />
          ))} */}
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
