import React from 'react';




const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
        placeholder:text-gray-400 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 
        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export { Textarea }


// const Textarea = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Textarea;