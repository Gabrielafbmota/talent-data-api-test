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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! readline */ "readline");
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_2__);




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
    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, '..', 'fixtures');
    const instream = fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream(`${filePath}/products.txt`);
    const rl = readline__WEBPACK_IMPORTED_MODULE_2___default().createInterface({
      input: instream
    });
    let lines = 0;
    const items = [];
    rl.on('line', line => {
      lines = lines + 1;
      const department = line.split(',')[1];
      const tag = line.split(',')[4];

      if (tags) {
        const query = tags === null || tags === void 0 ? void 0 : tags.split(',');
        query.map(item => {
          var _organizations$;

          if (tag.includes(item) && department.includes((_organizations$ = organizations[0]) === null || _organizations$ === void 0 ? void 0 : _organizations$.name)) {
            items.push(line);
          }
        });
      } else {
        var _organizations$2;

        if (department.includes((_organizations$2 = organizations[0]) === null || _organizations$2 === void 0 ? void 0 : _organizations$2.name)) {
          items.push(line);
        }
      }
    });
    rl.on('close', () => {
      res.send({
        total: items.length + 1,
        products: items
      });
    });
  });
  done();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsController);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhL8OBcmVhIGRlIFRyYWJhbGhvL3dvcmtzcGFjZS9wZXJzb25hbC90YWxlbnQtZGF0YS1hcGktdGVzdC9zcmMvY29udHJvbGxlcnMvcHJvZHVjdHMvcHJvZHVjdHMtY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0c0NvbnRyb2xsZXIiLCJmYXN0aWZ5IiwiX29wdHMiLCJkb25lIiwidXNlclNlcnZpY2VzIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsIm9yZ2FuaXphdGlvblNlcnZpY2VzIiwiZ2V0IiwicHJlVmFsaWRhdGlvbiIsImF1dGhlbnRpY2F0ZSIsInJlcSIsInJlcyIsIm9yZ2FuaXphdGlvbk5hbWUiLCJwYXJhbXMiLCJ0YWdzIiwicXVlcnkiLCJsZXZlbCIsImdldExldmVsIiwicm9sZSIsInVzZXIiLCJvcmdhbml6YXRpb25zIiwib3JnYW5pemF0aW9uIiwibGVuZ3RoIiwiaHR0cEVycm9ycyIsInVuYXV0aG9yaXplZCIsImZpbGVQYXRoIiwicGF0aCIsIl9fZGlybmFtZSIsImluc3RyZWFtIiwiZnMiLCJybCIsInJlYWRsaW5lIiwiaW5wdXQiLCJsaW5lcyIsIml0ZW1zIiwib24iLCJsaW5lIiwiZGVwYXJ0bWVudCIsInNwbGl0IiwidGFnIiwibWFwIiwiaXRlbSIsImluY2x1ZGVzIiwibmFtZSIsInB1c2giLCJzZW5kIiwidG90YWwiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGtCQUFrQixHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxJQUF2QixLQUFnQztBQUN6RCxRQUFNQyxZQUFZLEdBQUdILE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsT0FBbEIsQ0FBMEIsY0FBMUIsQ0FBckI7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxPQUFsQixDQUEwQixzQkFBMUIsQ0FBN0I7QUFFQUwsU0FBTyxDQUFDTyxHQUFSLENBQVksb0JBQVosRUFBa0M7QUFDaENDLGlCQUFhLEVBQUUsQ0FBQ1IsT0FBTyxDQUFDUyxZQUFUO0FBRGlCLEdBQWxDLEVBRUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JCLFVBQU07QUFBRUM7QUFBRixRQUF1QkYsR0FBRyxDQUFDRyxNQUFqQztBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXSixHQUFHLENBQUNLLEtBQXJCO0FBRUEsVUFBTTtBQUFFQztBQUFGLFFBQVksTUFBTWIsWUFBWSxDQUFDYyxRQUFiLENBQXNCO0FBQUVDLFVBQUksRUFBRVIsR0FBRyxDQUFDUyxJQUFKLENBQVNEO0FBQWpCLEtBQXRCLENBQXhCO0FBRUEsVUFBTUUsYUFBYSxHQUFHLE1BQU1kLG9CQUFvQixDQUFDZSxZQUFyQixDQUFrQ1QsZ0JBQWxDLEVBQW9ESSxLQUFwRCxDQUE1QjtBQUVBLFFBQUlJLGFBQWEsQ0FBQ0UsTUFBZCxLQUF5QixDQUE3QixFQUFnQyxNQUFNdEIsT0FBTyxDQUFDdUIsVUFBUixDQUFtQkMsWUFBbkIsQ0FBZ0MsbUVBQWhDLENBQU47QUFFaEMsVUFBTUMsUUFBUSxHQUFHQyxnREFBQSxDQUFVQyxTQUFWLEVBQXFCLElBQXJCLEVBQTJCLFVBQTNCLENBQWpCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHQywwREFBQSxDQUFxQixHQUFFSixRQUFTLGVBQWhDLENBQWpCO0FBRUEsVUFBTUssRUFBRSxHQUFHQywrREFBQSxDQUF5QjtBQUFFQyxXQUFLLEVBQUVKO0FBQVQsS0FBekIsQ0FBWDtBQUVBLFFBQUlLLEtBQUssR0FBRyxDQUFaO0FBRUEsVUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFDQUosTUFBRSxDQUFDSyxFQUFILENBQU0sTUFBTixFQUFlQyxJQUFELElBQVU7QUFDdEJILFdBQUssR0FBR0EsS0FBSyxHQUFHLENBQWhCO0FBQ0EsWUFBTUksVUFBVSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQW5CO0FBQ0EsWUFBTUMsR0FBRyxHQUFHSCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQVo7O0FBRUEsVUFBSXhCLElBQUosRUFBVTtBQUNSLGNBQU1DLEtBQUssR0FBR0QsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUV3QixLQUFOLENBQVksR0FBWixDQUFkO0FBQ0F2QixhQUFLLENBQUN5QixHQUFOLENBQVVDLElBQUksSUFBSTtBQUFBOztBQUNoQixjQUFJRixHQUFHLENBQUNHLFFBQUosQ0FBYUQsSUFBYixLQUFzQkosVUFBVSxDQUFDSyxRQUFYLG9CQUFvQnRCLGFBQWEsQ0FBQyxDQUFELENBQWpDLG9EQUFvQixnQkFBa0J1QixJQUF0QyxDQUExQixFQUF1RTtBQUNyRVQsaUJBQUssQ0FBQ1UsSUFBTixDQUFXUixJQUFYO0FBQ0Q7QUFFRixTQUxEO0FBTUQsT0FSRCxNQVFPO0FBQUE7O0FBQ0wsWUFBSUMsVUFBVSxDQUFDSyxRQUFYLHFCQUFvQnRCLGFBQWEsQ0FBQyxDQUFELENBQWpDLHFEQUFvQixpQkFBa0J1QixJQUF0QyxDQUFKLEVBQWlEO0FBQy9DVCxlQUFLLENBQUNVLElBQU4sQ0FBV1IsSUFBWDtBQUNEO0FBQ0Y7QUFFRixLQW5CRDtBQW9CQU4sTUFBRSxDQUFDSyxFQUFILENBQU0sT0FBTixFQUFlLE1BQU07QUFDbkJ4QixTQUFHLENBQUNrQyxJQUFKLENBQVM7QUFBRUMsYUFBSyxFQUFFWixLQUFLLENBQUNaLE1BQU4sR0FBZSxDQUF4QjtBQUEyQnlCLGdCQUFRLEVBQUViO0FBQXJDLE9BQVQ7QUFDRCxLQUZEO0FBR0QsR0EzQ0Q7QUE0Q0FoQyxNQUFJO0FBQ0wsQ0FqREQ7O0FBbURBLGlFQUFlSCxrQkFBZixFIiwiZmlsZSI6InByb2R1Y3RzLXByb2R1Y3RzLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHJlYWRsaW5lIGZyb20gJ3JlYWRsaW5lJ1xuXG5jb25zdCBwcm9kdWN0c0NvbnRyb2xsZXIgPSBhc3luYyAoZmFzdGlmeSwgX29wdHMsIGRvbmUpID0+IHtcbiAgY29uc3QgdXNlclNlcnZpY2VzID0gZmFzdGlmeS5jb250YWluZXIucmVzb2x2ZSgndXNlclNlcnZpY2VzJylcbiAgY29uc3Qgb3JnYW5pemF0aW9uU2VydmljZXMgPSBmYXN0aWZ5LmNvbnRhaW5lci5yZXNvbHZlKCdvcmdhbml6YXRpb25TZXJ2aWNlcycpXG5cbiAgZmFzdGlmeS5nZXQoJy86b3JnYW5pemF0aW9uTmFtZScsIHtcbiAgICBwcmVWYWxpZGF0aW9uOiBbZmFzdGlmeS5hdXRoZW50aWNhdGVdLFxuICB9LCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IG9yZ2FuaXphdGlvbk5hbWUgfSA9IHJlcS5wYXJhbXNcbiAgICBjb25zdCB7IHRhZ3MgfSA9IHJlcS5xdWVyeVxuXG4gICAgY29uc3QgeyBsZXZlbCB9ID0gYXdhaXQgdXNlclNlcnZpY2VzLmdldExldmVsKHsgcm9sZTogcmVxLnVzZXIucm9sZSB9KVxuXG4gICAgY29uc3Qgb3JnYW5pemF0aW9ucyA9IGF3YWl0IG9yZ2FuaXphdGlvblNlcnZpY2VzLm9yZ2FuaXphdGlvbihvcmdhbml6YXRpb25OYW1lLCBsZXZlbClcblxuICAgIGlmIChvcmdhbml6YXRpb25zLmxlbmd0aCA9PT0gMCkgdGhyb3cgZmFzdGlmeS5odHRwRXJyb3JzLnVuYXV0aG9yaXplZCgnVm9jw6ogbsOjbyB0ZW0gcGVybWlzc8OjbyBwYXJhIGFjZXNzYXIgb3MgcHJvZHV0b3MgZGVzc2Egb3JnYW5pemHDp8OjbycpXG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdmaXh0dXJlcycpXG4gICAgY29uc3QgaW5zdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGAke2ZpbGVQYXRofS9wcm9kdWN0cy50eHRgKVxuXG4gICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2UoeyBpbnB1dDogaW5zdHJlYW0gfSlcblxuICAgIGxldCBsaW5lcyA9IDBcblxuICAgIGNvbnN0IGl0ZW1zID0gW11cbiAgICBybC5vbignbGluZScsIChsaW5lKSA9PiB7XG4gICAgICBsaW5lcyA9IGxpbmVzICsgMVxuICAgICAgY29uc3QgZGVwYXJ0bWVudCA9IGxpbmUuc3BsaXQoJywnKVsxXVxuICAgICAgY29uc3QgdGFnID0gbGluZS5zcGxpdCgnLCcpWzRdXG5cbiAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGFncz8uc3BsaXQoJywnKVxuICAgICAgICBxdWVyeS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKHRhZy5pbmNsdWRlcyhpdGVtKSAmJiBkZXBhcnRtZW50LmluY2x1ZGVzKG9yZ2FuaXphdGlvbnNbMF0/Lm5hbWUpKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGxpbmUpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGVwYXJ0bWVudC5pbmNsdWRlcyhvcmdhbml6YXRpb25zWzBdPy5uYW1lKSkge1xuICAgICAgICAgIGl0ZW1zLnB1c2gobGluZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcbiAgICBybC5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICByZXMuc2VuZCh7IHRvdGFsOiBpdGVtcy5sZW5ndGggKyAxLCBwcm9kdWN0czogaXRlbXMgfSlcbiAgICB9KVxuICB9KVxuICBkb25lKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNDb250cm9sbGVyXG4iXSwic291cmNlUm9vdCI6IiJ9