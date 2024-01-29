"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/portfolio";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Card, Theme, Typography } from "@mui/material";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;
interface ImageItem {
  cover: any; // Replace 'any' with the correct type for your cover images from Prismic
  color?: string; // Optional color property for the background color of the card
}

// Define props for your main component if needed
interface MainComponentProps {
  slice: { items: ImageItem[] };
}
/**
 * Component for "Portfolio" Slices.
 */
const Portfolio = ({ slice }: PortfolioProps): JSX.Element => {
  const classes = useStyles();
  const imageStyles = [
    {}, // No additional styles for the first image
    { "--color": "#4ECDC4" }, // Styles for the second image
    { "--color": "#FF6B6B" }, // Styles for the third image
    { "--color": "#3a619b" }, // Styles for the third image
  ];
  const colorClasses = [
    classes.orange,
    classes.grey,
    classes.blue,
    classes.yellow,
  ];

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.slice_type}
    >
      <div className={classes.portfolioBlock}>
        <div className={classes.portfolioContents}>
          <div className={classes.title}>
            <Typography variant={isSmallScreen ? "h5" : "h3"}>
              {slice.primary.title}
            </Typography>
          </div>
          {/* <div className={classes.container}>
        {slice.items.map((image, index) => (
          <div
            className={`${classes.card} ${
              colorClasses[index % colorClasses.length]
            }`}
            key={index}
          >
            <PrismicNextImage
              field={image.cover}
              alt=""
              // className={classes.prismicImg}
            />
          </div>
        ))}
      </div> */}
          <div className={classes.sample}>
            {slice.items.map((item, index) => {
              return (
                <div className={classes.sampleVeiw} key={index}>
                  <PrismicNextLink field={item.linkto}>
                    {" "}
                    <PrismicNextImage
                      field={item.cover}
                      alt=""
                      className={classes.img}
                      style={
                        imageStyles[index]
                          ? (imageStyles[index] as React.CSSProperties)
                          : {}
                      }
                    />
                  </PrismicNextLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

// import Image from "next/image";
// import SchoolIcon from "../../generalAssets/images/icons8-school-50.png"; // Replace with the actual icon you want to use
// import TimelineEntry from "./TimelineEntry";
// import useStyles from "../../generalAssets/styles/portfolio";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { Theme } from "@mui/material";
// const Timeline = () => {
//   const classes = useStyles();
//   const isSmallScreen = useMediaQuery((theme: Theme) =>
//     theme.breakpoints.down("sm")
//   );

//   return (
//     <div className={classes.timeline}>
//       <div className={classes.line}></div>
//       <TimelineEntry position="left" />

//       {/* Repeat for each entry */}
//     </div>
//   );
// };

// export default Timeline;
