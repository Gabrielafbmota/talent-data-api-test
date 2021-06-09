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
  fastify.get('/', {
    preValidation: [fastify.authenticate]
  }, async (req, res) => {
    console.log(req.user);
    res.send('OK');
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhL8OBcmVhIGRlIFRyYWJhbGhvL3dvcmtzcGFjZS9wZXJzb25hbC90YWxlbnQtZGF0YS1hcGktdGVzdC9zcmMvY29udHJvbGxlcnMvcHJvZHVjdHMvcHJvZHVjdHMtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c0NvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwiZ2V0IiwicHJlVmFsaWRhdGlvbiIsImF1dGhlbnRpY2F0ZSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBTUEsa0JBQWtCLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsS0FBaEIsRUFBdUJDLElBQXZCLEtBQWdDO0FBRXpERixTQUFPLENBQUNHLEdBQVIsQ0FBWSxHQUFaLEVBQWlCO0FBQ2ZDLGlCQUFhLEVBQUUsQ0FBQ0osT0FBTyxDQUFDSyxZQUFUO0FBREEsR0FBakIsRUFFRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQWhCO0FBQ0FILE9BQUcsQ0FBQ0ksSUFBSixDQUFTLElBQVQ7QUFDRCxHQUxEO0FBT0FULE1BQUk7QUFDTCxDQVZEOztBQVlBLGlFQUFlSCxrQkFBZixFIiwiZmlsZSI6InByb2R1Y3RzLXByb2R1Y3RzLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHByb2R1Y3RzQ29udHJvbGxlciA9IGFzeW5jIChmYXN0aWZ5LCBfb3B0cywgZG9uZSkgPT4ge1xuXG4gIGZhc3RpZnkuZ2V0KCcvJywge1xuICAgIHByZVZhbGlkYXRpb246IFtmYXN0aWZ5LmF1dGhlbnRpY2F0ZV0sXG4gIH0sIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS51c2VyKVxuICAgIHJlcy5zZW5kKCdPSycpXG4gIH0pXG5cbiAgZG9uZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzQ29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==