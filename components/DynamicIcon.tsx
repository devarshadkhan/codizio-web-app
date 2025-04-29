import { CircleDashed } from "lucide-react";
import * as Icons from 'lucide-react'
type DynamicIconProps = {
  name?: string | null;
};

export const DynamicIcon = ({ name }: DynamicIconProps) => {
  if (!name || typeof name !== "string") {
    const DefaultIcon = CircleDashed;
    return <DefaultIcon className="h-12 w-12" />;
  }

  const key = name?.charAt(0)?.toUpperCase() + name?.slice(1);
  const LucideIcon = (Icons as any)[key] || CircleDashed;

  return <LucideIcon className="h-12 w-12" />;
};

export const DynamicIcon1 = ({ name }: DynamicIconProps) => {
  if (!name || typeof name !== "string") {
    const DefaultIcon = CircleDashed;
    return <DefaultIcon className="h-12 w-12 text-purple-500" />;
  }

  const key = name?.charAt(0)?.toUpperCase() + name?.slice(1);
  const LucideIcon = (Icons as any)[key] || CircleDashed;

  return <LucideIcon className="h-12 w-12 text-purple-500" />;
};
