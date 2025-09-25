// import React, { useState, useRef } from "react";
// import { Upload, X, ImageIcon } from "lucide-react";
// import { Label } from "../../../ui/Label";
// import { Input } from "../../../ui/Input";
// import { Button } from "../../../ui/Button";

// // import { useToast } from "@/hooks/use-toast";
// import { Card } from "../../../ui/Card";
// import {
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../../../ui/CardContent";

// const UploadBanner = () => {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);
//   const [error, setError] = useState(null);
//   const fileInputRef = useRef(null);
//   //   const { toast } = useToast();

//   const maxSize = 5;
//   const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

//   const validateFile = (file) => {
//     if (!acceptedTypes.includes(file.type)) {
//       return `File type not supported. Please upload: ${acceptedTypes
//         .map((type) => type.split("/")[1])
//         .join(", ")}`;
//     }
//     if (file.size > maxSize * 1024 * 1024) {
//       return `File size too large. Maximum size is ${maxSize}MB`;
//     }
//     return null;
//   };

//   const handleFile = (file) => {
//     const validationError = validateFile(file);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setError(null);
//     setUploadedFile(file);

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setPreview(e.target?.result);
//     };
//     reader.readAsDataURL(file);

//     // toast({
//     //   title: "Image uploaded",
//     //   description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`,
//     // });
//   };

//   const handleInputChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) handleFile(file);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     const file = e.dataTransfer.files?.[0];
//     if (file) handleFile(file);
//   };

//   const clearImage = () => {
//     setPreview(null);
//     setError(null);
//     setUploadedFile(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const openFileDialog = () => {
//     fileInputRef.current?.click();
//   };

//   const handleSubmit = () => {
//     if (uploadedFile) {
//       //   toast({
//       //     title: "Form submitted",
//       //     description: `Image "${uploadedFile.name}" would be processed here.`,
//       //   });
//     } else {
//       //   toast({
//       //     title: "No image selected",
//       //     description: "Please upload an image first.",
//       //     variant: "destructive",
//       //   });
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <div className="max-w-3xl mx-auto space-y-9">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-foreground mb-2">
//             Banner Image Upload Field
//           </h1>
//           <p className="text-muted-foreground">
//             A comprehensive image upload component with drag & drop, preview,
//             and validation
//           </p>
//         </div>

//         <Card className="p-6 shadow-md">
//           <CardHeader>
//             <CardTitle className="text-xl">Upload Your Image</CardTitle>
//             <CardDescription className="mb-3 mt-1.5">
//               Select an image file to upload. Supports JPEG, PNG, GIF, and WebP
//               formats up to 5MB.
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="image-upload" className="text-sm">
//                 Upload Image
//               </Label>
//               <div
//                 className={`relative mt-3 border-2 border-dashed rounded-lg transition-colors
//                   ${
//                     dragActive
//                       ? "border-primary bg-primary/5"
//                       : "border-muted-foreground/25"
//                   }
//                   ${error ? "border-destructive" : ""}
//                   hover:border-primary/50 hover:bg-primary/5`}
//                 onDragEnter={handleDrag}
//                 onDragLeave={handleDrag}
//                 onDragOver={handleDrag}
//                 onDrop={handleDrop}
//               >
//                 <Input
//                   ref={fileInputRef}
//                   id="image-upload"
//                   type="file"
//                   accept={acceptedTypes.join(",")}
//                   onChange={handleInputChange}
//                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 />

//                 {preview ? (
//                   <div className="relative p-4">
//                     <img
//                       src={preview || "/placeholder.svg"}
//                       alt="Preview"
//                       className="max-h-48 mx-auto rounded-md object-contain"
//                     />
//                     <Button
//                       type="button"
//                       variant="destructive"
//                       size="sm"
//                       className="absolute top-2 right-2"
//                       onClick={clearImage}
//                     >
//                       <X className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 ) : (
//                   <div
//                     className="flex flex-col items-center justify-center p-8 text-center cursor-pointer"
//                     onClick={openFileDialog}
//                   >
//                     <div className="mb-4 p-3 rounded-full bg-muted">
//                       {dragActive ? (
//                         <Upload className="h-6 w-6 text-primary" />
//                       ) : (
//                         <ImageIcon className="h-6 w-6 text-muted-foreground" />
//                       )}
//                     </div>
//                     <p className="text-sm font-medium text-foreground mb-1">
//                       {dragActive
//                         ? "Drop your image here"
//                         : "Click to upload or drag and drop"}
//                     </p>
//                     <p className="text-xs text-muted-foreground">
//                       {acceptedTypes
//                         .map((type) => type.split("/")[1].toUpperCase())
//                         .join(", ")}{" "}
//                       up to {maxSize}MB
//                     </p>
//                   </div>
//                 )}
//               </div>
//               {error && <p className="text-sm text-destructive">{error}</p>}
//             </div>

//             {uploadedFile && (
//               <div className="p-4 bg-muted rounded-lg">
//                 <h3 className="font-medium mb-2">File Details:</h3>
//                 <ul className="text-sm text-muted-foreground space-y-1">
//                   <li>
//                     <strong>Name:</strong> {uploadedFile.name}
//                   </li>
//                   <li>
//                     <strong>Size:</strong>{" "}
//                     {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
//                   </li>
//                   <li>
//                     <strong>Type:</strong> {uploadedFile.type}
//                   </li>
//                   <li>
//                     <strong>Last Modified:</strong>{" "}
//                     {new Date(uploadedFile.lastModified).toLocaleString()}
//                   </li>
//                 </ul>
//               </div>
//             )}

//             <Button onClick={handleSubmit} className="w-full">
//               Submit Form
//             </Button>
//           </CardContent>
//         </Card>

//         <Card className="p-4 shadow-md">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold">Features</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-4 text-sm mt-3">
//               <li className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-black  rounded-full" />
//                 Drag and drop support
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-black  rounded-full" />
//                 Image preview with remove option
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-black  rounded-full" />
//                 File type and size validation
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-black  rounded-full" />
//                 Customizable accepted formats and size limits
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-black  rounded-full" />
//                 Accessible with proper labels and ARIA attributes
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-black rounded-full" />
//                 Error handling with user-friendly messages
//               </li>
//             </ul>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default UploadBanner;

import React, { useState, useRef } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { Label } from "../../../ui/Label";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { Card } from "../../../ui/Card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../ui/CardContent";
import toast from "react-hot-toast";

const UploadBanner = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // store multiple files
  const [previews, setPreviews] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const maxSize = 5;
  const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  const validateFile = (file) => {
    if (!acceptedTypes.includes(file.type)) {
      return `File type not supported. Please upload: ${acceptedTypes
        .map((type) => type.split("/")[1])
        .join(", ")}`;
    }
    if (file.size > maxSize * 1024 * 1024) {
      return `File size too large. Maximum size is ${maxSize}MB`;
    }
    return null;
  };

  const handleFile = (file) => {
    if (uploadedFiles.length >= 2) {
      setError("You can upload only 2 images.");
      return;
    }

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviews((prev) => [...prev, e.target?.result]);
    };
    reader.readAsDataURL(file);

    setUploadedFiles((prev) => [...prev, file]);
  };

  const handleInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const clearImage = (index) => {
    const newFiles = [...uploadedFiles];
    const newPreviews = [...previews];
    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);
    setUploadedFiles(newFiles);
    setPreviews(newPreviews);
    setError(null);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (uploadedFiles.length < 2) {
      setError("Please upload 2 images before submitting.");
      toast.error("Please upload 2 images before submitting.");
      return;
    }
    console.log("Uploaded Images:", uploadedFiles);
    setError(null);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto space-y-9">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Banner Image Upload Field
          </h1>
          <p className="text-muted-foreground">
            Upload exactly 2 images with drag & drop, preview, and validation
          </p>
        </div>

        <Card className="p-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Upload Your Images</CardTitle>
            <CardDescription className="mb-3 mt-1.5">
              Select two image files to upload. Supports JPEG, PNG, GIF, and
              WebP formats up to 5MB.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="image-upload" className="text-sm">
                Upload Images
              </Label>
              <div
                className={`relative mt-3 border-2 border-dashed rounded-lg transition-all duration-200
    ${
      dragActive
        ? "border-primary bg-primary/10 scale-[1.02] shadow-md"
        : "border-muted-foreground/25"
    } 
    ${error ? "border-destructive" : ""} 
    hover:border-primary/50 hover:bg-primary/5`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Input
                  ref={fileInputRef}
                  id="image-upload"
                  type="file"
                  accept={acceptedTypes.join(",")}
                  onChange={handleInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {previews.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {previews.map((src, idx) => (
                      <div key={idx} className="relative">
                        <img
                          src={src}
                          alt={`Preview ${idx + 1}`}
                          className="max-h-48 mx-auto rounded-md object-contain"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => clearImage(idx)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    {uploadedFiles.length === 1 && (
                      <div
                        className="flex flex-col items-center justify-center p-8 text-center border rounded-md cursor-pointer"
                        onClick={openFileDialog}
                      >
                        <p className="text-sm font-medium text-foreground">
                          Please upload another image
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center p-8 text-center cursor-pointer"
                    onClick={openFileDialog}
                  >
                    <div className="mb-4 p-3 rounded-full bg-muted">
                      {dragActive ? (
                        <Upload className="h-6 w-6 text-primary" />
                      ) : (
                        <ImageIcon className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {acceptedTypes
                        .map((type) => type.split("/")[1].toUpperCase())
                        .join(", ")}{" "}
                      up to {maxSize}MB
                    </p>
                  </div>
                )}
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>

            {uploadedFiles.length > 0 && (
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">File Details:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {uploadedFiles.map((file, idx) => (
                    <li key={idx}>
                      <strong>Image {idx + 1}:</strong> {file.name} (
                      {(file.size / 1024 / 1024).toFixed(2)} MB)
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={uploadedFiles.length < 2}
            >
              Submit Form
            </Button>
          </CardContent>
        </Card>
        <Card className="p-4 shadow-md">
          {" "}
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Features</CardTitle>{" "}
          </CardHeader>{" "}
          <CardContent>
            {" "}
            <ul className="space-y-4 text-sm mt-3">
              {" "}
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black  rounded-full" />
                Drag and drop support{" "}
              </li>{" "}
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black  rounded-full" />
                Image preview with remove option{" "}
              </li>{" "}
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black  rounded-full" />
                File type and size validation{" "}
              </li>{" "}
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black  rounded-full" />
                Customizable accepted formats and size limits{" "}
              </li>{" "}
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black  rounded-full" />
                Accessible with proper labels and ARIA attributes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full" /> Error handling
                with user-friendly messages
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadBanner;
