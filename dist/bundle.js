/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"clap","letter":"w","musicPath":"./resources/clap.wav"},{"title":"hihat","letter":"s","musicPath":"./resources/hihat.wav"},{"title":"kick","letter":"d","musicPath":"./resources/kick.wav"},{"title":"openhat","letter":"f","musicPath":"./resources/openhat.wav"},{"title":"boom","letter":"g","musicPath":"./resources/boom.wav"},{"title":"ride","letter":"h","musicPath":"./resources/ride.wav"},{"title":"snare","letter":"j","musicPath":"./resources/snare.wav"},{"title":"tom","letter":"k","musicPath":"./resources/tom.wav"},{"title":"tink","letter":"l","musicPath":"./resources/tink.wav"}]');

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  scrollbar-width: 10px;\r\n  scrollbar-color: rgb(67, 67, 67) rgb(48, 46, 46);\r\n}\r\n*::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n*::-webkit-scrollbar-thumb {\r\n  background-color: rgb(67, 67, 67);\r\n  border-radius: 20px;\r\n}\r\n*::-webkit-scrollbar-corner {\r\n  background-color: rgb(67, 67, 67);\r\n  border-radius: 20px;\r\n}\r\n*::-webkit-scrollbar:horizontal {\r\n  height: 10px;\r\n}\r\n@media screen and (min-width: 804px) {\r\n  html,\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 99vw;\r\n    background-color: rgb(48, 46, 46);\r\n    color: white;\r\n  }\r\n  #app {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 99vw;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n  }\r\n  .title {\r\n    width: 100%;\r\n    font-size: 20px;\r\n    background-color: rgb(67, 67, 67);\r\n    padding: 1.5% 0 1.5% 1%;\r\n  }\r\n  .musicbox {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .history {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 130px;\r\n    overflow: auto;\r\n    font-size: 20px;\r\n    padding: 1.5% 0 1.5% 1%;\r\n    display: none;\r\n  }\r\n  \r\n  .main {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: grid;\r\n    place-items: center;\r\n    --auto-grid-min-size: 70%;\r\n    grid-template-columns: repeat(\r\n      auto-fit,\r\n      minmax(var(--auto-grid-min-size), 1fr)\r\n    );\r\n    grid-template-rows: repeat(3, auto);\r\n    grid-gap: 12px;\r\n  }\r\n  .each_button {\r\n    background-color: rgb(67, 67, 67);\r\n    height: 80px;\r\n    width: 80px;\r\n    border-radius: 3%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .history_button {\r\n    margin: 5px;\r\n    display: inline-flex;\r\n  }\r\n  .each_button:hover {\r\n    background-color: rgb(43, 43, 43);\r\n    cursor: pointer;\r\n  }\r\n  .each_button:active {\r\n    box-shadow: 0 0.5em 0.5em -0.4em;\r\n    transform: translateY(-0.25em);\r\n  }\r\n  .activateOnKey {\r\n    box-shadow: 0 0.5em 0.5em -0.4em;\r\n    transform: translateY(-0.25em);\r\n  }\r\n  .main p {\r\n    width: 100%;\r\n    grid-column: 2 / span 10;\r\n    grid-row: 1;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  #clap {\r\n    grid-column: 3;\r\n    grid-row: 2;\r\n  }\r\n  #hihat {\r\n    grid-column: 3;\r\n    grid-row: 3;\r\n  }\r\n  #kick {\r\n    grid-column: 4;\r\n    grid-row: 3;\r\n  }\r\n  #openhat {\r\n    grid-column: 5;\r\n    grid-row: 3;\r\n  }\r\n  #boom {\r\n    grid-column: 6;\r\n    grid-row: 3;\r\n  }\r\n  #ride {\r\n    grid-column: 7;\r\n    grid-row: 3;\r\n  }\r\n  #snare {\r\n    grid-column: 8;\r\n    grid-row: 3;\r\n  }\r\n  #tom {\r\n    grid-column: 9;\r\n    grid-row: 3;\r\n  }\r\n  #tink {\r\n    grid-column: 10;\r\n    grid-row: 3;\r\n  }\r\n}\r\n@media screen and (min-width: 501px) and (max-width: 803px) {\r\n  html,\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 97vw;\r\n    background-color: rgb(48, 46, 46);\r\n    color: white;\r\n  }\r\n  #app {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 97vw;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n  }\r\n  .title {\r\n    width: 100%;\r\n    font-size: 20px;\r\n    background-color: rgb(67, 67, 67);\r\n    padding: 1.5% 0 1.5% 3%;\r\n  }\r\n  .musicbox {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .history {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    overflow: auto;\r\n    font-size: 16px;\r\n    padding: 1.5% 0 1.5% 3%;\r\n    display: none;\r\n  }\r\n  .main {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: grid;\r\n    place-items: center;\r\n    --auto-grid-min-size: 70%;\r\n    grid-template-columns: repeat(\r\n      auto-fit,\r\n      minmax(var(--auto-grid-min-size), 1fr)\r\n    );\r\n    grid-template-rows: repeat(3, auto);\r\n    grid-gap: 12px;\r\n  }\r\n  .each_button {\r\n    background-color: rgb(67, 67, 67);\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 3%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .history_button {\r\n    margin: 5px;\r\n    display: inline-flex;\r\n  }\r\n  .each_button:hover {\r\n    background-color: rgb(43, 43, 43);\r\n    cursor: pointer;\r\n  }\r\n  .each_button:active {\r\n    box-shadow: 0 0.5em 0.5em -0.4em;\r\n    transform: translateY(-0.25em);\r\n  }\r\n  .main p {\r\n    margin-left: 20px;\r\n    width: 100%;\r\n    grid-column: 2 / span 10;\r\n    grid-row: 1;\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  #clap {\r\n    grid-column: 3;\r\n    grid-row: 2;\r\n  }\r\n  #hihat {\r\n    grid-column: 3;\r\n    grid-row: 3;\r\n  }\r\n  #kick {\r\n    grid-column: 4;\r\n    grid-row: 3;\r\n  }\r\n  #openhat {\r\n    grid-column: 5;\r\n    grid-row: 3;\r\n  }\r\n  #boom {\r\n    grid-column: 6;\r\n    grid-row: 3;\r\n  }\r\n  #ride {\r\n    grid-column: 7;\r\n    grid-row: 3;\r\n  }\r\n  #snare {\r\n    grid-column: 8;\r\n    grid-row: 3;\r\n  }\r\n  #tom {\r\n    grid-column: 9;\r\n    grid-row: 3;\r\n  }\r\n  #tink {\r\n    grid-column: 10;\r\n    grid-row: 3;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  html,\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(48, 46, 46);\r\n    color: white;\r\n  }\r\n  #app {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .title {\r\n    padding: 15px;\r\n    background-color: rgb(67, 67, 67);\r\n    font-size: large;\r\n  }\r\n  .main {\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-content: stretch;\r\n    justify-content: center;\r\n    gap: 1px 1px;\r\n    flex-wrap: wrap;\r\n    font-size: large;\r\n  }\r\n  .history {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    overflow: auto;\r\n    font-size: 20px;\r\n    padding: 1.5% 0 1.5% 1%;\r\n    display: none;\r\n  }\r\n  .main p {\r\n    text-align: left;\r\n    font-size: 25px;\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin: 0;\r\n  }\r\n  .each_button {\r\n    background-color: rgb(67, 67, 67);\r\n    height: 100px;\r\n    width: 160px;\r\n    flex-grow: 1;\r\n    border-radius: 3%;\r\n    margin: 6px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n  }\r\n  .history_button {\r\n    margin: 5px;\r\n    display: inline-flex;\r\n    height: 50px;\r\n    width: 80px;\r\n    font-size: small;\r\n  }\r\n  #tink {\r\n    flex-grow: 2;\r\n  }\r\n} ;\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,gDAAgD;AAClD;AACA;EACE,WAAW;AACb;AACA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;AACA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE;;IAEE,SAAS;IACT,UAAU;IACV,aAAa;IACb,WAAW;IACX,iCAAiC;IACjC,YAAY;EACd;EACA;IACE,SAAS;IACT,UAAU;IACV,aAAa;IACb,WAAW;IACX,aAAa;IACb,iCAAiC;EACnC;EACA;IACE,WAAW;IACX,eAAe;IACf,iCAAiC;IACjC,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,SAAS;IACT,WAAW;IACX,aAAa;IACb,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,aAAa;EACf;;EAEA;IACE,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB;;;KAGC;IACD,mCAAmC;IACnC,cAAc;EAChB;EACA;IACE,iCAAiC;IACjC,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,oBAAoB;EACtB;EACA;IACE,iCAAiC;IACjC,eAAe;EACjB;EACA;IACE,gCAAgC;IAChC,8BAA8B;EAChC;EACA;IACE,gCAAgC;IAChC,8BAA8B;EAChC;EACA;IACE,WAAW;IACX,wBAAwB;IACxB,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,eAAe;IACf,WAAW;EACb;AACF;AACA;EACE;;IAEE,SAAS;IACT,UAAU;IACV,aAAa;IACb,WAAW;IACX,iCAAiC;IACjC,YAAY;EACd;EACA;IACE,SAAS;IACT,UAAU;IACV,aAAa;IACb,WAAW;IACX,aAAa;IACb,iCAAiC;EACnC;EACA;IACE,WAAW;IACX,eAAe;IACf,iCAAiC;IACjC,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,SAAS;IACT,WAAW;IACX,YAAY;IACZ,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,aAAa;EACf;EACA;IACE,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB;;;KAGC;IACD,mCAAmC;IACnC,cAAc;EAChB;EACA;IACE,iCAAiC;IACjC,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,oBAAoB;EACtB;EACA;IACE,iCAAiC;IACjC,eAAe;EACjB;EACA;IACE,gCAAgC;IAChC,8BAA8B;EAChC;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,wBAAwB;IACxB,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,eAAe;IACf,WAAW;EACb;AACF;AACA;EACE;;IAEE,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,YAAY;EACd;EACA;IACE,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;EACb;EACA;IACE,aAAa;IACb,iCAAiC;IACjC,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,SAAS;IACT,WAAW;IACX,aAAa;IACb,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,SAAS;EACX;EACA;IACE,iCAAiC;IACjC,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,oBAAoB;IACpB,YAAY;IACZ,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["* {\r\n  scrollbar-width: 10px;\r\n  scrollbar-color: rgb(67, 67, 67) rgb(48, 46, 46);\r\n}\r\n*::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n*::-webkit-scrollbar-thumb {\r\n  background-color: rgb(67, 67, 67);\r\n  border-radius: 20px;\r\n}\r\n*::-webkit-scrollbar-corner {\r\n  background-color: rgb(67, 67, 67);\r\n  border-radius: 20px;\r\n}\r\n*::-webkit-scrollbar:horizontal {\r\n  height: 10px;\r\n}\r\n@media screen and (min-width: 804px) {\r\n  html,\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 99vw;\r\n    background-color: rgb(48, 46, 46);\r\n    color: white;\r\n  }\r\n  #app {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 99vw;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n  }\r\n  .title {\r\n    width: 100%;\r\n    font-size: 20px;\r\n    background-color: rgb(67, 67, 67);\r\n    padding: 1.5% 0 1.5% 1%;\r\n  }\r\n  .musicbox {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .history {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 130px;\r\n    overflow: auto;\r\n    font-size: 20px;\r\n    padding: 1.5% 0 1.5% 1%;\r\n    display: none;\r\n  }\r\n  \r\n  .main {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: grid;\r\n    place-items: center;\r\n    --auto-grid-min-size: 70%;\r\n    grid-template-columns: repeat(\r\n      auto-fit,\r\n      minmax(var(--auto-grid-min-size), 1fr)\r\n    );\r\n    grid-template-rows: repeat(3, auto);\r\n    grid-gap: 12px;\r\n  }\r\n  .each_button {\r\n    background-color: rgb(67, 67, 67);\r\n    height: 80px;\r\n    width: 80px;\r\n    border-radius: 3%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .history_button {\r\n    margin: 5px;\r\n    display: inline-flex;\r\n  }\r\n  .each_button:hover {\r\n    background-color: rgb(43, 43, 43);\r\n    cursor: pointer;\r\n  }\r\n  .each_button:active {\r\n    box-shadow: 0 0.5em 0.5em -0.4em;\r\n    transform: translateY(-0.25em);\r\n  }\r\n  .activateOnKey {\r\n    box-shadow: 0 0.5em 0.5em -0.4em;\r\n    transform: translateY(-0.25em);\r\n  }\r\n  .main p {\r\n    width: 100%;\r\n    grid-column: 2 / span 10;\r\n    grid-row: 1;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  #clap {\r\n    grid-column: 3;\r\n    grid-row: 2;\r\n  }\r\n  #hihat {\r\n    grid-column: 3;\r\n    grid-row: 3;\r\n  }\r\n  #kick {\r\n    grid-column: 4;\r\n    grid-row: 3;\r\n  }\r\n  #openhat {\r\n    grid-column: 5;\r\n    grid-row: 3;\r\n  }\r\n  #boom {\r\n    grid-column: 6;\r\n    grid-row: 3;\r\n  }\r\n  #ride {\r\n    grid-column: 7;\r\n    grid-row: 3;\r\n  }\r\n  #snare {\r\n    grid-column: 8;\r\n    grid-row: 3;\r\n  }\r\n  #tom {\r\n    grid-column: 9;\r\n    grid-row: 3;\r\n  }\r\n  #tink {\r\n    grid-column: 10;\r\n    grid-row: 3;\r\n  }\r\n}\r\n@media screen and (min-width: 501px) and (max-width: 803px) {\r\n  html,\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 97vw;\r\n    background-color: rgb(48, 46, 46);\r\n    color: white;\r\n  }\r\n  #app {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 97vw;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n  }\r\n  .title {\r\n    width: 100%;\r\n    font-size: 20px;\r\n    background-color: rgb(67, 67, 67);\r\n    padding: 1.5% 0 1.5% 3%;\r\n  }\r\n  .musicbox {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .history {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    overflow: auto;\r\n    font-size: 16px;\r\n    padding: 1.5% 0 1.5% 3%;\r\n    display: none;\r\n  }\r\n  .main {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: grid;\r\n    place-items: center;\r\n    --auto-grid-min-size: 70%;\r\n    grid-template-columns: repeat(\r\n      auto-fit,\r\n      minmax(var(--auto-grid-min-size), 1fr)\r\n    );\r\n    grid-template-rows: repeat(3, auto);\r\n    grid-gap: 12px;\r\n  }\r\n  .each_button {\r\n    background-color: rgb(67, 67, 67);\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 3%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .history_button {\r\n    margin: 5px;\r\n    display: inline-flex;\r\n  }\r\n  .each_button:hover {\r\n    background-color: rgb(43, 43, 43);\r\n    cursor: pointer;\r\n  }\r\n  .each_button:active {\r\n    box-shadow: 0 0.5em 0.5em -0.4em;\r\n    transform: translateY(-0.25em);\r\n  }\r\n  .main p {\r\n    margin-left: 20px;\r\n    width: 100%;\r\n    grid-column: 2 / span 10;\r\n    grid-row: 1;\r\n    font-size: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  #clap {\r\n    grid-column: 3;\r\n    grid-row: 2;\r\n  }\r\n  #hihat {\r\n    grid-column: 3;\r\n    grid-row: 3;\r\n  }\r\n  #kick {\r\n    grid-column: 4;\r\n    grid-row: 3;\r\n  }\r\n  #openhat {\r\n    grid-column: 5;\r\n    grid-row: 3;\r\n  }\r\n  #boom {\r\n    grid-column: 6;\r\n    grid-row: 3;\r\n  }\r\n  #ride {\r\n    grid-column: 7;\r\n    grid-row: 3;\r\n  }\r\n  #snare {\r\n    grid-column: 8;\r\n    grid-row: 3;\r\n  }\r\n  #tom {\r\n    grid-column: 9;\r\n    grid-row: 3;\r\n  }\r\n  #tink {\r\n    grid-column: 10;\r\n    grid-row: 3;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  html,\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(48, 46, 46);\r\n    color: white;\r\n  }\r\n  #app {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .title {\r\n    padding: 15px;\r\n    background-color: rgb(67, 67, 67);\r\n    font-size: large;\r\n  }\r\n  .main {\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-content: stretch;\r\n    justify-content: center;\r\n    gap: 1px 1px;\r\n    flex-wrap: wrap;\r\n    font-size: large;\r\n  }\r\n  .history {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    overflow: auto;\r\n    font-size: 20px;\r\n    padding: 1.5% 0 1.5% 1%;\r\n    display: none;\r\n  }\r\n  .main p {\r\n    text-align: left;\r\n    font-size: 25px;\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin: 0;\r\n  }\r\n  .each_button {\r\n    background-color: rgb(67, 67, 67);\r\n    height: 100px;\r\n    width: 160px;\r\n    flex-grow: 1;\r\n    border-radius: 3%;\r\n    margin: 6px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n  }\r\n  .history_button {\r\n    margin: 5px;\r\n    display: inline-flex;\r\n    height: 50px;\r\n    width: 80px;\r\n    font-size: small;\r\n  }\r\n  #tink {\r\n    flex-grow: 2;\r\n  }\r\n} ;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
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
/* 11 */
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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_drumSet_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const app = document.getElementById('app');
const title = document.createElement('div');
title.classList.add('title');
title.innerText='Beat! - The Virtual Drum Kit Experience';
app.appendChild(title);

const musicBox = document.createElement('div');
musicBox.classList.add('musicbox');
app.appendChild(musicBox)
const main = document.createElement('div');
main.classList.add('main');
const text = document.createElement('p');
text.innerText =
  'Bringing the power of a full drum set to your fingertips, anytime, anywhere!';
musicBox.appendChild(main);
main.appendChild(text);

_model_drumSet_json__WEBPACK_IMPORTED_MODULE_0__.forEach((sound) => {
  const button = document.createElement('div');
  button.classList.add('each_button');
  button.setAttribute('id', sound.title);
  button.setAttribute('musicPath',sound.musicPath);
  button.setAttribute('letter',sound.letter);
  button.innerText = `${sound.letter}\n${sound.title}`;
  button.addEventListener('click',playMusicOnClick);
  main.appendChild(button);
  
  });

const history = document.createElement('div');
history.classList.add('history');
history.innerText="Just clicked:";
app.appendChild(history);

function playMusicOnClick(e){
    saveInHistory(e.target.getAttribute('letter'));
    const sound = new Audio(e.target.getAttribute('musicPath'));
    sound.play();
    const historyText = document.querySelector('.history');
    historyText.style.display = 'inline-block';
    }; 
document.addEventListener('keydown',addCLassEffect);
document.addEventListener('keyup',playMusicBasedOnKey);

function playMusicBasedOnKey(e){
  _model_drumSet_json__WEBPACK_IMPORTED_MODULE_0__.forEach(drumPiece => {
        if (drumPiece.letter === e.key){
          saveInHistory(e.key); 
          document.getElementById(drumPiece.title).classList.remove('activateOnKey'); 
          playMusicFrom(drumPiece.musicPath);
        const historyText = document.querySelector('.history');
        historyText.style.display = 'inline-block';
    }   
})
}

function addCLassEffect(e) {
      _model_drumSet_json__WEBPACK_IMPORTED_MODULE_0__.forEach(drumPiece => {
            if (drumPiece.letter === e.key){
                document.getElementById(drumPiece.title).classList.add('activateOnKey');            
        }   
    })
}

function playMusicFrom(musicPath){
  const sound = new Audio(musicPath);
  sound.play();
}
function saveInHistory(letter) {
  const historyButton = document.createElement('div');
  historyButton.classList.add('each_button');
  historyButton.classList.add('history_button');
  historyButton.innerText = `${letter}\n${_model_drumSet_json__WEBPACK_IMPORTED_MODULE_0__.filter(drumPiece => drumPiece.letter === letter)[0].title}`;
  history.appendChild(historyButton);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map