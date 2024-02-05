import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
  portfolioBlock: {
    maxWidth: "1024px",
    display: "flex",
    flexDirection: "column",
    padding: "76px",
    margin: "90px auto ",
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
  portfolioContents: {},
  title: {
    color: theme.palette.primary[100],
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      color: theme.palette.primary[100],

      marginBottom: "40px",

      textAlign: "center",
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
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "6px" /* Adjust the gap between cards */,
    padding: "6px" /* Padding around the grid */,
    margin: "auto",
    maxWidth: "1024px",
  },

  card: {
    width: "35%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px" /* Rounded corners for the cards */,
    overflow: "hidden",
    //  /* Adjust the height as necessary */,
    aspectRatio: 1 / 1,
    "& img": {
      maxWidth: "100%",
      height: "auto",
    },
  },

  orange: { backgroundColor: "#FFA500", margin: "auto" },
  grey: { backgroundColor: "#539c06ab", width: "300px" },
  blue: { backgroundColor: "#0000FF", width: "300px" },
  yellow: { backgroundColor: "#16147ea6" },
  ///////cards//////////
  sample: {
    width: "100%",
    maxWidth: "1024px",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  sampleVeiw: {
    width: "30%",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "50%",

      flexDirection: "column",
      padding: "0px 10px",
      margin: "0 auto",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    "--color": " #16147ea6",
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
  animation: {
    margin: "10px  auto",
  },
}));

export default useStyles;
