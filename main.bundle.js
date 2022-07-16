"use strict";
(self["webpackChunktop_battleship"] = self["webpackChunktop_battleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Poppins-Regular.ttf */ "./src/font/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Poppins-Bold.ttf */ "./src/font/Poppins-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n\n:root{\n    --hit: #d4595d;\n    --ship: #97eba5;\n    --ship-moving: #76b6c4;\n    --miss: #7fcdff;\n    --win: #97e5a0;\n    --text-dark: #064273;\n    --display-bg : #def3f6;\n}\n\nbody{\n    font-family: 'poppins', serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: var(--text-dark);\n    height: 100vh;\n}\n\nbody > div{\n    width: 100%;\n}\n\nh1{\n    font-size: 2.5rem;\n}\n\nh2{\n    font-size: 1.5rem;\n}\n\n/******************\nHEADER\n******************/\n\n.header{\n    padding: 32px 0;\n    display: flex;\n    justify-content: center;\n\n}\n\n/******************\nCONTENT\n******************/\n.content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n}\n\n.board-container{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n}\n\n/******************\nDISPLAY\n- Show the rules\n- Show if win or loose\n******************/\n\n.display{\n    padding: 16px;\n    border: 1px solid var(--text-dark);\n    background-color: var(--display-bg);\n\n    min-width: 320px;\n    max-width: 360px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n    text-align: center;\n    gap: 8px;\n}\n\n.message{\n    font-style: italic;\n    font-size: 0.8rem;\n}\n\n.message-italic{\n    font-style: italic;\n    font-size: 0.8rem;\n}\n\n.button-div{\n    margin-top: auto;\n}\n\nbutton{\n    padding: 8px 0px;\n    width: 108px;\n    border: 1px solid var(--text-dark);\n    background-color: var(--miss);\n    font-weight: 300;\n    transition: all 0.2s ease-in-out;\n}\n\nbutton:hover{\n    cursor: pointer;\n    border: 1px solid var(--miss);\n    background-color: var(--text-dark);\n    color: var(--display-bg);\n    }\n\n/******************\nGAME BOARD\n******************/\n\n.p1-container, \n.p2-container{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-dark);\n}\n\n.board-container p{\n    font-size: 1.1rem;\n    font-weight: 300;\n}\n\n.board{\n    display: flex;\n    flex-wrap: wrap;\n    width: 258px;\n    aspect-ratio: 1;\n    z-index: 1;\n}\n\n.cell{\n    border: 1px dotted var(--miss);\n    flex: 1 0 10%;\n    transition: all 0.15s linear;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 25.8px;\n    aspect-ratio: 1;\n    font-weight: 700;\n    font-size: 1.1rem;\n}\n\n/******************\nGAME BOARD\n******************/\n\n.footer{\n    height: 48px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border-top: 1px solid var(--text-dark);\n}\n\n\n.footer a{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsvg{\n    color: var(--text-dark);\n    transition: all 0.2s ease-in-out;\n}\n\nsvg:hover{\n    color: var(--miss);\n    transform: scale(1.1);\n}\n/*\nJS CLASS\n*/\n\n.moving{\n    background-color: var(--ship-moving)\n}\n\n.moving-invalid{\n    background-color: var(--hit) ;\n}\n\n.moving-invalid::after{\n    content: \"🚫\";\n}\n\n.hide{\n    display: none;\n}\n\n.win{\n    background-color: var(--win);\n}\n\n.lost{\n    background-color: var(--hit);\n}\n\n.ship{\n    background-color:var(--ship);\n    border: 0;\n}\n\n.miss{\n    background-color: var(--miss);\n}\n\n.miss::after{\n    content: \"·\";\n}\n\n.hit{\n    background-color: var(--hit);\n}\n\n.hit::after{\n    content: \"×\";\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,+DAAyD;IACzD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,+DAAsD;IACtD,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,eAAe;IACf,cAAc;IACd,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;kBAEkB;;AAElB;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;;AAE3B;;AAEA;;kBAEkB;AAClB;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;;;;kBAIkB;;AAElB;IACI,aAAa;IACb,kCAAkC;IAClC,mCAAmC;;IAEnC,gBAAgB;IAChB,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kCAAkC;IAClC,6BAA6B;IAC7B,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,kCAAkC;IAClC,wBAAwB;IACxB;;AAEJ;;kBAEkB;;AAElB;;IAEI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;kBAEkB;;AAElB;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,sCAAsC;AAC1C;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;AACA;;CAEC;;AAED;IACI;AACJ;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('./font/Poppins-Regular.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'poppins';\n    src: url('./font/Poppins-Bold.ttf') format('truetype');\n    font-weight: 700;\n    font-style: bold;\n}\n\n:root{\n    --hit: #d4595d;\n    --ship: #97eba5;\n    --ship-moving: #76b6c4;\n    --miss: #7fcdff;\n    --win: #97e5a0;\n    --text-dark: #064273;\n    --display-bg : #def3f6;\n}\n\nbody{\n    font-family: 'poppins', serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: var(--text-dark);\n    height: 100vh;\n}\n\nbody > div{\n    width: 100%;\n}\n\nh1{\n    font-size: 2.5rem;\n}\n\nh2{\n    font-size: 1.5rem;\n}\n\n/******************\nHEADER\n******************/\n\n.header{\n    padding: 32px 0;\n    display: flex;\n    justify-content: center;\n\n}\n\n/******************\nCONTENT\n******************/\n.content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n}\n\n.board-container{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 16px;\n}\n\n/******************\nDISPLAY\n- Show the rules\n- Show if win or loose\n******************/\n\n.display{\n    padding: 16px;\n    border: 1px solid var(--text-dark);\n    background-color: var(--display-bg);\n\n    min-width: 320px;\n    max-width: 360px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n    text-align: center;\n    gap: 8px;\n}\n\n.message{\n    font-style: italic;\n    font-size: 0.8rem;\n}\n\n.message-italic{\n    font-style: italic;\n    font-size: 0.8rem;\n}\n\n.button-div{\n    margin-top: auto;\n}\n\nbutton{\n    padding: 8px 0px;\n    width: 108px;\n    border: 1px solid var(--text-dark);\n    background-color: var(--miss);\n    font-weight: 300;\n    transition: all 0.2s ease-in-out;\n}\n\nbutton:hover{\n    cursor: pointer;\n    border: 1px solid var(--miss);\n    background-color: var(--text-dark);\n    color: var(--display-bg);\n    }\n\n/******************\nGAME BOARD\n******************/\n\n.p1-container, \n.p2-container{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-dark);\n}\n\n.board-container p{\n    font-size: 1.1rem;\n    font-weight: 300;\n}\n\n.board{\n    display: flex;\n    flex-wrap: wrap;\n    width: 258px;\n    aspect-ratio: 1;\n    z-index: 1;\n}\n\n.cell{\n    border: 1px dotted var(--miss);\n    flex: 1 0 10%;\n    transition: all 0.15s linear;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 25.8px;\n    aspect-ratio: 1;\n    font-weight: 700;\n    font-size: 1.1rem;\n}\n\n/******************\nGAME BOARD\n******************/\n\n.footer{\n    height: 48px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border-top: 1px solid var(--text-dark);\n}\n\n\n.footer a{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsvg{\n    color: var(--text-dark);\n    transition: all 0.2s ease-in-out;\n}\n\nsvg:hover{\n    color: var(--miss);\n    transform: scale(1.1);\n}\n/*\nJS CLASS\n*/\n\n.moving{\n    background-color: var(--ship-moving)\n}\n\n.moving-invalid{\n    background-color: var(--hit) ;\n}\n\n.moving-invalid::after{\n    content: \"🚫\";\n}\n\n.hide{\n    display: none;\n}\n\n.win{\n    background-color: var(--win);\n}\n\n.lost{\n    background-color: var(--hit);\n}\n\n.ship{\n    background-color:var(--ship);\n    border: 0;\n}\n\n.miss{\n    background-color: var(--miss);\n}\n\n.miss::after{\n    content: \"·\";\n}\n\n.hit{\n    background-color: var(--hit);\n}\n\n.hit::after{\n    content: \"×\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = document.querySelector('.display');
const state = document.querySelector('.state');
const message = document.querySelector('.message');
const DomStartGame = document.querySelector('.btn-start');
const DomRandomBtm = document.querySelector('.btn-random');

const dom = (() => {
  const createBoard = (board) => {
    for (let index = 0; index < 100; index++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  };
  const clearBoard = (board) => {
    const boardCell = [...board.children];

    for (let index = 0; index < boardCell.length; index++) {
      const cell = boardCell[index];

      cell.className = 'cell';
    }
  };

  const displayShips = (gameBoard, domBoard) => {
    // Display all ships on the board

    // Get all ships position from Gameboard object
    const shipsPosition = gameBoard.allShipsPosition;

    // Color each cell with a ship in it
    for (let index = 0; index < shipsPosition.length; index++) {
      const posN = shipsPosition[index];
      const cell = domBoard.children[posN];

      cell.classList.add('ship');
    }
  };

  const displayMiss = (gameBoard, domBoard) => {
    // Display all that are missed on the board in blue color

    // Get all missed position from Gameboard object
    const missedPosition = gameBoard.missed;

    // Color each cell which were "missed"
    for (let index = 0; index < missedPosition.length; index++) {
      const posN = missedPosition[index];
      const cell = domBoard.children[posN];

      cell.classList.add('miss');
    }
  };

  const displayHit = (gameBoard, domBoard) => {
    // Display cell that are "hit" on the board in red color

    // Get all hit position from Gameboard object
    const hitPosition = gameBoard.hit;

    // Color each cell which were "hit"
    for (let index = 0; index < hitPosition.length; index++) {
      const posN = hitPosition[index];
      const cell = domBoard.children[posN];

      cell.classList.add('hit');
    }
  };

  const displayMessage = (message1, message2, isWin) => {
    display.classList.remove('hide');
    state.textContent = message1;
    message.textContent = message2;

    if (isWin === 'init') {
      display.classList.remove('win');
      display.classList.remove('lost');
      DomStartGame.textContent = 'Start Game';
      DomRandomBtm.classList.remove('hide');
    } else if (isWin === 'win') {
      display.classList.add('win');
      DomStartGame.textContent = 'Restart';
      DomRandomBtm.classList.add('hide');
    } else {
      display.classList.add('lost');
      DomStartGame.textContent = 'Restart';
      DomRandomBtm.classList.add('hide');
    }
  };

  const hideDisplay = () => {
    display.className = 'display';
    display.classList.add('hide');
  };

  const placeShip = (board, cellNumber, shipLength, isVertical, isValid) => {
    const firstCellRow = Math.floor(cellNumber / 10);

    for (let index = 0; index < shipLength; index++) {
      const cellRow = Math.floor((cellNumber + index) / 10);
      const offset = (isVertical) ? index * 10 : index;

      if ((firstCellRow !== cellRow) && !isVertical) return; // avoid horizontal overflow
      if ((cellNumber + offset) > 99) return; // avoid vertical overflow

      // board.children[cellNumber + offset].classList.add('moving');

      if (isValid) {
        board.children[cellNumber + offset].classList.add('moving');
      } else {
        board.children[cellNumber + offset].classList.add('moving-invalid');
      }
    }
  };

  return {
    createBoard,
    clearBoard,
    displayShips,
    displayMiss,
    displayHit,
    displayMessage,
    hideDisplay,
    placeShip,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* eslint-disable no-plusplus */
const Gameboard = () => {
  const allShipsPosition = [];
  const missed = [];
  const hit = [];
  const ships = { };

  function checkPosition(shipPosition, isVertical, oldShipPosition, allShipsPos) {
    // Function to check if position is valid

    // First, we remove shipPosition from allShipsPosition
    const shipsPositions = [...allShipsPos];

    if (oldShipPosition !== undefined) {
      const index = shipsPositions.indexOf(oldShipPosition[0]);
      shipsPositions.splice(index, oldShipPosition.length);
    }

    // Check that position are not already used by another ship...
    const isAlreadyUsed = shipPosition.some((element) => shipsPositions.includes(element));

    // Check that ship is not adjacent to another ship...
    const isAdjacent = shipPosition.some((element) => {
      if (shipsPositions.includes(element + 1) && Math.floor(element / 10) === Math.floor((element + 1) / 10)) { return true; }
      if (shipsPositions.includes(element - 1) && Math.floor(element / 10) === Math.floor((element - 1) / 10)) { return true; }
      if (shipsPositions.includes(element + 10)) return true;
      if (shipsPositions.includes(element - 10)) return true;
      return false;
    });

    // Check that position are not overflowing board...
    const isOverflow = shipPosition.some((element) => element > 99);

    // Check that position are not wrapping over 2 lines...
    let isWrapping = false;
    if (!isVertical) {
      isWrapping = (Math.floor(shipPosition[0] / 10) !== Math.floor(shipPosition[shipPosition.length - 1] / 10));
    }

    if (isAlreadyUsed || isAdjacent || isOverflow || isWrapping) {
      return false;
    }

    return true;
  }

  const placeShip = (ship, position, isVertical) => {
    const boardKeys = Object.keys(ships);
    const boardLength = boardKeys.length;
    const keyValue = `ship${boardLength}`;
    const shipPosition = [];

    let shipOrientation = isVertical;

    if (isVertical === undefined) shipOrientation = false;

    for (let index = 0; index < ship.shipArray.length; index++) {
      let pos;

      if (shipOrientation) {
        pos = position + (10 * index);
      } else {
        pos = position + index;
      }

      shipPosition.push(pos);
    }

    ships[keyValue] = [ship, shipPosition, shipOrientation];
    updateShipsPosition();
    return ships;
  };

  const placeShipsRandomly = (shipsArray) => {
    // Function to place ships randomly on the board.

    // For each ships in the given array...
    for (let index = 0; index < shipsArray.length; index++) {
      const ship = shipsArray[index];
      let isVertical;
      let position;

      let i = 0;
      let isValid = false;

      // Search for a random position which is valid ...
      do {
        // Randomly choose if ship is placed vertically or horizontally
        isVertical = (Math.floor(Math.random() * 2) === 0);
        // Randomly choose a position
        position = Math.floor(Math.random() * 99);

        // Get all positions that ship will use based on is length...
        const shipPosition = [];
        for (let n = 0; n < ship.shipArray.length; n++) {
          let pos;

          if (isVertical) {
            pos = position + (10 * n);
          } else {
            pos = position + n;
          }

          shipPosition.push(pos);
        }

        // Check that position is valid...
        if (!checkPosition(shipPosition, isVertical, undefined, allShipsPosition)) continue;

        isValid = true;

        // TEST BREAK THE LOOP IN CASE NOT POSITION ARE FOUND AFTER LOT OF TRIALS
        i += 1;
        if (i > 1000) isValid = true;
      } while (isValid === false);

      placeShip(ship, position, isVertical);
    }
  };

  const receiveAttack = (hitPos) => {
    for (const keys in ships) {
      const ship = ships[keys][0];
      const shipPosition = ships[keys][1];

      for (let index = 0; index < shipPosition.length; index++) {
        const position = shipPosition[index];
        if (position === hitPos) {
          ship.hit(index + 1);
          hit.push(hitPos);
          return 'hit';
        }
      }
    }

    missed.push(hitPos);
    return 'miss';
  };

  const areShipsSunk = () => {
    let allShipSunk = true;

    for (const keys in ships) {
      const ship = ships[keys][0];
      if (!ship.isSunk()) allShipSunk = false;
    }

    return allShipSunk;
  };

  const rotateShip = (position) => {
    // If yes, get ship object...
    for (const key in ships) {
      const ship = ships[key];

      if (ship[1].includes(position)) {
        const isVertical = ship[2];
        const oldShipPosition = ship[1];
        const firstShipPosition = ship[1][0];
        const newShipPosition = [];

        // Rotate is position and update gameboard object
        oldShipPosition.forEach((pos, index) => {
          (isVertical)
            ? newShipPosition.push(firstShipPosition + index)
            : newShipPosition.push(firstShipPosition + (10 * index));
        });

        const isValid = (checkPosition(newShipPosition, !isVertical, oldShipPosition, allShipsPosition));

        if (!isValid) return 'error';

        ship[1] = newShipPosition;
        ship[2] = !(isVertical);
        updateShipsPosition();
      }
    }
  };

  const moveShip = (position, key) => {
    const ship = ships[key];

    const shipLength = ship[1].length;
    const isVertical = ship[2];
    const oldShipPosition = ship[1];
    const newShipPosition = [];

    for (let index = 0; index < shipLength; index++) {
      const pos = (isVertical) ? position + (index * 10) : position + index;
      newShipPosition.push(pos);
    }

    const isValid = (checkPosition(newShipPosition, isVertical, oldShipPosition, allShipsPosition));

    if (!isValid) return 'error';

    ship[1] = newShipPosition;
    updateShipsPosition();
  };

  const updateShipsPosition = () => {
    allShipsPosition.splice(0, allShipsPosition.length);

    for (const key in ships) {
      const ship = ships[key];
      const shipPosition = ship[1];

      shipPosition.forEach((pos) => allShipsPosition.push(pos));
    }
  };

  return {
    allShipsPosition,
    ships,
    missed,
    hit,
    areShipsSunk,
    checkPosition,
    placeShip,
    placeShipsRandomly,
    receiveAttack,
    moveShip,
    rotateShip,
    updateShipsPosition,
  };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.js");






const DomBoard = document.querySelectorAll('.board');
const DomStartGame = document.querySelector('.btn-start');
const DomRandomBtm = document.querySelector('.btn-random');
let gameStatus = 'init';
let movedShip; // Variable to store the ship currently moved
let activePlayer = 'player1';

/** ***********************
INITIALIZATION OF BOARDS
************************* */
const player1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
const player2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();

const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_4__.Player)(player1Board);
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_4__.Player)(player2Board);

_dom__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(DomBoard[0]);
_dom__WEBPACK_IMPORTED_MODULE_1__["default"].createBoard(DomBoard[1]);

function iaPlay() {
  // Function to generate a random hit position.
  const position = player2.aiAttack();

  // Check if it's a valid position, the cell should not have been used already...
  if (player1.board.missed.includes(position) || player1.board.hit.includes(position)) { iaPlay(); }

  // ...If it's valid, use Gameboard method receiveAttack
  player1.board.receiveAttack(position);

  // Update the dom...
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayMiss(player1.board, DomBoard[0]); // attack that missed
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayHit(player1.board, DomBoard[0]); // attack that hit

  // Check if all ship are sunk...
  if (player1.board.areShipsSunk()) {
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage('You Lost!', '');
    gameStatus = 'ended';
  }
}

function randomShipPlacement(domB, board) {
  // Function to place ships randomly on the board.

  // Clear the board
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearBoard(domB);

  // Create ships to be placed
  const ships = [(0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2), (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3), (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4), (0,_ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5)];

  // Place ships randomly
  board.placeShipsRandomly(ships);

  // Display them on the board
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayShips(player1.board, DomBoard[0]);
}

// Generate a random board after the page loading
randomShipPlacement(DomBoard[0], player1.board);
randomShipPlacement(DomBoard[1], player2.board);

// Display them on the screen
_dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayShips(player1.board, DomBoard[0]);
// dom.displayShips(player2.board, DomBoard[1]);

/** ***********************
EVENT LISTENER
************************* */

DomRandomBtm.addEventListener('click', () => {
  // When player click on ships "Random" placement button...
  const player = (activePlayer === 'player1') ? player1 : player2;
  const dom_board = (activePlayer === 'player1') ? DomBoard[0] : DomBoard[1];

  // // Generate a new gameboard for active player player
  player.board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
  randomShipPlacement(dom_board, player.board);
});

DomStartGame.addEventListener('click', () => {
  // When player click "start game"...

  // If a game just ended, reset the gameboard...
  if (gameStatus === 'ended') {
  // // Generate a new gameboard for players
    player1.board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
    randomShipPlacement(DomBoard[0], player1.board);

    player2.board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
    randomShipPlacement(DomBoard[1], player2.board);
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage('Place your ships!', 'Click on a ship to move it, double click to rotate it!', 'init');

    gameStatus = 'init';
    return;
  }

  // ... else start a new game.

  // Remove instruction/result screen
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].hideDisplay();

  // Clear boards and display randomly placed ship
  DomBoard.forEach((board) => _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearBoard(board));
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayShips(player1.board, DomBoard[0]);
  // dom.displayShips(player2.board, DomBoard[1]);

  // Set active player and reset movedShip variable
  movedShip = undefined;
  activePlayer = 'player1';

  // Start the game loop
  gameStatus = 'game';
});

DomBoard.forEach((board) => board.addEventListener('mouseover', (e) => {
  // When a ship is being moved, display it on the board at his future position
  if (![...e.target.classList].includes('cell')) return;
  if (gameStatus !== 'movingShip') return;

  // Get player board and board number
  const playerBoard = e.target.parentElement;
  const playerBoardNumber = e.target.parentElement.classList[1];

  const mouseoverCell = e.target;
  const position = [...playerBoard.children].indexOf(mouseoverCell);

  const player = (playerBoardNumber === 'player1') ? player1 : player2;
  const ship = player.board.ships[movedShip[1]];

  // Prevent that the ship is displayed on the wrong board
  if (playerBoardNumber !== movedShip[0]) return;

  // Get future ship positions
  const futurePosition = [];
  const isVertical = ship[2];

  for (let n = 0; n < ship[1].length; n++) {
    let pos;

    if (isVertical) {
      pos = position + (10 * n);
    } else {
      pos = position + n;
    }

    futurePosition.push(pos);
  }

  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearBoard(playerBoard);
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayShips(player.board, playerBoard);

  // Check if the ship future position is valid...
  const isPositionValid = player.board.checkPosition(
    futurePosition,
    isVertical,
    ship[1],
    player.board.allShipsPosition,
  );

  // ... Show ship future position on the board
  _dom__WEBPACK_IMPORTED_MODULE_1__["default"].placeShip(playerBoard, position, ship[1].length, ship[2], isPositionValid);
}));

DomBoard.forEach((board) => board.addEventListener('click', (e) => {
  // When player click on a cell...

  // Ignore click if it's not a board cell
  if (![...e.target.classList].includes('cell')) return;

  // Get player board and board number
  const playerBoard = e.target.parentElement;
  const playerBoardNumber = e.target.parentElement.classList[1];

  // Get cell DOM reference and position
  const cell = e.target;
  const position = [...playerBoard.children].indexOf(cell);

  const player = (playerBoardNumber === 'player1') ? player1 : player2;

  switch (gameStatus) {
    case 'game':
      // Check that active player is using the correct board.
      if (activePlayer === playerBoardNumber) return;

      // Check if it's a valid position, the cell should not have been used already...
      if (player.board.missed.includes(position) || player.board.hit.includes(position)) return;

      // ...If it's valid, use Gameboard method receiveAttack
      player.board.receiveAttack(position);

      // Update the dom...
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayMiss(player.board, playerBoard); // attack that missed
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayHit(player.board, playerBoard); // attack that hit

      // Check if all ship are sunk...
      if (player.board.areShipsSunk()) {
        // If yes, show "you won" on the board
        _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage('You Won!', '', 'win');
        gameStatus = 'ended';
      }

      // Alternate between the player
      (activePlayer === 'player1') ? activePlayer = 'player2' : activePlayer = 'player1';

      // Player 2 is played by the IA (hit a random position)
      if (activePlayer === 'player2') {
        iaPlay();
        activePlayer = 'player1';
      }

      break;

    case 'movingShip':
      // Place ship being moved at a new position...

      // Prevent that a ship is moved across player 1 and player 2 board
      if (playerBoardNumber !== movedShip[0]) return;

      // Update ship position in the player gameboard object
      player.board.moveShip(position, movedShip[1]);

      // update DOM
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearBoard(playerBoard);
      _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayShips(player.board, playerBoard);

      gameStatus = 'init';
      break;

    case 'init':
      // If the user click on a ship, start to move it...

      // check if cell is used by a ship...
      if (player.board.allShipsPosition.includes(position)) {
        // If yes, get ship object...
        for (const key in player.board.ships) {
          const ship = player.board.ships[key];

          if (ship[1].includes(position)) {
            movedShip = [playerBoardNumber, key];
          }
        }

        // Moving Ship
        gameStatus = 'movingShip';
      }
      break;

    default:
      break;
  }
}));

DomBoard.forEach((board) => board.addEventListener('dblclick', (e) => {
  // If the user double click on a ship, rotate it...

  // Ignore click if it's not a board cell
  if (![...e.target.classList].includes('cell')) return;
  if (gameStatus !== 'init') return; // Game should be in init status

  // Get player board and board number
  const playerBoard = e.target.parentElement;
  const playerBoardNumber = e.target.parentElement.classList[1];

  // Get cell DOM reference and position
  const cell = e.target;
  const position = [...playerBoard.children].indexOf(cell);

  const player = (playerBoardNumber === 'player1') ? player1 : player2;

  // check if cell is used by a ship...
  if (player.board.allShipsPosition.includes(position)) {
    gameStatus = 'rotatingShip';

    // Rotate the ship using gameboard method
    player.board.rotateShip(position);

    // update DOM
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].clearBoard(playerBoard);
    _dom__WEBPACK_IMPORTED_MODULE_1__["default"].displayShips(player.board, playerBoard);
  }
  gameStatus = 'init';
}));


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
const Player = (board) => {
  const aiAttack = () => {
    const randomPos = Math.floor(Math.random() * 99);

    return randomPos;
  };
  return { board, aiAttack };
};




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length) => {
  const shipArray = new Array(length);
  shipArray.fill('o');

  const hit = (n) => {
    if (n > shipArray.length || n === 0 || n < 0) return 'positionError';
    shipArray[n - 1] = 'x';
    return shipArray;
  };

  const isSunk = () => {
    if (shipArray.includes('o')) {
      return false;
    }
    return true;
  };

  return { shipArray, hit, isSunk };
};




/***/ }),

/***/ "./src/font/Poppins-Bold.ttf":
/*!***********************************!*\
  !*** ./src/font/Poppins-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdb29a5d7ccf57ff05a3.ttf";

/***/ }),

/***/ "./src/font/Poppins-Regular.ttf":
/*!**************************************!*\
  !*** ./src/font/Poppins-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx3REFBZSw2QkFBNkI7QUFDbEQsTUFBTSx1REFBYyw2QkFBNkI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx1REFBYztBQUNwQixNQUFNLHlEQUFnQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5UkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNUbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvUG9wcGlucy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgLS1oaXQ6ICNkNDU5NWQ7XFxuICAgIC0tc2hpcDogIzk3ZWJhNTtcXG4gICAgLS1zaGlwLW1vdmluZzogIzc2YjZjNDtcXG4gICAgLS1taXNzOiAjN2ZjZGZmO1xcbiAgICAtLXdpbjogIzk3ZTVhMDtcXG4gICAgLS10ZXh0LWRhcms6ICMwNjQyNzM7XFxuICAgIC0tZGlzcGxheS1iZyA6ICNkZWYzZjY7XFxufVxcblxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDJ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqXFxuSEVBREVSXFxuKioqKioqKioqKioqKioqKioqL1xcblxcbi5oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDMycHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi8qKioqKioqKioqKioqKioqKipcXG5DT05URU5UXFxuKioqKioqKioqKioqKioqKioqL1xcbi5jb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMycHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKlxcbkRJU1BMQVlcXG4tIFNob3cgdGhlIHJ1bGVzXFxuLSBTaG93IGlmIHdpbiBvciBsb29zZVxcbioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZGlzcGxheXtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1iZyk7XFxuXFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIG1heC13aWR0aDogMzYwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ubWVzc2FnZXtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLm1lc3NhZ2UtaXRhbGlje1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uYnV0dG9uLWRpdntcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgICB3aWR0aDogMTA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pc3MpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tZGlzcGxheS1iZyk7XFxuICAgIH1cXG5cXG4vKioqKioqKioqKioqKioqKioqXFxuR0FNRSBCT0FSRFxcbioqKioqKioqKioqKioqKioqKi9cXG5cXG4ucDEtY29udGFpbmVyLCBcXG4ucDItY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWRhcmspO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDI1OHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jZWxse1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgdmFyKC0tbWlzcyk7XFxuICAgIGZsZXg6IDEgMCAxMCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1LjhweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKlxcbkdBTUUgQk9BUkRcXG4qKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvb3RlcntcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWRhcmspO1xcbn1cXG5cXG5cXG4uZm9vdGVyIGF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zdmd7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuc3ZnOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tbWlzcyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLypcXG5KUyBDTEFTU1xcbiovXFxuXFxuLm1vdmluZ3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1tb3ZpbmcpXFxufVxcblxcbi5tb3ZpbmctaW52YWxpZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KSA7XFxufVxcblxcbi5tb3ZpbmctaW52YWxpZDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCLwn5qrXFxcIjtcXG59XFxuXFxuLmhpZGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53aW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbik7XFxufVxcblxcbi5sb3N0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zaGlwKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4ubWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5taXNzOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIsK3XFxcIjtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuLmhpdDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCLDl1xcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwrREFBeUQ7SUFDekQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJ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O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udC9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnLi9mb250L1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcblxcbjpyb290e1xcbiAgICAtLWhpdDogI2Q0NTk1ZDtcXG4gICAgLS1zaGlwOiAjOTdlYmE1O1xcbiAgICAtLXNoaXAtbW92aW5nOiAjNzZiNmM0O1xcbiAgICAtLW1pc3M6ICM3ZmNkZmY7XFxuICAgIC0td2luOiAjOTdlNWEwO1xcbiAgICAtLXRleHQtZGFyazogIzA2NDI3MztcXG4gICAgLS1kaXNwbGF5LWJnIDogI2RlZjNmNjtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gZGl2e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKipcXG5IRUFERVJcXG4qKioqKioqKioqKioqKioqKiovXFxuXFxuLmhlYWRlcntcXG4gICAgcGFkZGluZzogMzJweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKlxcbkNPTlRFTlRcXG4qKioqKioqKioqKioqKioqKiovXFxuLmNvbnRlbnR7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzJweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqXFxuRElTUExBWVxcbi0gU2hvdyB0aGUgcnVsZXNcXG4tIFNob3cgaWYgd2luIG9yIGxvb3NlXFxuKioqKioqKioqKioqKioqKioqL1xcblxcbi5kaXNwbGF5e1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWRhcmspO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXNwbGF5LWJnKTtcXG5cXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5tZXNzYWdle1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ubWVzc2FnZS1pdGFsaWN7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5idXR0b24tZGl2e1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG5idXR0b257XFxuICAgIHBhZGRpbmc6IDhweCAwcHg7XFxuICAgIHdpZHRoOiAxMDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1kYXJrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlzcyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICAgIGNvbG9yOiB2YXIoLS1kaXNwbGF5LWJnKTtcXG4gICAgfVxcblxcbi8qKioqKioqKioqKioqKioqKipcXG5HQU1FIEJPQVJEXFxuKioqKioqKioqKioqKioqKioqL1xcblxcbi5wMS1jb250YWluZXIsIFxcbi5wMi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtZGFyayk7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIgcHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5ib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMjU4cHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNlbGx7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCB2YXIoLS1taXNzKTtcXG4gICAgZmxleDogMSAwIDEwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjUuOHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqXFxuR0FNRSBCT0FSRFxcbioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZm9vdGVye1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRleHQtZGFyayk7XFxufVxcblxcblxcbi5mb290ZXIgYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnN2Z3tcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5zdmc6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1taXNzKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4vKlxcbkpTIENMQVNTXFxuKi9cXG5cXG4ubW92aW5ne1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLW1vdmluZylcXG59XFxuXFxuLm1vdmluZy1pbnZhbGlke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpIDtcXG59XFxuXFxuLm1vdmluZy1pbnZhbGlkOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIvCfmqtcXFwiO1xcbn1cXG5cXG4uaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLndpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2luKTtcXG59XFxuXFxuLmxvc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNoaXApO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzKTtcXG59XFxuXFxuLm1pc3M6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiwrdcXFwiO1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4uaGl0OjphZnRlcntcXG4gICAgY29udGVudDogXFxcIsOXXFxcIjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUnKTtcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuY29uc3QgRG9tU3RhcnRHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zdGFydCcpO1xuY29uc3QgRG9tUmFuZG9tQnRtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1yYW5kb20nKTtcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTAwOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2xlYXJCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IFsuLi5ib2FyZC5jaGlsZHJlbl07XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm9hcmRDZWxsLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGJvYXJkQ2VsbFtpbmRleF07XG5cbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U2hpcHMgPSAoZ2FtZUJvYXJkLCBkb21Cb2FyZCkgPT4ge1xuICAgIC8vIERpc3BsYXkgYWxsIHNoaXBzIG9uIHRoZSBib2FyZFxuXG4gICAgLy8gR2V0IGFsbCBzaGlwcyBwb3NpdGlvbiBmcm9tIEdhbWVib2FyZCBvYmplY3RcbiAgICBjb25zdCBzaGlwc1Bvc2l0aW9uID0gZ2FtZUJvYXJkLmFsbFNoaXBzUG9zaXRpb247XG5cbiAgICAvLyBDb2xvciBlYWNoIGNlbGwgd2l0aCBhIHNoaXAgaW4gaXRcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcHNQb3NpdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc04gPSBzaGlwc1Bvc2l0aW9uW2luZGV4XTtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb21Cb2FyZC5jaGlsZHJlbltwb3NOXTtcblxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlNaXNzID0gKGdhbWVCb2FyZCwgZG9tQm9hcmQpID0+IHtcbiAgICAvLyBEaXNwbGF5IGFsbCB0aGF0IGFyZSBtaXNzZWQgb24gdGhlIGJvYXJkIGluIGJsdWUgY29sb3JcblxuICAgIC8vIEdldCBhbGwgbWlzc2VkIHBvc2l0aW9uIGZyb20gR2FtZWJvYXJkIG9iamVjdFxuICAgIGNvbnN0IG1pc3NlZFBvc2l0aW9uID0gZ2FtZUJvYXJkLm1pc3NlZDtcblxuICAgIC8vIENvbG9yIGVhY2ggY2VsbCB3aGljaCB3ZXJlIFwibWlzc2VkXCJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWlzc2VkUG9zaXRpb24ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwb3NOID0gbWlzc2VkUG9zaXRpb25baW5kZXhdO1xuICAgICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLmNoaWxkcmVuW3Bvc05dO1xuXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUhpdCA9IChnYW1lQm9hcmQsIGRvbUJvYXJkKSA9PiB7XG4gICAgLy8gRGlzcGxheSBjZWxsIHRoYXQgYXJlIFwiaGl0XCIgb24gdGhlIGJvYXJkIGluIHJlZCBjb2xvclxuXG4gICAgLy8gR2V0IGFsbCBoaXQgcG9zaXRpb24gZnJvbSBHYW1lYm9hcmQgb2JqZWN0XG4gICAgY29uc3QgaGl0UG9zaXRpb24gPSBnYW1lQm9hcmQuaGl0O1xuXG4gICAgLy8gQ29sb3IgZWFjaCBjZWxsIHdoaWNoIHdlcmUgXCJoaXRcIlxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaXRQb3NpdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc04gPSBoaXRQb3NpdGlvbltpbmRleF07XG4gICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQuY2hpbGRyZW5bcG9zTl07XG5cbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKG1lc3NhZ2UxLCBtZXNzYWdlMiwgaXNXaW4pID0+IHtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBzdGF0ZS50ZXh0Q29udGVudCA9IG1lc3NhZ2UxO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlMjtcblxuICAgIGlmIChpc1dpbiA9PT0gJ2luaXQnKSB7XG4gICAgICBkaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpO1xuICAgICAgZGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdsb3N0Jyk7XG4gICAgICBEb21TdGFydEdhbWUudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gICAgICBEb21SYW5kb21CdG0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0gZWxzZSBpZiAoaXNXaW4gPT09ICd3aW4nKSB7XG4gICAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3dpbicpO1xuICAgICAgRG9tU3RhcnRHYW1lLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnO1xuICAgICAgRG9tUmFuZG9tQnRtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdsb3N0Jyk7XG4gICAgICBEb21TdGFydEdhbWUudGV4dENvbnRlbnQgPSAnUmVzdGFydCc7XG4gICAgICBEb21SYW5kb21CdG0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWRlRGlzcGxheSA9ICgpID0+IHtcbiAgICBkaXNwbGF5LmNsYXNzTmFtZSA9ICdkaXNwbGF5JztcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoYm9hcmQsIGNlbGxOdW1iZXIsIHNoaXBMZW5ndGgsIGlzVmVydGljYWwsIGlzVmFsaWQpID0+IHtcbiAgICBjb25zdCBmaXJzdENlbGxSb3cgPSBNYXRoLmZsb29yKGNlbGxOdW1iZXIgLyAxMCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY2VsbFJvdyA9IE1hdGguZmxvb3IoKGNlbGxOdW1iZXIgKyBpbmRleCkgLyAxMCk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAoaXNWZXJ0aWNhbCkgPyBpbmRleCAqIDEwIDogaW5kZXg7XG5cbiAgICAgIGlmICgoZmlyc3RDZWxsUm93ICE9PSBjZWxsUm93KSAmJiAhaXNWZXJ0aWNhbCkgcmV0dXJuOyAvLyBhdm9pZCBob3Jpem9udGFsIG92ZXJmbG93XG4gICAgICBpZiAoKGNlbGxOdW1iZXIgKyBvZmZzZXQpID4gOTkpIHJldHVybjsgLy8gYXZvaWQgdmVydGljYWwgb3ZlcmZsb3dcblxuICAgICAgLy8gYm9hcmQuY2hpbGRyZW5bY2VsbE51bWJlciArIG9mZnNldF0uY2xhc3NMaXN0LmFkZCgnbW92aW5nJyk7XG5cbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIGJvYXJkLmNoaWxkcmVuW2NlbGxOdW1iZXIgKyBvZmZzZXRdLmNsYXNzTGlzdC5hZGQoJ21vdmluZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQuY2hpbGRyZW5bY2VsbE51bWJlciArIG9mZnNldF0uY2xhc3NMaXN0LmFkZCgnbW92aW5nLWludmFsaWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBjbGVhckJvYXJkLFxuICAgIGRpc3BsYXlTaGlwcyxcbiAgICBkaXNwbGF5TWlzcyxcbiAgICBkaXNwbGF5SGl0LFxuICAgIGRpc3BsYXlNZXNzYWdlLFxuICAgIGhpZGVEaXNwbGF5LFxuICAgIHBsYWNlU2hpcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFNoaXBzUG9zaXRpb24gPSBbXTtcbiAgY29uc3QgbWlzc2VkID0gW107XG4gIGNvbnN0IGhpdCA9IFtdO1xuICBjb25zdCBzaGlwcyA9IHsgfTtcblxuICBmdW5jdGlvbiBjaGVja1Bvc2l0aW9uKHNoaXBQb3NpdGlvbiwgaXNWZXJ0aWNhbCwgb2xkU2hpcFBvc2l0aW9uLCBhbGxTaGlwc1Bvcykge1xuICAgIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHBvc2l0aW9uIGlzIHZhbGlkXG5cbiAgICAvLyBGaXJzdCwgd2UgcmVtb3ZlIHNoaXBQb3NpdGlvbiBmcm9tIGFsbFNoaXBzUG9zaXRpb25cbiAgICBjb25zdCBzaGlwc1Bvc2l0aW9ucyA9IFsuLi5hbGxTaGlwc1Bvc107XG5cbiAgICBpZiAob2xkU2hpcFBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcHNQb3NpdGlvbnMuaW5kZXhPZihvbGRTaGlwUG9zaXRpb25bMF0pO1xuICAgICAgc2hpcHNQb3NpdGlvbnMuc3BsaWNlKGluZGV4LCBvbGRTaGlwUG9zaXRpb24ubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0aGF0IHBvc2l0aW9uIGFyZSBub3QgYWxyZWFkeSB1c2VkIGJ5IGFub3RoZXIgc2hpcC4uLlxuICAgIGNvbnN0IGlzQWxyZWFkeVVzZWQgPSBzaGlwUG9zaXRpb24uc29tZSgoZWxlbWVudCkgPT4gc2hpcHNQb3NpdGlvbnMuaW5jbHVkZXMoZWxlbWVudCkpO1xuXG4gICAgLy8gQ2hlY2sgdGhhdCBzaGlwIGlzIG5vdCBhZGphY2VudCB0byBhbm90aGVyIHNoaXAuLi5cbiAgICBjb25zdCBpc0FkamFjZW50ID0gc2hpcFBvc2l0aW9uLnNvbWUoKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChzaGlwc1Bvc2l0aW9ucy5pbmNsdWRlcyhlbGVtZW50ICsgMSkgJiYgTWF0aC5mbG9vcihlbGVtZW50IC8gMTApID09PSBNYXRoLmZsb29yKChlbGVtZW50ICsgMSkgLyAxMCkpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIGlmIChzaGlwc1Bvc2l0aW9ucy5pbmNsdWRlcyhlbGVtZW50IC0gMSkgJiYgTWF0aC5mbG9vcihlbGVtZW50IC8gMTApID09PSBNYXRoLmZsb29yKChlbGVtZW50IC0gMSkgLyAxMCkpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIGlmIChzaGlwc1Bvc2l0aW9ucy5pbmNsdWRlcyhlbGVtZW50ICsgMTApKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzaGlwc1Bvc2l0aW9ucy5pbmNsdWRlcyhlbGVtZW50IC0gMTApKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIENoZWNrIHRoYXQgcG9zaXRpb24gYXJlIG5vdCBvdmVyZmxvd2luZyBib2FyZC4uLlxuICAgIGNvbnN0IGlzT3ZlcmZsb3cgPSBzaGlwUG9zaXRpb24uc29tZSgoZWxlbWVudCkgPT4gZWxlbWVudCA+IDk5KTtcblxuICAgIC8vIENoZWNrIHRoYXQgcG9zaXRpb24gYXJlIG5vdCB3cmFwcGluZyBvdmVyIDIgbGluZXMuLi5cbiAgICBsZXQgaXNXcmFwcGluZyA9IGZhbHNlO1xuICAgIGlmICghaXNWZXJ0aWNhbCkge1xuICAgICAgaXNXcmFwcGluZyA9IChNYXRoLmZsb29yKHNoaXBQb3NpdGlvblswXSAvIDEwKSAhPT0gTWF0aC5mbG9vcihzaGlwUG9zaXRpb25bc2hpcFBvc2l0aW9uLmxlbmd0aCAtIDFdIC8gMTApKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBbHJlYWR5VXNlZCB8fCBpc0FkamFjZW50IHx8IGlzT3ZlcmZsb3cgfHwgaXNXcmFwcGluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBvc2l0aW9uLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgY29uc3QgYm9hcmRLZXlzID0gT2JqZWN0LmtleXMoc2hpcHMpO1xuICAgIGNvbnN0IGJvYXJkTGVuZ3RoID0gYm9hcmRLZXlzLmxlbmd0aDtcbiAgICBjb25zdCBrZXlWYWx1ZSA9IGBzaGlwJHtib2FyZExlbmd0aH1gO1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbiA9IFtdO1xuXG4gICAgbGV0IHNoaXBPcmllbnRhdGlvbiA9IGlzVmVydGljYWw7XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdW5kZWZpbmVkKSBzaGlwT3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwLnNoaXBBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBwb3M7XG5cbiAgICAgIGlmIChzaGlwT3JpZW50YXRpb24pIHtcbiAgICAgICAgcG9zID0gcG9zaXRpb24gKyAoMTAgKiBpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgPSBwb3NpdGlvbiArIGluZGV4O1xuICAgICAgfVxuXG4gICAgICBzaGlwUG9zaXRpb24ucHVzaChwb3MpO1xuICAgIH1cblxuICAgIHNoaXBzW2tleVZhbHVlXSA9IFtzaGlwLCBzaGlwUG9zaXRpb24sIHNoaXBPcmllbnRhdGlvbl07XG4gICAgdXBkYXRlU2hpcHNQb3NpdGlvbigpO1xuICAgIHJldHVybiBzaGlwcztcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIHRvIHBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIHRoZSBib2FyZC5cblxuICAgIC8vIEZvciBlYWNoIHNoaXBzIGluIHRoZSBnaXZlbiBhcnJheS4uLlxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzQXJyYXlbaW5kZXhdO1xuICAgICAgbGV0IGlzVmVydGljYWw7XG4gICAgICBsZXQgcG9zaXRpb247XG5cbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgIC8vIFNlYXJjaCBmb3IgYSByYW5kb20gcG9zaXRpb24gd2hpY2ggaXMgdmFsaWQgLi4uXG4gICAgICBkbyB7XG4gICAgICAgIC8vIFJhbmRvbWx5IGNob29zZSBpZiBzaGlwIGlzIHBsYWNlZCB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseVxuICAgICAgICBpc1ZlcnRpY2FsID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwKTtcbiAgICAgICAgLy8gUmFuZG9tbHkgY2hvb3NlIGEgcG9zaXRpb25cbiAgICAgICAgcG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG5cbiAgICAgICAgLy8gR2V0IGFsbCBwb3NpdGlvbnMgdGhhdCBzaGlwIHdpbGwgdXNlIGJhc2VkIG9uIGlzIGxlbmd0aC4uLlxuICAgICAgICBjb25zdCBzaGlwUG9zaXRpb24gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBzaGlwLnNoaXBBcnJheS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgIGxldCBwb3M7XG5cbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgcG9zID0gcG9zaXRpb24gKyAoMTAgKiBuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zID0gcG9zaXRpb24gKyBuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoaXBQb3NpdGlvbi5wdXNoKHBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGF0IHBvc2l0aW9uIGlzIHZhbGlkLi4uXG4gICAgICAgIGlmICghY2hlY2tQb3NpdGlvbihzaGlwUG9zaXRpb24sIGlzVmVydGljYWwsIHVuZGVmaW5lZCwgYWxsU2hpcHNQb3NpdGlvbikpIGNvbnRpbnVlO1xuXG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRFU1QgQlJFQUsgVEhFIExPT1AgSU4gQ0FTRSBOT1QgUE9TSVRJT04gQVJFIEZPVU5EIEFGVEVSIExPVCBPRiBUUklBTFNcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBpZiAoaSA+IDEwMDApIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgfSB3aGlsZSAoaXNWYWxpZCA9PT0gZmFsc2UpO1xuXG4gICAgICBwbGFjZVNoaXAoc2hpcCwgcG9zaXRpb24sIGlzVmVydGljYWwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGhpdFBvcykgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5cyBpbiBzaGlwcykge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzW2tleXNdWzBdO1xuICAgICAgY29uc3Qgc2hpcFBvc2l0aW9uID0gc2hpcHNba2V5c11bMV07XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwUG9zaXRpb24ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcFBvc2l0aW9uW2luZGV4XTtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBoaXRQb3MpIHtcbiAgICAgICAgICBzaGlwLmhpdChpbmRleCArIDEpO1xuICAgICAgICAgIGhpdC5wdXNoKGhpdFBvcyk7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWlzc2VkLnB1c2goaGl0UG9zKTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9O1xuXG4gIGNvbnN0IGFyZVNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgYWxsU2hpcFN1bmsgPSB0cnVlO1xuXG4gICAgZm9yIChjb25zdCBrZXlzIGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNba2V5c11bMF07XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIGFsbFNoaXBTdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFNoaXBTdW5rO1xuICB9O1xuXG4gIGNvbnN0IHJvdGF0ZVNoaXAgPSAocG9zaXRpb24pID0+IHtcbiAgICAvLyBJZiB5ZXMsIGdldCBzaGlwIG9iamVjdC4uLlxuICAgIGZvciAoY29uc3Qga2V5IGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNba2V5XTtcblxuICAgICAgaWYgKHNoaXBbMV0uaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBzaGlwWzJdO1xuICAgICAgICBjb25zdCBvbGRTaGlwUG9zaXRpb24gPSBzaGlwWzFdO1xuICAgICAgICBjb25zdCBmaXJzdFNoaXBQb3NpdGlvbiA9IHNoaXBbMV1bMF07XG4gICAgICAgIGNvbnN0IG5ld1NoaXBQb3NpdGlvbiA9IFtdO1xuXG4gICAgICAgIC8vIFJvdGF0ZSBpcyBwb3NpdGlvbiBhbmQgdXBkYXRlIGdhbWVib2FyZCBvYmplY3RcbiAgICAgICAgb2xkU2hpcFBvc2l0aW9uLmZvckVhY2goKHBvcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAoaXNWZXJ0aWNhbClcbiAgICAgICAgICAgID8gbmV3U2hpcFBvc2l0aW9uLnB1c2goZmlyc3RTaGlwUG9zaXRpb24gKyBpbmRleClcbiAgICAgICAgICAgIDogbmV3U2hpcFBvc2l0aW9uLnB1c2goZmlyc3RTaGlwUG9zaXRpb24gKyAoMTAgKiBpbmRleCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gKGNoZWNrUG9zaXRpb24obmV3U2hpcFBvc2l0aW9uLCAhaXNWZXJ0aWNhbCwgb2xkU2hpcFBvc2l0aW9uLCBhbGxTaGlwc1Bvc2l0aW9uKSk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gJ2Vycm9yJztcblxuICAgICAgICBzaGlwWzFdID0gbmV3U2hpcFBvc2l0aW9uO1xuICAgICAgICBzaGlwWzJdID0gIShpc1ZlcnRpY2FsKTtcbiAgICAgICAgdXBkYXRlU2hpcHNQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb3ZlU2hpcCA9IChwb3NpdGlvbiwga2V5KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBzW2tleV07XG5cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcFsxXS5sZW5ndGg7XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IHNoaXBbMl07XG4gICAgY29uc3Qgb2xkU2hpcFBvc2l0aW9uID0gc2hpcFsxXTtcbiAgICBjb25zdCBuZXdTaGlwUG9zaXRpb24gPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwb3MgPSAoaXNWZXJ0aWNhbCkgPyBwb3NpdGlvbiArIChpbmRleCAqIDEwKSA6IHBvc2l0aW9uICsgaW5kZXg7XG4gICAgICBuZXdTaGlwUG9zaXRpb24ucHVzaChwb3MpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWQgPSAoY2hlY2tQb3NpdGlvbihuZXdTaGlwUG9zaXRpb24sIGlzVmVydGljYWwsIG9sZFNoaXBQb3NpdGlvbiwgYWxsU2hpcHNQb3NpdGlvbikpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gJ2Vycm9yJztcblxuICAgIHNoaXBbMV0gPSBuZXdTaGlwUG9zaXRpb247XG4gICAgdXBkYXRlU2hpcHNQb3NpdGlvbigpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNoaXBzUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgYWxsU2hpcHNQb3NpdGlvbi5zcGxpY2UoMCwgYWxsU2hpcHNQb3NpdGlvbi5sZW5ndGgpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1trZXldO1xuICAgICAgY29uc3Qgc2hpcFBvc2l0aW9uID0gc2hpcFsxXTtcblxuICAgICAgc2hpcFBvc2l0aW9uLmZvckVhY2goKHBvcykgPT4gYWxsU2hpcHNQb3NpdGlvbi5wdXNoKHBvcykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFsbFNoaXBzUG9zaXRpb24sXG4gICAgc2hpcHMsXG4gICAgbWlzc2VkLFxuICAgIGhpdCxcbiAgICBhcmVTaGlwc1N1bmssXG4gICAgY2hlY2tQb3NpdGlvbixcbiAgICBwbGFjZVNoaXAsXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgbW92ZVNoaXAsXG4gICAgcm90YXRlU2hpcCxcbiAgICB1cGRhdGVTaGlwc1Bvc2l0aW9uLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IERvbUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJyk7XG5jb25zdCBEb21TdGFydEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXN0YXJ0Jyk7XG5jb25zdCBEb21SYW5kb21CdG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJhbmRvbScpO1xubGV0IGdhbWVTdGF0dXMgPSAnaW5pdCc7XG5sZXQgbW92ZWRTaGlwOyAvLyBWYXJpYWJsZSB0byBzdG9yZSB0aGUgc2hpcCBjdXJyZW50bHkgbW92ZWRcbmxldCBhY3RpdmVQbGF5ZXIgPSAncGxheWVyMSc7XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKlxuSU5JVElBTElaQVRJT04gT0YgQk9BUkRTXG4qKioqKioqKioqKioqKioqKioqKioqKioqICovXG5jb25zdCBwbGF5ZXIxQm9hcmQgPSBHYW1lYm9hcmQoKTtcbmNvbnN0IHBsYXllcjJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG5jb25zdCBwbGF5ZXIxID0gUGxheWVyKHBsYXllcjFCb2FyZCk7XG5jb25zdCBwbGF5ZXIyID0gUGxheWVyKHBsYXllcjJCb2FyZCk7XG5cbmRvbS5jcmVhdGVCb2FyZChEb21Cb2FyZFswXSk7XG5kb20uY3JlYXRlQm9hcmQoRG9tQm9hcmRbMV0pO1xuXG5mdW5jdGlvbiBpYVBsYXkoKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgcmFuZG9tIGhpdCBwb3NpdGlvbi5cbiAgY29uc3QgcG9zaXRpb24gPSBwbGF5ZXIyLmFpQXR0YWNrKCk7XG5cbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHBvc2l0aW9uLCB0aGUgY2VsbCBzaG91bGQgbm90IGhhdmUgYmVlbiB1c2VkIGFscmVhZHkuLi5cbiAgaWYgKHBsYXllcjEuYm9hcmQubWlzc2VkLmluY2x1ZGVzKHBvc2l0aW9uKSB8fCBwbGF5ZXIxLmJvYXJkLmhpdC5pbmNsdWRlcyhwb3NpdGlvbikpIHsgaWFQbGF5KCk7IH1cblxuICAvLyAuLi5JZiBpdCdzIHZhbGlkLCB1c2UgR2FtZWJvYXJkIG1ldGhvZCByZWNlaXZlQXR0YWNrXG4gIHBsYXllcjEuYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG5cbiAgLy8gVXBkYXRlIHRoZSBkb20uLi5cbiAgZG9tLmRpc3BsYXlNaXNzKHBsYXllcjEuYm9hcmQsIERvbUJvYXJkWzBdKTsgLy8gYXR0YWNrIHRoYXQgbWlzc2VkXG4gIGRvbS5kaXNwbGF5SGl0KHBsYXllcjEuYm9hcmQsIERvbUJvYXJkWzBdKTsgLy8gYXR0YWNrIHRoYXQgaGl0XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXAgYXJlIHN1bmsuLi5cbiAgaWYgKHBsYXllcjEuYm9hcmQuYXJlU2hpcHNTdW5rKCkpIHtcbiAgICBkb20uZGlzcGxheU1lc3NhZ2UoJ1lvdSBMb3N0IScsICcnKTtcbiAgICBnYW1lU3RhdHVzID0gJ2VuZGVkJztcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21TaGlwUGxhY2VtZW50KGRvbUIsIGJvYXJkKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIHBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIHRoZSBib2FyZC5cblxuICAvLyBDbGVhciB0aGUgYm9hcmRcbiAgZG9tLmNsZWFyQm9hcmQoZG9tQik7XG5cbiAgLy8gQ3JlYXRlIHNoaXBzIHRvIGJlIHBsYWNlZFxuICBjb25zdCBzaGlwcyA9IFtTaGlwKDIpLCBTaGlwKDIpLCBTaGlwKDMpLCBTaGlwKDQpLCBTaGlwKDUpXTtcblxuICAvLyBQbGFjZSBzaGlwcyByYW5kb21seVxuICBib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoc2hpcHMpO1xuXG4gIC8vIERpc3BsYXkgdGhlbSBvbiB0aGUgYm9hcmRcbiAgZG9tLmRpc3BsYXlTaGlwcyhwbGF5ZXIxLmJvYXJkLCBEb21Cb2FyZFswXSk7XG59XG5cbi8vIEdlbmVyYXRlIGEgcmFuZG9tIGJvYXJkIGFmdGVyIHRoZSBwYWdlIGxvYWRpbmdcbnJhbmRvbVNoaXBQbGFjZW1lbnQoRG9tQm9hcmRbMF0sIHBsYXllcjEuYm9hcmQpO1xucmFuZG9tU2hpcFBsYWNlbWVudChEb21Cb2FyZFsxXSwgcGxheWVyMi5ib2FyZCk7XG5cbi8vIERpc3BsYXkgdGhlbSBvbiB0aGUgc2NyZWVuXG5kb20uZGlzcGxheVNoaXBzKHBsYXllcjEuYm9hcmQsIERvbUJvYXJkWzBdKTtcbi8vIGRvbS5kaXNwbGF5U2hpcHMocGxheWVyMi5ib2FyZCwgRG9tQm9hcmRbMV0pO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKipcbkVWRU5UIExJU1RFTkVSXG4qKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbkRvbVJhbmRvbUJ0bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gV2hlbiBwbGF5ZXIgY2xpY2sgb24gc2hpcHMgXCJSYW5kb21cIiBwbGFjZW1lbnQgYnV0dG9uLi4uXG4gIGNvbnN0IHBsYXllciA9IChhY3RpdmVQbGF5ZXIgPT09ICdwbGF5ZXIxJykgPyBwbGF5ZXIxIDogcGxheWVyMjtcbiAgY29uc3QgZG9tX2JvYXJkID0gKGFjdGl2ZVBsYXllciA9PT0gJ3BsYXllcjEnKSA/IERvbUJvYXJkWzBdIDogRG9tQm9hcmRbMV07XG5cbiAgLy8gLy8gR2VuZXJhdGUgYSBuZXcgZ2FtZWJvYXJkIGZvciBhY3RpdmUgcGxheWVyIHBsYXllclxuICBwbGF5ZXIuYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgcmFuZG9tU2hpcFBsYWNlbWVudChkb21fYm9hcmQsIHBsYXllci5ib2FyZCk7XG59KTtcblxuRG9tU3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBXaGVuIHBsYXllciBjbGljayBcInN0YXJ0IGdhbWVcIi4uLlxuXG4gIC8vIElmIGEgZ2FtZSBqdXN0IGVuZGVkLCByZXNldCB0aGUgZ2FtZWJvYXJkLi4uXG4gIGlmIChnYW1lU3RhdHVzID09PSAnZW5kZWQnKSB7XG4gIC8vIC8vIEdlbmVyYXRlIGEgbmV3IGdhbWVib2FyZCBmb3IgcGxheWVyc1xuICAgIHBsYXllcjEuYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICByYW5kb21TaGlwUGxhY2VtZW50KERvbUJvYXJkWzBdLCBwbGF5ZXIxLmJvYXJkKTtcblxuICAgIHBsYXllcjIuYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICByYW5kb21TaGlwUGxhY2VtZW50KERvbUJvYXJkWzFdLCBwbGF5ZXIyLmJvYXJkKTtcbiAgICBkb20uZGlzcGxheU1lc3NhZ2UoJ1BsYWNlIHlvdXIgc2hpcHMhJywgJ0NsaWNrIG9uIGEgc2hpcCB0byBtb3ZlIGl0LCBkb3VibGUgY2xpY2sgdG8gcm90YXRlIGl0IScsICdpbml0Jyk7XG5cbiAgICBnYW1lU3RhdHVzID0gJ2luaXQnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIC4uLiBlbHNlIHN0YXJ0IGEgbmV3IGdhbWUuXG5cbiAgLy8gUmVtb3ZlIGluc3RydWN0aW9uL3Jlc3VsdCBzY3JlZW5cbiAgZG9tLmhpZGVEaXNwbGF5KCk7XG5cbiAgLy8gQ2xlYXIgYm9hcmRzIGFuZCBkaXNwbGF5IHJhbmRvbWx5IHBsYWNlZCBzaGlwXG4gIERvbUJvYXJkLmZvckVhY2goKGJvYXJkKSA9PiBkb20uY2xlYXJCb2FyZChib2FyZCkpO1xuICBkb20uZGlzcGxheVNoaXBzKHBsYXllcjEuYm9hcmQsIERvbUJvYXJkWzBdKTtcbiAgLy8gZG9tLmRpc3BsYXlTaGlwcyhwbGF5ZXIyLmJvYXJkLCBEb21Cb2FyZFsxXSk7XG5cbiAgLy8gU2V0IGFjdGl2ZSBwbGF5ZXIgYW5kIHJlc2V0IG1vdmVkU2hpcCB2YXJpYWJsZVxuICBtb3ZlZFNoaXAgPSB1bmRlZmluZWQ7XG4gIGFjdGl2ZVBsYXllciA9ICdwbGF5ZXIxJztcblxuICAvLyBTdGFydCB0aGUgZ2FtZSBsb29wXG4gIGdhbWVTdGF0dXMgPSAnZ2FtZSc7XG59KTtcblxuRG9tQm9hcmQuZm9yRWFjaCgoYm9hcmQpID0+IGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gIC8vIFdoZW4gYSBzaGlwIGlzIGJlaW5nIG1vdmVkLCBkaXNwbGF5IGl0IG9uIHRoZSBib2FyZCBhdCBoaXMgZnV0dXJlIHBvc2l0aW9uXG4gIGlmICghWy4uLmUudGFyZ2V0LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ2NlbGwnKSkgcmV0dXJuO1xuICBpZiAoZ2FtZVN0YXR1cyAhPT0gJ21vdmluZ1NoaXAnKSByZXR1cm47XG5cbiAgLy8gR2V0IHBsYXllciBib2FyZCBhbmQgYm9hcmQgbnVtYmVyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgcGxheWVyQm9hcmROdW1iZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcblxuICBjb25zdCBtb3VzZW92ZXJDZWxsID0gZS50YXJnZXQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gWy4uLnBsYXllckJvYXJkLmNoaWxkcmVuXS5pbmRleE9mKG1vdXNlb3ZlckNlbGwpO1xuXG4gIGNvbnN0IHBsYXllciA9IChwbGF5ZXJCb2FyZE51bWJlciA9PT0gJ3BsYXllcjEnKSA/IHBsYXllcjEgOiBwbGF5ZXIyO1xuICBjb25zdCBzaGlwID0gcGxheWVyLmJvYXJkLnNoaXBzW21vdmVkU2hpcFsxXV07XG5cbiAgLy8gUHJldmVudCB0aGF0IHRoZSBzaGlwIGlzIGRpc3BsYXllZCBvbiB0aGUgd3JvbmcgYm9hcmRcbiAgaWYgKHBsYXllckJvYXJkTnVtYmVyICE9PSBtb3ZlZFNoaXBbMF0pIHJldHVybjtcblxuICAvLyBHZXQgZnV0dXJlIHNoaXAgcG9zaXRpb25zXG4gIGNvbnN0IGZ1dHVyZVBvc2l0aW9uID0gW107XG4gIGNvbnN0IGlzVmVydGljYWwgPSBzaGlwWzJdO1xuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgc2hpcFsxXS5sZW5ndGg7IG4rKykge1xuICAgIGxldCBwb3M7XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgcG9zID0gcG9zaXRpb24gKyAoMTAgKiBuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zID0gcG9zaXRpb24gKyBuO1xuICAgIH1cblxuICAgIGZ1dHVyZVBvc2l0aW9uLnB1c2gocG9zKTtcbiAgfVxuXG4gIGRvbS5jbGVhckJvYXJkKHBsYXllckJvYXJkKTtcbiAgZG9tLmRpc3BsYXlTaGlwcyhwbGF5ZXIuYm9hcmQsIHBsYXllckJvYXJkKTtcblxuICAvLyBDaGVjayBpZiB0aGUgc2hpcCBmdXR1cmUgcG9zaXRpb24gaXMgdmFsaWQuLi5cbiAgY29uc3QgaXNQb3NpdGlvblZhbGlkID0gcGxheWVyLmJvYXJkLmNoZWNrUG9zaXRpb24oXG4gICAgZnV0dXJlUG9zaXRpb24sXG4gICAgaXNWZXJ0aWNhbCxcbiAgICBzaGlwWzFdLFxuICAgIHBsYXllci5ib2FyZC5hbGxTaGlwc1Bvc2l0aW9uLFxuICApO1xuXG4gIC8vIC4uLiBTaG93IHNoaXAgZnV0dXJlIHBvc2l0aW9uIG9uIHRoZSBib2FyZFxuICBkb20ucGxhY2VTaGlwKHBsYXllckJvYXJkLCBwb3NpdGlvbiwgc2hpcFsxXS5sZW5ndGgsIHNoaXBbMl0sIGlzUG9zaXRpb25WYWxpZCk7XG59KSk7XG5cbkRvbUJvYXJkLmZvckVhY2goKGJvYXJkKSA9PiBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vIFdoZW4gcGxheWVyIGNsaWNrIG9uIGEgY2VsbC4uLlxuXG4gIC8vIElnbm9yZSBjbGljayBpZiBpdCdzIG5vdCBhIGJvYXJkIGNlbGxcbiAgaWYgKCFbLi4uZS50YXJnZXQuY2xhc3NMaXN0XS5pbmNsdWRlcygnY2VsbCcpKSByZXR1cm47XG5cbiAgLy8gR2V0IHBsYXllciBib2FyZCBhbmQgYm9hcmQgbnVtYmVyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgcGxheWVyQm9hcmROdW1iZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcblxuICAvLyBHZXQgY2VsbCBET00gcmVmZXJlbmNlIGFuZCBwb3NpdGlvblxuICBjb25zdCBjZWxsID0gZS50YXJnZXQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gWy4uLnBsYXllckJvYXJkLmNoaWxkcmVuXS5pbmRleE9mKGNlbGwpO1xuXG4gIGNvbnN0IHBsYXllciA9IChwbGF5ZXJCb2FyZE51bWJlciA9PT0gJ3BsYXllcjEnKSA/IHBsYXllcjEgOiBwbGF5ZXIyO1xuXG4gIHN3aXRjaCAoZ2FtZVN0YXR1cykge1xuICAgIGNhc2UgJ2dhbWUnOlxuICAgICAgLy8gQ2hlY2sgdGhhdCBhY3RpdmUgcGxheWVyIGlzIHVzaW5nIHRoZSBjb3JyZWN0IGJvYXJkLlxuICAgICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyQm9hcmROdW1iZXIpIHJldHVybjtcblxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHBvc2l0aW9uLCB0aGUgY2VsbCBzaG91bGQgbm90IGhhdmUgYmVlbiB1c2VkIGFscmVhZHkuLi5cbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQubWlzc2VkLmluY2x1ZGVzKHBvc2l0aW9uKSB8fCBwbGF5ZXIuYm9hcmQuaGl0LmluY2x1ZGVzKHBvc2l0aW9uKSkgcmV0dXJuO1xuXG4gICAgICAvLyAuLi5JZiBpdCdzIHZhbGlkLCB1c2UgR2FtZWJvYXJkIG1ldGhvZCByZWNlaXZlQXR0YWNrXG4gICAgICBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgZG9tLi4uXG4gICAgICBkb20uZGlzcGxheU1pc3MocGxheWVyLmJvYXJkLCBwbGF5ZXJCb2FyZCk7IC8vIGF0dGFjayB0aGF0IG1pc3NlZFxuICAgICAgZG9tLmRpc3BsYXlIaXQocGxheWVyLmJvYXJkLCBwbGF5ZXJCb2FyZCk7IC8vIGF0dGFjayB0aGF0IGhpdFxuXG4gICAgICAvLyBDaGVjayBpZiBhbGwgc2hpcCBhcmUgc3Vuay4uLlxuICAgICAgaWYgKHBsYXllci5ib2FyZC5hcmVTaGlwc1N1bmsoKSkge1xuICAgICAgICAvLyBJZiB5ZXMsIHNob3cgXCJ5b3Ugd29uXCIgb24gdGhlIGJvYXJkXG4gICAgICAgIGRvbS5kaXNwbGF5TWVzc2FnZSgnWW91IFdvbiEnLCAnJywgJ3dpbicpO1xuICAgICAgICBnYW1lU3RhdHVzID0gJ2VuZGVkJztcbiAgICAgIH1cblxuICAgICAgLy8gQWx0ZXJuYXRlIGJldHdlZW4gdGhlIHBsYXllclxuICAgICAgKGFjdGl2ZVBsYXllciA9PT0gJ3BsYXllcjEnKSA/IGFjdGl2ZVBsYXllciA9ICdwbGF5ZXIyJyA6IGFjdGl2ZVBsYXllciA9ICdwbGF5ZXIxJztcblxuICAgICAgLy8gUGxheWVyIDIgaXMgcGxheWVkIGJ5IHRoZSBJQSAoaGl0IGEgcmFuZG9tIHBvc2l0aW9uKVxuICAgICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gJ3BsYXllcjInKSB7XG4gICAgICAgIGlhUGxheSgpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIgPSAncGxheWVyMSc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbW92aW5nU2hpcCc6XG4gICAgICAvLyBQbGFjZSBzaGlwIGJlaW5nIG1vdmVkIGF0IGEgbmV3IHBvc2l0aW9uLi4uXG5cbiAgICAgIC8vIFByZXZlbnQgdGhhdCBhIHNoaXAgaXMgbW92ZWQgYWNyb3NzIHBsYXllciAxIGFuZCBwbGF5ZXIgMiBib2FyZFxuICAgICAgaWYgKHBsYXllckJvYXJkTnVtYmVyICE9PSBtb3ZlZFNoaXBbMF0pIHJldHVybjtcblxuICAgICAgLy8gVXBkYXRlIHNoaXAgcG9zaXRpb24gaW4gdGhlIHBsYXllciBnYW1lYm9hcmQgb2JqZWN0XG4gICAgICBwbGF5ZXIuYm9hcmQubW92ZVNoaXAocG9zaXRpb24sIG1vdmVkU2hpcFsxXSk7XG5cbiAgICAgIC8vIHVwZGF0ZSBET01cbiAgICAgIGRvbS5jbGVhckJvYXJkKHBsYXllckJvYXJkKTtcbiAgICAgIGRvbS5kaXNwbGF5U2hpcHMocGxheWVyLmJvYXJkLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICAgIGdhbWVTdGF0dXMgPSAnaW5pdCc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2luaXQnOlxuICAgICAgLy8gSWYgdGhlIHVzZXIgY2xpY2sgb24gYSBzaGlwLCBzdGFydCB0byBtb3ZlIGl0Li4uXG5cbiAgICAgIC8vIGNoZWNrIGlmIGNlbGwgaXMgdXNlZCBieSBhIHNoaXAuLi5cbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuYWxsU2hpcHNQb3NpdGlvbi5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICAgICAgLy8gSWYgeWVzLCBnZXQgc2hpcCBvYmplY3QuLi5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGxheWVyLmJvYXJkLnNoaXBzKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5ib2FyZC5zaGlwc1trZXldO1xuXG4gICAgICAgICAgaWYgKHNoaXBbMV0uaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgICAgICBtb3ZlZFNoaXAgPSBbcGxheWVyQm9hcmROdW1iZXIsIGtleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW92aW5nIFNoaXBcbiAgICAgICAgZ2FtZVN0YXR1cyA9ICdtb3ZpbmdTaGlwJztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59KSk7XG5cbkRvbUJvYXJkLmZvckVhY2goKGJvYXJkKSA9PiBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG4gIC8vIElmIHRoZSB1c2VyIGRvdWJsZSBjbGljayBvbiBhIHNoaXAsIHJvdGF0ZSBpdC4uLlxuXG4gIC8vIElnbm9yZSBjbGljayBpZiBpdCdzIG5vdCBhIGJvYXJkIGNlbGxcbiAgaWYgKCFbLi4uZS50YXJnZXQuY2xhc3NMaXN0XS5pbmNsdWRlcygnY2VsbCcpKSByZXR1cm47XG4gIGlmIChnYW1lU3RhdHVzICE9PSAnaW5pdCcpIHJldHVybjsgLy8gR2FtZSBzaG91bGQgYmUgaW4gaW5pdCBzdGF0dXNcblxuICAvLyBHZXQgcGxheWVyIGJvYXJkIGFuZCBib2FyZCBudW1iZXJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBwbGF5ZXJCb2FyZE51bWJlciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuXG4gIC8vIEdldCBjZWxsIERPTSByZWZlcmVuY2UgYW5kIHBvc2l0aW9uXG4gIGNvbnN0IGNlbGwgPSBlLnRhcmdldDtcbiAgY29uc3QgcG9zaXRpb24gPSBbLi4ucGxheWVyQm9hcmQuY2hpbGRyZW5dLmluZGV4T2YoY2VsbCk7XG5cbiAgY29uc3QgcGxheWVyID0gKHBsYXllckJvYXJkTnVtYmVyID09PSAncGxheWVyMScpID8gcGxheWVyMSA6IHBsYXllcjI7XG5cbiAgLy8gY2hlY2sgaWYgY2VsbCBpcyB1c2VkIGJ5IGEgc2hpcC4uLlxuICBpZiAocGxheWVyLmJvYXJkLmFsbFNoaXBzUG9zaXRpb24uaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgZ2FtZVN0YXR1cyA9ICdyb3RhdGluZ1NoaXAnO1xuXG4gICAgLy8gUm90YXRlIHRoZSBzaGlwIHVzaW5nIGdhbWVib2FyZCBtZXRob2RcbiAgICBwbGF5ZXIuYm9hcmQucm90YXRlU2hpcChwb3NpdGlvbik7XG5cbiAgICAvLyB1cGRhdGUgRE9NXG4gICAgZG9tLmNsZWFyQm9hcmQocGxheWVyQm9hcmQpO1xuICAgIGRvbS5kaXNwbGF5U2hpcHMocGxheWVyLmJvYXJkLCBwbGF5ZXJCb2FyZCk7XG4gIH1cbiAgZ2FtZVN0YXR1cyA9ICdpbml0Jztcbn0pKTtcbiIsImNvbnN0IFBsYXllciA9IChib2FyZCkgPT4ge1xuICBjb25zdCBhaUF0dGFjayA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21Qb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSk7XG5cbiAgICByZXR1cm4gcmFuZG9tUG9zO1xuICB9O1xuICByZXR1cm4geyBib2FyZCwgYWlBdHRhY2sgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3Qgc2hpcEFycmF5ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIHNoaXBBcnJheS5maWxsKCdvJyk7XG5cbiAgY29uc3QgaGl0ID0gKG4pID0+IHtcbiAgICBpZiAobiA+IHNoaXBBcnJheS5sZW5ndGggfHwgbiA9PT0gMCB8fCBuIDwgMCkgcmV0dXJuICdwb3NpdGlvbkVycm9yJztcbiAgICBzaGlwQXJyYXlbbiAtIDFdID0gJ3gnO1xuICAgIHJldHVybiBzaGlwQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkuaW5jbHVkZXMoJ28nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4geyBzaGlwQXJyYXksIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=