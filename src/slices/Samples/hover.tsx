import React from "react";
import useStyles from "../../generalAssets/styles/telescop";

const TelescopeComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.telescope}>
        <div className={classes.part1}></div>
        <div className={classes.part2}></div>
        <div className={classes.part3}></div>
        <div className={classes.part4}></div>
        <div className={classes.lens}></div>
      </div>

      <div className={classes.tripod}>
        <div className={classes.base}></div>
        <div className={classes.leg1}></div>
        <div className={classes.leg2}></div>
        <div className={classes.leg3}></div>
      </div>

      <div className={`${classes.star} ${classes.star1}`}></div>
      <div className={`${classes.star} ${classes.star2}`}></div>
      <div className={`${classes.star} ${classes.star3} `}></div>

      <div className={classes.halo}></div>
    </div>
  );
};

export default TelescopeComponent;
