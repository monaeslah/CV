// footerStyles.js or footerStyles.ts151680
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  background: {
    maxWidth: "100%",
    background: theme.palette.primary[100],
    padding: "40px 80px 10px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "24px",
    },
  },
  footerBlock: {
    background: theme.palette.primary[100],
    color: theme.palette.text.primary,
    display: "flex",

    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "40px",
    maxWidth: "1024px",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      padding: "24px",
      "& h6": {
        margin: "0 auto",
      },
    },
  },
  logo: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoResponsive: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  footerContent: {
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "stretch",
    gap: "320px",
    flexShrink: "0",
    textAlign: "left",
    width: "100%",

    [theme.breakpoints.down("lg")]: {
      gap: "120px",
      justifyContent: "spce-between",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      gap: "20px",
      alignItems: "center",
      textAlign: "center",
    },
  },
  footerDescription: {
    color: theme.palette.primary[800],
    fontWeight: "500!important" as any,
    paddingBottom: "10px",
  },
  contactField: { display: "flex", flexDirection: "column", minWidth: "160px" },

  logoBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "24px",
      alignItems: "center",
    },
  },
  register: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
    paddingTop: "10px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  detailIntro: { width: "250px" },

  socialMediaContainer: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
    flexWrap: "wrap",
  },
  socialMediaIcon: {
    display: "flex",
    flexDirection: "column",

    "& img": { cursor: "pointer", width: "58px", height: "58px" },
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  socialMediaMobile: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "& img": { cursor: "pointer", width: "58px", height: "58px" },
      "& a": {
        textDecoration: "none",
        color: "white",
      },

      margin: "auto",
      alignItems: "center",
      gap: "22px",
    },
  },
  copyright: {
    display: "flex",
    justifyContent: "center",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
      textAlign: "center",
    },
    "& span": {
      lineHeight: "inherit",
      letterSpacing: "1px",
      textAlign: "center",
      color: theme.palette.primary[800],
    },
    "& a": {
      fontSize: "12px",
      textDecoration: "none",
      paddingLeft: "25px",
      letterSpacing: "1px",
      color: theme.palette.primary[800],
    },
  },
  info: {
    display: "flex",
    gap: "120px",
    alignItems: "flex-start",
    "& p": {
      margin: "0",
      gap: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "347px",
    },
    [theme.breakpoints.up("md")]: {
      gap: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      gap: "10px",
      alignItems: "center",
      textAlign: "center",
    },
  },
  footerAttribute: {
    flexDirection: "column",
    minWidth: "240px",
    display: "flex",
    gap: "20px",
    // paddingBottom: "20px",
    [theme.breakpoints.down("md")]: {
      minWidth: "160px",
    },
    "& p": {
      margin: "0",
      color: theme.palette.primary[800],

      [theme.breakpoints.down("sm")]: {},
    },

    "& h5": {
      margin: "0",
      color: theme.palette.text.primary,

      fontSize: "16px",

      fontWeight: "400",
      lineHeight: "24px" /* 150% */,
      [theme.breakpoints.down("sm")]: {},
    },
  },
  //  ,
  title: {
    color: theme.palette.text.primary,
    margin: "0",
  },
  childCV: {
    color: theme.palette.primary[800],
    textDecoration: "none",
    cursor: "pointer",
  },
  child: {
    color: theme.palette.primary[800],
    textDecoration: "none",
  },
  scrollUp: { marginLeft: "auto" },
}));

export default useStyles;
function child(arg0: number) {
  throw new Error("Function not implemented.");
}
