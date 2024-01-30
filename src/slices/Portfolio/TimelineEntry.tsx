// "use client";
// import * as React from "react";
// import useStyles from "../../generalAssets/styles/portfolio";
// import Image from "next/image";
// import { Typography } from "@mui/material";
// import Hat from "../../generalAssets/images/hat.png";
// interface TimelineEntryProps {
//   position: "left" | "right";
// }

// const TimelineEntry: React.FC<TimelineEntryProps> = ({ position }) => {
//   const classes = useStyles();
//   return (
//     <>
//       <div
//         className={`${classes.entry} ${
//           position === "left" ? classes.leftEntry : classes.rightEntry
//         }`}
//       >
//         {position === "left" && <div className={classes.dot}></div>}
//         <Typography variant="h6" className={classes.date}>
//           Shahid Beheshti University, Iran
//         </Typography>
//         {/* Your content here */}
//         {position === "right" && <div className={classes.dot}></div>}
//       </div>
//       <div className={classes.icon}>
//         <Image src={Hat} width={40} height={40} alt="Picture of the author" />
//       </div>
//       <div
//         className={`${classes.entry} ${
//           position === "right" ? classes.leftEntry : classes.rightEntry
//         }`}
//       >
//         {position === "right" && <div className={classes.dot}></div>}
//         <Typography variant="h6" className={classes.date}>
//           2014 - 2016
//         </Typography>
//         {/* Your content here */}
//         {position === "left" && <div className={classes.dot}></div>}
//       </div>
//     </>
//   );
// };

// export default TimelineEntry;
