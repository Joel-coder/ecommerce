import React, { useContext, useEffect, useState } from "react";
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
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  // set styles through classes
  landingPageContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    backgroundColor: "red",
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
  },
}));

export default function LandingPage() {
  const classes = useStyles();
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
          <div className="bg-color-yellow wh-banner m-center border-round"></div>
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
          <div className="border-round ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </section>
        <section className="bg-color-yellow border-round ms-1">
          <div></div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["landingPage"])), // page must wait for this translation file to load
  },
});
