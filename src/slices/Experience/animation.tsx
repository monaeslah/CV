import React from "react";
import useStyles from "../../generalAssets/styles/animation";

const HappyMonaLisa = () => {
  const classes = useStyles();

  return (
    <div className={classes.frame}>
      <div className={`${classes.halo} ${classes.halo_1}`}></div>
      <div className={`${classes.halo} ${classes.halo_2}`}></div>
      <div className={classes.bodyContainer}>
        <div className={classes.shoulders}></div>
        <div className={classes.scarf}></div>
        <div className={classes.chest}></div>
        <div className={classes.neck}></div>
        <div className={classes.face}>
          <div className={classes.facialFeatures}>
            <div className={classes.eyes}>
              <div className={classes.eye}>
                <div className={classes.eyePupil}></div>{" "}
              </div>

              <div className={`${classes.eye} ${classes.eyeRight}`}>
                <div
                  className={`${classes.eyePupil} ${classes.eyePupilRight}`}
                ></div>{" "}
              </div>
            </div>
            <div className={classes.nose}></div>
            <div className={classes.mouth}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyMonaLisa;
