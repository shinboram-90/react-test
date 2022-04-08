import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/films/list');
  };
  return (
    <Button onClick={handleClick} variant="contained">
      Movies List
    </Button>
  );
};

export const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleClick} variant="contained">
      Retour
    </Button>
  );
};
