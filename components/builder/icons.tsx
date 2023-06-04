import * as icons from "lucide-react";
import React, { FC } from "react";

type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
};

const Icon: FC<IconProps> = ({ name, color, size, className }) => {
  const LucideIcon: any = icons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};

export { Icon };
