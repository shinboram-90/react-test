import { Outlet } from 'react-router-dom';
import FilmList from './List';
import { FilmsSectionTitle } from '../../components/Titles';

// With Outlet here it will display both the list and the movie details on the same page and it's not what we want...
// Created a title component instead to reuse it in the Detail.js file
const Films = () => {
  return (
    <div>
      <FilmsSectionTitle />
      <FilmList />
      <Outlet />
    </div>
  );
};

export default Films;
