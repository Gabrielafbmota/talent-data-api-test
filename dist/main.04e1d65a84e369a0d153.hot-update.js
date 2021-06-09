exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/api */ "./src/api.js");
/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimist */ "minimist");
/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimist__WEBPACK_IMPORTED_MODULE_1__);



const main = async () => {
  const api = await (0,_src_api__WEBPACK_IMPORTED_MODULE_0__.createApi)();
  const argv = minimist__WEBPACK_IMPORTED_MODULE_1___default()(process.argv.slice(2));
  const port = process.env.PORT || argv.port || argv.PORT || 3000;

  try {
    await api.listen(port, '0.0.0.0');
  } catch (error) {
    api.log.error(error); // eslint-disable-next-line unicorn/no-process-exit

    process.exit(1);
  }
};

main();

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("minimist");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9eb0636270ff436589d0")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRUlST05cXE9uZURyaXZlIC0gQmF5ZXJcXERlc2t0b3BcXHdvcmtzcGFjZVxccGVyc29uYWxcXHRhbGVudC1kYXRhLWFwaS10ZXN0XFxzcmNcXG1haW4uanMiLCJleHRlcm5hbCBcIm1pbmltaXN0XCIiLCJ3ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsibWFpbiIsImFwaSIsImNyZWF0ZUFwaSIsImFyZ3YiLCJtaW5pbWlzdCIsInByb2Nlc3MiLCJzbGljZSIsInBvcnQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZXJyb3IiLCJsb2ciLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLE1BQU1BLElBQUksR0FBRyxZQUFZO0FBQ3ZCLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxtREFBUyxFQUEzQjtBQUVBLFFBQU1DLElBQUksR0FBR0MsK0NBQVEsQ0FBQ0MsT0FBTyxDQUFDRixJQUFSLENBQWFHLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUFyQjtBQUNBLFFBQU1DLElBQUksR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVlDLElBQVosSUFBb0JOLElBQUksQ0FBQ0ksSUFBekIsSUFBaUNKLElBQUksQ0FBQ00sSUFBdEMsSUFBOEMsSUFBM0Q7O0FBQ0EsTUFBSTtBQUNGLFVBQU1SLEdBQUcsQ0FBQ1MsTUFBSixDQUFXSCxJQUFYLEVBQWlCLFNBQWpCLENBQU47QUFDRCxHQUZELENBRUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2RWLE9BQUcsQ0FBQ1csR0FBSixDQUFRRCxLQUFSLENBQWNBLEtBQWQsRUFEYyxDQUVkOztBQUNBTixXQUFPLENBQUNRLElBQVIsQ0FBYSxDQUFiO0FBQ0Q7QUFDRixDQVpEOztBQWNBYixJQUFJLEc7Ozs7Ozs7Ozs7O0FDaEJKLHNDOzs7Ozs7Ozs7OztVQ0FBLHNEIiwiZmlsZSI6Im1haW4uMDRlMWQ2NWE4NGUzNjlhMGQxNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSB9IGZyb20gJy4uL3NyYy9hcGknXG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcGkgPSBhd2FpdCBjcmVhdGVBcGkoKVxuXG4gIGNvbnN0IGFyZ3YgPSBtaW5pbWlzdChwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpXG4gIGNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IGFyZ3YucG9ydCB8fCBhcmd2LlBPUlQgfHwgMzAwMFxuICB0cnkge1xuICAgIGF3YWl0IGFwaS5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFwaS5sb2cuZXJyb3IoZXJyb3IpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tcHJvY2Vzcy1leGl0XG4gICAgcHJvY2Vzcy5leGl0KDEpXG4gIH1cbn1cblxubWFpbigpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaW5pbWlzdFwiKTs7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWViMDYzNjI3MGZmNDM2NTg5ZDBcIikiXSwic291cmNlUm9vdCI6IiJ9