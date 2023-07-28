"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _taskRoutes = _interopRequireDefault(require("./routes/taskRoutes.js"));
var _emailRoutes = _interopRequireDefault(require("./routes/emailRoutes.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var MONGO_URL = process.env.MONGO_URL;
var PORT = process.env.PORT;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
//GET ROUTE HOME
app.get("/", function (req, res) {
  res.send("Hello World!");
});

//TASK ROUTES
app.use("/task", _taskRoutes["default"]);

//EMAIL ROUTES
app.use("/contact", _emailRoutes["default"]);
//END
_mongoose["default"].connect(MONGO_URL).then(function () {
  console.log("Connected to database");
  app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
  });
});