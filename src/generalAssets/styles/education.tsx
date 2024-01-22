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

  educationBlock: {
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
    background: theme.palette.primary[700],
    // background: "#e1f3f7",

    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      background: theme.palette.primary[800],

      minHeight: "640px",
      padding: "20px",
      margin: "50px auto",
      gap: "20px",
      maxWidth: "405px",
      width: "100%",
    },
  },
  educationContent: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    [theme.breakpoints.down("md")]: {
      background: theme.palette.primary[700],
      borderRadius: "30px",
      padding: "20px",
    },
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
  title: {
    color: theme.palette.primary[800],
    [theme.breakpoints.down("md")]: {
      color: theme.palette.primary[800],
    },
  },
  titleColor: {
    color: theme.palette.primary[600],
    lineHeight: "26px!important",
  },
  descriptionColor: {
    maxWidth: "950px",
    color: theme.palette.primary[600],
    // color: "#18292f",
    paddingBottom: "16px",
  },
  educationsGroup: {
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
      width: "270px",
      height: "153px",
      margin: "0px",
      position: "initial",
      transform: "translateY(10%)",
    },
  },

  educationLists: {
    color: theme.palette.primary[400],
  },

  educationOpen: {
    display: "flex",
    gap: "12px",
    width: "100%",
  },
  educationPlatformBtnOpen: {},
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
