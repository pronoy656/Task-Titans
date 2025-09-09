// // src/components/ui/Alert.jsx
// import React from "react";

// export function Alert({ variant = "default", children }) {
//   const baseStyle =
//     "relative w-full rounded-lg border p-4 flex items-start gap-2";
//   const variants = {
//     default: "bg-white text-black border-gray-300",
//     destructive: "bg-red-50 text-red-700 border-red-300",
//     success: "bg-green-200 text-green-700 border-green-300",
//     warning: "bg-yellow-50 text-yellow-700 border-yellow-300",
//   };

//   return (
//     <div className={`${baseStyle} ${variants[variant] || variants.default}`}>
//       {children}
//     </div>
//   );
// }

// export function AlertTitle({ children }) {
//   return <h5 className="font-semibold mb-1">{children}</h5>;
// }

// export function AlertDescription({ children }) {
//   return <p className="text-sm leading-relaxed">{children}</p>;
// }

// src/components/ui/Alert.jsx
import React from "react";

export function Alert({ variant = "default", className = "", children }) {
  const baseStyle =
    "relative w-full rounded-lg border p-4 flex items-start gap-2";
  const variants = {
    default: "bg-white text-black border-gray-300",
    destructive: "bg-red-50 text-red-700 border-red-300",
    success: "bg-green-100 text-green-700 border-green-200", // ✅ হালকা সবুজ ব্যাকগ্রাউন্ড
    warning: "bg-yellow-50 text-yellow-700 border-yellow-300",
  };

  return (
    <div
      className={`${baseStyle} ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ children }) {
  return <h5 className="font-semibold ">{children}</h5>;
}

export function AlertDescription({ children }) {
  return <p className="font-semibold leading-relaxed">{children}</p>;
}
