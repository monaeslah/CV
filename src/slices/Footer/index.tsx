"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/footer";
import { Typography } from "@mui/material";
/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  const classes = useStyles();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
    >
      <div className={classes.footerBlock}>
        <div className={classes.footerContent}>
          <div className={classes.logoBlock}>
            <div className={classes.socialMediaContainer}>
              {slice.items.map((item, index) => {
                return (
                  <div className={classes.socialMediaIcon} key={index}>
                    <PrismicNextLink field={item.link}>
                      <PrismicNextImage field={item.icon} alt="" />
                    </PrismicNextLink>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.footerAttribute}>
              <Typography variant="h5" className={classes.title}>
                {slice.primary.title}
              </Typography>
              <Typography variant="subtitle2" className={classes.child}>
                {slice.primary.full_name}
              </Typography>
              <Typography variant="subtitle2" className={classes.child}>
                {slice.primary.email}
              </Typography>
              <Typography variant="subtitle2" className={classes.child}>
                {" "}
                {slice.primary.message}
              </Typography>
            </div>
          </div>
        </div>
        <Typography variant="subtitle2" className={classes.child}>
          {slice.primary.copy_right}
        </Typography>
      </div>
    </section>
  );
};

export default Footer;
