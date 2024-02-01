// useStyles.ts
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  container: {
    // backgroundColor: "#038a8c",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    minHeight: "10vh",
    // width: "300px",
  },
  "@global": {
    "@font-face": {
      fontFamily: "Alfa Slab One",
      fontStyle: "normal",
      fontWeight: 600,
      src: "url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap')",
    },

    "@keyframes waviy": {
      "0%, 40%, 100%": {
        transform: "translateY(0)",
      },
      "20%": {
        transform: "translateY(-20px)",
      },
    },
  },
  waviy: {
    position: "relative",
    WebkitBoxReflect:
      "below -20px linear-gradient(transparent, rgba(0,0,0,.2))",
    fontSize: "30px",
  },
  span: {
    fontFamily: "'Alfa Slab One', cursive",
    position: "relative",
    display: "inline-block",
    color: "#038a8c",
    textTransform: "uppercase",
    animation: "$waviy 2s infinite",
    "&:nth-of-type(n)": {
      animationDelay: "calc(.1s * var(--i))",
    },
  },
}));

export default useStyles;
