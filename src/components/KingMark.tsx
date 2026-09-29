import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  invert?: boolean;
  size?: number;
};

export function KingMark({ className, invert, size = 32 }: Props) {
  return (
    <Image
      src="/king-mark.png"
      alt="KING"
      width={size * 2}
      height={size}
      className={cn(
        "h-auto w-auto object-contain object-left",
        invert && "invert",
        className,
      )}
      style={{ height: size, width: "auto" }}
      priority
    />
  );
}
