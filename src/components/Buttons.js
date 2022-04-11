import { useNavigate } from 'react-router-dom';

// MUI styles
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Adding some responsive
const drawerWidth = {
  width: '50%',
  marginTop: '2rem',
  marginBottom: '3rem',
  '@media (min-width: 780px)': {
    width: '400px',
  },
};

// Creating a custom button to copy the mockup
const GreyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  backgroundColor: grey[300],

  '&:hover': {
    backgroundColor: grey[400],
  },
}));

export const HomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/films/list');
  };

  return (
    <Button
      onClick={handleClick}
      sx={drawerWidth}
      variant="contained"
      size="small"
      color="secondary"
    >
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
    <GreyButton
      onClick={handleClick}
      size="small"
      variant="contained"
      sx={drawerWidth}
    >
      Retour
    </GreyButton>
  );
};
