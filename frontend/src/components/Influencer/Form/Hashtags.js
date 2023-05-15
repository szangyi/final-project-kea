import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';



const Hashtags = () => {
    return (
        <Stack spacing={3} sx={{ width: 500 }}>
            <Autocomplete
                multiple
                id="hashtags"
                options={hashtagsOptions}
                getOptionLabel={(option) => option && option.tag ? option.tag : "#like"}
                defaultValue={[hashtagsOptions[13]]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Chose your tags"
                        placeholder="Tags"
                    />
                )}
            />
        </Stack>
    );
};

export default Hashtags;

const hashtagsOptions = [
    { tag: '#love' },
    { tag: '#instagood'},
    { tag: '#photography' },
    { tag: '#fashion' }
]