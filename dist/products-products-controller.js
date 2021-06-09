exports.id = "products-products-controller";
exports.ids = ["products-products-controller"];
exports.modules = {

/***/ "./src/controllers/products/products-controller.js":
/*!*********************************************************!*\
  !*** ./src/controllers/products/products-controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const productsController = async (fastify, _opts, done) => {
  fastify.get('/', async (req, res) => {
    console.log(req.params);
    res.send('OK');
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRUlST05cXE9uZURyaXZlIC0gQmF5ZXJcXERlc2t0b3BcXHdvcmtzcGFjZVxccGVyc29uYWxcXHRhbGVudC1kYXRhLWFwaS10ZXN0XFxzcmNcXGNvbnRyb2xsZXJzXFxwcm9kdWN0c1xccHJvZHVjdHMtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c0NvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwiZ2V0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU1BLGtCQUFrQixHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixLQUFnQztBQUV6REYsU0FBTyxDQUFDRyxHQUFSLENBQVksR0FBWixFQUFpQixPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbkNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLE1BQWhCO0FBQ0FILE9BQUcsQ0FBQ0ksSUFBSixDQUFTLElBQVQ7QUFDRCxHQUhEO0FBS0FQLE1BQUk7QUFDTCxDQVJEOztBQVVBLGlFQUFlSCxrQkFBZixFIiwiZmlsZSI6InByb2R1Y3RzLXByb2R1Y3RzLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHByb2R1Y3RzQ29udHJvbGxlciA9IGFzeW5jIChmYXN0aWZ5LCBfb3B0cywgZG9uZSkgPT4ge1xuXG4gIGZhc3RpZnkuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVxLnBhcmFtcylcbiAgICByZXMuc2VuZCgnT0snKVxuICB9KVxuXG4gIGRvbmUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c0NvbnRyb2xsZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=