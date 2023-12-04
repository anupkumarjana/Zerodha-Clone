import React, { useState } from "react";

const FloatingBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Nav button */}
      <button
        onClick={toggleBox}
        className="fixed bottom-10 right-10 bg-blue-500 text-white py-2 px-4 rounded shadow-md"
      >
        Nav Button
      </button>

      {/* Floating box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 bg-white p-4 border rounded shadow-md">
          <p>Content inside floating box</p>
          <button
            onClick={toggleBox}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingBox;
