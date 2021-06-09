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
    const user = await userServices.getUser({
      email,
      password
    });
    console.log(user);
    res.send(user);
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhL8OBcmVhIGRlIFRyYWJhbGhvL3dvcmtzcGFjZS9wZXJzb25hbC90YWxlbnQtZGF0YS1hcGktdGVzdC9zcmMvY29udHJvbGxlcnMvbG9naW4vbG9naW4tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJnZXRVc2VyIiwiY29uc29sZSIsImxvZyIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyxPQUFPQyxPQUFQLEVBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsS0FBZ0M7QUFDdEQsUUFBTUMsWUFBWSxHQUFHSCxPQUFPLENBQUNJLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLGNBQTFCLENBQXJCO0FBQ0FMLFNBQU8sQ0FBQ00sSUFBUixDQUFhLEdBQWIsRUFBa0IsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3BDLFVBQU07QUFBRUMsV0FBRjtBQUFTQztBQUFULFFBQXNCSCxHQUFHLENBQUNJLElBQWhDO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1ULFlBQVksQ0FBQ1UsT0FBYixDQUFxQjtBQUFFSixXQUFGO0FBQVNDO0FBQVQsS0FBckIsQ0FBbkI7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUosT0FBRyxDQUFDUSxJQUFKLENBQVNKLElBQVQ7QUFDRCxHQUxEO0FBTUFWLE1BQUk7QUFDTCxDQVREOztBQVdBLGlFQUFlSCxlQUFmLEUiLCJmaWxlIjoibG9naW4tbG9naW4tY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ2luQ29udHJvbGxlciA9IGFzeW5jIChmYXN0aWZ5LCBfb3B0cywgZG9uZSkgPT4ge1xuICBjb25zdCB1c2VyU2VydmljZXMgPSBmYXN0aWZ5LmNvbnRhaW5lci5yZXNvbHZlKCd1c2VyU2VydmljZXMnKVxuICBmYXN0aWZ5LnBvc3QoJy8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlclNlcnZpY2VzLmdldFVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIHJlcy5zZW5kKHVzZXIpXG4gIH0pXG4gIGRvbmUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbkNvbnRyb2xsZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=