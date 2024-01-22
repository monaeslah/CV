import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  experienceBlock: {
    maxWidth: "1024px",
    display: "flex",
    flexDirection: "column",
    gap: "96px",
    margin: "0 auto ",
    [theme.breakpoints.down("md")]: {
      gap: "40px",
      margin: "0 24px 40px 24px ",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 24px 124px 24px ",
      padding: "  0",
      "& h5": {
        fontSize: "40px!important",
      },
    },
  },
  experienceHeading: {
    color: theme.palette.primary[100],
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  experienceChildren: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "106px",
  },
  experiencesHeadline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  title: {
    color: theme.palette.primary[100],
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  SubTitle: {
    color: theme.palette.primary[200],

    maxWidth: "900px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  experiencesList: {
    display: "flex",
    alignItems: "flex-start",
    position: "relative" as "relative",
    justifyContent: "space-between",
    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "865px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  video: {
    marginTop: "40px",
    "& iframe": {
      background: "black",
      width: "720px",
      height: "400px",
      [theme.breakpoints.down("sm")]: {
        width: "375px",
        height: "210px",
      },
    },
  },
  richText: {
    "& ul": {
      margin: "0 0 0 13px",
      padding: "0",
      "& li": {
        ...theme.typography.body1,
      },
    },
  },
  experienceArrows: {
    position: "relative",
    width: "230px",
    height: "356px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
    borderRadius: "20px",
    marginBottom: "16px",
    [theme.breakpoints.down("md")]: {
      background: theme.palette.primary[50],
      width: "340px",
      marginBottom: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "340px",
      height: "auto",
      alignItems: "center",
      borderRadius: "10px",
      background: theme.palette.primary[50],
      marginBottom: "0px",
    },
  },
  experienceContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    flex: "1 0 50%",
    boxSizing: "border-box",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px auto 40px auto",
      maxWidth: "330px",
      width: "100%",
    },
  },

  experienceItem: {
    display: "flex",
    width: "95%",
    margin: "40px 0",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
    paddingLeft: "44px",
    color: theme.palette.primary[100],
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
      margin: "0",
      width: "100%",
      left: "6%",
      bottom: "3%",
    },
  },
  experienceItemsDescription: {
    color: theme.palette.primary[400],
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  experienceIcon: {
    maxWidth: "58px",
    height: "58px",
    [theme.breakpoints.down("sm")]: {},
  },
  experienceExample: {
    position: "absolute",
    bottom: "7%",
    left: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 18px",
    gap: "4px",
    color: theme.palette.primary[100],
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    textDecorationThickness: "1px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "288px",
      gap: "8px",
      height: "42px",
      bottom: "-6%",
      left: "-3%",
    },
  },
  experiencesContent: {
    maxWidth: "202px",
    height: "96px",
    marginBottom: "39px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  },

  experienceHiddenContent: {
    width: "220px",
    minHeight: "238px",
    padding: "26px",
    paddingLeft: "28px",
    position: "absolute",
    top: "370px",
    background: "rgba(241, 239, 255, 0.40)",
    borderRadius: "20px",
    color: theme.palette.primary[400],
    transition: "height 2s ease-in-out  ",
    "& p": {
      margin: "0",
    },
    [theme.breakpoints.down("sm")]: {
      width: "333px",
      height: "auto",
      position: "relative",
      border: " 0px",
      borderRadius: "0 0 20px 20px",
      padding: "0 26px 26px 26px",
    },
    "&.hidden": {
      display: "none",
    },
  },
  visible: {
    display: "block",
  },
}));

export default useStyles;
