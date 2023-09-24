import { builder } from "@builder.io/sdk";
import { Metadata } from "next";
import { RenderBuilderContent } from "../../components/Builder";

import "builder-registry";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

// TODO: No page data, but should be same as in component
export async function generateMetadata(): Promise<Metadata> {
  const page = [];
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();
  const { title, description, image } = content?.data || {};

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Coursition",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@BleedingDev",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}
