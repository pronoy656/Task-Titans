import React, { useRef, useState } from "react";
import { Button } from "../../../ui/Button";
import { CheckCircle, Save } from "lucide-react";
import JoditEditor from "jodit-react";
import { useSaveTermsMutation } from "../../../../redux/features/termsCondition/termsConditionApi";
// import { useSaveTermsMutation } from "../../../../redux/features/terms/termsApi"; // ✅ Import mutation

const TermsAndCondition = () => {
  const [terms, setTerms] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("January 15, 2024");

  const editor = useRef(null);

  // ✅ Mutation hook
  const [saveTerms, { isLoading }] = useSaveTermsMutation();

  // Jodit editor config
  const config = {
    readonly: false,
    height: 300,
    placeholder: "Write or paste your Terms & Conditions here...",
  };

  const handleSave = async () => {
    try {
      const res = await saveTerms(terms).unwrap(); // ✅ API call
      if (res.success) {
        setShowSuccess(true);
        setLastUpdated(new Date().toLocaleDateString());
      }
    } catch (err) {
      console.error("Error saving terms:", err);
      alert("Failed to save terms!");
    }
  };

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

        {/* Success Alert */}
        {showSuccess && (
          <div className="bg-[#DAEEDF] border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-[#00A62C] font-normal">
              Your Terms & Conditions have been successfully updated and will
              now appear in the Website.
            </p>
          </div>
        )}

        {/* Editor Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Terms & Conditions Editor
          </h2>

          <JoditEditor
            ref={editor}
            value={terms}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setTerms(newContent)}
            onChange={(newContent) => setTerms(newContent)}
            className="focus:border-blue-500 focus:ring-blue-500 rounded-md"
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
      </div>
    </div>
  );
};

export default TermsAndCondition;
