import React from "react";

interface Props {
  src: string;
  title: string;
  width: number;
  height: number;
}

export function Embed({ src, title, width, height }) {
  return (
    <iframe
      referrerPolicy="no-referrer"
      sandbox=""
      src={src}
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}
