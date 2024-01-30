"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/hobbies";
import { Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `Hobbies`.
 */
export type HobbiesProps = SliceComponentProps<Content.HobbiesSlice>;

/**
 * Component for "Hobbies" Slices.
 */
const Hobbies = ({ slice }: HobbiesProps): JSX.Element => {
  const classes = useStyles();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
    >
      <div className={classes.hobbieBlock}>
        <Typography variant="h3" className={classes.title}>
          {slice.primary.title}
        </Typography>

        <div className={classes.hobbieContainer}>
          {slice.items.map((item, index) => {
            return (
              <div className={classes.hobbieItems} key={index}>
                <div className={classes.hobbieImageBlock}>
                  <PrismicNextImage
                    field={item.icon}
                    className={classes.hobbieImage}
                    alt=""
                  />
                </div>
                <Typography variant="subtitle1" className={classes.hobbieItem}>
                  {item.label}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
