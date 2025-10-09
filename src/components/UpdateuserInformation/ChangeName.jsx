// import React from "react";
// import { useForm } from "react-hook-form";
// import { Card } from "../ui/Card";
// import { CardContent, CardHeader } from "../ui/CardContent";
// import { Button } from "../ui/Button";
// import { Label } from "../ui/Label";
// import { Input } from "../ui/Input";

// const ChangeName = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = async (data) => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log("Form submitted:", data);
//     // Handle form submission here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-3xl">
//         {" "}
//         {/* Logo */}
//         <div className="mb-8 flex justify-center">
//           <img className="w-[168px] h-[66px]" src="/logo.png" alt="" />
//         </div>
//         {/* Form Card */}
//         <Card className="w-full  mx-auto bg-white shadow-sm border border-[#919191]  py-28 px-8">
//           <CardHeader className="pb-6">
//             <h1 className="text-5xl font-semibold text-center text-gray-900">
//               Change Name
//             </h1>
//           </CardHeader>

//           <CardContent>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//               {/* First Name Field */}
//               <div className="space-y-2">
//                 <Label
//                   htmlFor="firstName"
//                   className="font-medium text-gray-700 "
//                 >
//                   First Name
//                 </Label>
//                 <Input
//                   id="firstName"
//                   type="text"
//                   {...register("firstName", {
//                     required: "First name is required",
//                     minLength: {
//                       value: 2,
//                       message: "First name must be at least 2 characters",
//                     },
//                   })}
//                   className="w-full h-12 px-3 py-2 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your first name"
//                 />
//                 {errors.firstName && (
//                   <p className=" text-red-600">{errors.firstName.message}</p>
//                 )}
//               </div>

//               {/* Last Name Field */}
//               <div className="space-y-2">
//                 <Label htmlFor="lastName" className="font-medium text-gray-700">
//                   Last Name
//                 </Label>
//                 <Input
//                   id="lastName"
//                   type="text"
//                   {...register("lastName", {
//                     required: "Last name is required",
//                     minLength: {
//                       value: 2,
//                       message: "Last name must be at least 2 characters",
//                     },
//                   })}
//                   className="w-full h-12 px-3 py-2 mt-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your last name"
//                 />
//                 {errors.lastName && (
//                   <p className=" text-red-600">{errors.lastName.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-[#007BFF] hover:bg-blue-600 text-white font-medium py-2 px-4 !h-14 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "Saving..." : "Save & Continue"}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ChangeName;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { Card } from "../ui/Card";
// import { CardContent, CardHeader } from "../ui/CardContent";
// import { Button } from "../ui/Button";
// import { Label } from "../ui/Label";
// import { Input } from "../ui/Input";
// import { useUpdateUserProfileMutation } from "../../redux/features/updateImage/updateImage";
// // import { useUpdateUserProfileMutation } from "@/redux/features/user/userApi";

// const ChangeName = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm();

//   // ✅ RTK Query mutation hook
//   const [updateUserProfile, { isLoading, isSuccess, error }] =
//     useUpdateUserProfileMutation();

//   const onSubmit = async (formData) => {
//     try {
//       const fullName = `${formData.firstName} ${formData.lastName}`;

//       const response = await updateUserProfile({
//         data: { name: fullName },
//       }).unwrap();

//       console.log("✅ Name updated:", response);
//       alert("Name updated successfully!");
//       reset();
//     } catch (err) {
//       console.error("❌ Update failed:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-3xl">
//         {/* Logo */}
//         <div className="mb-8 flex justify-center">
//           <img className="w-[168px] h-[66px]" src="/logo.png" alt="" />
//         </div>

//         {/* Form Card */}
//         <Card className="w-full mx-auto bg-white shadow-sm border border-[#919191] py-28 px-8">
//           <CardHeader className="pb-6">
//             <h1 className="text-5xl font-semibold text-center text-gray-900">
//               Change Name
//             </h1>
//           </CardHeader>

//           <CardContent>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//               {/* First Name */}
//               <div className="space-y-2">
//                 <Label
//                   htmlFor="firstName"
//                   className="font-medium text-gray-700"
//                 >
//                   First Name
//                 </Label>
//                 <Input
//                   id="firstName"
//                   type="text"
//                   {...register("firstName", {
//                     required: "First name is required",
//                     minLength: {
//                       value: 2,
//                       message: "First name must be at least 2 characters",
//                     },
//                   })}
//                   className="w-full h-12 px-3 py-2 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your first name"
//                 />
//                 {errors.firstName && (
//                   <p className="text-red-600">{errors.firstName.message}</p>
//                 )}
//               </div>

//               {/* Last Name */}
//               <div className="space-y-2">
//                 <Label htmlFor="lastName" className="font-medium text-gray-700">
//                   Last Name
//                 </Label>
//                 <Input
//                   id="lastName"
//                   type="text"
//                   {...register("lastName", {
//                     required: "Last name is required",
//                     minLength: {
//                       value: 2,
//                       message: "Last name must be at least 2 characters",
//                     },
//                   })}
//                   className="w-full h-12 px-3 py-2 mt-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your last name"
//                 />
//                 {errors.lastName && (
//                   <p className="text-red-600">{errors.lastName.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={isSubmitting || isLoading}
//                 className="w-full bg-[#007BFF] hover:bg-blue-600 text-white font-medium py-2 px-4 !h-14 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading || isSubmitting ? "Saving..." : "Save & Continue"}
//               </Button>

//               {/* Error Message */}
//               {error && (
//                 <p className="text-red-500 text-center mt-3">
//                   {error.data?.message || "Something went wrong."}
//                 </p>
//               )}
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ChangeName;

import React from "react";
import { useForm } from "react-hook-form";
import { Card } from "../ui/Card";
import { CardContent, CardHeader } from "../ui/CardContent";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { toast } from "react-hot-toast"; // ✅ Toast import
import { useNavigate } from "react-router-dom"; // ✅ Navigate import
import { useUpdateUserProfileMutation } from "../../redux/features/updateImage/updateImage";

const ChangeName = () => {
  const navigate = useNavigate(); // ✅ initialize navigate
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [updateUserProfile, { isLoading, error }] =
    useUpdateUserProfileMutation();

  const onSubmit = async (formData) => {
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`;

      await updateUserProfile({
        data: { name: fullName },
      }).unwrap();

      toast.success("Name updated successfully 🎉");
      reset();

      // ✅ Redirect to home after short delay
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("❌ Update failed:", err);
      toast.error(err?.data?.message || "Something went wrong. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img className="w-[168px] h-[66px]" src="/logo.png" alt="logo" />
        </div>

        {/* Form Card */}
        <Card className="w-full mx-auto bg-white shadow-sm border border-[#919191] py-28 px-8">
          <CardHeader className="pb-6">
            <h1 className="text-5xl font-semibold text-center text-gray-900">
              Change Name
            </h1>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* First Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="font-medium text-gray-700"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                  })}
                  className="w-full h-12 px-3 py-2 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                  })}
                  className="w-full h-12 px-3 py-2 mt-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full bg-[#007BFF] hover:bg-blue-600 text-white font-medium py-2 px-4 !h-14 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading || isSubmitting ? "Saving..." : "Save & Continue"}
              </Button>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-center mt-3">
                  {error.data?.message || "Something went wrong."}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChangeName;
