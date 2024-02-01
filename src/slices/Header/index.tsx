"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import useStyles from "../../generalAssets/styles/header";
import { Button, Drawer, SwipeableDrawer, Typography } from "@mui/material";
import { useState } from "react";
import { removeHttps } from "@/contentapi";
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
          <a href="/">
            <PrismicNextImage
              field={slice.primary.logo}
              className={classes.logoImg}
              alt=""
            />
          </a>
          {slice.primary.title}
        </div>
        <PrismicNextImage
          field={slice.primary.responsive_menu}
          onClick={() => setOpenMobileDrawer(!openMobileDrawer)}
          className={classes.mobileMenu}
          alt=""
        />
        <div className={classes.container}>
          <div className={classes.headerItems}>
            {slice.items.map((item, index) => {
              return (
                <PrismicNextLink
                  field={removeHttps(item.link)}
                  key={index}
                  className={classes.headerItem}
                >
                  {" "}
                  <Typography
                    variant="subtitle1"
                    className={classes.headerTitle}
                  >
                    {" "}
                    {item.label}
                  </Typography>
                </PrismicNextLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className={overlayActive ? classes.hideMdUp : ""}>
        <SwipeableDrawer
          open={openMobileDrawer}
          onClose={() => setOpenMobileDrawer(false)}
          onOpen={() => setOpenMobileDrawer(true)}
          anchor="top"
        >
          <div className={classes.logoController}>
            <PrismicNextImage
              field={slice.primary.logo}
              className={classes.logoImg}
              alt=""
            />
            <PrismicNextImage
              field={slice.primary.close_responsive}
              className={classes.closeBtn}
              onClick={() => setOpenMobileDrawer(false)}
              alt=""
            />
          </div>
          <div className={`${classes.mobileDrawer} ${classes.containerMobile}`}>
            <div className={classes.navigationContent}>
              {slice.items.slice(0, -1).map((item, index) => (
                <Typography
                  variant="body2"
                  noWrap
                  className={classes.containerLink}
                  key={index}
                >
                  <PrismicNextLink
                    field={item.link}
                    onClick={() => setOpenMobileDrawer(false)}
                  >
                    {item.label}
                  </PrismicNextLink>
                </Typography>
              ))}
            </div>
            <div className={classes.lastTwoItemsWrapper}>
              {slice.items.slice(-1).map((item, index) => (
                <Typography
                  variant="body2"
                  noWrap
                  className={index === 1 ? classes.tryLink : classes.tryLink}
                  key={index}
                >
                  <PrismicNextLink
                    field={item.link}
                    onClick={() => setOpenMobileDrawer(false)}
                  >
                    {item.label}
                  </PrismicNextLink>
                </Typography>
              ))}
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    </section>
  );
};

export default Header;
