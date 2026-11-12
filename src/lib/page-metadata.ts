import type { Metadata } from "next";
import { siteBrand, siteURL } from "./site";

export function publicPageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteURL}${path}`;
  const image = { url: `${siteURL}${siteBrand.path}`, width: siteBrand.width, height: siteBrand.height, alt: siteBrand.alt };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Coworks.dev", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
