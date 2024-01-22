import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => {
  const baseFontSize = 16;

  return {
    background: {
      width: "1024px",

      margin: "0 auto 80px auto",
      maxWidth: "100%",
    },
    hobbieBlock: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "54px",
      flex: "1 0 0",
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        textAlign: "center",
        gap: "16px",

        width: "100%",
        "& h3": {
          fontSize: "40px!important",
        },
      },
    },
    hobbieContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: "24px 0",
        margin: "0px 24px 124px 24px",
        gap: "90px",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0px 24px",
      },
    },

    title: {
      color: theme.palette.primary[100],
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    hobbieItems: {
      width: "88%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "120px",
      [theme.breakpoints.down("sm")]: {},
    },
    hobbieItem: {
      color: theme.palette.primary[400],
    },
    hobbieImageBlock: {
      //   margin: "auto 0",
      width: "65px",
      height: "65px",
      borderRadius: "50%",
      margin: "auto",
      background: theme.palette.primary[100],
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
    },
    hobbieImage: {
      margin: "auto",
      width: "80%",
      height: "100%",

      [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
    },
  };
});

export default useStyles;
