import MyCustomTextField from "../../components/Form/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const SearchBar = ({ onChange, value }) => {
    return (
        <MyCustomTextField
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