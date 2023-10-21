import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  alignClasses,
  aspect,
  aspectRatio as twAspectRatio,
} from "@utils/puckUtils";
import { MediaCommunitySkin, MediaOutlet, MediaPlayer } from "@vidstack/react";

export function Video({
  src,
  title,
  maxWidth,
  aspectRatio,
  align,
  subtitles,
  chapters,
}: {
  src: string;
  title: string;
  maxWidth: number;
  aspectRatio: keyof typeof twAspectRatio;
  align: keyof typeof alignClasses;
  subtitles?: {
    label: string;
    language: string;
    src: string;
    default?: boolean;
  }[];
  chapters?: { src: string; language: string }[];
}) {
  const [width, height] = aspectRatio.split("/");
  const aspectRatioNumber = +width / +height;

  return (
    <div
      className={`flex ${aspect[aspectRatio]} ${alignClasses[align]} max-h-screen`}
      style={{ maxWidth: `${maxWidth}%` }}
    >
      <MediaPlayer
        title={title}
        src={src}
        aspectRatio={aspectRatioNumber}
        crossorigin=""
      >
        <MediaOutlet>
          {!!subtitles?.length &&
            subtitles.map((sub) => (
              <track
                key={sub.label}
                src={sub.src}
                label={sub.label}
                srcLang={sub.language}
                kind="subtitles"
                default={sub.default}
              />
            ))}

          {!!chapters?.length &&
            chapters.map((chapter) => (
              <track
                key={chapter.language}
                src={chapter.src}
                srcLang={chapter.language}
                kind="chapters"
                default
              />
            ))}
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    </div>
  );
}
