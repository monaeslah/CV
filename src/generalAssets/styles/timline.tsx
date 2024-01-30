// timeline: {
//     position: "relative",
//     maxWidth: "100%",
//     background: theme.palette.primary[900],
//     padding: "40px 80px",
//     display: "flex",
//     justifyContent: "space-between",
//     [theme.breakpoints.down("md")]: {
//       padding: "24px",
//     },
//   },
//   line: {
//     position: "absolute",
//     left: "50%",
//     top: 0,
//     bottom: 0,
//     borderLeft: "2px solid #ffffff",
//     "::before": {
//       // This part extends the line above the timeline
//       content: '""',
//       position: "absolute",
//       top: "-20px", // Adjust as needed
//       left: "-1px", // Adjust for the border width
//       height: "20px", // Adjust as needed
//       borderLeft: "2px solid #ffffff", // Same as the line color
//     },
//     "::after": {
//       // This part extends the line below the timeline
//       content: '""',
//       position: "absolute",
//       bottom: "-20px", // Adjust as needed
//       left: "-1px", // Adjust for the border width
//       height: "20px", // Adjust as needed
//       borderLeft: "2px solid #ffffff", // Same as the line color
//     },
//   },

//   ////////
//   entry: {
//     position: "relative",
//     width: "calc(50% - 40px)", // Adjust the spacing as needed
//     padding: "20px",
//     boxSizing: "border-box",
//   },
//   leftEntry: {
//     float: "left",
//     textAlign: "right",
//   },
//   rightEntry: {
//     float: "right",
//     textAlign: "left",
//   },
//   icon: {
//     background: "white",
//     display: "block",
//     width: "40px",
//     height: "40px",
//     borderRadius: "40px",
//     backgroundSize: "cover",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 2,
//   },
//   dot: {
//     position: "absolute",
//     top: "50%",
//     left: "-6px",
//     transform: "translateX(-50%) translateY(-50%)",

//     borderRadius: "50%",
//     backgroundColor: theme.palette.secondary.main,
//     "& img": {
//       height: "12px",
//       width: "12px",
//     },
//   },
//   date: {
//     marginBottom: "20px",
//     color: theme.palette.secondary.main,
//   },
