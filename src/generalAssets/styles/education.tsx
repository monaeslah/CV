import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  background: {
    [theme.breakpoints.up("md")]: {
      width: "1024px",
      margin: "0 auto 180px auto",
      maxWidth: "100%",
      marginTop: "40px",
    },
  },

  productBlock: {
    width: "864px",
    maxWidth: " 100%",
    margin: "auto",
    position: "relative",
    display: "flex",
    padding: "64px 20px",
    flexDirection: "column",
    alignItems: "center",
    gap: "106px",
    borderRadius: "30px",
    background: "#F8F8FF",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      minHeight: "1440px",
      padding: "20px",
      marginBottom: "100px",
      gap: "20px",
      maxWidth: "345px",
      width: "100%",
    },
  },
  productContent: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  moreContent: {
    display: "block",
    color: theme.palette.primary[100],
    "& ol": {
      color: theme.palette.primary[100],
      marginBottom: "20px",
      paddingLeft: "20px",
    },
  },
  titleColor: {
    color: theme.palette.primary[100],
    lineHeight: "26px!important",
  },
  descriptionColor: {
    maxWidth: "950px",
    color: theme.palette.primary[400],
    paddingBottom: "16px",
  },
  productsGroup: {
    position: "relative",
    minHeight: "855px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "1835px",
      marginBottom: "15px",
    },
  },
  educationContainer: {
    display: "flex",
    margin: "10px 50px",
    flexDirection: "column",
    textAlign: "left",
    width: "90%",
    gap: "50px",
    [theme.breakpoints.down("md")]: {
      width: "153px",
      height: "153px",
      margin: "0px",
      position: "initial",
      transform: "translateY(10%)",
    },
  },

  productLists: {
    color: theme.palette.primary[400],
  },

  productOpen: {
    display: "flex",
    gap: "12px",
    width: "100%",
  },
  productPlatformBtnOpen: {},
  cards: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      height: "99%",
    },
  },
}));

export default useStyles;

function child(arg0: number) {
  throw new Error("Function not implemented.");
}
