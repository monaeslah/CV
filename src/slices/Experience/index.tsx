"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/experiemce";
import { Typography } from "@mui/material";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  const classes = useStyles();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={classes.featureBlock}>
        <Typography variant="h3" className={classes.featureHeading}>
          {slice.primary.title}
        </Typography>
        <div className={classes.featuresList}>
          {slice.items.map((item: any, index: any) => {
            return (
              <div className={classes.featureContainer} key={index}>
                <Typography variant="h2" className={classes.title}>
                  <>{item.title}</>
                </Typography>
                <Typography variant="subtitle1" className={classes.SubTitle}>
                  {item.date}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.featureItemsDescription}
                >
                  {item.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
