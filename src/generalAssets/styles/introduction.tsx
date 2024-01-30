import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  background: {
    maxWidth: "100%",
    background: theme.palette.primary[100],
    marginBottom: "96px",
  },

  introductionBlock: {
    display: "flex",
    maxWidth: "1024px",
    margin: "auto",
    padding: "96px 0px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    background: theme.palette.primary[100],
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.down("lg")]: {
      padding: "96px 80px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "44px",
      flexDirection: "column",
      textAlign: "center",
      height: "auto",
      width: "100%",
    },
  },

  introductionContents: {
    maxWidth: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
    alignSelf: "stretch",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
      maxWidth: "400px",
      margin: "auto",
      textAlign: "center",
    },
  },

  tagline: {
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      margin: "auto !important",
    },
  },
  introductionDescription: {
    margin: "0",
    color: theme.palette.primary[800],
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "auto !important",
    },
  },
  introductionItem: {
    marginTop: "12px",
    display: "flex",
    alignItems: "flex-start",
    gap: "32px",
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",

      "& a": {
        width: "100%",
      },
    },
  },
  introductionImageSection: {
    // width: "550px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
      maxWidth: "300px",
      height: "450px",

      margin: "auto",
    },
  },
  introductionImage: {
    flexBasis: "0",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
  signUp: {
    display: "flex",
    padding: "10px 24px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",

    background: theme.palette.primary[100],
    color: theme.palette.text.primary,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "& a": {
        color: theme.palette.text.primary,
      },
    },
  },

  tryLink: {
    display: "flex",
    padding: "10px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    borderRadius: "40px",
    width: "100%",

    background: theme.palette.text.primary,
    "& a": {
      color: theme.palette.primary[100],
    },
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.text.primary,
      width: "100%",
    },
  },
}));

export default useStyles;
function child(arg0: number) {
  throw new Error("Function not implemented.");
}
