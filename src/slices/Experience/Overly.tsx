const Overlay = ({ children, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      <div className={classes.overlayContent}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  overlayContent: {
    // Styles for the content inside the overlay
  },
  // ... other styles ...
}));
