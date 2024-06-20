import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground rounded-[12px] transition ease-in-out delay-100 duration-200 hover:bg-primary/90",
        outline:
          "border rounded-[10px] border-input bg-background hover:bg-accent hover:text-accent-foreground",
        light:
          "border rounded-[10px] border-primary bg-background transition ease-in-out delay-50 duration-200 hover:bg-primary hover:text-primary-foreground",
        ghost: "rounded-[12px] hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        shadow:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/30 rounded-[12px] transition ease-in-out delay-100 duration-200 hover:bg-primary/90",
      },
      size: {
        sm: "h-7 px-4 py-2 text-sm",
        md: "h-10 px-5 py-2",
        lg: "h-12 px-8 text-lg",
      },
      radius: {
        full: "rounded-full",
        lg: "rounded-[15px]",
        md: "rounded-[12px]",
        sm: "rounded-[8px]",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, color, variant, size, radius, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
