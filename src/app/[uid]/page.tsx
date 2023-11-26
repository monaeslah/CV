import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Header from "../../slices/Header";
import { generateStaticParams } from "@/contentapi";
import { HeaderSlice } from "../../../prismicio-types";
import dynamic from "next/dynamic";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */
async function Page({ params }: { params: Params }) {
  const { props, header } = await generateStaticParams();

  return (
    <>
      <Header
        slice={header.data.slices[0] as HeaderSlice}
        index={0}
        slices={[]}
        context={undefined}
      />
      <SliceZone slices={props.slices} components={components} />
    </>
  );
}
export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
