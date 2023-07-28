"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var taskSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var Task = _mongoose["default"].model("Task", taskSchema);
exports.Task = Task;