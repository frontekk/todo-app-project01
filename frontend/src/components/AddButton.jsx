import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";

const AddButton = ({ handleAddTask }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-2 z-2">
      <FiPlusCircle
        className="text-6xl text-blue-500 shadow-sm rounded-full cursor-pointer"
        onClick={handleAddTask}
      />
    </div>
  );
};

export default AddButton;
