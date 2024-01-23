"use client";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/portfolio";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio = ({ slice }: PortfolioProps): JSX.Element => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={classes.title}>
        <Typography variant={isSmallScreen ? "h5" : "h3"}>
          {slice.primary.title}
        </Typography>
      </div>
      {slice.items.map((item: any, index: any) => {
        return (
          <div className={classes.portfolioItems} key={index}>
            <PrismicNextImage field={item.cover} />
          </div>
        );
      })}
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
