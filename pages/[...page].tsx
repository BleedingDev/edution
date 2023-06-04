import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";

import { registerAccordion } from "@/components/builder/accordion";
import { registerAlert } from "@/components/builder/alert";
import { registerAlertDialog } from "@/components/builder/alertDialog";
import { registerAspectRatio } from "@/components/builder/aspectRatio";
import { registerAvatar } from "@/components/builder/avatar";
import { registerBadge } from "@/components/builder/badge";
import { registerButton } from "@/components/builder/button";
import { registerCalendar } from "@/components/builder/calendar";
import { registerCard } from "@/components/builder/card";
import { registerCheckbox } from "@/components/builder/checkbox";
import { registerCollapsible } from "@/components/builder/collapsible";
import { registerDialog } from "@/components/builder/dialog";
import { registerDropdown } from "@/components/builder/dropdown";
import { registerIcon } from "@/components/builder/icon";
import { registerInput } from "@/components/builder/input";
import { registerProgress } from "@/components/builder/progress";
import { registerScrollArea } from "@/components/builder/scrollArea";
import { registerSeparator } from "@/components/builder/separator";
import { registerSheet } from "@/components/builder/sheet";
import { registerTextarea } from "@/components/builder/textarea";
import { registerRadioGroup } from "@/components/builder/radioGroup";
import { registerSlider } from "@/components/builder/slider";
import { registerSelect } from "@/components/builder/select";
import { registerSwitch } from "@/components/builder/switch";

registerAccordion();
registerAlert();
registerAlertDialog();
registerAspectRatio();
registerAvatar();
registerBadge();
registerButton();
registerCalendar();
registerCard();
registerCheckbox();
registerCollapsible();
registerDialog();
registerDropdown();
registerIcon();
registerInput();
registerProgress();
registerRadioGroup();
registerScrollArea();
registerSelect();
registerSeparator();
registerSheet();
registerSlider();
registerSwitch();
registerTextarea();

// Replace with your Public API Key
builder.init("fc8c4845012a4bc1b1ad5def62ae864f");

// Define a function that fetches the Builder
// content for a given page
export async function getStaticProps({ params }: any) {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
}

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Builder
  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

// Define the Page component
export default function Page({ page }: any) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page is still being generated,
  // show a loading message
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
    </>
  );
}
