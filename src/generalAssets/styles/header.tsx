import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => {
  const baseFontSize = 16;

  return {
    background: {
      maxWidth: "100%",
      background: theme.palette.primary[100],
      padding: "5px 80px",
      [theme.breakpoints.down("md")]: {
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "10",
        padding: "0px 10px",
      },
    },

    headerBlock: {
      maxWidth: "1024px",
      margin: "auto",
      height: "100px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        padding: "24px 0",
        margin: "10px 24px",
        gap: "0px",
      },
      [theme.breakpoints.down("md")]: {
        padding: "18px 15px",
        height: "78px",
      },
    },
    headerTitle: { color: theme.palette.primary[800] },
    container: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "48px",
      [theme.breakpoints.up("xl")]: {
        // gap: "66px",
      },
      [theme.breakpoints.down("lg")]: {
        gap: "12px",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    containerLink: {
      listStyleType: "none",
      cursor: "pointer",
      padding: "5px",
      "& a": {
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        fontSize: "16px",
        textDecoration: "none",
        fontWeight: "400",
        color: theme.palette.text.primary,
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
      justifyContent: "space-between",
      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "auto",
        flexDirection: "column",
      },
    },
    headerItem: {
      color: theme.palette.primary[400],
      textDecoration: "none",
      padding: "0 8px",
      [theme.breakpoints.down("sm")]: { marginLeft: "auto" },
    },
    headerImage: {
      margin: "auto 0",
      [theme.breakpoints.down("sm")]: {
        margin: "auto",
      },
    },
    logoController: {
      background: theme.palette.primary[100],
      display: "flex",
      justifyContent: "space-between",
      padding: "24px",
    },
    logoResponsive: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    hideMdUp: {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    overlayStyles: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
      zIndex: 9999, // Adjust the z-index to make sure it covers other content
      display: "block",
    },
    mobileMenu: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    mobileItemsColumn: {
      padding: theme.spacing(4),
    },
    mobileDrawer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: theme.spacing(4),
    },
    navigationContent: {
      textAlign: "center",
    },
    containerMobile: {
      background: theme.palette.primary[100],
      padding: "0px 24px 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      position: "relative",
      height: "100vh",
      justifyContent: "space-between",
    },
    closeBtn: {
      // position: "absolute",
      // left: "90%",
      // top: "9%",
      cursor: "pointer",
    },
  };
});

export default useStyles;
