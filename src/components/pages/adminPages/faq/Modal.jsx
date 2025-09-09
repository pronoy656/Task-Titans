// src/components/ui/Modal.jsx

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6"
    >
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-3xl shadow-xl relative">
        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-red-500 text-2xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
