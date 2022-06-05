import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import SearchBar from "./SearchBar";
const useStyles = makeStyles((theme) => ({
  // set styles through classes
  landingPageContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    backgroundColor: "#c3c3c3",
    margin: 20,
  },
  navBar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  navBarText: {
    color: "black",
    "&:hover": {
      borderBottom: "1px solid pink",
    },
    "&:focus": {
      color: "red",
    },
  },
  sideBarContainer: {
    minWidth: "250px",
    backgroundColor: "#c3c3c3",
    marginLeft: "5px",
  },
}));
const navBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.navBar} variant="dense">
        <Typography
          className={classes.navBarText}
          variant="h6"
          color="inherit"
          component="div"
        >
          Photos
        </Typography>
        <Typography
          className={classes.navBarText}
          variant="h6"
          color="inherit"
          component="div"
        >
          Photos
        </Typography>
        <Typography
          className={classes.navBarText}
          variant="h6"
          color="inherit"
          component="div"
        >
          Photos
        </Typography>
        <Typography
          className={classes.navBarText}
          variant="h6"
          color="inherit"
          component="div"
        >
          Photos
        </Typography>
        <Typography
          className={classes.navBarText}
          variant="h6"
          color="inherit"
          component="div"
        >
          Photos
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default navBar;
