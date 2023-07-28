import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onCancel, id, onConfirm }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setIsVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && isVisible) {
      handleCloseModal();
    }
  }, [isOpen, isVisible]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 500);
  };

  const navigate = useNavigate();

  const deleteTask = () => {
    axios
      .delete(`https://todoapp-project01.onrender.com/task/${id}`)
      .then(() => {
        onConfirm();
        console.log("deleted");
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10`}
        >
          <div
            className={`${
              isOpen ? "animate-jump-in" : isClosing ? "animate-jump-out" : ""
            } bg-white p-4 rounded-md shadow-md shadow-slate-500`}
          >
            <p className="text-lg">
              Are you sure you want to delete this task?
            </p>
            <div className="mt-6 flex justify-center space-x-8">
              <button
                className="bg-red-500 px-4 py-2 rounded-md text-white text-lg"
                onClick={deleteTask}
              >
                Yes
              </button>
              <button
                className="bg-blue-500 px-4 py-2 rounded-md text-white text-lg"
                onClick={() => {
                  onCancel();
                  handleCloseModal();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
