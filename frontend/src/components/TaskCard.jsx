import React, { useState, useEffect } from "react";
import { FiDelete, FiEdit, FiCheckCircle } from "react-icons/fi";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskCard = ({
  handleDeleteClick,
  title,
  date,
  taskId,
  onTitleUpdate,
}) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleIsCheck = () => {
    setIsCheck(!isCheck);
  };

  const handleEditClick = () => {
    setIsEdit(!isEdit);
    setNewTitle(title);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };
  //
  const { id } = useParams();

  const saveEditedTitle = () => {
    onTitleUpdate(newTitle); // Send the updated title to the parent (Home) component
    setIsEdit(false);
  };
  return (
    <div
      className={`${
        isCheck ? "transition-color duration-500 bg-slate-600 text-white" : ""
      }
    w-4/5 h-auto mt-2 p-3 border-2 border-slate-200 mx-auto rounded-md relative`}
    >
      <div
        className={`${
          isCheck
            ? "transition-color duration-500 text-black"
            : "text-slate-400"
        }
      absolute top-0 left-0 bg-slate-200 rounded-tl-md p-1 text-sm`}
      >
        {date}
      </div>
      <div className="mt-5 flex-grow aspect-w-1 aspect-h-1">
        {isEdit ? (
          <>
            <div className="flex flex-row ">
              <textarea
                className={`${
                  isCheck
                    ? "line-through transition-color duration-500 bg-slate-600"
                    : ""
                }  w-full h-auto flex items-center text-justify
                focus:border-none outline-none focus:ring-0 resize-none text-lg`}
                value={newTitle}
                onChange={handleTitleChange}
              />
              <button
                className="animate-jump px-4 py-1 bg-green-300 rounded-md"
                onClick={saveEditedTitle}
              >
                save
              </button>
            </div>
          </>
        ) : (
          <div
            className={`${isCheck ? "line-through" : ""}
          w-full h-full flex items-center text-justify text-lg`}
          >
            {title}
          </div>
        )}
      </div>
      <div className="flex space-x-5 items-center mt-3 px-2">
        <div>
          <FiCheckCircle
            className={`${isCheck ? "text-green-500" : "text-slate-400"}
           text-2xl  cursor-pointer`}
            onClick={handleIsCheck}
          />
        </div>
        <div>
          <FiEdit
            className={`${isEdit ? "text-orange-500" : "text-slate-400"}
          text-2xl cursor-pointer`}
            onClick={handleEditClick}
          />
        </div>
        <div>
          <FiDelete
            className={`text-slate-400
            text-2xl  cursor-pointer`}
            onClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
