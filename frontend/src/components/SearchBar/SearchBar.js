import MyCustomTextField from "../../components/Form/TextField";

const SearchBar = ({ onChange, value }) => {
    return (
        <MyCustomTextField
            sx={{pb:2}}
            label="Search"
            variant="outlined"
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchBar