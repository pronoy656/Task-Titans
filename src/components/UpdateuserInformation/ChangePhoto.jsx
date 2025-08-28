import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, ImageIcon } from "lucide-react";
import { Card } from "../ui/Card";
import { CardContent, CardHeader } from "../ui/CardContent";
import { Button } from "../ui/Button";

const ChangePhoto = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    console.log("Selected file:", selectedFile);
    // Handle form submission here
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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setValue("photo", file);
      }
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setValue("photo", file);
      }
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img className="w-[168px] h-[66px]" src="/logo.png" alt="" />
        </div>

        {/* Form Card */}
        <Card className="w-full max-w-3xl mx-auto bg-white shadow-sm border border-[#919191] px-10 py-24 ">
          <CardHeader className="pb-6">
            <h1 className="text-5xl font-semibold text-center text-gray-900">
              Change Photo
            </h1>
            <p className="text-center text-gray-700 mt-3 text-lg">
              Upload Your Photo
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* File Upload Area */}
              <div className="space-y-2">
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-blue-400 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>

                    <div className="space-y-2">
                      <p className="text-gray-600 text-lg">
                        Drag & drop files here
                      </p>
                      <p className="text-gray-500 text-lg">Or</p>
                    </div>

                    <Button
                      type="button"
                      onClick={openFileDialog}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photo
                    </Button>
                  </div>

                  {selectedFile && (
                    <div className="mt-4 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700 flex flex-col items-center">
                      <span>Selected: {selectedFile.name}</span>
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="mt-2 max-h-32 rounded shadow"
                      />
                    </div>
                  )}
                </div>

                {errors.photo && (
                  <p className="text-sm text-red-600">{errors.photo.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !selectedFile}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 !h-14 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Uploading..." : "Save & Continue"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChangePhoto;
