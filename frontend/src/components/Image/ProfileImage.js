// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Stack from '@mui/material/Stack';
import { Typography, MenuItem } from '@mui/material';


const ProfileImage = ({ onImageChange, helperText, error }) => {

  const handleChange = (event) => {
    const file = event.target.files[0];
    onImageChange(file);
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
        <MenuItem disableRipple component="a"
          variant="navlink"
          sx={{ p: 0, width: 'fit-content', m: 0, my: 2, color: 'primary.main', fontWeight: 600, display: 'block', }}
        >
          Upload Image
        </MenuItem>
      </label>

      {error && (
        <Typography variant="caption" color="error" sx={{ mx: 1.5 }}>
          {helperText}
        </Typography>
      )}

    </Stack>
  );
};

export default ProfileImage;




