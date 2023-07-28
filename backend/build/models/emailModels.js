"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Email = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var emailSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var Email = _mongoose["default"].model("Email", emailSchema);
exports.Email = Email;