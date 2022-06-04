import React, { useContext, useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { GlobalContext } from "../../store/globalStateProvider"; // global state
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useTranslation } from "next-i18next"; // i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // i18n
import { useRouter } from "next/router"; // i18n
import Link from "next/link"; // nextjs
import API from "../../api";
import Cards from "../../components/Cards";
import SearchBar from "../../components/SearchBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

export default function LandingPage() {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  const { exampleDispatch, exampleState, authState } =
    useContext(GlobalContext);
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("landingPage");
  useEffect(() => {
    exampleDispatch({ type: "SET_DISPLAY_TEXT", payload: "Updated Value" }); // dispatcher for updating global state
  }, []);

  // useEffect(() => {
  //     API().get(`/PATHNAME`) // example .get
  //         .then((response) => {
  //             if (response.data) {
  //                 console.log("response.data: ", response.data);
  //             }
  //         }).catch((e) => {
  //             console.log("Error: ", e);
  //         });
  // }, [])

  return (
    <>
      <main className="d-flex-row-center m-2">
        <section className="w-100 ">
          <SearchBar />
          <div className="bg-color-yellow wh-banner m-center border-round mb-5"></div>

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
              <Typography
                className={classes.navBarText}
                variant="h6"
                color="inherit"
                component="div"
              >
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="border-round mx-auto">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </section>
        <aside className={classes.sideBarContainer}>
          <div></div>
        </aside>
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
