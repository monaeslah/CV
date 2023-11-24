import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => {
  const baseFontSize = 16;

  return {
    background: {
      width: "1440px",

      margin: "0 auto 30px auto",
      maxWidth: "100%",
    },

    headerBlock: {
      display: "flex",
      margin: "10px 24px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: "24px 0",
        margin: "10px 24px",
        gap: "90px",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0px 24px",
      },
    },

    logoImg: {
      width: "34px",
      borderRadius: "50%",
      height: "34px",
    },
    title: {
      color: theme.palette.primary[100],
      display: "flex",
      gap: "10px",
      "& p": {
        margin: "10px 0 0 0",
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    headerItems: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",

      [theme.breakpoints.down("sm")]: {},
    },
    headerItem: {
      color: theme.palette.primary[400],
    },
    headerImage: {
      margin: "auto 0",
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
    },
  };
});

export default useStyles;
