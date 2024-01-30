import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    position: "relative",
    background: "#050416", // $blue_darkest
    width: 800,
    height: 600,
    boxShadow: "0 4px 10px rgba(5, 4, 22, 0.3)",
    borderRadius: 4,
    "& *": {
      position: "absolute",
      boxSizing: "border-box",
      "&:after, &:before": {
        position: "absolute",
      },
    },
  },
  telescope: {
    top: "38%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-20deg)",
    transformOrigin: "50% 100%",
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    animation: "$move 3s ease-in-out 2s infinite alternate",
    "& > *": {
      position: "relative",
    },
    "& $part1, & $part2, & $part3, & $part4, & $lens": {
      // Define nested classes here
    },
  },
  part1: {
    width: 50,
    height: 50,
    background: "linear-gradient(to right, #1d134f 30%, #241d5f 30%)", // $body_dark, $body
  },
  part2: {
    width: 110,
    height: 70,
    background: "#1d134f", // $body_dark
  },
  part3: {
    width: 200,
    height: 100,
    background:
      "linear-gradient(to right, #241d5f 20%, #1d134f 20%, #1d134f 40%, #241d5f 40%, #241d5f 100%)", // $body, $body_dark
  },
  part4: {
    width: 80,
    height: 130,
    background:
      "linear-gradient(to right, #1d134f 26.66%, #241d5f 26.66%, #241d5f 36.66%, #1d134f 36.66%, #1d134f 63.32%, #241d5f 63.32%, #241d5f 73.32%, #1d134f 73.32%, #1d134f 100%)", // $body_dark, $body
    zIndex: 2,
  },
  lens: {
    height: 110,
    width: 60,
    background:
      "radial-gradient(circle at left bottom, #7a7bc5 20%, #7a7bc5 50%, #8588d9 50%, #8588d9 70%, #8c8edd 70%, #8c8edd 80%)", // Adjusted colors to simulate darken effect
    borderRadius: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
  },
  tripod: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: 4,
  },
  base: {
    width: 100,
    height: 35,
    background: "#241d5f", // $body
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    "&:before": {
      content: '""',
      background: "#1d134f", // $body_dark
      width: 30,
      height: 30,
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  leg1: {
    width: 20,
    height: 200,
    background: "#241d5f", // $body
    top: 5,
    left: "50%",
    transform: "translateX(-20%) rotate(-30deg) skewY(30deg)",
    transformOrigin: "50% 0",
    zIndex: 1,
  },
  leg2: {
    width: 20,
    height: 200,
    background: "#1d134f", // $body_dark
    top: 5,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },
  leg3: {
    width: 20,
    height: 200,
    background: "#241d5f", // $body
    top: 35,
    left: "50%",
    transform: "translateX(-80%) rotate(30deg) skewY(-30deg)",
    transformOrigin: "50% 0",
    zIndex: 1,
  },
  star1: {
    top: "60%",
    left: "80%",
    transform: "scale(1.3)",
    // Add shared star styles
  },

  star2: {
    top: "20%",
    left: "30%",
    // Add shared star styles
  },
  star3: {
    top: "70%",
    left: "30%",
    transform: "scale(0.8)",
    // Add shared star styles
  },
  halo: {
    width: 350,
    height: 350,
    background: "#8c8edd", // $blue_light
    borderRadius: "50%",
    opacity: 0.1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },

  star: {
    transformOrigin: "50% 50%",
    boxShadow: "0px 0px 20px 20px rgba(250, 203, 107, 0.3)", // $star
    "&:before, &:after": {
      content: '""',
      display: "inline-block",
      background: "#facb6b", // $star
      height: 30,
      width: 30,
      borderRadius: "100% 0 100% 0",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(45deg)",
    },
    "&:after": {
      transform: "translate(-50%, -50%) rotate(-45deg)",
    },
  },
  "@keyframes move": {
    "0%": {
      transform: "translate(-50%, -50%) rotate(-20deg)",
    },
    "70%": {
      transform: "translate(-50%, -50%) rotate(-10deg)",
    },
    "100%": {
      transform: "translate(-50%, -50%) rotate(-10deg)",
    },
  },
  // Continue defining all other classes
});
export default useStyles;
