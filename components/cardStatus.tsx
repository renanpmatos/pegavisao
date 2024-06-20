import { Badge } from "./ui/badge";
import { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const statusVariants = tv({
  base: "",
  variants: {
    style: {
      green: "bg-emerald-500 color-slate-950",
    },
  },
  defaultVariants: {},
});

export type CardStatusProps = ComponentProps<"div"> &
  VariantProps<typeof statusVariants> & {};

export default function CardStatus({ className, ...props }: CardStatusProps) {
  return (
    <div>
      <Badge className={statusVariants()}>{props.children}</Badge>
    </div>
  );
}
