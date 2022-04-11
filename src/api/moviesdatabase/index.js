import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

//
// TIP : Utiliser une instance avec axios en respectant les usecases (implementer une instance)
//
let instance = axios.create({
  baseUrl: URL,
  headers: `Authorization: Bearer${BEARER_TOKEN}`,
});

export const getFilmsList = async (page) => {
  const apiKeySearch = '?api_key=';
  const url = `${URL}movie/top_rated${apiKeySearch + API_KEY}&page=${page}`;

  const response = await axios.get(url, instance);
  if (response) {
    return {
      mList: response.data.results,
      totalPages: response.data.total_pages,
    };
  } else {
    console.log("Couldn't fetch data, maybe check your api key");
  }

  // TODO : implementer getFilmsList
  //
};

// Extra for searching a movie by title, cannot use the previous API since I cannot search all the pages at once according to their documentation
// Please ignore this part if this was not the expected result
export const searchMovieByTitle = async (title) => {
  const apiKeySearch = '?api_key=';
  const url = `${URL}search/movie${apiKeySearch + API_KEY}&query=${title}`;

  const response = await axios.get(url, instance);
  if (response) {
    return response.data.results;
  } else {
    console.log('The search was unsuccessfull');
  }
};
