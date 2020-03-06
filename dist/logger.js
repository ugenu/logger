"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = Logger;

var _winston = require("winston");

var _logger = require("./logger.format");

function Logger(namespace) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
  return (0, _winston.createLogger)({
    transports: [new _winston.transports.Console({
      level: level,
      format: (0, _logger.loggerFormatFn)(namespace)
    })]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIudHMiXSwibmFtZXMiOlsiTG9nZ2VyIiwibmFtZXNwYWNlIiwibGV2ZWwiLCJ0cmFuc3BvcnRzIiwiQ29uc29sZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOztBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQWdHO0FBQUEsTUFBbERDLEtBQWtELHVFQUF4QixNQUF3QjtBQUNyRyxTQUFPLDJCQUFhO0FBQ2xCQyxJQUFBQSxVQUFVLEVBQUUsQ0FDVixJQUFJQSxvQkFBV0MsT0FBZixDQUF1QjtBQUNyQkYsTUFBQUEsS0FBSyxFQUFMQSxLQURxQjtBQUVyQkcsTUFBQUEsTUFBTSxFQUFFLDRCQUFlSixTQUFmO0FBRmEsS0FBdkIsQ0FEVTtBQURNLEdBQWIsQ0FBUDtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnMuaW50ZXJmYWNlXCI7XG5pbXBvcnQgd2luc3RvbiwgeyBjcmVhdGVMb2dnZXIsIHRyYW5zcG9ydHMgfSBmcm9tIFwid2luc3RvblwiO1xuXG5pbXBvcnQgeyBsb2dnZXJGb3JtYXRGbiB9IGZyb20gXCIuL2xvZ2dlci5mb3JtYXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlcihuYW1lc3BhY2U6IHN0cmluZyB8IHN0cmluZ1tdLCBsZXZlbDogT3B0aW9uc1tcImxldmVsXCJdID0gXCJpbmZvXCIpOiB3aW5zdG9uLkxvZ2dlciB7XG4gIHJldHVybiBjcmVhdGVMb2dnZXIoe1xuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgIG5ldyB0cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgICBsZXZlbCxcbiAgICAgICAgZm9ybWF0OiBsb2dnZXJGb3JtYXRGbihuYW1lc3BhY2UpXG4gICAgICB9KSxcbiAgICBdXG4gIH0pO1xufSJdfQ==