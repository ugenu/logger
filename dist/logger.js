"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeLogger = MakeLogger;

var _winston = require("winston");

var _logger = require("./logger.format");

var _levelColors = require("./level-colors");

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    prettyPrint = _winston.format.prettyPrint,
    simple = _winston.format.simple;

function MakeLogger(domain) {
  return (0, _winston.createLogger)({
    transports: [new _winston.transports.Console({
      level: 'silly',
      format: combine(label({
        label: domain
      }), timestamp({}), (0, _winston.format)(function (info, options) {
        info.level = " ".concat(info.level, " ");
        return info;
      })(), _winston.format.colorize({
        colors: _levelColors.colors
      }), _logger.format)
    })]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIudHMiXSwibmFtZXMiOlsiY29tYmluZSIsImZvcm1hdCIsInRpbWVzdGFtcCIsImxhYmVsIiwicHJldHR5UHJpbnQiLCJzaW1wbGUiLCJNYWtlTG9nZ2VyIiwiZG9tYWluIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJsZXZlbCIsImluZm8iLCJvcHRpb25zIiwiY29sb3JpemUiLCJjb2xvcnMiLCJ1Rm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0lBRlFBLE8sR0FBbURDLGUsQ0FBbkRELE87SUFBU0UsUyxHQUEwQ0QsZSxDQUExQ0MsUztJQUFXQyxLLEdBQStCRixlLENBQS9CRSxLO0lBQU9DLFcsR0FBd0JILGUsQ0FBeEJHLFc7SUFBYUMsTSxHQUFXSixlLENBQVhJLE07O0FBSXpDLFNBQVNDLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRDO0FBQ2pELFNBQU8sMkJBQWE7QUFDbEJDLElBQUFBLFVBQVUsRUFBRSxDQUNWLElBQUlBLG9CQUFXQyxPQUFmLENBQXVCO0FBQ3JCQyxNQUFBQSxLQUFLLEVBQUUsT0FEYztBQUVyQlQsTUFBQUEsTUFBTSxFQUFFRCxPQUFPLENBQ2JHLEtBQUssQ0FBQztBQUFDQSxRQUFBQSxLQUFLLEVBQUVJO0FBQVIsT0FBRCxDQURRLEVBRWJMLFNBQVMsQ0FBQyxFQUFELENBRkksRUFLYixxQkFBTyxVQUFDUyxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFDeEJELFFBQUFBLElBQUksQ0FBQ0QsS0FBTCxjQUFpQkMsSUFBSSxDQUFDRCxLQUF0QjtBQUNBLGVBQU9DLElBQVA7QUFDRCxPQUhELEdBTGEsRUFTYlYsZ0JBQU9ZLFFBQVAsQ0FBZ0I7QUFDZEMsUUFBQUEsTUFBTSxFQUFOQTtBQURjLE9BQWhCLENBVGEsRUFZYkMsY0FaYTtBQUZNLEtBQXZCLENBRFU7QUFETSxHQUFiLENBQVA7QUFzQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IExvZ2dlciwgY3JlYXRlTG9nZ2VyLCB0cmFuc3BvcnRzLCBmb3JtYXQsIGFkZENvbG9ycyB9IGZyb20gXCJ3aW5zdG9uXCI7XG5jb25zdCB7IGNvbWJpbmUsIHRpbWVzdGFtcCwgbGFiZWwsIHByZXR0eVByaW50LCBzaW1wbGUgfSA9IGZvcm1hdDtcbmltcG9ydCB7IGZvcm1hdCBhcyB1Rm9ybWF0IH0gZnJvbSBcIi4vbG9nZ2VyLmZvcm1hdFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4vbGV2ZWwtY29sb3JzXCI7XG4gXG5leHBvcnQgZnVuY3Rpb24gTWFrZUxvZ2dlcihkb21haW46IHN0cmluZyk6IExvZ2dlciB7XG4gIHJldHVybiBjcmVhdGVMb2dnZXIoe1xuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgIG5ldyB0cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgICBsZXZlbDogJ3NpbGx5JyxcbiAgICAgICAgZm9ybWF0OiBjb21iaW5lKFxuICAgICAgICAgIGxhYmVsKHtsYWJlbDogZG9tYWlufSksXG4gICAgICAgICAgdGltZXN0YW1wKHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcm1hdCgoaW5mbywgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgaW5mby5sZXZlbCA9IGAgJHtpbmZvLmxldmVsfSBgO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfSkoKSxcbiAgICAgICAgICBmb3JtYXQuY29sb3JpemUoe1xuICAgICAgICAgICAgY29sb3JzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHVGb3JtYXQsXG4gICAgICAgICAgXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgIF1cbiAgfSk7XG59Il19