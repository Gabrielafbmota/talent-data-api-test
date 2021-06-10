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
  const userServices = fastify.container.resolve('userServices');
  const organizationServices = fastify.container.resolve('organizationServices');
  fastify.get('/:organizationName', {
    preValidation: [fastify.authenticate]
  }, async (req, res) => {
    const {
      organizationName
    } = req.params;
    const {
      tags
    } = req.query;
    const {
      level
    } = await userServices.getLevel({
      role: req.user.role
    });
    const organizations = await organizationServices.organization(organizationName, level);
    if (organizations.length === 0) throw fastify.httpErrors.unauthorized('Você não tem permissão para acessar os produtos dessa organização');
    res.send('OK');
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhL8OBcmVhIGRlIFRyYWJhbGhvL3dvcmtzcGFjZS9wZXJzb25hbC90YWxlbnQtZGF0YS1hcGktdGVzdC9zcmMvY29udHJvbGxlcnMvcHJvZHVjdHMvcHJvZHVjdHMtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c0NvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsIm9yZ2FuaXphdGlvblNlcnZpY2VzIiwiZ2V0IiwicHJlVmFsaWRhdGlvbiIsImF1dGhlbnRpY2F0ZSIsInJlcSIsInJlcyIsIm9yZ2FuaXphdGlvbk5hbWUiLCJwYXJhbXMiLCJ0YWdzIiwicXVlcnkiLCJsZXZlbCIsImdldExldmVsIiwicm9sZSIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwib3JnYW5pemF0aW9uIiwibGVuZ3RoIiwiaHR0cEVycm9ycyIsInVuYXV0aG9yaXplZCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU1BLGtCQUFrQixHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixLQUFnQztBQUN6RCxRQUFNQyxZQUFZLEdBQUdILE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixzQkFBMUIsQ0FBN0I7QUFFQUwsU0FBTyxDQUFDTyxHQUFSLENBQVksb0JBQVosRUFBa0M7QUFDaENDLGlCQUFhLEVBQUUsQ0FBQ1IsT0FBTyxDQUFDUyxZQUFUO0FBRGlCLEdBQWxDLEVBRUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JCLFVBQU07QUFBRUM7QUFBRixRQUF1QkYsR0FBRyxDQUFDRyxNQUFqQztBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXSixHQUFHLENBQUNLLEtBQXJCO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVksTUFBTWIsWUFBWSxDQUFDYyxRQUFiLENBQXNCO0FBQUVDLFVBQUksRUFBRVIsR0FBRyxDQUFDUyxJQUFKLENBQVNEO0FBQWpCLEtBQXRCLENBQXhCO0FBRUEsVUFBTUUsYUFBYSxHQUFHLE1BQU1kLG9CQUFvQixDQUFDZSxZQUFyQixDQUFrQ1QsZ0JBQWxDLEVBQW9ESSxLQUFwRCxDQUE1QjtBQUNBLFFBQUlJLGFBQWEsQ0FBQ0UsTUFBZCxLQUF5QixDQUE3QixFQUFnQyxNQUFNdEIsT0FBTyxDQUFDdUIsVUFBUixDQUFtQkMsWUFBbkIsQ0FBZ0MsbUVBQWhDLENBQU47QUFFaENiLE9BQUcsQ0FBQ2MsSUFBSixDQUFTLElBQVQ7QUFDRCxHQVhEO0FBYUF2QixNQUFJO0FBQ0wsQ0FsQkQ7O0FBb0JBLGlFQUFlSCxrQkFBZixFIiwiZmlsZSI6InByb2R1Y3RzLXByb2R1Y3RzLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHByb2R1Y3RzQ29udHJvbGxlciA9IGFzeW5jIChmYXN0aWZ5LCBfb3B0cywgZG9uZSkgPT4ge1xuICBjb25zdCB1c2VyU2VydmljZXMgPSBmYXN0aWZ5LmNvbnRhaW5lci5yZXNvbHZlKCd1c2VyU2VydmljZXMnKVxuICBjb25zdCBvcmdhbml6YXRpb25TZXJ2aWNlcyA9IGZhc3RpZnkuY29udGFpbmVyLnJlc29sdmUoJ29yZ2FuaXphdGlvblNlcnZpY2VzJylcblxuICBmYXN0aWZ5LmdldCgnLzpvcmdhbml6YXRpb25OYW1lJywge1xuICAgIHByZVZhbGlkYXRpb246IFtmYXN0aWZ5LmF1dGhlbnRpY2F0ZV0sXG4gIH0sIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgb3JnYW5pemF0aW9uTmFtZSB9ID0gcmVxLnBhcmFtc1xuICAgIGNvbnN0IHsgdGFncyB9ID0gcmVxLnF1ZXJ5XG4gICAgY29uc3QgeyBsZXZlbCB9ID0gYXdhaXQgdXNlclNlcnZpY2VzLmdldExldmVsKHsgcm9sZTogcmVxLnVzZXIucm9sZSB9KVxuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IGF3YWl0IG9yZ2FuaXphdGlvblNlcnZpY2VzLm9yZ2FuaXphdGlvbihvcmdhbml6YXRpb25OYW1lLCBsZXZlbClcbiAgICBpZiAob3JnYW5pemF0aW9ucy5sZW5ndGggPT09IDApIHRocm93IGZhc3RpZnkuaHR0cEVycm9ycy51bmF1dGhvcml6ZWQoJ1ZvY8OqIG7Do28gdGVtIHBlcm1pc3PDo28gcGFyYSBhY2Vzc2FyIG9zIHByb2R1dG9zIGRlc3NhIG9yZ2FuaXphw6fDo28nKVxuXG4gICAgcmVzLnNlbmQoJ09LJylcbiAgfSlcblxuICBkb25lKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNDb250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9