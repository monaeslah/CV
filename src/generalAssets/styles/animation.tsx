import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  frame: {
    width: "350px",
    height: "350px",
    backgroundColor: "#008a8c",
    borderRadius: "3px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    position: "relative",
    marginLeft: "40%",
  },
  halo: {
    background: "#fff",
    width: "550px",
    height: "400px",
    borderRadius: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  halo_1: {
    top: "-150px",
    backgroundColor: "#01cc9d",
  },
  halo_2: {
    top: "-250px",
    backgroundColor: "#4afeb3",
  },
  bodyContainer: {
    width: "100%",
    height: "72%",
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  shoulders: {
    width: "280px",
    height: "280px",
    backgroundColor: "#350036", // $dark
    borderRadius: "140px",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-180px",
    position: "absolute",
  },
  scarf: {
    height: "100%",
    width: "130px",
    backgroundColor: "#350036", // $dark
    left: "50%",
    borderRadius: "90px",
    transform: "translateX(-50%)",
    position: "absolute",
  },
  chest: {
    backgroundColor: "#fedd3a", // $yellow
    width: "260px",
    height: "140px",
    borderRadius: "140px 140px 0 0",
    transform: "rotate(-90deg)",
    bottom: "-115px",
    left: "-10px",
    position: "absolute",
  },
  neck: {
    height: "90%",
    width: "50px",
    backgroundColor: "#fedd3a", // $yellow
    left: "50%",
    bottom: 0,
    borderRadius: "40px 50px 0 0",
    boxShadow: "inset -4px 2px 2px rgba(0, 0, 0, 0.2)",
    transform: "translateX(-50%)",
    position: "absolute",
  },
  face: {
    backgroundColor: "#fedd3a", // $yellow
    width: "80px",
    height: "120px",
    borderRadius: "35px",
    boxShadow:
      "4px 6px 2px rgba(0, 0, 0, 0.2), inset -4px 2px 2px rgba(0, 0, 0, 0.2)",
    left: "120px",
    top: "22px",
    position: "absolute",
  },
  facialFeatures: {
    right: "15px",
    left: "0",
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  eyes: {
    width: "100%",
    height: "10px",
    top: "38%",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
  },
  eye: {
    width: "25px",
    height: "8px",
    border: "solid 2px #350036", // $dark
    borderColor: "#350036 transparent transparent transparent", // $dark
    borderRadius: "50%/8px 8px 0 0",
    position: "relative",
  },
  eyePupil: {
    width: "8px",
    height: "8px",
    backgroundColor: "#350036", // $dark
    borderRadius: "50%",
    position: "absolute",
    right: "4px",
    top: "-1px",
  },
  eyeRight: {
    animation: "$wink 5s infinite linear",
  },
  eyePupilRight: {
    animation: "$eyeball 5s infinite linear",
  },
  nose: {
    width: "17px",
    height: "9px",
    border: "solid 4px #b48e07", // $yellow_dark
    borderColor: "#b48e07 transparent transparent transparent", // $yellow_dark
    borderRadius: "0 0 50%/9px 9px",
    top: "65%",
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
  },
  mouth: {
    width: "35px",
    height: "8px",
    border: "solid 2px #350036", // $dark
    borderColor: "#350036 transparent transparent transparent", // $dark
    borderRadius: "50%/8px 8px 0 0",
    top: "75%",
    left: "50%",
    transform: "translateX(-50%) scaleY(-1)",
    position: "absolute",
  },
  // Define your keyframes here
  "@keyframes wink": {
    "0%": {
      borderRadius: "50%/8px 8px 0 0",
      transform: "translateY(0)",
    },
    "10%": {
      borderRadius: "0",
      transform: "translateY(50%)",
    },
    "20%, 100%": {
      borderRadius: "50%/8px 8px 0 0",
      transform: "translateY(0)",
    },
  },
  "@keyframes eyeball": {
    "0%": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
    "10%": {
      transform: "translateY(-50%) scale(1,0)",
    },
    "20%, 100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

export default useStyles;
