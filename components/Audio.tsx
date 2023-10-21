import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/audio.css";

import { alignClasses } from "@utils/puckUtils";
import { MediaCommunitySkin, MediaOutlet, MediaPlayer } from "@vidstack/react";

export function Audio({
  src,
  title,
  maxWidth,
  align,
  subtitles,
  chapters,
}: {
  src: string;
  title: string;
  maxWidth: number;
  align: keyof typeof alignClasses;
  subtitles?: {
    label: string;
    language: string;
    src: string;
    default?: boolean;
  }[];
  chapters?: { src: string; language: string }[];
}) {
  return (
    <div
      className={`flex ${alignClasses[align]}`}
      style={{ maxWidth: `${maxWidth}%` }}
    >
      <MediaPlayer title={title} src={src} crossorigin="">
        <MediaOutlet>
          {!!subtitles?.length &&
            subtitles.map((sub) => (
              <track
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
