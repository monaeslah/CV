import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    "--g": "4px" /* the gap */,
    "--b": "12px" /* border thickness*/,
    "--c": "#669706" /* the color */,
    padding: "calc(var(--g) + var(--b))",
    "--_c": "#0000 0 25%, var(--c) 0 50%",
    "--_g1": "repeating-linear-gradient(90deg ,var(--_c)) repeat-x",
    "--_g2": "repeating-linear-gradient(180deg,var(--_c)) repeat-y",
    background: `
      var(--_g1) var(--_p, 25%) 0, var(--_g2) 0 var(--_p, 125%),
      var(--_g1) var(--_p, 125%) 100%, var(--_g2) 100% var(--_p, 25%)
    `,
    backgroundSize: "200% var(--b), var(--b) 200%",
    cursor: "pointer",
    filter: "grayscale(50%)",
    transition: ".3s",
    "&:hover": {
      "--_p": "75%",
      filter: "grayscale(0%)",
    },
  },
  // Other styles like body can be added here
  body: {
    margin: 0,
    minHeight: "100vh",
    display: "grid",
    placeContent: "center",
    gridAutoFlow: "column",
    gap: "30px",
    background: "pink",
  },
  // Additional styles can be added here
}));

export default useStyles;
