"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
      <div className={classes.aboutBlock}>
        <Typography variant="h3" className={classes.title}>
          {slice.primary.title}
        </Typography>

        <div className={classes.aboutContainer}>
          {slice.items.map((item: any, index: any) => (
            <div className={classes.aboutItems} key={index}>
              <Typography variant="subtitle1" className={classes.aboutItem}>
                <div className={classes.aboutImageBlock}>
                  <PrismicNextImage
                    field={item.icon}
                    className={classes.aboutImage}
                    alt=""
                  />
                </div>
                <PrismicRichText field={item.title} />
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
