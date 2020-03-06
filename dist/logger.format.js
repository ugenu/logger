"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = void 0;

var _winston = require("winston");

var printf = _winston.format.printf,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label;
var format = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      label = _ref.label,
      timestamp = _ref.timestamp;
  return "".concat(timestamp, " [").concat(label, "] ").concat(level, ": ").concat(message);
});
exports.format = format;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuZm9ybWF0LnRzIl0sIm5hbWVzIjpbInByaW50ZiIsIkZvcm1hdCIsInRpbWVzdGFtcCIsImxhYmVsIiwiZm9ybWF0IiwibGV2ZWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0lBQ1FBLE0sR0FBNkJDLGUsQ0FBN0JELE07SUFBUUUsUyxHQUFxQkQsZSxDQUFyQkMsUztJQUFXQyxLLEdBQVVGLGUsQ0FBVkUsSztBQUNwQixJQUFNQyxNQUFNLEdBQUdKLE1BQU0sQ0FBQyxnQkFBMEM7QUFBQSxNQUF2Q0ssS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLE9BQWdDLFFBQWhDQSxPQUFnQztBQUFBLE1BQXZCSCxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkQsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3JFLG1CQUFVQSxTQUFWLGVBQXdCQyxLQUF4QixlQUFrQ0UsS0FBbEMsZUFBNENDLE9BQTVDO0FBQ0QsQ0FGMkIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgYXMgRm9ybWF0LCBhZGRDb2xvcnMgfSBmcm9tIFwid2luc3RvblwiO1xuY29uc3QgeyBwcmludGYsIHRpbWVzdGFtcCwgbGFiZWwgfSA9IEZvcm1hdDtcbmV4cG9ydCBjb25zdCBmb3JtYXQgPSBwcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIGxhYmVsLCB0aW1lc3RhbXAgfSkgPT4ge1xuICByZXR1cm4gYCR7dGltZXN0YW1wfSBbJHtsYWJlbH1dICR7bGV2ZWx9OiAke21lc3NhZ2V9YDtcbn0pO1xuIl19