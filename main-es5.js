(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\source\angular-infinite-scroll-directive\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "RlYm":
    /*!****************************************!*\
      !*** ./src/app/hacker-news.service.ts ***!
      \****************************************/

    /*! exports provided: HackerNewsService */

    /***/
    function RlYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HackerNewsService", function () {
        return HackerNewsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var BASE_URL = 'http://node-hnapi.herokuapp.com';

      var HackerNewsService = /*#__PURE__*/function () {
        function HackerNewsService(http) {
          _classCallCheck(this, HackerNewsService);

          this.http = http;
        }

        _createClass(HackerNewsService, [{
          key: "getLatestStories",
          value: function getLatestStories() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            return this.http.get("".concat(BASE_URL, "/news?page=").concat(page));
          }
        }]);

        return HackerNewsService;
      }();

      HackerNewsService.ɵfac = function HackerNewsService_Factory(t) {
        return new (t || HackerNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HackerNewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HackerNewsService,
        factory: HackerNewsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hacker_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hacker-news.service */
      "RlYm");
      /* harmony import */


      var _infinite_scroller_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./infinite-scroller.directive */
      "ho8E");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r1.title, " ");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(service) {
          _classCallCheck(this, AppComponent);

          this.service = service;
          this.title = 'infinite-scroller-poc';
          this.currentPage = 1;
          this.news = [];
          this.config = {};
          this.scrollCallback = this.getStories.bind(this);
        }

        _createClass(AppComponent, [{
          key: "getStories",
          value: function getStories() {
            return this.service.getLatestStories(this.currentPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(this.processData.bind(this)));
          }
        }, {
          key: "processData",
          value: function processData(news) {
            console.log('here is am 2', news);
            this.currentPage++;
            this.news = this.news.concat(news);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_hacker_news_service__WEBPACK_IMPORTED_MODULE_3__["HackerNewsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 2,
        consts: [[1, "content"], ["id", "infinite-scroller", "appInfiniteScroller", "", "scrollPerecnt", "70", "immediateCallback", "true", 3, "scrollCallback"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "infinite-scroller-poc app is running!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_li_4_Template, 2, 1, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scrollCallback", ctx.scrollCallback);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.news);
          }
        },
        directives: [_infinite_scroller_directive__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: [".ps[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n.ps__rail-x[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  \n  bottom: 0px;\n  \n  position: absolute;\n}\n.ps__rail-y[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  \n  right: 0;\n  \n  position: absolute;\n}\n.ps--active-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  display: block;\n  background-color: transparent;\n}\n.ps[_ngcontent-%COMP%]:hover    > .ps__rail-x[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]:hover    > .ps__rail-y[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%], .ps--scrolling-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--scrolling-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-x.ps--clicking[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]   .ps__rail-y.ps--clicking[_ngcontent-%COMP%] {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n.ps__thumb-x[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  \n  bottom: 2px;\n  \n  position: absolute;\n}\n.ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  \n  right: 2px;\n  \n  position: absolute;\n}\n.ps__rail-x[_ngcontent-%COMP%]:hover    > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x[_ngcontent-%COMP%]:focus    > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-x[_ngcontent-%COMP%] {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y[_ngcontent-%COMP%]:hover    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #999;\n  width: 11px;\n}\n\n@supports (-ms-overflow-style: none) {\n  .ps[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n}\n[_nghost-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n#infinite-scroller[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  overflow-y: auto;\n}\n#infinite-scroller[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  line-height: 1.5;\n}\n#infinite-scroller[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #2b89b4;\n}\n#infinite-scroller[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(even) {\n  background: #c7c7c7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsbUVBQW1FO0VBQ25FLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkRBQTJEO0VBQzNELG1FQUFtRTtFQUNuRSxXQUFXO0VBQ1gsbURBQW1EO0VBQ25ELFFBQVE7RUFDUixtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUVBOzs7Ozs7RUFNRSxZQUFZO0FBQ2Q7QUFFQTs7Ozs7O0VBTUUsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBOztFQUVFO0FBQ0Y7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCx1RUFBdUU7RUFDdkUsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsc0VBQXNFO0VBQ3RFLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQ2pIQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsbUJBQUE7QUFDTjtBQUNJO0VBQ0UsbUJBQUE7QUFDTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29udGFpbmVyIHN0eWxlXG4gKi9cbi5wcyB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bztcbn1cblxuLypcbiAqIFNjcm9sbGJhciByYWlsIHN0eWxlc1xuICovXG4ucHNfX3JhaWwteCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgb3IgJ3RvcCcgZm9yIHBzX19yYWlsLXggKi9cbiAgYm90dG9tOiAwcHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fcmFpbC15IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIHdpZHRoOiAxNXB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnIGZvciBwc19fcmFpbC15ICovXG4gIHJpZ2h0OiAwO1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHMtLWFjdGl2ZS14ID4gLnBzX19yYWlsLXgsXG4ucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wczpob3ZlciA+IC5wc19fcmFpbC14LFxuLnBzOmhvdmVyID4gLnBzX19yYWlsLXksXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXgsXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXksXG4ucHMtLXNjcm9sbGluZy14ID4gLnBzX19yYWlsLXgsXG4ucHMtLXNjcm9sbGluZy15ID4gLnBzX19yYWlsLXkge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5wcyAucHNfX3JhaWwteDpob3Zlcixcbi5wcyAucHNfX3JhaWwteTpob3Zlcixcbi5wcyAucHNfX3JhaWwteDpmb2N1cyxcbi5wcyAucHNfX3JhaWwteTpmb2N1cyxcbi5wcyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4ucHMgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKlxuICogU2Nyb2xsYmFyIHRodW1iIHN0eWxlc1xuICovXG4ucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGhlaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogNnB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIGZvciBwc19fdGh1bWIteCAqL1xuICBib3R0b206IDJweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDZweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIGZvciBwc19fdGh1bWIteSAqL1xuICByaWdodDogMnB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14OmZvY3VzID4gLnBzX190aHVtYi14LFxuLnBzX19yYWlsLXgucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB3aWR0aDogMTFweDtcbn1cblxuLyogTVMgc3VwcG9ydHMgKi9cbkBzdXBwb3J0cyAoLW1zLW92ZXJmbG93LXN0eWxlOiBub25lKSB7XG4gIC5wcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJ+cGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbiNpbmZpbml0ZS1zY3JvbGxlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyYjg5YjQ7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjN2M3Yzc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _infinite_scroller_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./infinite-scroller.directive */
      "ho8E");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _infinite_scroller_directive__WEBPACK_IMPORTED_MODULE_2__["InfiniteScrollerDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]]
        });
      })();
      /***/

    },

    /***/
    "ho8E":
    /*!************************************************!*\
      !*** ./src/app/infinite-scroller.directive.ts ***!
      \************************************************/

    /*! exports provided: InfiniteScrollerDirective */

    /***/
    function ho8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfiniteScrollerDirective", function () {
        return InfiniteScrollerDirective;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DEFAULT_SCROLL_POSITION = {
        sH: 0,
        sT: 0,
        cH: 0
      };

      var InfiniteScrollerDirective = /*#__PURE__*/function () {
        function InfiniteScrollerDirective(elm) {
          var _this = this;

          _classCallCheck(this, InfiniteScrollerDirective);

          this.elm = elm;
          this.scrollPercent = 70;

          this.isUserScrollingDown = function (positions) {
            return positions[0].sT < positions[1].sT;
          };

          this.isScrollExpectedPercent = function (position) {
            return (position.sT + position.cH) / position.sH > _this.scrollPercent / 100;
          };
        }

        _createClass(InfiniteScrollerDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.registerScrollEvent();
            this.streamScrollEvents();
            this.requestCallbackOnScroll();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.requestOnScrollSubscription) {
              this.requestOnScrollSubscription.unsubscribe();
              this.requestOnScrollSubscription = null;
            }
          }
        }, {
          key: "registerScrollEvent",
          value: function registerScrollEvent() {
            this.scrollEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.elm.nativeElement, 'scroll');
          }
        }, {
          key: "streamScrollEvents",
          value: function streamScrollEvents() {
            var _this2 = this;

            this.userScrolledDown$ = this.scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (scrollData) {
              return {
                cH: scrollData.target.clientHeight,
                sH: scrollData.target.scrollHeight,
                sT: scrollData.target.scrollTop
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (positions) {
              return _this2.isUserScrollingDown(positions) && _this2.isScrollExpectedPercent(positions[1]);
            }));
          }
        }, {
          key: "requestCallbackOnScroll",
          value: function requestCallbackOnScroll() {
            var _this3 = this;

            this.requestOnScroll$ = this.userScrolledDown$;

            if (this.immediateCallback) {
              this.requestOnScroll$ = this.requestOnScroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]));
            }

            this.requestOnScrollSubscription = this.requestOnScroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(function () {
              return _this3.scrollCallback && _this3.scrollCallback();
            })).subscribe(function () {});
          }
        }]);

        return InfiniteScrollerDirective;
      }();

      InfiniteScrollerDirective.ɵfac = function InfiniteScrollerDirective_Factory(t) {
        return new (t || InfiniteScrollerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      InfiniteScrollerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: InfiniteScrollerDirective,
        selectors: [["", "appInfiniteScroller", ""]],
        inputs: {
          scrollCallback: "scrollCallback",
          immediateCallback: "immediateCallback",
          scrollPercent: "scrollPercent"
        }
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map