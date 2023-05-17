import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const ProfileImage = ({ onDataChange }) => {

  const handleChange = (event) => {
    const file = event.target.files[0];
    onDataChange({image:file});
  };

  return (
    <Stack>
      <input
        accept="image/*"
        id="profileImage"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="profileImage">
        <Button variant="raised" component="span">
          Upload
        </Button>
      </label>
    </Stack>
  );
};

export default ProfileImage;




