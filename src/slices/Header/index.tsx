"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import useStyles from "../../generalAssets/styles/header";
import { Button, Drawer, SwipeableDrawer, Typography } from "@mui/material";
import { useState } from "react";
/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const classes = useStyles();
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

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
              <PrismicNextLink
                field={item.link}
                key={index}
                className={classes.headerItem}
              >
                {" "}
                <Typography variant="subtitle1"> {item.label}</Typography>
              </PrismicNextLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
