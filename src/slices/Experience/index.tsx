"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/experiemce";
import { Theme, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import HappyMonaLisa from "./animation";
import TitleAnime from "./TitleAnime";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
interface IProps {
  text: string;
}
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [openItems, setOpenItems] = useState<boolean[]>(
    new Array(slice.items.length).fill(false)
  );
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState<
    number | null
  >(null);

  const handleCardClick = (index: number) => {
    if (selectedCard !== index) {
      setAnimate(true);
      setSelectedCard(index);
    } else {
      toggleDescriptionVisibility();
    }
    setTimeout(() => setAnimate(false), 600);
  };
  const toggleDescriptionVisibility = () => {
    if (selectedCard !== null) {
      setAnimate(true);
      setTimeout(() => {
        setSelectedCard(null);

        setTimeout(() => setAnimate(false), 600);
      }, 600);
    }
  };
  const toggleDescription = (index: number) => {
    if (expandedDescriptionIndex === index) {
      // If the description is already expanded, collapse it
      setExpandedDescriptionIndex(null);
    } else {
      // Expand the new description
      setExpandedDescriptionIndex(index);
    }
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.slice_type}
    >
      <div className={classes.experienceBlock}>
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          className={classes.experienceHeading}
        >
          {slice.primary.title}
        </Typography>
        <TitleAnime />
        <div className={classes.experiencesList}>
          {isSmallScreen ? (
            <>
              {" "}
              {slice.items.map((item: any, index: any) => {
                return (
                  <div className={classes.experienceContainer} key={index}>
                    <Typography variant="h2" className={classes.title}>
                      <>{item.title}</>
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.SubTitle}
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.experienceItemsDescription}
                    >
                      <Typography
                        variant="body1"
                        className={classes.experienceItemsDescription}
                      >
                        {expandedDescriptionIndex === index
                          ? item.description
                          : `${item.description.substring(0, 100)}...`}
                      </Typography>

                      {item.description.length > 100 && (
                        <p
                          className={`${classes.productPlatformBtn} ${
                            openItems[index]
                              ? classes.productPlatformBtnOpen
                              : ""
                          }`}
                          onClick={() => toggleDescription(index)}
                        >
                          {expandedDescriptionIndex === index
                            ? "Read Less"
                            : "Read More"}
                        </p>
                      )}
                    </Typography>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className={classes.flipped}>
                {slice.items.map((item, index) => (
                  <div
                    className={classes.experienceContainer}
                    key={index}
                    onClick={() => handleCardClick(index)}
                  >
                    <Typography
                      variant="h2"
                      className={`${classes.title} ${
                        selectedCard === index ? classes.underline : ""
                      }`}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={`${classes.SubTitle} ${
                        selectedCard === index ? classes.underline : ""
                      }`}
                    >
                      {item.date}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className={classes.flippedBack}>
                {selectedCard !== null ? (
                  <div
                    className={`${classes.fixedPositionBackCard} ${
                      animate ? classes.animateFlip : classes.animateFlipTwo
                    }`}
                  >
                    <div className={classes.flipCardFront}>
                      <Typography variant="h2" className={classes.title}>
                        {slice.items[selectedCard].title}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        className={classes.SubTitle}
                      >
                        {slice.items[selectedCard].date}
                      </Typography>
                    </div>
                    <Typography
                      variant="body1"
                      className={classes.experienceItemsDescription}
                    >
                      {slice.items[selectedCard].description}
                    </Typography>
                  </div>
                ) : (
                  <>
                    <HappyMonaLisa />
                  </>
                )}
              </div>
            </>
          )}
        </div>{" "}
      </div>
    </section>
  );
};

export default Experience;
