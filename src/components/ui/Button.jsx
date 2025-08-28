import React from "react";

import { Slot } from "@radix-ui/react-slot";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-white hover:bg-gray-100",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  ghost: "hover:bg-gray-100",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const sizes = {
  default: "h-10 px-4 py-2 text-sm rounded-md",
  sm: "h-9 px-3 text-sm rounded-md",
  lg: "h-16 px-8 text-base rounded-md",
  icon: "h-10 w-10 flex items-center justify-center rounded-md",
};

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={classNames(
          "inline-flex items-center justify-center text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
