"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Error`.
 */
export type ErrorProps = SliceComponentProps<Content.ErrorSlice>;

/**
 * Component for "Error" Slices.
 */
const Error = ({ slice }: ErrorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Error page
    </section>
  );
};

export default Error;
