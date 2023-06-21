// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


// --------------------------
// COMPONENTS ---------------
// --------------------------

import MyCustomTextField from "../../components/Form/TextField";




const SearchBar = ({ onChange, value }) => {
    return (
        <MyCustomTextField
            sx={{}}
            label="Search"
            variant="outlined"
            value={value}
            onChange={onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar