exports.id = "login-login-controller";
exports.ids = null;
exports.modules = {

/***/ "./src/controllers/login/login-controller.js":
/*!***************************************************!*\
  !*** ./src/controllers/login/login-controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loginController = async (fastify, _opts, done) => {
  const userServices = fastify.container.resolve('userServices');
  fastify.post('/', async (req, res) => {
    // const { email, password } = req.body
    console.log(req);
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRUlST05cXE9uZURyaXZlIC0gQmF5ZXJcXERlc2t0b3BcXHdvcmtzcGFjZVxccGVyc29uYWxcXHRhbGVudC1kYXRhLWFwaS10ZXN0XFxzcmNcXGNvbnRyb2xsZXJzXFxsb2dpblxcbG9naW4tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxlQUFlLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEtBQWdDO0FBQ3RELFFBQU1DLFlBQVksR0FBR0gsT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixjQUExQixDQUFyQjtBQUNBTCxTQUFPLENBQUNNLElBQVIsQ0FBYSxHQUFiLEVBQWtCLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNwQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNELEdBSEQ7QUFJQUwsTUFBSTtBQUNMLENBUEQ7O0FBU0EsaUVBQWVILGVBQWYsRSIsImZpbGUiOiJsb2dpbi1sb2dpbi1jb250cm9sbGVyLjllYjA2MzYyNzBmZjQzNjU4OWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dpbkNvbnRyb2xsZXIgPSBhc3luYyAoZmFzdGlmeSwgX29wdHMsIGRvbmUpID0+IHtcbiAgY29uc3QgdXNlclNlcnZpY2VzID0gZmFzdGlmeS5jb250YWluZXIucmVzb2x2ZSgndXNlclNlcnZpY2VzJylcbiAgZmFzdGlmeS5wb3N0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG4gICAgY29uc29sZS5sb2cocmVxKVxuICB9KVxuICBkb25lKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9