import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../../generalAssets/Themes/Theme";

import Header from "../../slices/Header";
import { components, getExtraPageContent } from "@/contentapi";
import {
  FooterSlice,
  HeaderSlice,
  Simplify,
  ExtraPageDocumentData,
} from "../../../prismicio-types";

import dynamic from "next/dynamic";
import { ErrorSlice } from "../../../prismicio-types";
import Footer from "@/slices/Footer";
type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */
async function Page({ params }: { params: Params }) {
  const pageData = await getExtraPageContent(params.uid);

  const prop: ExtraPageDocumentData =
    pageData.content as unknown as Simplify<ExtraPageDocumentData>;

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          slice={pageData.header.data.slices[0] as HeaderSlice}
          index={0}
          slices={[]}
          context={undefined}
        />

        <SliceZone slices={pageData.props?.slices} components={components} />
        <Footer
          slice={pageData.footer.data.slices[0] as FooterSlice}
          slices={[]}
          index={0}
          context={undefined}
        />
      </ThemeProvider>
    </>
  );
}
export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
