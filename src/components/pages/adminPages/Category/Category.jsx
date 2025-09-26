import React, { useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Button } from "../../../ui/Button";
import {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
} from "../../../../redux/features/category/categoryApi";
import toast from "react-hot-toast";

const Category = () => {
  // Local state for form
  const [categories, setCategories] = useState([
    { id: 1, categoryName: "", description: "", icon: "" },
  ]);

  // RTK Query hooks
  const [createCategory] = useCreateCategoryMutation();
  const {
    data: fetchedCategories,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesQuery();

  // ✅ Input change handler
  const handleInputChange = (id, field, value) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, [field]: value } : category
      )
    );
  };

  // ✅ Save category using RTK Query POST

  const saveCategories = async () => {
    try {
      const newCategory = {
        name: categories[0].categoryName,
        description: categories[0].description,
        icon: categories[0].icon, // ✅ এখন icon যোগ হলো
      };

      const res = await createCategory(newCategory).unwrap();
      console.log("POST Response:", res);

      if (res.success) {
        toast.success("Category created successfully! 🎉");
        refetch(); // ✅ save করার পর category list রিফ্রেশ হবে
      } else {
        toast.error(res.message || "Failed to create category");
      }
    } catch (error) {
      console.error("Error creating category:", error);
      toast.error("Something went wrong while creating category ❌");
    }
  };

  //  Demo card show
  const services = [
    {
      id: 1,
      title: "Cleaning & Housekeeping",
      description:
        "Deep cleaning, regular maintenance, and organization services",
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 21l4-4 4 4"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: "Lawn Care & Gardening",
      description: "Mowing, trimming, planting, and landscape maintenance",
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            />
            <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: "Furniture Moving",
      description: "Safe and efficient furniture and item relocation",
      icon: (
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="admin-page">
      <div className="max-w-8xl mx-auto">
        {/* Create Category Form */}
        <Card className="shadow-sm p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-semibold text-gray-800">
              Create Category
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {categories.map((category, index) => (
              <div key={category.id} className="space-y-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    {index + 1}. Category Name
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="2"
                    placeholder="Enter category name"
                    value={category.categoryName}
                    onChange={(e) =>
                      handleInputChange(
                        category.id,
                        "categoryName",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    {index + 1}. Icon
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="1"
                    placeholder="Enter icon name (e.g. ArrowBigUp)"
                    value={category.icon}
                    onChange={(e) =>
                      handleInputChange(category.id, "icon", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    {index + 1}. Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                    placeholder="Enter description"
                    value={category.description}
                    onChange={(e) =>
                      handleInputChange(
                        category.id,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </div>

                {index < categories.length - 1 && (
                  <hr className="border-gray-200 my-6" />
                )}
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <Button
                onClick={saveCategories}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
              >
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Show fetched categories */}
      <div className="mt-12">
        <div className="max-w-7xl mx-auto">
          {isLoading && <p>Loading categories...</p>}
          {isError && <p>Failed to load categories</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fetchedCategories?.data?.map((cat) => (
              <Card key={cat._id} className="bg-white border-0 p-3">
                <CardContent className="p-0">
                  <p className="border w-7 h-7 rounded-full p-5">{cat.icon}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Demo card Show */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border-0 p-4">
                <CardContent className="p-0">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
