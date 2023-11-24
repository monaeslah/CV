"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import useStyles from "../../generalAssets/styles/header";
import { Typography } from "@mui/material";
/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const classes = useStyles();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
    >
      <div className={classes.headerBlock}>
        <div className={classes.title}>
          <PrismicNextImage
            field={slice.primary.logo}
            className={classes.logoImg}
            alt=""
          />
          {slice.primary.title}
        </div>
        <div className={classes.headerItems}>
          {slice.items.map((item, index) => {
            return (
              <Typography
                variant="subtitle1"
                className={classes.headerItem}
                key={index}
              >
                {" "}
                {item.label}
              </Typography>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
