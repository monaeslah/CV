import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  experienceBlock: {
    maxWidth: "1024px",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "66px",
    margin: "0 auto ",
    marginBottom: "40px",
    padding: "0 76px",
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

    flexDirection: "row",
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
    maxWidth: "350px",
    width: "100%",
    borderRadius: "50px",
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
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "100%",
    },
  },
  productPlatformBtn: {
    margin: "0",
    color: theme.palette.primary[100],
    height: "40px",
    display: "flex",
    padding: "8px 18px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "400",
    cursor: "pointer",
    bottom: "5%",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    textDecorationThickness: "1px",
    [theme.breakpoints.down("md")]: {
      bottom: "0%!important",
    },
  },
  productPlatformBtnOpen: {
    bottom: "3%",
  },
  experienceIcon: {
    maxWidth: "58px",
    height: "58px",
    [theme.breakpoints.down("sm")]: {},
  },

  visible: {
    display: "block",
  },

  flipped: {
    position: "relative",
  },

  flippedBack: { position: "relative" },
  flipCardFront: { display: "flex", justifyContent: "space-between" },
  flipCardBack: {
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    right: "90%",

    cursor: "pointer",
  },
  underline: {
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    textDecorationThickness: "1px",
  },
  animateFlip: {
    animation: `$flipEffect 0.6s`,
  },
  "@keyframes flipEffect": {
    "100%": {
      transform: "rotateY(0deg)",
      opacity: 1,
    },
    "50%": {
      opacity: 0.5,
    },
    "0%": {
      transform: "rotateY(90deg)",
      opacity: 0,
    },
  },
  animateFlipTwo: { animation: `$flipEffect2 0.6s` },
  "@keyframes flipEffect2": {
    "0%": {
      transform: "rotateY(0deg)",
      opacity: 1,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      transform: "rotateY(90deg)",
      opacity: 0,
    },
  },
  fixedPositionBackCard: {
    zIndex: 1000,
    backgroundColor: theme.palette.primary[600],
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    width: "100%",
    maxHeight: "100%",

    margin: "0 10%",
    backfaceVisibility: "hidden",

    transformStyle: "preserve-3d",
  },
}));

export default useStyles;
