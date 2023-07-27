import express from "express";
import { Email } from "../models/emailModels.js";

const router = express.Router();

//POST ROUTE TO CREATE NEW EMAIL
router.post("/", async (req, res) => {
  try {
    const { email, message } = req.body;
    const newEmail = {
      email,
      message,
    };
    const emailMessage = await Email.create(newEmail);
    return res.send(emailMessage);
  } catch (error) {
    console.log(error);
  }
});

//GET METHOD TO GET ALL EMAILS
router.get("/", async (req, res) => {
  try {
    const emails = await Email.find({});
    return res.json({
      count: emails.length,
      data: emails,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
