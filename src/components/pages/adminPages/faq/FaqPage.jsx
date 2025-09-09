import React, { useState } from "react";
import { Card } from "../../../ui/Card";
import { CardContent, CardHeader, CardTitle } from "../../../ui/CardContent";
import { Button } from "../../../ui/Button";
import { CheckCircle, Plus } from "lucide-react";
import { Alert, AlertDescription } from "../../../ui/Alert";
import Modal from "./Modal";
import { Table, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { Eye, Edit, Trash2 } from "lucide-react"; // ✅ lucide-react icons

const FaqPage = () => {
  const [faqs, setFaqs] = useState([{ id: 1, question: "", answer: "" }]);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // modal inputs state
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleInputChange = (id, field, value) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, [field]: value } : faq))
    );
  };

  const handleSaveFAQ = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const newId = Math.max(...faqs.map((faq) => faq.id)) + 1;
    setFaqs([
      ...faqs,
      { id: newId, question: newQuestion.trim(), answer: newAnswer.trim() },
    ]);

    // reset and close modal
    setNewQuestion("");
    setNewAnswer("");
    setShowModal(false);
    setShowSuccess(true);
  };

  // For Table
  const dataSource = [
    {
      key: "1",
      question: "Bero et velit interdum, ac aliquet odio mattis.........",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing eli......",
    },
    {
      key: "2",
      question: "Bero et velit interdum, ac aliquet odio mattis.........",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing eli......",
    },
    {
      key: "3",
      question:
        "Quisque vel purus euismod, facilisis justo non, tincidunt magna.",
      answer:
        "Praesent ut ligula non mi varius sagittis. Sed cursus turpis vitae tortor.",
    },
    {
      key: "4",
      question:
        "Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh.",
      answer:
        "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
    },
    {
      key: "5",
      question: "Maecenas nec odio et ante tincidunt tempus.",
      answer: "Vestibulum fringilla pede sit amet augue. In turpis.",
    },
    {
      key: "6",
      question:
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      answer:
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.",
    },
  ];

  const menuItems = [
    {
      key: "1",
      label: (
        <div className="flex items-center gap-2">
          <Eye size={16} /> View
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center gap-2">
          <Edit size={16} /> Edit
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center gap-2 text-red-600">
          <Trash2 size={16} /> Delete
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "FAQ (Question)",
      dataIndex: "question",
      key: "question",
      ellipsis: true,
    },
    {
      title: "FAQ (Answer)",
      dataIndex: "answer",
      key: "answer",
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      width: 80, // ✅ কলাম ছোট করে দিলাম
      align: "center", // ✅ আইকনটা সেন্টারে থাকবে
      render: () => (
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <MoreOutlined style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="admin-page">
      <div className="max-w-8xl mx-auto">
        <Card className="shadow-sm p-5">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-semibold text-gray-800">
              Manage Frequently Asked Question
            </CardTitle>
            <p className="text-gray-800 mt-2">
              Use this section to write or update the Frequently Asked Questions
              for your website. These FAQ will help you to guide users.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {showSuccess && (
              <Alert variant="success">
                <CheckCircle className="h-4 w-4 mt-1.5 text-green-900" />
                <AlertDescription>
                  Your Frequently Asked Question have been successfully updated
                  and will now appear in the Website.
                </AlertDescription>
              </Alert>
            )}

            {faqs.map((faq, index) => (
              <div key={faq.id} className="space-y-4">
                <div>
                  <label className="block font-medium text-gray-800 mb-2">
                    {index + 1}. Question
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="2"
                    placeholder="Enter your Question"
                    value={faq.question}
                    onChange={(e) =>
                      handleInputChange(faq.id, "question", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-800 mb-2">
                    {index + 1}. Answer
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                    placeholder="Enter your answer"
                    value={faq.answer}
                    onChange={(e) =>
                      handleInputChange(faq.id, "answer", e.target.value)
                    }
                  />
                </div>

                {index < faqs.length - 1 && (
                  <hr className="border-gray-200 my-6" />
                )}
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <Button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="max-w-7xl mx-auto">
        <Table
          className="mt-8"
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: 5, // ✅ প্রতি পেজে ৫টা FAQ
            showSizeChanger: false, // ✅ শুধু ৫ fix করে রাখা
          }}
          bordered
        />
      </div>
      {/* ✅ Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-semibold mb-6">Add New FAQ</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-800 mb-2">
              Question
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="2"
              placeholder="Enter your Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium text-gray-800 mb-2">
              Answer
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="3"
              placeholder="Enter your Answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-6">
          <Button
            onClick={handleSaveFAQ}
            className="w-72 bg-blue-600 hover:bg-blue-700 !text-md font-semibold text-white px-4 !py-6 rounded-md"
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FaqPage;
