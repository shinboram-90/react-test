import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { populateFilms } from '../../reducers/films/index';

import { BackButton } from '../../components/Buttons';
import { FilmsSectionTitle } from '../../components/Titles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Detail.css';

const FilmDetail = () => {
  const moviesObject = useSelector(populateFilms);
  const moviesList = moviesObject.payload.films.list;

  // Retrieving the id in the url
  const params = useParams();
  const filmId = parseInt(params.filmId);

  const moviesArray = Object.keys(moviesList).map(function (key) {
    return moviesList[key];
  });
  const movie = moviesArray.filter((x) => x.id === filmId);

  return (
    <>
      <FilmsSectionTitle />
      <section>
        <BackButton />
        <div className="card__movie">
          <Card className="card__movie--container" sx={{ display: 'flex' }}>
            <CardMedia
              className="card__movie--img"
              component="img"
              image={`https://image.tmdb.org/t/p/original/${movie[0].poster_path}`}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent className="card__movie--content">
                <h2 component="div">{movie[0].title}</h2>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ fontSize: '0.8rem', lineHeight: '1.1' }}
                >
                  {movie[0].overview}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </section>
    </>
  );
};

export default FilmDetail;
