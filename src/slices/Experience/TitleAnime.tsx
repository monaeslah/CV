import React from "react";

import useStyles from "../../generalAssets/styles/Click";

const HappyMonaLisa = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.waviy}>
          {[
            "C",
            "L",
            "I",
            "C",
            "K",
            "\xa0",
            "\xa0",
            "T",
            "H",
            "E",
            "\xa0",
            "\xa0",
            "N",
            "A",
            "M",
            "E",
            "S",
            "\xa0",
            "😎",
          ].map((letter, index) => (
            <span
              key={index}
              style={{ "--i": index + 1 } as React.CSSProperties}
              className={classes.span}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default HappyMonaLisa;
