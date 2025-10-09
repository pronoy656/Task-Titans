// import React, { useState, useRef } from "react";
// import { Upload, X, ImageIcon } from "lucide-react";
// import { Label } from "../../../ui/Label";
// import { Input } from "../../../ui/Input";
// import { Button } from "../../../ui/Button";
// import { Card } from "../../../ui/Card";
// import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
// import toast from "react-hot-toast";
// import { useUpdateHomepageMutation } from "../../../../redux/features/homepage/homepageApi";
// // import { useUpdateHomepageMutation } from "../../../redux/features/homepage/homepageApi";

// const UploadBanner = () => {
//   // Hero Section
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [dragActive, setDragActive] = useState(false);
//   const [error, setError] = useState(null);
//   const fileInputRef = useRef(null);

//   const [subHeader, setSubHeader] = useState("");
//   const [header, setHeader] = useState("");
//   const [description, setDescription] = useState("");
//   const [rating, setRating] = useState("");
//   const [responseTime, setResponseTime] = useState("");
//   const [activeUser, setActiveUser] = useState("");
//   const [paidToTitans, setPaidToTitans] = useState("");
//   const [successRate, setSuccessRate] = useState("");
//   const [userRating, setUserRating] = useState("");

//   // How It Works Section
//   const [howItWorksHeading1, setHowItWorksHeading1] = useState("");
//   const [howItWorksSubheading1, setHowItWorksSubheading1] = useState("");
//   const [howItWorksIcon1, setHowItWorksIcon1] = useState("");
//   const [howItWorksHeading2, setHowItWorksHeading2] = useState("");
//   const [howItWorksSubheading2, setHowItWorksSubheading2] = useState("");
//   const [howItWorksIcon2, setHowItWorksIcon2] = useState("");
//   const [howItWorksHeading3, setHowItWorksHeading3] = useState("");
//   const [howItWorksSubheading3, setHowItWorksSubheading3] = useState("");
//   const [howItWorksIcon3, setHowItWorksIcon3] = useState("");

//   // Why Choose Task Titans Section
//   const [whyChooseUsHeading1, setWhyChooseUsHeading1] = useState("");
//   const [whyChooseUsSubheading1, setWhyChooseUsSubheading1] = useState("");
//   const [whyChooseUsIcon1, setWhyChooseUsIcon1] = useState("");
//   const [whyChooseUsHeading2, setWhyChooseUsHeading2] = useState("");
//   const [whyChooseUsSubheading2, setWhyChooseUsSubheading2] = useState("");
//   const [whyChooseUsIcon2, setWhyChooseUsIcon2] = useState("");
//   const [whyChooseUsHeading3, setWhyChooseUsHeading3] = useState("");
//   const [whyChooseUsSubheading3, setWhyChooseUsSubheading3] = useState("");
//   const [whyChooseUsIcon3, setWhyChooseUsIcon3] = useState("");
//   const [whyChooseUsHeading4, setWhyChooseUsHeading4] = useState("");
//   const [whyChooseUsSubheading4, setWhyChooseUsSubheading4] = useState("");
//   const [whyChooseUsIcon4, setWhyChooseUsIcon4] = useState("");

//   const maxSize = 5;
//   const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
//   const [updateHomepage, { isLoading }] = useUpdateHomepageMutation();

//   const validateFile = (file) => {
//     if (!acceptedTypes.includes(file.type)) {
//       return `File type not supported. Allowed: ${acceptedTypes
//         .map((t) => t.split("/")[1])
//         .join(", ")}`;
//     }
//     if (file.size > maxSize * 1024 * 1024) {
//       return `File size too large. Max ${maxSize}MB`;
//     }
//     return null;
//   };

//   const handleFile = (file) => {
//     if (uploadedFiles.length >= 2) {
//       setError("You can upload only 2 images.");
//       return;
//     }
//     const validationError = validateFile(file);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setError(null);

//     const reader = new FileReader();
//     reader.onload = (e) => setPreviews((prev) => [...prev, e.target?.result]);
//     reader.readAsDataURL(file);

//     setUploadedFiles((prev) => [...prev, file]);
//   };

//   const handleInputChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) handleFile(file);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(e.type === "dragenter" || e.type === "dragover");
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     const file = e.dataTransfer.files?.[0];
//     if (file) handleFile(file);
//   };

//   const clearImage = (index) => {
//     const newFiles = [...uploadedFiles];
//     const newPreviews = [...previews];
//     newFiles.splice(index, 1);
//     newPreviews.splice(index, 1);
//     setUploadedFiles(newFiles);
//     setPreviews(newPreviews);
//     setError(null);
//   };

//   const openFileDialog = () => fileInputRef.current?.click();

//   const handleSubmit = async () => {
//     if (uploadedFiles.length < 2) {
//       toast.error("Please upload 2 images before submitting.");
//       setError("Please upload 2 images before submitting.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("subHeader", subHeader);
//       formData.append("header", header);
//       formData.append("description", description);
//       formData.append("rating", rating);
//       formData.append("responseTime", responseTime);
//       formData.append("activeUser", activeUser);
//       formData.append("paidToTitans", paidToTitans);
//       formData.append("successRate", successRate);
//       formData.append("userRating", userRating);

//       // How It Works Section
//       formData.append("howItWorksHeading1", howItWorksHeading1);
//       formData.append("howItWorksSubheading1", howItWorksSubheading1);
//       formData.append("howItWorksIcon1", howItWorksIcon1);
//       formData.append("howItWorksHeading2", howItWorksHeading2);
//       formData.append("howItWorksSubheading2", howItWorksSubheading2);
//       formData.append("howItWorksIcon2", howItWorksIcon2);
//       formData.append("howItWorksHeading3", howItWorksHeading3);
//       formData.append("howItWorksSubheading3", howItWorksSubheading3);
//       formData.append("howItWorksIcon3", howItWorksIcon3);

//       // Why Choose Task Titans Section
//       formData.append("whyChooseUsHeading1", whyChooseUsHeading1);
//       formData.append("whyChooseUsSubheading1", whyChooseUsSubheading1);
//       formData.append("whyChooseUsIcon1", whyChooseUsIcon1);
//       formData.append("whyChooseUsHeading2", whyChooseUsHeading2);
//       formData.append("whyChooseUsSubheading2", whyChooseUsSubheading2);
//       formData.append("whyChooseUsIcon2", whyChooseUsIcon2);
//       formData.append("whyChooseUsHeading3", whyChooseUsHeading3);
//       formData.append("whyChooseUsSubheading3", whyChooseUsSubheading3);
//       formData.append("whyChooseUsIcon3", whyChooseUsIcon3);
//       formData.append("whyChooseUsHeading4", whyChooseUsHeading4);
//       formData.append("whyChooseUsSubheading4", whyChooseUsSubheading4);
//       formData.append("whyChooseUsIcon4", whyChooseUsIcon4);

//       // Append Images
//       uploadedFiles.forEach((file) => formData.append("image", file));

//       const res = await updateHomepage(formData).unwrap();
//       if (res.success) {
//         toast.success("Homepage updated successfully!");
//       }
//     } catch (err) {
//       console.error("Update failed:", err);
//       toast.error("Failed to update homepage");
//     }
//   };

//   return (
//     <div className="admin-page p-2">
//       <Card className="p-2">
//         <CardHeader>
//           <CardTitle className="text-3xl border-b-2 w-50">
//             Hero Section
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {/* Hero Section Inputs */}
//           <div className="grid grid-cols-2 gap-4 mt-6">
//             <div className="flex flex-col">
//               <label className="mb-2 font-medium">Subheader</label>
//               <input
//                 type="text"
//                 value={subHeader}
//                 onChange={(e) => setSubHeader(e.target.value)}
//                 placeholder="Please enter subheader"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="mb-2 font-medium">Header</label>
//               <input
//                 type="text"
//                 value={header}
//                 onChange={(e) => setHeader(e.target.value)}
//                 placeholder="Please enter header"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-4">
//             <label className="mb-2 font-medium">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Please enter description"
//               className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="flex flex-col">
//               <label className="mb-2 font-medium">Rating</label>
//               <input
//                 type="number"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 placeholder="Please enter rating"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min={0}
//                 max={5} // optional: limit rating to 0-5
//                 step={0.1} // optional: allow decimals
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="mb-2 font-medium">Response Time</label>
//               <input
//                 type="number"
//                 value={responseTime}
//                 onChange={(e) => setResponseTime(e.target.value)}
//                 placeholder="Please enter response time"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 min={0} // optional: cannot be negative
//               />
//             </div>
//           </div>

//           {/* Image Upload Section */}
//           <div className="space-y-2">
//             <Label htmlFor="image-upload">Upload Images</Label>
//             <div
//               className={`relative mt-3 border-2 border-dashed rounded-lg transition-all duration-200 ${
//                 dragActive
//                   ? "border-primary bg-primary/10 scale-[1.02] shadow-md"
//                   : "border-muted-foreground/25"
//               } ${error ? "border-destructive" : ""}`}
//               onDragEnter={handleDrag}
//               onDragLeave={handleDrag}
//               onDragOver={handleDrag}
//               onDrop={handleDrop}
//             >
//               <Input
//                 ref={fileInputRef}
//                 id="image-upload"
//                 type="file"
//                 accept={acceptedTypes.join(",")}
//                 onChange={handleInputChange}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />

//               {previews.length > 0 ? (
//                 <div className="grid grid-cols-2 gap-4 p-4">
//                   {previews.map((src, idx) => (
//                     <div key={idx} className="relative">
//                       <img
//                         src={src}
//                         alt={`Preview ${idx + 1}`}
//                         className="max-h-48 mx-auto rounded-md object-contain"
//                       />
//                       <Button
//                         type="button"
//                         variant="destructive"
//                         size="sm"
//                         className="absolute top-2 right-2"
//                         onClick={() => clearImage(idx)}
//                       >
//                         <X className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div
//                   className="flex flex-col items-center justify-center p-8 text-center cursor-pointer"
//                   onClick={openFileDialog}
//                 >
//                   <div className="mb-4 p-3 rounded-full bg-muted">
//                     {dragActive ? (
//                       <Upload className="h-6 w-6 text-primary" />
//                     ) : (
//                       <ImageIcon className="h-6 w-6 text-muted-foreground" />
//                     )}
//                   </div>
//                   <p className="text-sm font-medium text-foreground mb-1">
//                     Click to upload or drag and drop
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     {acceptedTypes
//                       .map((t) => t.split("/")[1].toUpperCase())
//                       .join(", ")}{" "}
//                     up to {maxSize}MB
//                   </p>
//                 </div>
//               )}
//             </div>
//             {error && <p className="text-sm text-destructive">{error}</p>}
//           </div>

//           {/* Counter Section */}
//           <div>
//             <header className="text-3xl font-bold border-b-2 w-60 mt-6">
//               Counter Section
//             </header>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium">Active Users</label>
//                 <input
//                   type="number"
//                   value={activeUser}
//                   onChange={(e) => setActiveUser(e.target.value)}
//                   placeholder="Please enter active users"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   min={0}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium">Paid to Titans</label>
//                 <input
//                   type="number"
//                   value={paidToTitans}
//                   onChange={(e) => setPaidToTitans(e.target.value)}
//                   placeholder="Please enter paid to titans"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   min={0}
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium">Success Rate</label>
//                 <input
//                   type="number"
//                   value={successRate}
//                   onChange={(e) => setSuccessRate(e.target.value)}
//                   placeholder="Please enter success rate"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   min={0}
//                   max={100} // optional: limit as percentage
//                   step={0.1} // optional: allow decimals
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium">User Rating</label>
//                 <input
//                   type="number"
//                   value={userRating}
//                   onChange={(e) => setUserRating(e.target.value)}
//                   placeholder="Please enter user rating"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   min={0}
//                   max={5} // optional: limit rating to 0-5
//                   step={0.1} // optional: allow decimals
//                 />
//               </div>
//             </div>
//           </div>

//           {/* How It Works Section */}
//           <div>
//             <header className="text-3xl font-bold mb-6 border-b-2 w-80">
//               How It Works Section
//             </header>
//             <div className="flex flex-col">
//               <label className="mb-2 text-lg font-medium text-gray-800">
//                 Change Icon 1 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={howItWorksIcon1}
//                 onChange={(e) => setHowItWorksIcon1(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 1
//                 </label>
//                 <input
//                   type="text"
//                   value={howItWorksHeading1}
//                   onChange={(e) => setHowItWorksHeading1(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 1
//                 </label>
//                 <input
//                   type="text"
//                   value={howItWorksSubheading1}
//                   onChange={(e) => setHowItWorksSubheading1(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col mt-6">
//               <label className="mb-2 text-lg  font-medium text-gray-800">
//                 Change Icon 2 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={howItWorksIcon2}
//                 onChange={(e) => setHowItWorksIcon2(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 2
//                 </label>
//                 <input
//                   type="text"
//                   value={howItWorksHeading2}
//                   onChange={(e) => setHowItWorksHeading2(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 2
//                 </label>
//                 <input
//                   type="text"
//                   value={howItWorksSubheading2}
//                   onChange={(e) => setHowItWorksSubheading2(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col mt-6">
//               <label className="mb-2 text-lg  font-medium text-gray-800">
//                 Change Icon 3 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={howItWorksIcon3}
//                 onChange={(e) => setHowItWorksIcon3(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 3
//                 </label>
//                 <input
//                   type="text"
//                   value={howItWorksHeading3}
//                   onChange={(e) => setHowItWorksHeading3(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 3
//                 </label>
//                 <input
//                   type="text"
//                   value={howItWorksSubheading3}
//                   onChange={(e) => setHowItWorksSubheading3(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* Why Choose Task Titans Section */}
//           <div>
//             <header className="text-3xl font-bold mb-5 border-b-2 w-120">
//               Why Choose Task Titans Section
//             </header>
//             <div className="flex flex-col">
//               <label className="mb-2 text-lg font-medium text-gray-800">
//                 Change Icon 1 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={whyChooseUsIcon1}
//                 onChange={(e) => setWhyChooseUsIcon1(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 1
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsHeading1}
//                   onChange={(e) => setWhyChooseUsHeading1(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 1
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsSubheading1}
//                   onChange={(e) => setWhyChooseUsSubheading1(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col mt-6">
//               <label className="mb-2 text-lg  font-medium text-gray-800">
//                 Change Icon 2 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={whyChooseUsIcon2}
//                 onChange={(e) => setWhyChooseUsIcon2(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 2
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsHeading2}
//                   onChange={(e) => setWhyChooseUsHeading2(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 2
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsSubheading2}
//                   onChange={(e) => setWhyChooseUsSubheading2(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col mt-6">
//               <label className="mb-2 text-lg  font-medium text-gray-800">
//                 Change Icon 3 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={whyChooseUsIcon3}
//                 onChange={(e) => setWhyChooseUsIcon3(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 3
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsHeading3}
//                   onChange={(e) => setWhyChooseUsHeading3(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 3
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsSubheading3}
//                   onChange={(e) => setWhyChooseUsSubheading3(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col mt-6">
//               <label className="mb-2 text-lg  font-medium text-gray-800">
//                 Change Icon 4 ( From Lucide Icon )
//               </label>
//               <input
//                 type="text"
//                 value={whyChooseUsIcon4}
//                 onChange={(e) => setWhyChooseUsIcon4(e.target.value)}
//                 placeholder="Please enter component name from lucide Icon"
//                 className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Heading 4
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsHeading4}
//                   onChange={(e) => setWhyChooseUsHeading4(e.target.value)}
//                   placeholder="Please enter heading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-2 font-medium text-gray-800">
//                   Subheading 4
//                 </label>
//                 <input
//                   type="text"
//                   value={whyChooseUsSubheading4}
//                   onChange={(e) => setWhyChooseUsSubheading4(e.target.value)}
//                   placeholder="Please enter subheading"
//                   className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//           </div>

//           <Button
//             onClick={handleSubmit}
//             className="w-full"
//             disabled={isLoading}
//           >
//             {isLoading ? "Updating..." : "Submit Form"}
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UploadBanner;

// import React, { useState, useRef } from "react";
// import { Upload, X, ImageIcon } from "lucide-react";
// import { Label } from "../../../ui/Label";
// import { Input } from "../../../ui/Input";
// import { Button } from "../../../ui/Button";
// import { Card } from "../../../ui/Card";
// import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
// import toast from "react-hot-toast";
// import { useUpdateHomepageMutation } from "../../../../redux/features/homepage/homepageApi";

// const UploadBanner = () => {
//   const fileInputRef = useRef(null);
//   const maxSize = 5;
//   const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
//   const [updateHomepage, { isLoading }] = useUpdateHomepageMutation();

//   // ------------------ Hero Section ------------------
//   const [hero, setHero] = useState({
//     subHeader: "",
//     header: "",
//     description: "",
//     rating: "",
//     responseTime: "",
//     activeUser: "",
//     paidToTitans: "",
//     successRate: "",
//     userRating: "",
//   });

//   // ------------------ How It Works Section ------------------
//   const [howItWorks, setHowItWorks] = useState({
//     heading1: "",
//     subheading1: "",
//     icon1: "",
//     heading2: "",
//     subheading2: "",
//     icon2: "",
//     heading3: "",
//     subheading3: "",
//     icon3: "",
//   });

//   // ------------------ Why Choose Us Section ------------------
//   const [whyChooseUs, setWhyChooseUs] = useState({
//     heading1: "",
//     subheading1: "",
//     icon1: "",
//     heading2: "",
//     subheading2: "",
//     icon2: "",
//     heading3: "",
//     subheading3: "",
//     icon3: "",
//     heading4: "",
//     subheading4: "",
//     icon4: "",
//   });

//   // ------------------ Image Upload ------------------
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [dragActive, setDragActive] = useState(false);
//   const [error, setError] = useState(null);

//   const validateFile = (file) => {
//     if (!acceptedTypes.includes(file.type)) {
//       return `File type not supported. Allowed: ${acceptedTypes
//         .map((t) => t.split("/")[1])
//         .join(", ")}`;
//     }
//     if (file.size > maxSize * 1024 * 1024) {
//       return `File size too large. Max ${maxSize}MB`;
//     }
//     return null;
//   };

//   const handleFile = (file) => {
//     if (uploadedFiles.length >= 2) {
//       setError("You can upload only 2 images.");
//       return;
//     }
//     const validationError = validateFile(file);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setError(null);

//     const reader = new FileReader();
//     reader.onload = (e) => setPreviews((prev) => [...prev, e.target.result]);
//     reader.readAsDataURL(file);
//     setUploadedFiles((prev) => [...prev, file]);
//   };

//   const handleInputChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) handleFile(file);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(e.type === "dragenter" || e.type === "dragover");
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     const file = e.dataTransfer.files?.[0];
//     if (file) handleFile(file);
//   };

//   const clearImage = (index) => {
//     const newFiles = [...uploadedFiles];
//     const newPreviews = [...previews];
//     newFiles.splice(index, 1);
//     newPreviews.splice(index, 1);
//     setUploadedFiles(newFiles);
//     setPreviews(newPreviews);
//     setError(null);
//   };

//   const openFileDialog = () => fileInputRef.current?.click();

//   // ------------------ Submit Form ------------------
//   const handleSubmit = async () => {
//     if (uploadedFiles.length < 2) {
//       toast.error("Please upload 2 images before submitting.");
//       setError("Please upload 2 images before submitting.");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       Object.entries(hero).forEach(([key, value]) =>
//         formData.append(key, value)
//       );
//       Object.entries(howItWorks).forEach(([key, value]) =>
//         formData.append(key, value)
//       );
//       Object.entries(whyChooseUs).forEach(([key, value]) =>
//         formData.append(key, value)
//       );
//       uploadedFiles.forEach((file) => formData.append("image", file));

//       const res = await updateHomepage(formData).unwrap();
//       if (res.success) toast.success("Homepage updated successfully!");
//     } catch (err) {
//       console.error("Update failed:", err);
//       toast.error("Failed to update homepage");
//     }
//   };

//   const renderInput = (
//     label,
//     value,
//     onChange,
//     placeholder,
//     type = "text",
//     min = null,
//     max = null,
//     step = null
//   ) => (
//     <div className="flex flex-col">
//       <label className="mb-2 font-medium text-gray-800">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         min={min}
//         max={max}
//         step={step}
//       />
//     </div>
//   );

//   return (
//     <div className="admin-page p-2">
//       <Card className="p-2">
//         <CardHeader>
//           <CardTitle className="text-3xl border-b-2 w-50">
//             Hero Section
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {/* Hero Inputs */}
//           <div className="grid grid-cols-2 gap-4 mt-6">
//             {renderInput(
//               "Subheader",
//               hero.subHeader,
//               (e) => setHero({ ...hero, subHeader: e.target.value }),
//               "Please enter subheader"
//             )}
//             {renderInput(
//               "Header",
//               hero.header,
//               (e) => setHero({ ...hero, header: e.target.value }),
//               "Please enter header"
//             )}
//           </div>
//           <div className="flex flex-col mt-4">
//             <label className="mb-2 font-medium">Description</label>
//             <textarea
//               value={hero.description}
//               onChange={(e) =>
//                 setHero({ ...hero, description: e.target.value })
//               }
//               placeholder="Please enter description"
//               className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {renderInput(
//               "Rating",
//               hero.rating,
//               (e) => setHero({ ...hero, rating: e.target.value }),
//               "Please enter rating",
//               "number",
//               0,
//               5,
//               0.1
//             )}
//             {renderInput(
//               "Response Time",
//               hero.responseTime,
//               (e) => setHero({ ...hero, responseTime: e.target.value }),
//               "Please enter response time",
//               "number",
//               0
//             )}
//           </div>

//           {/* Image Upload Section */}
//           <div className="space-y-2">
//             <Label htmlFor="image-upload">Upload Images</Label>
//             <div
//               className={`relative mt-3 border-2 border-dashed rounded-lg transition-all duration-200 ${
//                 dragActive
//                   ? "border-primary bg-primary/10 scale-[1.02] shadow-md"
//                   : "border-muted-foreground/25"
//               } ${error ? "border-destructive" : ""}`}
//               onDragEnter={handleDrag}
//               onDragLeave={handleDrag}
//               onDragOver={handleDrag}
//               onDrop={handleDrop}
//             >
//               <Input
//                 ref={fileInputRef}
//                 id="image-upload"
//                 type="file"
//                 accept={acceptedTypes.join(",")}
//                 onChange={handleInputChange}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//               {previews.length > 0 ? (
//                 <div className="grid grid-cols-2 gap-4 p-4">
//                   {previews.map((src, idx) => (
//                     <div key={idx} className="relative">
//                       <img
//                         src={src}
//                         alt={`Preview ${idx + 1}`}
//                         className="max-h-48 mx-auto rounded-md object-contain"
//                       />
//                       <Button
//                         type="button"
//                         variant="destructive"
//                         size="sm"
//                         className="absolute top-2 right-2"
//                         onClick={() => clearImage(idx)}
//                       >
//                         <X className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div
//                   className="flex flex-col items-center justify-center p-8 text-center cursor-pointer"
//                   onClick={openFileDialog}
//                 >
//                   <div className="mb-4 p-3 rounded-full bg-muted">
//                     {dragActive ? (
//                       <Upload className="h-6 w-6 text-primary" />
//                     ) : (
//                       <ImageIcon className="h-6 w-6 text-muted-foreground" />
//                     )}
//                   </div>
//                   <p className="text-sm font-medium text-foreground mb-1">
//                     Click to upload or drag and drop
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     {acceptedTypes
//                       .map((t) => t.split("/")[1].toUpperCase())
//                       .join(", ")}{" "}
//                     up to {maxSize}MB
//                   </p>
//                 </div>
//               )}
//             </div>
//             {error && <p className="text-sm text-destructive">{error}</p>}
//           </div>

//           {/* Counter Section */}
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {renderInput(
//               "Active Users",
//               hero.activeUser,
//               (e) => setHero({ ...hero, activeUser: e.target.value }),
//               "Please enter active users",
//               "number",
//               0
//             )}
//             {renderInput(
//               "Paid to Titans",
//               hero.paidToTitans,
//               (e) => setHero({ ...hero, paidToTitans: e.target.value }),
//               "Please enter paid to titans",
//               "number",
//               0
//             )}
//             {renderInput(
//               "Success Rate",
//               hero.successRate,
//               (e) => setHero({ ...hero, successRate: e.target.value }),
//               "Please enter success rate",
//               "number",
//               0,
//               100,
//               0.1
//             )}
//             {renderInput(
//               "User Rating",
//               hero.userRating,
//               (e) => setHero({ ...hero, userRating: e.target.value }),
//               "Please enter user rating",
//               "number",
//               0,
//               5,
//               0.1
//             )}
//           </div>

//           {/* How It Works Section */}
//           <div>
//             <header className="text-3xl font-bold mb-6 border-b-2 w-80">
//               How It Works Section
//             </header>
//             {Object.entries(howItWorks).map(([key, value]) => {
//               const label = key.startsWith("icon")
//                 ? `Change Icon ${key.slice(-1)} (From Lucide Icon)`
//                 : key.startsWith("heading")
//                 ? `Heading ${key.slice(-1)}`
//                 : `Subheading ${key.slice(-1)}`;
//               return renderInput(
//                 label,
//                 value,
//                 (e) => setHowItWorks({ ...howItWorks, [key]: e.target.value }),
//                 `Please enter ${label.toLowerCase()}`
//               );
//             })}
//           </div>

//           {/* Why Choose Us Section */}
//           <div>
//             <header className="text-3xl font-bold mb-5 border-b-2 w-120">
//               Why Choose Task Titans Section
//             </header>
//             {Object.entries(whyChooseUs).map(([key, value]) => {
//               const label = key.startsWith("icon")
//                 ? `Change Icon ${key.slice(-1)} (From Lucide Icon)`
//                 : key.startsWith("heading")
//                 ? `Heading ${key.slice(-1)}`
//                 : `Subheading ${key.slice(-1)}`;
//               return renderInput(
//                 label,
//                 value,
//                 (e) =>
//                   setWhyChooseUs({ ...whyChooseUs, [key]: e.target.value }),
//                 `Please enter ${label.toLowerCase()}`
//               );
//             })}
//           </div>

//           <Button
//             onClick={handleSubmit}
//             className="w-full"
//             disabled={isLoading}
//           >
//             {isLoading ? "Updating..." : "Submit Form"}
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UploadBanner;

// import React, { useState, useRef, useEffect } from "react";
// import { Upload, X, ImageIcon } from "lucide-react";
// import { Label } from "../../../ui/Label";
// import { Input } from "../../../ui/Input";
// import { Button } from "../../../ui/Button";
// import { Card } from "../../../ui/Card";
// import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
// import toast from "react-hot-toast";
// import {
//   useGetHomepageQuery,
//   useUpdateHomepageMutation,
// } from "../../../../redux/features/homepage/homepageApi";

// const UploadBanner = () => {
//   const fileInputRef = useRef(null);
//   const maxSize = 5;
//   const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

//   // API hooks
//   const { data, isLoading: isFetching } = useGetHomepageQuery();
//   const [updateHomepage, { isLoading }] = useUpdateHomepageMutation();

//   // States
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [dragActive, setDragActive] = useState(false);
//   const [error, setError] = useState(null);

//   const [hero, setHero] = useState({
//     subHeader: "",
//     header: "",
//     description: "",
//     rating: "",
//     responseTime: "",
//     activeUser: "",
//     paidToTitans: "",
//     successRate: "",
//     userRating: "",
//   });

//   const [howItWorks, setHowItWorks] = useState({
//     heading1: "",
//     subheading1: "",
//     icon1: "",
//     heading2: "",
//     subheading2: "",
//     icon2: "",
//     heading3: "",
//     subheading3: "",
//     icon3: "",
//   });

//   const [whyChooseUs, setWhyChooseUs] = useState({
//     heading1: "",
//     subheading1: "",
//     icon1: "",
//     heading2: "",
//     subheading2: "",
//     icon2: "",
//     heading3: "",
//     subheading3: "",
//     icon3: "",
//     heading4: "",
//     subheading4: "",
//     icon4: "",
//   });

//   // Prefill state on API fetch
//   useEffect(() => {
//     if (data && data.success) {
//       const homepage = data.data;

//       setHero({
//         subHeader: homepage.subHeader || "",
//         header: homepage.header || "",
//         description: homepage.description || "",
//         rating: homepage.rating || "",
//         responseTime: homepage.responseTime || "",
//         activeUser: homepage.activeUser || "",
//         paidToTitans: homepage.paidToTitans || "",
//         successRate: homepage.successRate || "",
//         userRating: homepage.userRating || "",
//       });

//       setHowItWorks({
//         heading1: homepage.howItWorksHeading1 || "",
//         subheading1: homepage.howItWorksSubheading1 || "",
//         icon1: homepage.howItWorksIcon1 || "",
//         heading2: homepage.howItWorksHeading2 || "",
//         subheading2: homepage.howItWorksSubheading2 || "",
//         icon2: homepage.howItWorksIcon2 || "",
//         heading3: homepage.howItWorksHeading3 || "",
//         subheading3: homepage.howItWorksSubheading3 || "",
//         icon3: homepage.howItWorksIcon3 || "",
//       });

//       setWhyChooseUs({
//         heading1: homepage.whyChooseUsHeading1 || "",
//         subheading1: homepage.whyChooseUsSubheading1 || "",
//         icon1: homepage.whyChooseUsIcon1 || "",
//         heading2: homepage.whyChooseUsHeading2 || "",
//         subheading2: homepage.whyChooseUsSubheading2 || "",
//         icon2: homepage.whyChooseUsIcon2 || "",
//         heading3: homepage.whyChooseUsHeading3 || "",
//         subheading3: homepage.whyChooseUsSubheading3 || "",
//         icon3: homepage.whyChooseUsIcon3 || "",
//         heading4: homepage.whyChooseUsHeading4 || "",
//         subheading4: homepage.whyChooseUsSubheading4 || "",
//         icon4: homepage.whyChooseUsIcon4 || "",
//       });

//       // Images prefill
//       if (homepage.images?.length) {
//         setPreviews(homepage.images);
//       }
//     }
//   }, [data]);

//   // File validation and handlers
//   const validateFile = (file) => {
//     if (!acceptedTypes.includes(file.type)) {
//       return `File type not supported. Allowed: ${acceptedTypes
//         .map((t) => t.split("/")[1])
//         .join(", ")}`;
//     }
//     if (file.size > maxSize * 1024 * 1024) {
//       return `File size too large. Max ${maxSize}MB`;
//     }
//     return null;
//   };

//   const handleFile = (file) => {
//     if (uploadedFiles.length >= 2) {
//       setError("You can upload only 2 images.");
//       return;
//     }
//     const validationError = validateFile(file);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setError(null);

//     const reader = new FileReader();
//     reader.onload = (e) => setPreviews((prev) => [...prev, e.target?.result]);
//     reader.readAsDataURL(file);

//     setUploadedFiles((prev) => [...prev, file]);
//   };

//   const handleInputChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) handleFile(file);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(e.type === "dragenter" || e.type === "dragover");
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     const file = e.dataTransfer.files?.[0];
//     if (file) handleFile(file);
//   };

//   const clearImage = (index) => {
//     const newFiles = [...uploadedFiles];
//     const newPreviews = [...previews];
//     newFiles.splice(index, 1);
//     newPreviews.splice(index, 1);
//     setUploadedFiles(newFiles);
//     setPreviews(newPreviews);
//     setError(null);
//   };

//   const openFileDialog = () => fileInputRef.current?.click();

//   // Submit handler
//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       // Hero
//       Object.keys(hero).forEach((key) => formData.append(key, hero[key]));

//       // How It Works
//       Object.keys(howItWorks).forEach((key) =>
//         formData.append(
//           `howItWorks${key.charAt(0).toUpperCase() + key.slice(1)}`,
//           howItWorks[key]
//         )
//       );

//       // Why Choose Us
//       Object.keys(whyChooseUs).forEach((key) =>
//         formData.append(
//           `whyChooseUs${key.charAt(0).toUpperCase() + key.slice(1)}`,
//           whyChooseUs[key]
//         )
//       );

//       // Images
//       uploadedFiles.forEach((file) => formData.append("image", file));

//       const res = await updateHomepage(formData).unwrap();
//       if (res.success) toast.success("Homepage updated successfully!");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to update homepage");
//     }
//   };

//   if (isFetching) return <p>Loading...</p>;

//   return (
//     <div className="admin-page p-2">
//       <Card className="p-2">
//         <CardHeader>
//           <CardTitle className="text-3xl border-b-2 w-50">
//             Hero Section
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {/* Hero Inputs */}
//           <div className="grid grid-cols-2 gap-4 mt-6">
//             <div className="flex flex-col">
//               <Label>Subheader</Label>
//               <Input
//                 value={hero.subHeader}
//                 onChange={(e) =>
//                   setHero({ ...hero, subHeader: e.target.value })
//                 }
//                 placeholder="Please enter subheader"
//               />
//             </div>
//             <div className="flex flex-col">
//               <Label>Header</Label>
//               <Input
//                 value={hero.header}
//                 onChange={(e) => setHero({ ...hero, header: e.target.value })}
//                 placeholder="Please enter header"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col mt-4">
//             <Label>Description</Label>
//             <textarea
//               value={hero.description}
//               onChange={(e) =>
//                 setHero({ ...hero, description: e.target.value })
//               }
//               placeholder="Please enter description"
//               className="w-full pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="flex flex-col">
//               <Label>Rating</Label>
//               <Input
//                 type="number"
//                 value={hero.rating}
//                 onChange={(e) => setHero({ ...hero, rating: e.target.value })}
//                 min={0}
//                 max={5}
//                 step={0.1}
//               />
//             </div>
//             <div className="flex flex-col">
//               <Label>Response Time</Label>
//               <Input
//                 type="number"
//                 value={hero.responseTime}
//                 onChange={(e) =>
//                   setHero({ ...hero, responseTime: e.target.value })
//                 }
//                 min={0}
//               />
//             </div>
//           </div>

//           {/* Image Upload */}
//           <div className="space-y-2">
//             <Label>Upload Images</Label>
//             <div
//               className={`relative mt-3 border-2 border-dashed rounded-lg transition-all duration-200 ${
//                 dragActive
//                   ? "border-primary bg-primary/10 scale-[1.02] shadow-md"
//                   : "border-muted-foreground/25"
//               } ${error ? "border-destructive" : ""}`}
//               onDragEnter={handleDrag}
//               onDragLeave={handleDrag}
//               onDragOver={handleDrag}
//               onDrop={handleDrop}
//             >
//               <Input
//                 ref={fileInputRef}
//                 type="file"
//                 accept={acceptedTypes.join(",")}
//                 onChange={handleInputChange}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//               {previews.length > 0 ? (
//                 <div className="grid grid-cols-2 gap-4 p-4">
//                   {previews.map((src, idx) => (
//                     <div key={idx} className="relative">
//                       <img
//                         src={src}
//                         alt={`Preview ${idx + 1}`}
//                         className="max-h-48 mx-auto rounded-md object-contain"
//                       />
//                       <Button
//                         type="button"
//                         variant="destructive"
//                         size="sm"
//                         className="absolute top-2 right-2"
//                         onClick={() => clearImage(idx)}
//                       >
//                         <X className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div
//                   className="flex flex-col items-center justify-center p-8 text-center cursor-pointer"
//                   onClick={openFileDialog}
//                 >
//                   <div className="mb-4 p-3 rounded-full bg-muted">
//                     {dragActive ? (
//                       <Upload className="h-6 w-6 text-primary" />
//                     ) : (
//                       <ImageIcon className="h-6 w-6 text-muted-foreground" />
//                     )}
//                   </div>
//                   <p className="text-sm font-medium text-foreground mb-1">
//                     Click to upload or drag and drop
//                   </p>
//                   <p className="text-xs text-muted-foreground">
//                     {acceptedTypes
//                       .map((t) => t.split("/")[1].toUpperCase())
//                       .join(", ")}{" "}
//                     up to {maxSize}MB
//                   </p>
//                 </div>
//               )}
//             </div>
//             {error && <p className="text-sm text-destructive">{error}</p>}
//           </div>

//           {/* How It Works & Why Choose Us */}
//           {/* ... You can replicate same input structure for howItWorks & whyChooseUs */}
//           {/* Example: */}
//           <div>
//             <h2 className="text-2xl font-bold mt-6">How It Works</h2>
//             <div className="flex flex-col mt-4">
//               <Label>Icon 1</Label>
//               <Input
//                 value={howItWorks.icon1}
//                 onChange={(e) =>
//                   setHowItWorks({ ...howItWorks, icon1: e.target.value })
//                 }
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="flex flex-col">
//                 <Label>Heading 1</Label>
//                 <Input
//                   value={howItWorks.heading1}
//                   onChange={(e) =>
//                     setHowItWorks({ ...howItWorks, heading1: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <Label>Subheading 1</Label>
//                 <Input
//                   value={howItWorks.subheading1}
//                   onChange={(e) =>
//                     setHowItWorks({
//                       ...howItWorks,
//                       subheading1: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//             </div>
//           </div>

//           <Button
//             onClick={handleSubmit}
//             className="w-full mt-6"
//             disabled={isLoading}
//           >
//             {isLoading ? "Updating..." : "Submit Form"}
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UploadBanner;

import React, { useState, useRef, useEffect } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { Label } from "../../../ui/Label";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import toast from "react-hot-toast";
import {
  useGetHomepageQuery,
  useUpdateHomepageMutation,
} from "../../../../redux/features/homepage/homepageApi";

const UploadBanner = () => {
  const fileInputRef = useRef(null);
  const maxSize = 5;
  const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  // API hooks
  const { data, isLoading: isFetching } = useGetHomepageQuery();
  const [updateHomepage, { isLoading }] = useUpdateHomepageMutation();

  // States
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);

  const [hero, setHero] = useState({
    subHeader: "",
    header: "",
    description: "",
    rating: "",
    responseTime: "",
    activeUser: "",
    paidToTitans: "",
    successRate: "",
    userRating: "",
  });

  const [howItWorks, setHowItWorks] = useState({
    heading1: "",
    subheading1: "",
    icon1: "",
    heading2: "",
    subheading2: "",
    icon2: "",
    heading3: "",
    subheading3: "",
    icon3: "",
  });

  const [whyChooseUs, setWhyChooseUs] = useState({
    heading1: "",
    subheading1: "",
    icon1: "",
    heading2: "",
    subheading2: "",
    icon2: "",
    heading3: "",
    subheading3: "",
    icon3: "",
    heading4: "",
    subheading4: "",
    icon4: "",
  });

  // Prefill state on API fetch
  useEffect(() => {
    if (data && data.success) {
      const homepage = data.data;

      setHero({
        subHeader: homepage.subHeader || "",
        header: homepage.header || "",
        description: homepage.description || "",
        rating: homepage.rating || "",
        responseTime: homepage.responseTime || "",
        activeUser: homepage.activeUser || "",
        paidToTitans: homepage.paidToTitans || "",
        successRate: homepage.successRate || "",
        userRating: homepage.userRating || "",
      });

      setHowItWorks({
        heading1: homepage.howItWorksHeading1 || "",
        subheading1: homepage.howItWorksSubheading1 || "",
        icon1: homepage.howItWorksIcon1 || "",
        heading2: homepage.howItWorksHeading2 || "",
        subheading2: homepage.howItWorksSubheading2 || "",
        icon2: homepage.howItWorksIcon2 || "",
        heading3: homepage.howItWorksHeading3 || "",
        subheading3: homepage.howItWorksSubheading3 || "",
        icon3: homepage.howItWorksIcon3 || "",
      });

      setWhyChooseUs({
        heading1: homepage.whyChooseUsHeading1 || "",
        subheading1: homepage.whyChooseUsSubheading1 || "",
        icon1: homepage.whyChooseUsIcon1 || "",
        heading2: homepage.whyChooseUsHeading2 || "",
        subheading2: homepage.whyChooseUsSubheading2 || "",
        icon2: homepage.whyChooseUsIcon2 || "",
        heading3: homepage.whyChooseUsHeading3 || "",
        subheading3: homepage.whyChooseUsSubheading3 || "",
        icon3: homepage.whyChooseUsIcon3 || "",
        heading4: homepage.whyChooseUsHeading4 || "",
        subheading4: homepage.whyChooseUsSubheading4 || "",
        icon4: homepage.whyChooseUsIcon4 || "",
      });

      // Images prefill
      if (homepage.images?.length) {
        setPreviews(homepage.images);
      }
    }
  }, [data]);

  // File validation and handlers
  const validateFile = (file) => {
    if (!acceptedTypes.includes(file.type)) {
      return `File type not supported. Allowed: ${acceptedTypes
        .map((t) => t.split("/")[1])
        .join(", ")}`;
    }
    if (file.size > maxSize * 1024 * 1024) {
      return `File size too large. Max ${maxSize}MB`;
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
    reader.onload = (e) => setPreviews((prev) => [...prev, e.target?.result]);
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
    setDragActive(e.type === "dragenter" || e.type === "dragover");
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

  const openFileDialog = () => fileInputRef.current?.click();

  // Submit handler
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      Object.keys(hero).forEach((key) => formData.append(key, hero[key]));
      Object.keys(howItWorks).forEach((key) =>
        formData.append(
          `howItWorks${key.charAt(0).toUpperCase() + key.slice(1)}`,
          howItWorks[key]
        )
      );
      Object.keys(whyChooseUs).forEach((key) =>
        formData.append(
          `whyChooseUs${key.charAt(0).toUpperCase() + key.slice(1)}`,
          whyChooseUs[key]
        )
      );
      uploadedFiles.forEach((file) => formData.append("image", file));
      const res = await updateHomepage(formData).unwrap();
      if (res.success) toast.success("Homepage updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update homepage");
    }
  };

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="admin-page p-2">
      <Card className="p-2">
        <CardHeader>
          <CardTitle className="text-3xl border-b-2 w-50">
            Hero Section
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Hero Inputs */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col">
              <Label>Subheader</Label>
              <Input
                value={hero.subHeader}
                className="mt-2 !rounded-md py-6"
                onChange={(e) =>
                  setHero({ ...hero, subHeader: e.target.value })
                }
                placeholder="Please enter subheader"
              />
            </div>
            <div className="flex flex-col">
              <Label>Header</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                value={hero.header}
                onChange={(e) => setHero({ ...hero, header: e.target.value })}
                placeholder="Please enter header"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <Label>Description</Label>
            <textarea
              value={hero.description}
              onChange={(e) =>
                setHero({ ...hero, description: e.target.value })
              }
              placeholder="Please enter description"
              className="w-full mt-2 pl-2 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {/* Response And Rating */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Label>Rating</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                type="number"
                value={hero.rating}
                onChange={(e) => setHero({ ...hero, rating: e.target.value })}
                min={0}
                max={5} // optional: limit rating to 0-5
                step={0.1} // optional: allow decimals
                placeholder="Please enter rating"
              />
            </div>

            <div className="flex flex-col">
              <Label>Response Time</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                type="number"
                value={hero.responseTime}
                onChange={(e) =>
                  setHero({ ...hero, responseTime: e.target.value })
                }
                min={0} // optional: cannot be negative
                placeholder="Please enter response time"
              />
            </div>
          </div>

          {/* Counter Section */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Label>Active Users</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                type="number"
                value={hero.activeUser}
                onChange={(e) =>
                  setHero({ ...hero, activeUser: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <Label>Paid to Titans</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                type="number"
                value={hero.paidToTitans}
                onChange={(e) =>
                  setHero({ ...hero, paidToTitans: e.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Label>Success Rate</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                type="number"
                value={hero.successRate}
                onChange={(e) =>
                  setHero({ ...hero, successRate: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <Label>User Rating</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                type="number"
                value={hero.userRating}
                onChange={(e) =>
                  setHero({ ...hero, userRating: e.target.value })
                }
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="space-y-2">
            <Label>Upload Images</Label>
            <div
              className={`relative mt-3 border-2 border-dashed rounded-lg transition-all duration-200 ${
                dragActive
                  ? "border-primary bg-primary/10 scale-[1.02] shadow-md"
                  : "border-muted-foreground/25"
              } ${error ? "border-destructive" : ""}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Input
                ref={fileInputRef}
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
                      .map((t) => t.split("/")[1].toUpperCase())
                      .join(", ")}{" "}
                    up to {maxSize}MB
                  </p>
                </div>
              )}
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          {/* How It Works Section */}
          <h2 className="text-3xl font-bold mt-6 border-b-2 w-80">
            How It Works Section
          </h2>
          {[1, 2, 3].map((i) => (
            <div key={i} className="mt-4">
              <Label>Icon {i}</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                value={howItWorks[`icon${i}`]}
                onChange={(e) =>
                  setHowItWorks({ ...howItWorks, [`icon${i}`]: e.target.value })
                }
                placeholder="Lucide icon component name"
              />
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col">
                  <Label>Heading {i}</Label>
                  <Input
                    className="mt-2 !rounded-md py-6"
                    value={howItWorks[`heading${i}`]}
                    onChange={(e) =>
                      setHowItWorks({
                        ...howItWorks,
                        [`heading${i}`]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <Label>Subheading {i}</Label>
                  <Input
                    className="mt-2 !rounded-md py-6"
                    value={howItWorks[`subheading${i}`]}
                    onChange={(e) =>
                      setHowItWorks({
                        ...howItWorks,
                        [`subheading${i}`]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Why Choose Us Section */}
          <h2 className="text-3xl font-bold mt-6 border-b-2 w-120">
            Why Choose Task Titans Section
          </h2>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="mt-4">
              <Label>Icon {i}</Label>
              <Input
                className="mt-2 !rounded-md py-6"
                value={whyChooseUs[`icon${i}`]}
                onChange={(e) =>
                  setWhyChooseUs({
                    ...whyChooseUs,
                    [`icon${i}`]: e.target.value,
                  })
                }
                placeholder="Lucide icon component name"
              />
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col">
                  <Label>Heading {i}</Label>
                  <Input
                    className="mt-2 !rounded-md py-6"
                    value={whyChooseUs[`heading${i}`]}
                    onChange={(e) =>
                      setWhyChooseUs({
                        ...whyChooseUs,
                        [`heading${i}`]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <Label>Subheading {i}</Label>
                  <Input
                    className="mt-2 !rounded-md py-6"
                    value={whyChooseUs[`subheading${i}`]}
                    onChange={(e) =>
                      setWhyChooseUs({
                        ...whyChooseUs,
                        [`subheading${i}`]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mb-3">
            <Button
              onClick={handleSubmit}
              className="w-full max-w-4xl mt-6 py-6"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Submit Form"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadBanner;
