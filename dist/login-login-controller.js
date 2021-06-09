exports.id = "login-login-controller";
exports.ids = ["login-login-controller"];
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
    const {
      email,
      password
    } = req.body;
    const [user] = await userServices.getUser({
      email,
      password
    });
    const token = await fastify.jwt.sign({
      id: user.userId,
      role: user.roles.join()
    });
    res.send({
      token
    });
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhL8OBcmVhIGRlIFRyYWJhbGhvL3dvcmtzcGFjZS9wZXJzb25hbC90YWxlbnQtZGF0YS1hcGktdGVzdC9zcmMvY29udHJvbGxlcnMvbG9naW4vbG9naW4tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJnZXRVc2VyIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiaWQiLCJ1c2VySWQiLCJyb2xlIiwicm9sZXMiLCJqb2luIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsZUFBZSxHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixLQUFnQztBQUN0RCxRQUFNQyxZQUFZLEdBQUdILE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQUwsU0FBTyxDQUFDTSxJQUFSLENBQWEsR0FBYixFQUFrQixPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDcEMsVUFBTTtBQUFFQyxXQUFGO0FBQVNDO0FBQVQsUUFBc0JILEdBQUcsQ0FBQ0ksSUFBaEM7QUFDQSxVQUFNLENBQUNDLElBQUQsSUFBUyxNQUFNVCxZQUFZLENBQUNVLE9BQWIsQ0FBcUI7QUFBRUosV0FBRjtBQUFTQztBQUFULEtBQXJCLENBQXJCO0FBQ0EsVUFBTUksS0FBSyxHQUFHLE1BQU1kLE9BQU8sQ0FBQ2UsR0FBUixDQUFZQyxJQUFaLENBQWlCO0FBQUVDLFFBQUUsRUFBRUwsSUFBSSxDQUFDTSxNQUFYO0FBQW1CQyxVQUFJLEVBQUVQLElBQUksQ0FBQ1EsS0FBTCxDQUFXQyxJQUFYO0FBQXpCLEtBQWpCLENBQXBCO0FBQ0FiLE9BQUcsQ0FBQ2MsSUFBSixDQUFTO0FBQUVSO0FBQUYsS0FBVDtBQUNELEdBTEQ7QUFNQVosTUFBSTtBQUNMLENBVEQ7O0FBV0EsaUVBQWVILGVBQWYsRSIsImZpbGUiOiJsb2dpbi1sb2dpbi1jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW5Db250cm9sbGVyID0gYXN5bmMgKGZhc3RpZnksIF9vcHRzLCBkb25lKSA9PiB7XG4gIGNvbnN0IHVzZXJTZXJ2aWNlcyA9IGZhc3RpZnkuY29udGFpbmVyLnJlc29sdmUoJ3VzZXJTZXJ2aWNlcycpXG4gIGZhc3RpZnkucG9zdCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuICAgIGNvbnN0IFt1c2VyXSA9IGF3YWl0IHVzZXJTZXJ2aWNlcy5nZXRVc2VyKHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBmYXN0aWZ5Lmp3dC5zaWduKHsgaWQ6IHVzZXIudXNlcklkLCByb2xlOiB1c2VyLnJvbGVzLmpvaW4oKSB9KVxuICAgIHJlcy5zZW5kKHsgdG9rZW4gfSlcbiAgfSlcbiAgZG9uZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luQ29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==