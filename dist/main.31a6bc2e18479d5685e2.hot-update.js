exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApi": () => (/* binding */ createApi)
/* harmony export */ });
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify */ "fastify");
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fastify_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fastify-helmet */ "fastify-helmet");
/* harmony import */ var fastify_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fastify_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fastify_compress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fastify-compress */ "fastify-compress");
/* harmony import */ var fastify_compress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fastify_compress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var under_pressure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! under-pressure */ "under-pressure");
/* harmony import */ var under_pressure__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(under_pressure__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fastify_sensible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fastify-sensible */ "fastify-sensible");
/* harmony import */ var fastify_sensible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fastify_sensible__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controllers_register_controllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/register-controllers */ "./src/controllers/register-controllers.js");
/* harmony import */ var _services_create_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/create-container */ "./src/services/create-container.js");








const createApi = async (options = {}) => {
  const container = options.container || (await (0,_services_create_container__WEBPACK_IMPORTED_MODULE_6__.default)({
    env: 'development'
  }));
  const logger = options.logger || container.resolve('logger');
  const api = fastify__WEBPACK_IMPORTED_MODULE_0___default()({ ...options,
    logger
  });
  api.addHook('onClose', async (_instance, done) => {
    await container.dispose();
    done();
  });
  api.register((fastify_sensible__WEBPACK_IMPORTED_MODULE_4___default()));
  api.decorate('container', container);
  api.register(__webpack_require__(/*! fastify-cors */ "fastify-cors"), {
    origin: '*'
  });
  await (0,_controllers_register_controllers__WEBPACK_IMPORTED_MODULE_5__.default)(api);
  api.register((under_pressure__WEBPACK_IMPORTED_MODULE_3___default()), {
    exposeStatusRoute: true
  });
  api.register((fastify_helmet__WEBPACK_IMPORTED_MODULE_1___default()));
  api.register((fastify_compress__WEBPACK_IMPORTED_MODULE_2___default()), {
    global: false
  });
  return api;
};



/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04e1d65a84e369a0d153")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRUlST05cXE9uZURyaXZlIC0gQmF5ZXJcXERlc2t0b3BcXHdvcmtzcGFjZVxccGVyc29uYWxcXHRhbGVudC1kYXRhLWFwaS10ZXN0XFxzcmNcXGFwaS5qcyIsIndlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJvcHRpb25zIiwiY29udGFpbmVyIiwiY3JlYXRlQ29udGFpbmVyIiwiZW52IiwiX19FTlZfXyIsImxvZ2dlciIsInJlc29sdmUiLCJhcGkiLCJGYXN0aWZ5IiwiYWRkSG9vayIsIl9pbnN0YW5jZSIsImRvbmUiLCJkaXNwb3NlIiwicmVnaXN0ZXIiLCJzZW5zaWJsZSIsImRlY29yYXRlIiwicmVxdWlyZSIsIm9yaWdpbiIsInJlZ2lzdGVyQ29udHJvbGxlcnMiLCJ1bmRlclByZXNzdXJlIiwiZXhwb3NlU3RhdHVzUm91dGUiLCJoZWxtZXQiLCJjb21wcmVzcyIsImdsb2JhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE9BQU9DLE9BQU8sR0FBRyxFQUFqQixLQUF3QjtBQUN4QyxRQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQ0MsU0FBUixLQUFxQixNQUFNQyxtRUFBZSxDQUFDO0FBQUVDLE9BQUcsRUFBRUMsYUFBT0E7QUFBZCxHQUFELENBQTFDLENBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHTCxPQUFPLENBQUNLLE1BQVIsSUFBa0JKLFNBQVMsQ0FBQ0ssT0FBVixDQUFrQixRQUFsQixDQUFqQztBQUVBLFFBQU1DLEdBQUcsR0FBR0MsOENBQU8sQ0FBQyxFQUFFLEdBQUdSLE9BQUw7QUFBY0s7QUFBZCxHQUFELENBQW5CO0FBRUFFLEtBQUcsQ0FBQ0UsT0FBSixDQUFZLFNBQVosRUFBdUIsT0FBT0MsU0FBUCxFQUFrQkMsSUFBbEIsS0FBMkI7QUFDaEQsVUFBTVYsU0FBUyxDQUFDVyxPQUFWLEVBQU47QUFDQUQsUUFBSTtBQUNMLEdBSEQ7QUFLQUosS0FBRyxDQUFDTSxRQUFKLENBQWFDLHlEQUFiO0FBQ0FQLEtBQUcsQ0FBQ1EsUUFBSixDQUFhLFdBQWIsRUFBMEJkLFNBQTFCO0FBRUFNLEtBQUcsQ0FBQ00sUUFBSixDQUFhRyxtQkFBTyxDQUFDLGtDQUFELENBQXBCLEVBQXNDO0FBQ3BDQyxVQUFNLEVBQUU7QUFENEIsR0FBdEM7QUFJQSxRQUFNQywwRUFBbUIsQ0FBQ1gsR0FBRCxDQUF6QjtBQUVBQSxLQUFHLENBQUNNLFFBQUosQ0FBYU0sdURBQWIsRUFBNEI7QUFDMUJDLHFCQUFpQixFQUFFO0FBRE8sR0FBNUI7QUFJQWIsS0FBRyxDQUFDTSxRQUFKLENBQWFRLHVEQUFiO0FBQ0FkLEtBQUcsQ0FBQ00sUUFBSixDQUFhUyx5REFBYixFQUF1QjtBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUF2QjtBQUNBLFNBQU9oQixHQUFQO0FBQ0QsQ0EzQkQ7Ozs7Ozs7Ozs7Ozs7VUNUQSxzRCIsImZpbGUiOiJtYWluLjMxYTZiYzJlMTg0NzlkNTY4NWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFzdGlmeSBmcm9tICdmYXN0aWZ5J1xuaW1wb3J0IGhlbG1ldCBmcm9tICdmYXN0aWZ5LWhlbG1ldCdcbmltcG9ydCBjb21wcmVzcyBmcm9tICdmYXN0aWZ5LWNvbXByZXNzJ1xuaW1wb3J0IHVuZGVyUHJlc3N1cmUgZnJvbSAndW5kZXItcHJlc3N1cmUnXG5cbmltcG9ydCBzZW5zaWJsZSBmcm9tICdmYXN0aWZ5LXNlbnNpYmxlJ1xuaW1wb3J0IHJlZ2lzdGVyQ29udHJvbGxlcnMgZnJvbSAnLi9jb250cm9sbGVycy9yZWdpc3Rlci1jb250cm9sbGVycydcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSAnLi9zZXJ2aWNlcy9jcmVhdGUtY29udGFpbmVyJ1xuXG5jb25zdCBjcmVhdGVBcGkgPSBhc3luYyAob3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGF3YWl0IGNyZWF0ZUNvbnRhaW5lcih7IGVudjogX19FTlZfXyB9KVxuICBjb25zdCBsb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBjb250YWluZXIucmVzb2x2ZSgnbG9nZ2VyJylcblxuICBjb25zdCBhcGkgPSBGYXN0aWZ5KHsgLi4ub3B0aW9ucywgbG9nZ2VyIH0pXG5cbiAgYXBpLmFkZEhvb2soJ29uQ2xvc2UnLCBhc3luYyAoX2luc3RhbmNlLCBkb25lKSA9PiB7XG4gICAgYXdhaXQgY29udGFpbmVyLmRpc3Bvc2UoKVxuICAgIGRvbmUoKVxuICB9KVxuXG4gIGFwaS5yZWdpc3RlcihzZW5zaWJsZSlcbiAgYXBpLmRlY29yYXRlKCdjb250YWluZXInLCBjb250YWluZXIpXG5cbiAgYXBpLnJlZ2lzdGVyKHJlcXVpcmUoJ2Zhc3RpZnktY29ycycpLCB7XG4gICAgb3JpZ2luOiAnKicsXG4gIH0pXG5cbiAgYXdhaXQgcmVnaXN0ZXJDb250cm9sbGVycyhhcGkpXG5cbiAgYXBpLnJlZ2lzdGVyKHVuZGVyUHJlc3N1cmUsIHtcbiAgICBleHBvc2VTdGF0dXNSb3V0ZTogdHJ1ZSxcbiAgfSlcblxuICBhcGkucmVnaXN0ZXIoaGVsbWV0KVxuICBhcGkucmVnaXN0ZXIoY29tcHJlc3MsIHsgZ2xvYmFsOiBmYWxzZSB9KVxuICByZXR1cm4gYXBpXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFwaSB9XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNGUxZDY1YTg0ZTM2OWEwZDE1M1wiKSJdLCJzb3VyY2VSb290IjoiIn0=