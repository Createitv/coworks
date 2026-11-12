import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Coworks.dev",
    short_name: "Coworks",
    description: "Independent Claude Cowork guides, workflow templates, and videos.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f7f0",
    theme_color: "#b95539",
    icons: [
      { src: "/coworks-app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
