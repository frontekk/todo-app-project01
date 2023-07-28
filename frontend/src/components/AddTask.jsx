import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = ({ isOpen, onCancel, onConfirm }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  //to create a new task
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false); // Reset the closing state when the modal is opened
      setIsVisible(true); // Show the modal when it's opened
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsClosing(true); // Set the closing state to trigger the exit animation
    setTimeout(() => {
      setIsVisible(false); // Hide the modal after the exit animation is complete
      setIsClosing(false); // Reset the closing state
    }, 500); // Make sure this timeout matches the duration of your "animate-jump-out" animation
  };
  //function to create new task
  const handleSaveTask = () => {
    const data = {
      title,
    };
    setLoading(true);
    axios
      .post("https://todoapp-project01.onrender.com/task", data)
      .then(() => {
        setLoading(false);
        onConfirm();
        setTitle("");
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
            } bg-white p-4 rounded-md shadow-md shadow-slate-500 w-4/5 md:w-96 h-3/5`}
          >
            <p className="text-2xl text-center">Add new Task</p>
            <div className="w-full h-3/5">
              <textarea
                className="w-full h-4/5 mt-10 p-3 resize-none rounded-md border-2 border-slate-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-16 flex justify-center space-x-8">
              <button
                className="bg-green-500 px-4 py-2 rounded-md text-white text-lg"
                onClick={() => {
                  handleSaveTask();
                  handleCloseModal(); // Call the handleCloseModal when "Save" is clicked to close the modal
                }}
              >
                Save
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded-md text-white text-lg"
                onClick={() => {
                  onCancel();
                  handleCloseModal(); // Call the handleCloseModal when "Cancel" is clicked to close the modal
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

export default AddTask;
