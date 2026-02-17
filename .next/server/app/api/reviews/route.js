/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/reviews/route";
exports.ids = ["app/api/reviews/route"];
exports.modules = {

/***/ "(rsc)/./app/api/reviews/route.ts":
/*!**********************************!*\
  !*** ./app/api/reviews/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\nasync function GET() {\n    try {\n        // Sadece onaylanmış yorumları getir\n        const reviews = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.review.findMany({\n            where: {\n                status: 'approved'\n            },\n            orderBy: {\n                createdAt: 'desc'\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(reviews);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Yorumlar yüklenemedi'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        // Yeni yorumlar varsayılan olarak \"pending\" (onay bekliyor) düşer\n        const review = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.review.create({\n            data: {\n                ...body,\n                status: 'pending',\n                date: new Date().toLocaleDateString('tr-TR')\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(review);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Yorum gönderilemedi'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PATCH(request) {\n    try {\n        const { id, status } = await request.json();\n        const updatedReview = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.review.update({\n            where: {\n                id: Number(id)\n            },\n            data: {\n                status\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedReview);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Yorum güncellenemedi'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Jldmlld3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDTDtBQUUvQixlQUFlRTtJQUNwQixJQUFJO1FBQ0Ysb0NBQW9DO1FBQ3BDLE1BQU1DLFVBQVUsTUFBTUYsK0NBQU1BLENBQUNHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQzNDQyxPQUFPO2dCQUFFQyxRQUFRO1lBQVc7WUFDNUJDLFNBQVM7Z0JBQUVDLFdBQVc7WUFBTztRQUMvQjtRQUNBLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUNQO0lBQzNCLEVBQUUsT0FBT1EsT0FBTztRQUNkLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF1QixHQUFHO1lBQUVKLFFBQVE7UUFBSTtJQUM1RTtBQUNGO0FBRU8sZUFBZUssS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUgsSUFBSTtRQUMvQixrRUFBa0U7UUFDbEUsTUFBTU4sU0FBUyxNQUFNSCwrQ0FBTUEsQ0FBQ0csTUFBTSxDQUFDVyxNQUFNLENBQUM7WUFDeENDLE1BQU07Z0JBQ0osR0FBR0YsSUFBSTtnQkFDUFAsUUFBUTtnQkFDUlUsTUFBTSxJQUFJQyxPQUFPQyxrQkFBa0IsQ0FBQztZQUN0QztRQUNGO1FBQ0EsT0FBT25CLHFEQUFZQSxDQUFDVSxJQUFJLENBQUNOO0lBQzNCLEVBQUUsT0FBT08sT0FBTztRQUNkLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQixHQUFHO1lBQUVKLFFBQVE7UUFBSTtJQUMzRTtBQUNGO0FBRU8sZUFBZWEsTUFBTVAsT0FBZ0I7SUFDMUMsSUFBSTtRQUNGLE1BQU0sRUFBRVEsRUFBRSxFQUFFZCxNQUFNLEVBQUUsR0FBRyxNQUFNTSxRQUFRSCxJQUFJO1FBQ3pDLE1BQU1ZLGdCQUFnQixNQUFNckIsK0NBQU1BLENBQUNHLE1BQU0sQ0FBQ21CLE1BQU0sQ0FBQztZQUMvQ2pCLE9BQU87Z0JBQUVlLElBQUlHLE9BQU9IO1lBQUk7WUFDeEJMLE1BQU07Z0JBQUVUO1lBQU87UUFDakI7UUFDQSxPQUFPUCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDWTtJQUMzQixFQUFFLE9BQU9YLE9BQU87UUFDZCxPQUFPWCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBdUIsR0FBRztZQUFFSixRQUFRO1FBQUk7SUFDNUU7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxva2FuXFxEb3dubG9hZHNcXHRlbWl6bGlrXFxhcHBcXGFwaVxccmV2aWV3c1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gU2FkZWNlIG9uYXlsYW5txLHFnyB5b3J1bWxhcsSxIGdldGlyXHJcbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgcHJpc21hLnJldmlldy5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHN0YXR1czogJ2FwcHJvdmVkJyB9LFxyXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJldmlld3MpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1lvcnVtbGFyIHnDvGtsZW5lbWVkaScgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgLy8gWWVuaSB5b3J1bWxhciB2YXJzYXnEsWxhbiBvbGFyYWsgXCJwZW5kaW5nXCIgKG9uYXkgYmVrbGl5b3IpIGTDvMWfZXJcclxuICAgIGNvbnN0IHJldmlldyA9IGF3YWl0IHByaXNtYS5yZXZpZXcuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLmJvZHksXHJcbiAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ3RyLVRSJylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmV2aWV3KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdZb3J1bSBnw7ZuZGVyaWxlbWVkaScgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQQVRDSChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWQsIHN0YXR1cyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCB1cGRhdGVkUmV2aWV3ID0gYXdhaXQgcHJpc21hLnJldmlldy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogTnVtYmVyKGlkKSB9LFxyXG4gICAgICBkYXRhOiB7IHN0YXR1cyB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkUmV2aWV3KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdZb3J1bSBnw7xuY2VsbGVuZW1lZGknIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJHRVQiLCJyZXZpZXdzIiwicmV2aWV3IiwiZmluZE1hbnkiLCJ3aGVyZSIsInN0YXR1cyIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJqc29uIiwiZXJyb3IiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJQQVRDSCIsImlkIiwidXBkYXRlZFJldmlldyIsInVwZGF0ZSIsIk51bWJlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/reviews/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        'error'\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFHO0FBRUwsSUFBSUMsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG9rYW5cXERvd25sb2Fkc1xcdGVtaXpsaWtcXGxpYlxccHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcclxuICBuZXcgUHJpc21hQ2xpZW50KHtcclxuICAgIGxvZzogWydlcnJvciddLFxyXG4gIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_okan_Downloads_temizlik_app_api_reviews_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/reviews/route.ts */ \"(rsc)/./app/api/reviews/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reviews/route\",\n        pathname: \"/api/reviews\",\n        filename: \"route\",\n        bundlePath: \"app/api/reviews/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\okan\\\\Downloads\\\\temizlik\\\\app\\\\api\\\\reviews\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_okan_Downloads_temizlik_app_api_reviews_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXZpZXdzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXZpZXdzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmV2aWV3cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNva2FuJTVDRG93bmxvYWRzJTVDdGVtaXpsaWslNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q29rYW4lNUNEb3dubG9hZHMlNUN0ZW1pemxpayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDaUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG9rYW5cXFxcRG93bmxvYWRzXFxcXHRlbWl6bGlrXFxcXGFwcFxcXFxhcGlcXFxccmV2aWV3c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmV2aWV3cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Jldmlld3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Jldmlld3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxva2FuXFxcXERvd25sb2Fkc1xcXFx0ZW1pemxpa1xcXFxhcHBcXFxcYXBpXFxcXHJldmlld3NcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cokan%5CDownloads%5Ctemizlik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();