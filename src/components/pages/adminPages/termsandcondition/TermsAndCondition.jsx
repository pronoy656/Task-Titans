// import React, { useRef, useState } from "react";
// import { Button } from "../../../ui/Button";
// import { CheckCircle, Save } from "lucide-react";
// import JoditEditor from "jodit-react";
// import { useSaveTermsMutation } from "../../../../redux/features/termsCondition/termsConditionApi";
// // import { useSaveTermsMutation } from "../../../../redux/features/terms/termsApi"; // ✅ Import mutation

// const TermsAndCondition = () => {
//   const [terms, setTerms] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [lastUpdated, setLastUpdated] = useState("January 15, 2024");

//   const editor = useRef(null);

//   // ✅ Mutation hook
//   const [saveTerms, { isLoading }] = useSaveTermsMutation();

//   // Jodit editor config
//   const config = {
//     readonly: false,
//     height: 300,
//     placeholder: "Write or paste your Terms & Conditions here...",
//   };

//   const handleSave = async () => {
//     try {
//       const res = await saveTerms(terms).unwrap(); // ✅ API call
//       if (res.success) {
//         setShowSuccess(true);
//         setLastUpdated(new Date().toLocaleDateString());
//       }
//     } catch (err) {
//       console.error("Error saving terms:", err);
//       alert("Failed to save terms!");
//     }
//   };

//   return (
//     <div className="admin-page">
//       <div className="rounded-lg p-2 space-y-6">
//         {/* Header */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-3">
//             Manage Terms & Conditions
//           </h1>
//           <p className="text-gray-600 font-normal leading-relaxed">
//             Use this section to write or update the Terms and Conditions for
//             your website. These terms will be displayed to users within the
//             website and must be accepted during registration or major updates.
//           </p>
//         </div>

//         {/* Success Alert */}
//         {showSuccess && (
//           <div className="bg-[#DAEEDF] border border-green-200 rounded-lg p-4 flex items-start gap-3">
//             <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//             <p className="text-[#00A62C] font-normal">
//               Your Terms & Conditions have been successfully updated and will
//               now appear in the Website.
//             </p>
//           </div>
//         )}

//         {/* Editor Section */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-gray-900">
//             Terms & Conditions Editor
//           </h2>

//           <JoditEditor
//             ref={editor}
//             value={terms}
//             config={config}
//             tabIndex={1}
//             onBlur={(newContent) => setTerms(newContent)}
//             onChange={(newContent) => setTerms(newContent)}
//             className="focus:border-blue-500 focus:ring-blue-500 rounded-md"
//           />

//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">
//               Last Updated On: {lastUpdated}
//             </p>
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="pt-2">
//           <Button
//             onClick={handleSave}
//             disabled={isLoading}
//             className="bg-[#007BFF] hover:bg-blue-700 text-white px-20 py-2.5 rounded-md font-medium flex items-center gap-2"
//           >
//             <Save className="w-4 h-4" />
//             {isLoading ? "Saving..." : "Save"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndCondition;

// import React, { useRef, useState, useEffect } from "react";
// import { Button } from "../../../ui/Button";
// import { Save } from "lucide-react";
// import JoditEditor from "jodit-react";
// import {
//   useSaveTermsMutation,
//   useGetTermsQuery,
// } from "../../../../redux/features/termsCondition/termsConditionApi";
// import toast from "react-hot-toast";

// const TermsAndCondition = () => {
//   const [terms, setTerms] = useState("");
//   const [lastUpdated, setLastUpdated] = useState("—");

//   const editor = useRef(null);

//   // ✅ API hooks
//   const { data, isLoading: isFetching } = useGetTermsQuery();
//   const [saveTerms, { isLoading }] = useSaveTermsMutation();

//   // Load existing terms when fetched
//   useEffect(() => {
//     if (data?.data?.content) {
//       setTerms(data.data.content);
//       setLastUpdated(
//         new Date(data.data.updatedAt || Date.now()).toLocaleDateString()
//       );
//     }
//   }, [data]);

//   // Jodit editor config
//   const config = {
//     readonly: false,
//     height: 300,
//     placeholder: "Write or paste your Terms & Conditions here...",
//   };

//   const handleSave = async () => {
//     try {
//       const res = await saveTerms(terms).unwrap();
//       if (res.success) {
//         toast.success("✅ Terms & Conditions updated successfully!");
//         setLastUpdated(new Date().toLocaleDateString());
//       }
//     } catch (err) {
//       console.error("Error saving terms:", err);
//       toast.error("❌ Failed to save Terms & Conditions!");
//     }
//   };

//   if (isFetching) return <p>Loading Terms & Conditions...</p>;

//   return (
//     <div className="admin-page">
//       <div className="rounded-lg p-2 space-y-6">
//         {/* Header */}
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-3">
//             Manage Terms & Conditions
//           </h1>
//           <p className="text-gray-600 font-normal leading-relaxed">
//             Use this section to write or update the Terms and Conditions for
//             your website. These terms will be displayed to users within the
//             website and must be accepted during registration or major updates.
//           </p>
//         </div>

//         {/* Editor Section */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-gray-900">
//             Terms & Conditions Editor
//           </h2>

//           <JoditEditor
//             ref={editor}
//             value={terms}
//             config={config}
//             tabIndex={1}
//             onBlur={(newContent) => setTerms(newContent)}
//             onChange={(newContent) => setTerms(newContent)}
//             className="focus:border-blue-500 focus:ring-blue-500 rounded-md"
//           />

//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-500">
//               Last Updated On: {lastUpdated}
//             </p>
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="pt-2">
//           <Button
//             onClick={handleSave}
//             disabled={isLoading}
//             className="bg-[#007BFF] hover:bg-blue-700 text-white px-20 py-2.5 rounded-md font-medium flex items-center gap-2"
//           >
//             <Save className="w-4 h-4" />
//             {isLoading ? "Saving..." : "Save"}
//           </Button>
//         </div>

//         {/* Preview Section */}
//         <div className="mt-8 p-6 border border-gray-200 rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">
//             Preview of Terms & Conditions
//           </h3>
//           <div
//             className="prose prose-blue max-w-none"
//             dangerouslySetInnerHTML={{ __html: terms }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndCondition;

import React, { useState, useEffect } from "react";
import { Button } from "../../../ui/Button";
import { Save } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import {
  useSaveTermsMutation,
  useGetTermsQuery,
} from "../../../../redux/features/termsCondition/termsConditionApi";
import toast from "react-hot-toast";

const TermsAndCondition = () => {
  const [terms, setTerms] = useState("");
  const [lastUpdated, setLastUpdated] = useState("—");

  // ✅ API hooks
  const { data, isLoading: isFetching } = useGetTermsQuery();
  const [saveTerms, { isLoading }] = useSaveTermsMutation();

  // Load existing terms
  useEffect(() => {
    if (data?.data?.content) {
      setTerms(data.data.content);
      setLastUpdated(
        new Date(data.data.updatedAt || Date.now()).toLocaleDateString()
      );
    }
  }, [data]);

  const handleSave = async () => {
    try {
      const res = await saveTerms(terms).unwrap();
      if (res.success) {
        toast.success("✅ Terms & Conditions updated successfully!");
        setLastUpdated(new Date().toLocaleDateString());
      }
    } catch (err) {
      console.error("Error saving terms:", err);
      toast.error("❌ Failed to save Terms & Conditions!");
    }
  };

  if (isFetching) return <p>Loading Terms & Conditions...</p>;

  return (
    <div className="admin-page">
      <div className="rounded-lg p-2 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Manage Terms & Conditions
          </h1>
          <p className="text-gray-600 font-normal leading-relaxed">
            Use this section to write or update the Terms and Conditions for
            your website. These terms will be displayed to users within the
            website and must be accepted during registration or major updates.
          </p>
        </div>

        {/* TinyMCE Editor */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Terms & Conditions Editor
          </h2>

          <Editor
            apiKey="hieoy8s6l7zh7rshgt69jlf0f9r70w9fdm2chycp283dty6u" // 🔑 Get free API key from https://www.tiny.cloud/
            value={terms}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist autolink lists link charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline | \
                 alignleft aligncenter alignright alignjustify | \
                 bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content) => setTerms(content)}
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Last Updated On: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-2">
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#007BFF] hover:bg-blue-700 text-white px-20 py-2.5 rounded-md font-medium flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>

        {/* Preview Section */}
        <div className="mt-8 p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Preview of Terms & Conditions
          </h3>
          <div
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: terms }}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
