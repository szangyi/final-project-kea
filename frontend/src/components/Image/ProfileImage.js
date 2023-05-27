import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ProfileImage = ({ onImageChange }) => {

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
    </Stack>
  );
};

export default ProfileImage;




