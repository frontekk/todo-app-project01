import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import AddButton from "../components/AddButton";
import Modal from "../components/Modal";
import axios from "axios";
import Spinner from "../components/Spinner";
import AddTask from "../components/AddTask";
import moment from "moment";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newTaskIsOpen, setNewTaskIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  // Modal functions
  const handleDeleteClick = (taskId) => {
    setTaskIdToDelete(taskId);
    setModalIsOpen(!modalIsOpen);
  };

  const handleCancelDelete = () => {
    setModalIsOpen(false);
  };

  // Add Button Functions
  const handleAddTaskCLick = () => {
    setNewTaskIsOpen(!newTaskIsOpen);
  };

  const handleCancelNewTask = () => {
    setNewTaskIsOpen(false);
  };

  // Fetch all tasks
  const fetchTasks = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/task")
      .then((response) => {
        setTasks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect to fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Callback function to fetch updated task list after successful task creation
  const handleTaskCreate = () => {
    fetchTasks();
    setNewTaskIsOpen(!newTaskIsOpen); //
  };

  // Callback function to fetch updated task list after successful task deletion
  const handleTaskDelete = () => {
    fetchTasks();
    setModalIsOpen(!modalIsOpen);
  };

  // Callback function to handle task title update
  const handleTaskTitleUpdate = (taskId, newTitle) => {
    // Find the task with the provided ID and update its title
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="h-4/5 ">
        {tasks.map((task) => {
          const formattedDate = moment(task.createdAt).format("MMMM DD, YYYY");
          return (
            <div key={task._id} className="">
              <TaskCard
                taskId={task._id}
                date={formattedDate}
                title={task.title}
                handleDeleteClick={() => handleDeleteClick(task._id)}
                onTitleUpdate={(newTitle) =>
                  handleTaskTitleUpdate(task._id, newTitle)
                }
              />
            </div>
          );
        })}
      </div>
      <AddButton handleAddTask={handleAddTaskCLick} />
      <AddTask
        isOpen={newTaskIsOpen}
        onCancel={handleCancelNewTask}
        onConfirm={handleTaskCreate}
      />
      <Modal
        isOpen={modalIsOpen}
        onCancel={handleCancelDelete}
        id={taskIdToDelete}
        onConfirm={handleTaskDelete}
      />
    </div>
  );
};

export default Home;
