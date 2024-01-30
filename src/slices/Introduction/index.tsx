"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/introduction";
import { Typography, useMediaQuery, Theme } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Introduction`.
 */
export type IntroductionProps = SliceComponentProps<Content.IntroductionSlice>;

/**
 * Component for "Introduction" Slices.
 */
const Introduction = ({ slice }: IntroductionProps): JSX.Element => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
    >
      {" "}
      <div className={classes.introductionBlock}>
        <div className={classes.introductionContents}>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            className={classes.tagline}
          >
            {slice.primary.title}
          </Typography>
          <Typography
            variant="body1"
            className={classes.introductionDescription}
          >
            {" "}
            {slice.primary.subtitle}
          </Typography>
          <div className={classes.introductionItem}>
            <Typography variant="body2" className={classes.signUp}>
              {slice.primary.description}
            </Typography>
          </div>
        </div>
        <div className={classes.introductionImageSection}>
          <PrismicNextImage
            className={classes.introductionImage}
            field={slice.primary.avatar}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
