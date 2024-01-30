"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/education";
import { Theme, Typography, useMediaQuery } from "@mui/material";
/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
      id={slice.slice_type}
    >
      <div className={classes.background}>
        <div className={classes.educationBlock}>
          <div className={classes.title}>
            <Typography variant={isSmallScreen ? "h5" : "h3"}>
              {slice.primary.title}
            </Typography>
          </div>
          <div className={classes.educationContainer}>
            {slice.items.map((item, index) => {
              return (
                <div className={classes.educationContent} key={index}>
                  <div className={classes.cards}>
                    <div>
                      <Typography
                        variant={isSmallScreen ? "body1" : "h2"}
                        className={classes.titleColor}
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <div>
                      {" "}
                      <Typography
                        variant={isSmallScreen ? "body1" : "h6"}
                        className={classes.titleColor}
                      >
                        {item.date}
                      </Typography>
                    </div>
                  </div>

                  <Typography
                    variant={isSmallScreen ? "subtitle2" : "subtitle1"}
                    className={classes.descriptionColor}
                  >
                    {item.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
