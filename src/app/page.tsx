import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../generalAssets/Themes/Theme";
import { components } from "@/slices";
import Header from "../slices/Header";
import { generateStaticParams } from "@/contentapi";
import { FooterSlice, HeaderSlice } from "../../prismicio-types";
import Footer from "@/slices/Footer";
/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export default async function Index() {
  const { props, header, footer } = await generateStaticParams();

  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        slice={header.data.slices[0] as HeaderSlice}
        index={0}
        slices={[]}
        context={undefined}
      />
      <SliceZone slices={home.data.slices} components={components} />
      <Footer
        slice={footer.data.slices[0] as FooterSlice}
        index={0}
        slices={[]}
        context={undefined}
      />
    </ThemeProvider>
  );
}
