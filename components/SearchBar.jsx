import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
const useStyles = makeStyles((theme) => ({
  // set styles through classes
  textField: {
    display: "relative",
  },
  searchIcon: {
    display: "absolute",
  },
}));
const SearchBar = () => {
  return (
    <>
      <FormControl sx={{ m: 1, width: "500px" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          endAdornment={
            <SearchIcon
              aria-label="toggle password visibility"
              edge="end"
            ></SearchIcon>
          }
          label="Password"
        />
      </FormControl>
    </>
  );
};

export default SearchBar;
