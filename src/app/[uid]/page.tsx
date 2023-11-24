import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Header from "../../slices/Header";
import { generateStaticParams } from "@/contentapi";
import { HeaderSlice } from "../../../prismicio-types";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export default async function Page({ params }: { params: Params }) {
  const { props, header } = await generateStaticParams();
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());
  console.log("header", props);

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
