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
    console.log(req.body);
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRUlST05cXE9uZURyaXZlIC0gQmF5ZXJcXERlc2t0b3BcXHdvcmtzcGFjZVxccGVyc29uYWxcXHRhbGVudC1kYXRhLWFwaS10ZXN0XFxzcmNcXGNvbnRyb2xsZXJzXFxsb2dpblxcbG9naW4tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsZUFBZSxHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixLQUFnQztBQUN0RCxRQUFNQyxZQUFZLEdBQUdILE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQUwsU0FBTyxDQUFDTSxJQUFSLENBQWEsR0FBYixFQUFrQixPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDcEM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0ksSUFBaEI7QUFDRCxHQUhEO0FBSUFULE1BQUk7QUFDTCxDQVBEOztBQVNBLGlFQUFlSCxlQUFmLEUiLCJmaWxlIjoibG9naW4tbG9naW4tY29udHJvbGxlci5hZjA4YTZiYzZiYzQzMWUxODE0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW5Db250cm9sbGVyID0gYXN5bmMgKGZhc3RpZnksIF9vcHRzLCBkb25lKSA9PiB7XG4gIGNvbnN0IHVzZXJTZXJ2aWNlcyA9IGZhc3RpZnkuY29udGFpbmVyLnJlc29sdmUoJ3VzZXJTZXJ2aWNlcycpXG4gIGZhc3RpZnkucG9zdCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICB9KVxuICBkb25lKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9