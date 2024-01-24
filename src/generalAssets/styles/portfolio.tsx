import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  title: {
    color: theme.palette.primary[100],
    [theme.breakpoints.down("md")]: {
      color: theme.palette.primary[800],
    },
  },
  titleColor: {
    color: theme.palette.primary[600],
    lineHeight: "26px!important",
  },
  portfolioItems: {
    "& img": {
      width: "100%",
      height: "100%",
    },
  },

  ///////cards//////////
  sample: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    "--color": "#8A9B0F",
    "--border": "10px",
    "--offset": "20px",
    "--gap": "5px",
    "--_c":
      "var(--color) var(--border), #0000 0 calc(100% - var(--border)),var(--color) 0",
    "--_o": "calc(3 * var(--offset))",
    padding: `calc(var(--gap) + var(--border)) calc(var(--gap) + var(--border) + var(--offset)) 
              calc(var(--gap) + var(--border) + var(--offset)) calc(var(--gap) + var(--border))`,
    background: `linear-gradient(var(--_c)) var(--_o) var(--_o), linear-gradient(90deg, var(--_c)) var(--_o) var(--_o)`,
    backgroundSize: "calc(100% - var(--_o)) calc(100% - var(--_o))",
    backgroundRepeat: "no-repeat",
    filter: "grayscale(.4)",
    transition: ".5s",
    cursor: "pointer",

    "&:hover": {
      backgroundPosition: "0px 0px",
      backgroundSize: "calc(100% - var(--offset)) calc(100% - var(--offset))",
      filter: "grayscale(0)",
      transform: "translate(10px, 10px)",
    },
  },
  // other styles (like body) can be added her
}));

export default useStyles;
