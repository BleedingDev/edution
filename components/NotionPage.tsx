import * as React from "react"
import dynamic from "next/dynamic"
import Head from "next/head"
// import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/router"
import { PropsFrom } from "@utils/types"
import { ExtendedRecordMap } from "notion-types"
import { getPageTitle } from "notion-utils"
import { NotionRenderer } from "react-notion-x"
import TweetEmbed from "react-tweet-embed"

const linkFactory =
  (nested: string = "") =>
  // eslint-disable-next-line react/display-name
  (props: PropsFrom<typeof Link>) => <Link {...props} href={`${nested}${props.href}`} />

// -----------------------------------------------------------------------------
// dynamic imports for optional components
// -----------------------------------------------------------------------------

const Collection = dynamic(() => import("react-notion-x/build/third-party/collection").then((m) => m.Collection))
const Equation = dynamic(() => import("react-notion-x/build/third-party/equation").then((m) => m.Equation))
const Pdf = dynamic(() => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf), {
  ssr: false,
})
const Modal = dynamic(() => import("react-notion-x/build/third-party/modal").then((m) => m.Modal), {
  ssr: false,
})

const Tweet = ({ id }: { id: string }) => {
  return <TweetEmbed tweetId={id} />
}

export const NotionPage = ({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
  subpage,
}: {
  recordMap: ExtendedRecordMap
  previewImagesEnabled?: boolean
  rootPageId?: string
  rootDomain?: string
  subpage?: string
}) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!recordMap) {
    return null
  }

  const NestedLink = linkFactory(subpage)

  // TODO: Improve (Suffix with Coursition)
  const title = getPageTitle(recordMap)

  // useful for debugging from the dev console
  /*   if (typeof window !== "undefined") {
    const keys = Object.keys(recordMap?.block || {})
    const block = recordMap?.block?.[keys[0]]?.value
    const g = window as any
    g.recordMap = recordMap
    g.block = block
  } */

  const socialDescription = "Coursition glossary"

  // TODO: Improve
  const socialImage = "https://react-notion-x-demo.transitivebullsh.it/social.jpg"

  return (
    <>
      <Head>
        {socialDescription && (
          <>
            <meta name='description' content={socialDescription} />
            <meta property='og:description' content={socialDescription} />
            <meta name='twitter:description' content={socialDescription} />
          </>
        )}

        {socialImage ? (
          <>
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:image' content={socialImage} />
            <meta property='og:image' content={socialImage} />
          </>
        ) : (
          <meta name='twitter:card' content='summary' />
        )}

        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:creator' content='@transitive_bs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        components={{
          // ? NOTE (transitive-bullshit 3/12/2023): I'm disabling next/image for this repo for now because the amount of traffic started costing me hundreds of dollars a month in Vercel image optimization costs. I'll probably re-enable it in the future if I can find a better solution.
          // nextImage: Image,
          nextLink: Link,
          PageLink: NestedLink,
          Collection,
          Equation,
          Pdf,
          Modal,
          Tweet,
        }}

        // NOTE: custom images will only take effect if previewImages is true and
        // if the image has a valid preview image defined in recordMap.preview_images[src]
      />
    </>
  )
}
