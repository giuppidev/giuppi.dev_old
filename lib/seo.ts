"use client";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import type { ComponentProps } from "react";

export function useSeoProps(
  props: Partial<ComponentProps<typeof NextSeo>> = {}
): Partial<ComponentProps<typeof NextSeo>> {
  const router = useRouter();

  const title = "giuppi.dev";
  const description = "Programmatore nomade";

  return {
    title,
    description,
    canonical: `https://giuppi.dev/${router.asPath}`,
    openGraph: {
      title,
      description,
      site_name: "giuppi.dev",
      url: `https://giuppi.dev/${router.asPath}`,
      type: "website",
      images: [],
    },

    ...props,
  };
}
