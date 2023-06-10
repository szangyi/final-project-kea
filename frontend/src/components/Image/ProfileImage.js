import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const ProfileImage = ({ onImageChange, helperText, error }) => {

  const handleChange = (event) => {
    const file = event.target.files[0];
    onImageChange({image:file});
  };

  return (
    <Stack>
      <input
        accept="image/*"
        id="profileImage"
        multiple
        hidden
        type="file"
        onChange={handleChange}
      />
      
      <label htmlFor="profileImage">
        <Button variant="raised" component="span">
          Upload Image
        </Button>
      </label>

      {error && (
        <Typography variant="caption" color="error" sx={{mx: 1.5}}>
          {helperText}
        </Typography>
      )}
      
    </Stack>
  );
};

export default ProfileImage;




