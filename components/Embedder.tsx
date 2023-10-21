interface Props {
  src: string;
  title: string;
  width: number;
  height: number;
}
export function EmbedWebsite({ src, title, width, height }) {
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}
