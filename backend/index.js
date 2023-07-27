import express from "express";
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
//GET ROUTE HOME
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//TASK ROUTES
app.use("/task", taskRoutes);

//EMAIL ROUTES
app.use("/contact", emailRoutes);
//END
mongoose.connect(MONGO_URL).then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
