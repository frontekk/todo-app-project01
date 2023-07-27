import express from "express";
import { Task } from "../models/taskModel.js";

const router = express.Router();

//POST ROUTE TO CREATE NEW TASK
router.post("/", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.send({ message: "complete all fields" });
    }
    const newTask = {
      title: req.body.title,
    };
    const task = await Task.create(newTask);
    return res.send(task);
  } catch (error) {
    console.log(error);
  }
});

//GET ROUTE TO GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.json({
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.log(error);
  }
});

//GET ROUTE TO GET A SINGLE TASK
router.get("/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.send({ message: "complete all fields" });
    }
    const { id } = req.params;
    const result = await Task.findById(id);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//PUT ROUTE TO UPDATE A TASK
router.put("/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.send({ message: "complete all fields" });
    }
    const { id } = req.params;
    const result = await Task.findByIdAndUpdate(id, req.body);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});

//DELETE ROUTE TO DELETE A TASK
router.delete("/:id", async (req, res) => {
  try {
    if (!req.params.id) {
      return res.send({ message: "complete all fields" });
    }
    const { id } = req.params;
    const result = await Task.findByIdAndDelete(id);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
});

export default router;
