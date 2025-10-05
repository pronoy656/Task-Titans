import React, { useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Button } from "../../../ui/Button";
import { Edit, Plus, Trash2 } from "lucide-react";
import { MoreOutlined } from "@ant-design/icons";
import CustomModal from "./Modal"; // your custom modal
import { Table, Spin, Dropdown, Modal } from "antd";
import toast from "react-hot-toast";
import {
  useCreateFAQMutation,
  useDeleteFAQMutation,
  useGetFAQsQuery,
  useUpdateFAQMutation,
} from "../../../../redux/features/faqApi/faqApi";

import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

const FaqPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editFAQ, setEditFAQ] = useState(null);

  const { data, isLoading, refetch } = useGetFAQsQuery();
  const [createFAQ, { isLoading: creating }] = useCreateFAQMutation();
  const [updateFAQ, { isLoading: updating }] = useUpdateFAQMutation();
  const [deleteFAQ] = useDeleteFAQMutation();

  // ✅ Inline Create
  const handleMainSubmit = async () => {
    if (!question.trim() || !answer.trim())
      return toast.error("Fill all fields!");
    try {
      const res = await createFAQ({ question, answer }).unwrap();
      if (res.success) {
        toast.success("FAQ added successfully!");
        setQuestion("");
        setAnswer("");
        refetch();
      }
    } catch {
      toast.error("Failed to add FAQ");
    }
  };

  // ✅ Modal Create
  const handleModalSubmit = async () => {
    if (!newQuestion.trim() || !newAnswer.trim())
      return toast.error("Fill all fields!");
    try {
      const res = await createFAQ({
        question: newQuestion,
        answer: newAnswer,
      }).unwrap();
      if (res.success) {
        toast.success("FAQ added successfully!");
        setNewQuestion("");
        setNewAnswer("");
        setShowModal(false);
        refetch();
      }
    } catch {
      toast.error("Failed to add FAQ");
    }
  };

  // ✅ Edit FAQ
  const handleEdit = (record) => {
    setEditFAQ(record);
    setEditModal(true);
  };

  const handleUpdateFAQ = async () => {
    if (!editFAQ?.question || !editFAQ?.answer) return;

    try {
      const res = await updateFAQ({
        faqId: editFAQ._id, // <-- use _id from backend
        data: { question: editFAQ.question, answer: editFAQ.answer },
      }).unwrap();

      if (res.success) {
        toast.success("FAQ updated successfully!");
        setEditModal(false);
        setEditFAQ(null);
        refetch();
      }
    } catch {
      toast.error("Failed to update FAQ!");
    }
  };

  // ✅ Delete FAQ using SweetAlert2
  const handleDelete = async (faqId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this FAQ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteFAQ(faqId).unwrap();
        if (res.success) {
          Swal.fire("Deleted!", "FAQ has been deleted.", "success");
          refetch();
        }
      } catch {
        Swal.fire("Error!", "Failed to delete FAQ!", "error");
      }
    }
  };

  const getMenuItems = (record) => [
    {
      key: "edit",
      label: (
        <div
          className="flex items-center gap-2 text-green-600"
          onClick={() => handleEdit(record)}
        >
          <Edit size={16} /> Edit
        </div>
      ),
    },
    {
      key: "delete",
      label: (
        <div
          className="flex items-center gap-2 text-red-600"
          onClick={() => handleDelete(record.key)}
        >
          <Trash2 size={16} /> Delete
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
      ellipsis: true,
    },
    { title: "Answer", dataIndex: "answer", key: "answer", ellipsis: true },
    {
      title: "Action",
      key: "action",
      width: 80,
      align: "center",
      render: (_, record) => (
        <Dropdown
          menu={{ items: getMenuItems(record) }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <MoreOutlined style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      ),
    },
  ];

  const dataSource =
    data?.data?.map((faq) => ({
      key: faq._id, // this is fine for Table row key
      _id: faq._id, // keep the actual id
      question: faq.question,
      answer: faq.answer,
    })) || [];

  return (
    <div className="admin-page">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-sm p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Manage FAQs
            </CardTitle>
            <p className="text-gray-600 mt-2 mb-5">
              Add or update Frequently Asked Questions for your website.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter Question"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Answer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                <Plus className="h-4 w-4" /> Add More
              </Button>
              <Button
                onClick={handleMainSubmit}
                disabled={creating}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
              >
                {creating ? "Saving..." : "Save FAQ"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        {isLoading ? (
          <Spin
            size="large"
            className="flex justify-center items-center py-10"
          />
        ) : (
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 5 }}
            bordered
          />
        )}
      </div>

      {/* Add More Modal */}
      <CustomModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-semibold mb-6">Add New FAQ</h2>
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter Question"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-2"
        />
        <textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Enter Answer"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
        />
        <Button
          onClick={handleModalSubmit}
          disabled={creating}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md"
        >
          {creating ? "Saving..." : "Save"}
        </Button>
      </CustomModal>

      {/* Edit Modal */}
      <Modal
        title="Edit FAQ"
        open={editModal}
        onCancel={() => setEditModal(false)}
        footer={null}
        centered
      >
        <textarea
          value={editFAQ?.question || ""}
          onChange={(e) =>
            setEditFAQ((prev) => ({ ...prev, question: e.target.value }))
          }
          placeholder="Enter Question"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-2"
        />
        <textarea
          value={editFAQ?.answer || ""}
          onChange={(e) =>
            setEditFAQ((prev) => ({ ...prev, answer: e.target.value }))
          }
          placeholder="Enter Answer"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
        />
        <Button
          onClick={handleUpdateFAQ}
          disabled={updating}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md"
        >
          {updating ? "Updating..." : "Update FAQ"}
        </Button>
      </Modal>
    </div>
  );
};

export default FaqPage;
