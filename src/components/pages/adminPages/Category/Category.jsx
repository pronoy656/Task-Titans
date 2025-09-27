import React, { useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Button } from "../../../ui/Button";
import {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
} from "../../../../redux/features/category/categoryApi";
import toast from "react-hot-toast";
import { Brush } from "lucide-react";
import * as LucideIcons from "lucide-react"; // import all Lucide icons

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
              // <Card key={cat._id} className="bg-white border-0 p-3">
              //   <CardContent className="p-0">
              //     <p className="border w-7 h-7 rounded-full p-5">{cat.icon}</p>
              //     <h3 className="text-lg font-semibold text-gray-900 mb-2">
              //       {cat.name}
              //     </h3>

              //     <p className="text-gray-600 text-sm leading-relaxed">
              //       {cat.description}
              //     </p>
              //   </CardContent>
              // </Card>
              <Card
                key={cat._id}
                className="p-6 shadow-sm  hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0 space-y-4">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {LucideIcons[cat.icon] ? (
                      React.createElement(LucideIcons[cat.icon], {
                        className: "w-8 h-8 text-blue-600",
                      })
                    ) : (
                      <LucideIcons.HelpCircle className="w-8 h-8 text-gray-400" /> // fallback if icon not found
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {cat.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
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
