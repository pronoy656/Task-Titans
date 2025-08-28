import React from "react";

const Label = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={"font-medium text-lg leading-none " + className}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };
