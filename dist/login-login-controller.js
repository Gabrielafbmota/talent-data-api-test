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
    // const { email, password } = req.body
    console.log(req.body);
    res.send('ok');
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRUlST05cXE9uZURyaXZlIC0gQmF5ZXJcXERlc2t0b3BcXHdvcmtzcGFjZVxccGVyc29uYWxcXHRhbGVudC1kYXRhLWFwaS10ZXN0XFxzcmNcXGNvbnRyb2xsZXJzXFxsb2dpblxcbG9naW4tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJsb2dpbkNvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyxPQUFPQyxPQUFQLEVBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsS0FBZ0M7QUFDdEQsUUFBTUMsWUFBWSxHQUFHSCxPQUFPLENBQUNJLFNBQVIsQ0FBa0JDLE9BQWxCLENBQTBCLGNBQTFCLENBQXJCO0FBQ0FMLFNBQU8sQ0FBQ00sSUFBUixDQUFhLEdBQWIsRUFBa0IsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3BDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQWhCO0FBQ0FILE9BQUcsQ0FBQ0ksSUFBSixDQUFTLElBQVQ7QUFDRCxHQUpEO0FBS0FWLE1BQUk7QUFDTCxDQVJEOztBQVVBLGlFQUFlSCxlQUFmLEUiLCJmaWxlIjoibG9naW4tbG9naW4tY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ2luQ29udHJvbGxlciA9IGFzeW5jIChmYXN0aWZ5LCBfb3B0cywgZG9uZSkgPT4ge1xuICBjb25zdCB1c2VyU2VydmljZXMgPSBmYXN0aWZ5LmNvbnRhaW5lci5yZXNvbHZlKCd1c2VyU2VydmljZXMnKVxuICBmYXN0aWZ5LnBvc3QoJy8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAvLyBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICByZXMuc2VuZCgnb2snKVxuICB9KVxuICBkb25lKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5Db250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9