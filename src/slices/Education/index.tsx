"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/education";
import { Typography } from "@mui/material";
/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
  const classes = useStyles();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
    >
      <div className={classes.background}>
        <div className={classes.productBlock}>
          <div className={classes.productContent}>
            <Typography variant="h1" className={classes.titleColor}>
              {slice.primary.title}
            </Typography>
          </div>
          <div className={classes.educationContainer}>
            {slice.items.map((item, index) => (
              <div className={classes.productContent} key={index}>
                <div className={classes.cards}>
                  <div>
                    <Typography variant="h2" className={classes.titleColor}>
                      {item.title}
                    </Typography>
                  </div>
                  <div>
                    {" "}
                    <Typography variant="h6" className={classes.titleColor}>
                      {item.date}
                    </Typography>
                  </div>
                </div>

                <Typography
                  variant="subtitle1"
                  className={classes.descriptionColor}
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
