"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import useStyles from "../../generalAssets/styles/footer";
import { Theme, Typography, useMediaQuery } from "@mui/material";
import Input from "@/app/components/Input";
/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classes.background}
    >
      {" "}
      <div className={classes.footerContent}>
        <div className={classes.footerBlock}>
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
          <Typography variant="subtitle2" className={classes.child}>
            {" "}
            {slice.primary.message}
          </Typography>
          <div className={classes.socialMediaContainer}>
            {slice.items.map((item, index) => {
              return (
                <div className={classes.socialMediaMobile} key={index}>
                  <PrismicNextLink field={item.link}>
                    <PrismicNextImage field={item.icon} alt="" />
                  </PrismicNextLink>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className={classes.info}>


   {
                slice.items.map((item, index) => {
                  return (
                    <div className={classes.socialMediaMobile} key={index}>
                      <PrismicNextLink field={item.link}>
                        <PrismicNextImage field={item.icon} alt="" />
                      </PrismicNextLink>
                    </div>
                  );
                });
              }


          <div className={classes.footerAttribute}> */}
        {/* <Typography variant="h5" className={classes.title}>
                {slice.primary.title}
              </Typography>
              <Typography variant="subtitle2" className={classes.child}>
                {slice.primary.full_name}
              </Typography>
              <Input />
          
              <Input /> */}
        {/* </div>
        </div> */}
        <div className={classes.footerBlock}>
          <PrismicNextLink
            field={slice.primary.cv_d}
            className={classes.childCV}
          >
            <Typography variant="subtitle2" className={classes.child}>
              {slice.primary.email}
            </Typography>
          </PrismicNextLink>
          <Typography variant="subtitle2" className={classes.child}>
            {slice.primary.copy_right}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Footer;
