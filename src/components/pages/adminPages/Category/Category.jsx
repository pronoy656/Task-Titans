import React, { useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Button } from "../../../ui/Button";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../../../redux/features/category/categoryApi";
import toast from "react-hot-toast";
import { Brush } from "lucide-react";
import * as LucideIcons from "lucide-react"; // import all Lucide icons
import { Trash2 } from "lucide-react"; // 🗑️ Delete Icon

const Category = () => {
  // Local state for form
  const [categories, setCategories] = useState([
    { id: 1, categoryName: "", description: "", icon: "" },
  ]);

  // RTK Query hooks
  const [createCategory] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const {
    data: fetchedCategories,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesQuery();

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

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

  // Open Delete Modal
  const confirmDelete = (categoryId) => {
    setCategoryToDelete(categoryId);
    setShowModal(true);
  };

  // handle Delete
  const handleDelete = async () => {
    try {
      const res = await deleteCategory(categoryToDelete).unwrap();
      if (res.success) {
        toast.success("Category deleted successfully 🗑️");
        refetch();
      } else {
        toast.error(res.message || "Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Something went wrong while deleting ❌");
    } finally {
      setShowModal(false);
      setCategoryToDelete(null);
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
                {/* Name */}
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    {index + 1}. Category Name
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
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

                {/* Icon */}
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Icon
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="1"
                    placeholder="Enter icon name (e.g. ArrowBigUp)"
                    value={category.icon}
                    onChange={(e) =>
                      handleInputChange(category.id, "icon", e.target.value)
                    }
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
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

      {/* Show Fetched Categories */}
      <div className="mt-12">
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <div className="flex flex-col justify-center items-center h-40">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-gray-500 text-sm">Loading categories...</p>
            </div>
          )}

          {isError && <p>Failed to load categories</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fetchedCategories?.data?.map((cat) => (
              <Card
                key={cat._id}
                className="relative p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* 🗑️ Delete Icon at Top-Right */}
                <button
                  onClick={() => confirmDelete(cat._id)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors"
                  title="Delete Category"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <CardContent className="p-0 space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {LucideIcons[cat.icon] ? (
                      React.createElement(LucideIcons[cat.icon], {
                        className: "w-8 h-8 text-blue-600",
                      })
                    ) : (
                      <LucideIcons.HelpCircle className="w-8 h-8 text-gray-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{cat.name}</h3>
                    <p className="text-gray-600">{cat.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">
              Are you sure you want to delete this?
            </h2>
            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Yes, Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
