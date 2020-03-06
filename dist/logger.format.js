"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loggerFormatFn = loggerFormatFn;
exports.format = void 0;

var _safe = require("colors/safe");

var _levelColors = require("./level-colors");

var _winston = require("winston");

var _namespace = require("./namespace.format");

var printf = _winston.format.printf,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    combine = _winston.format.combine,
    splat = _winston.format.splat,
    simple = _winston.format.simple;
var format = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      label = _ref.label,
      timestamp = _ref.timestamp,
      namespace = _ref.namespace;
  return "".concat(level, " ").concat(label, "\n  ").concat((0, _safe.dim)(timestamp), " ").concat(message, "\n");
});
exports.format = format;

function loggerFormatFn(namespace) {
  return combine(
  /** give the logger a label */
  label({
    label: (0, _namespace.namespaceFormat)(namespace)
  }),
  /** give the logger a timestampe (include options for formatting) */
  timestamp({}),
  /** transform the level text */
  (0, _winston.format)(function (info, options) {
    info.level = " ".concat(info.level.toUpperCase(), " ");
    return info;
  })(),
  /** colorize the labels */
  _winston.format.colorize({
    colors: _levelColors.colors
  }),
  /** allow splats */
  splat(),
  /** print format */
  format);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuZm9ybWF0LnRzIl0sIm5hbWVzIjpbInByaW50ZiIsIkZvcm1hdCIsInRpbWVzdGFtcCIsImxhYmVsIiwiY29tYmluZSIsInNwbGF0Iiwic2ltcGxlIiwiZm9ybWF0IiwibGV2ZWwiLCJtZXNzYWdlIiwibmFtZXNwYWNlIiwibG9nZ2VyRm9ybWF0Rm4iLCJpbmZvIiwib3B0aW9ucyIsInRvVXBwZXJDYXNlIiwiY29sb3JpemUiLCJjb2xvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQ1FBLE0sR0FBcURDLGUsQ0FBckRELE07SUFBUUUsUyxHQUE2Q0QsZSxDQUE3Q0MsUztJQUFXQyxLLEdBQWtDRixlLENBQWxDRSxLO0lBQU9DLE8sR0FBMkJILGUsQ0FBM0JHLE87SUFBU0MsSyxHQUFrQkosZSxDQUFsQkksSztJQUFPQyxNLEdBQVdMLGUsQ0FBWEssTTtBQUUzQyxJQUFNQyxNQUFNLEdBQUdQLE1BQU0sQ0FBQyxnQkFBcUQ7QUFBQSxNQUFsRFEsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDTixLQUFrQyxRQUFsQ0EsS0FBa0M7QUFBQSxNQUEzQkQsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJRLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNoRixtQkFBVUYsS0FBVixjQUFtQkwsS0FBbkIsaUJBQ0UsZUFBSUQsU0FBSixDQURGLGNBQ29CTyxPQURwQjtBQUVELENBSDJCLENBQXJCOzs7QUFNQSxTQUFTRSxjQUFULENBQXdCRCxTQUF4QixFQUFxRDtBQUMxRCxTQUFPTixPQUFPO0FBQ1o7QUFDQUQsRUFBQUEsS0FBSyxDQUFDO0FBQUVBLElBQUFBLEtBQUssRUFBRSxnQ0FBZ0JPLFNBQWhCO0FBQVQsR0FBRCxDQUZPO0FBSVo7QUFDQVIsRUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FMRztBQU9aO0FBQ0EsdUJBQU8sVUFBQ1UsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ3hCRCxJQUFBQSxJQUFJLENBQUNKLEtBQUwsY0FBaUJJLElBQUksQ0FBQ0osS0FBTCxDQUFXTSxXQUFYLEVBQWpCO0FBQ0EsV0FBT0YsSUFBUDtBQUNELEdBSEQsR0FSWTtBQWFaO0FBQ0FYLGtCQUFPYyxRQUFQLENBQWdCO0FBQUVDLElBQUFBLE1BQU0sRUFBTkE7QUFBRixHQUFoQixDQWRZO0FBZ0JaO0FBQ0FYLEVBQUFBLEtBQUssRUFqQk87QUFtQlo7QUFDQUUsRUFBQUEsTUFwQlksQ0FBZDtBQXdCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpbSwgZ3JlZW4gfSBmcm9tIFwiY29sb3JzL3NhZmVcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuL2xldmVsLWNvbG9yc1wiO1xuaW1wb3J0IHsgZm9ybWF0IGFzIEZvcm1hdCwgYWRkQ29sb3JzIH0gZnJvbSBcIndpbnN0b25cIjtcbmltcG9ydCB7IG5hbWVzcGFjZUZvcm1hdCB9IGZyb20gXCIuL25hbWVzcGFjZS5mb3JtYXRcIjtcbmNvbnN0IHsgcHJpbnRmLCB0aW1lc3RhbXAsIGxhYmVsLCBjb21iaW5lLCBzcGxhdCwgc2ltcGxlIH0gPSBGb3JtYXQ7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXQgPSBwcmludGYoKHsgbGV2ZWwsIG1lc3NhZ2UsIGxhYmVsLCB0aW1lc3RhbXAsIG5hbWVzcGFjZSB9KSA9PiB7XG4gIHJldHVybiBgJHtsZXZlbH0gJHtsYWJlbH1cbiAgJHtkaW0odGltZXN0YW1wKX0gJHttZXNzYWdlfVxcbmBcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXJGb3JtYXRGbihuYW1lc3BhY2U6IHN0cmluZyB8IHN0cmluZ1tdKXtcbiAgcmV0dXJuIGNvbWJpbmUoXG4gICAgLyoqIGdpdmUgdGhlIGxvZ2dlciBhIGxhYmVsICovXG4gICAgbGFiZWwoeyBsYWJlbDogbmFtZXNwYWNlRm9ybWF0KG5hbWVzcGFjZSkgfSksXG5cbiAgICAvKiogZ2l2ZSB0aGUgbG9nZ2VyIGEgdGltZXN0YW1wZSAoaW5jbHVkZSBvcHRpb25zIGZvciBmb3JtYXR0aW5nKSAqL1xuICAgIHRpbWVzdGFtcCh7IH0pLFxuXG4gICAgLyoqIHRyYW5zZm9ybSB0aGUgbGV2ZWwgdGV4dCAqL1xuICAgIEZvcm1hdCgoaW5mbywgb3B0aW9ucykgPT4ge1xuICAgICAgaW5mby5sZXZlbCA9IGAgJHtpbmZvLmxldmVsLnRvVXBwZXJDYXNlKCl9IGA7XG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9KSgpLFxuXG4gICAgLyoqIGNvbG9yaXplIHRoZSBsYWJlbHMgKi9cbiAgICBGb3JtYXQuY29sb3JpemUoeyBjb2xvcnMgfSksXG5cbiAgICAvKiogYWxsb3cgc3BsYXRzICovXG4gICAgc3BsYXQoKSxcblxuICAgIC8qKiBwcmludCBmb3JtYXQgKi9cbiAgICBmb3JtYXQsXG5cbiAgICBcbiAgKTtcbn0iXX0=