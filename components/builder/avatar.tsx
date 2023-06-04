import {
  Avatar as AvatarPrimitive,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { iconUriList } from "./helpers/iconDataUri";

interface AvatarProps {
  imageUrl: string;
  alt: string;
  fallback: ReactNode;
}

export function Avatar({ imageUrl, alt, fallback }: AvatarProps) {
  return (
    <AvatarPrimitive>
      <AvatarImage src={imageUrl} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive>
  );
}

export function registerAvatar() {
  Builder.registerComponent(
    withChildren(dynamic(() => import("./avatar").then((mod) => mod.Avatar))),
    {
      name: "Avatar",
      inputs: [
        { name: "imageUrl", type: "file" },
        { name: "alt", type: "text", required: true },
        { name: "fallback", type: "text" },
      ],
      image: iconUriList.Avatar,
    }
  );
}
