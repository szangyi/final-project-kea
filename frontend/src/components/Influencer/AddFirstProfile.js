import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const AddFirstProfile = () => {

  return (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        backgroundColor: '#A4B0FF',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Button
        href="/create-profile"
        startIcon={<AddIcon />}>
        Add your first profile
      </Button>
    </Box>
  );



}

export default AddFirstProfile;


