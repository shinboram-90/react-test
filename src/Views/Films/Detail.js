import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { populateFilms } from '../../reducers/films/index';
import { BackButton } from '../../components/Buttons';
import { FilmsSectionTitle } from '../../components/Titles';

const FilmDetail = () => {
  const moviesObject = useSelector(populateFilms);
  const moviesList = moviesObject.payload.films.list;
  const params = useParams();
  const filmId = parseInt(params.filmId);

  const moviesArray = Object.keys(moviesList).map(function (key) {
    return moviesList[key];
  });
  const movie = moviesArray.filter((x) => x.id === filmId);

  return (
    <div>
      <FilmsSectionTitle />
      <BackButton />
      <img
        src={`https://image.tmdb.org/t/p/original/${movie[0].poster_path}`}
        alt="Movie description"
      />
      <h1>{movie[0].title}</h1>
      <p>{movie[0].overview}</p>
    </div>
  );
};

export default FilmDetail;
