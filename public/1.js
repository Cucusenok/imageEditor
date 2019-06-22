(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CanvasApp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_picture_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-picture-input */ "./node_modules/vue-picture-input/PictureInput.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //fonts

__webpack_require__(/*! typeface-pacifico */ "./node_modules/typeface-pacifico/index.css");

__webpack_require__(/*! typeface-vt323 */ "./node_modules/typeface-vt323/index.css");

__webpack_require__(/*! typeface-quicksand */ "./node_modules/typeface-quicksand/index.css");

var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CanvasApp",
  components: {
    'picture-input': vue_picture_input__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  //end components
  data: function data() {
    return {
      colors: [{
        text: 'white',
        value: '#fff'
      }, {
        text: 'black',
        value: 'black'
      }, {
        text: 'red',
        value: 'red'
      }, {
        text: 'pink',
        value: 'pink'
      }],
      fonts: ['Pacifico', 'VT323', 'Quicksand'],
      canvas: null,
      width: 800,
      //canvas width
      height: 800,
      //canvas height
      errorState: false,
      //for checking errors
      errorMsg: 'errorMsg',
      succesLoad: false,
      //for succes load image
      noSelectObj: false,
      //no selected item in fabric
      showPanel: false,
      vkshare: '',
      //link for share vk
      url: '',
      //url for share
      imageLink: '',
      //link to saved image
      titleImage: '',
      descriptionImage: ''
    };
  },
  //end data
  mounted: function mounted() {
    this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Canvas(this.$refs.canvas, {
      width: this.width,
      height: this.height,
      selectionColor: "#90ccb7",
      backgroundColor: "white"
    });
  },
  // end mounted
  methods: {
    convertToImagen: function convertToImagen() {
      var _this = this;

      var image = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/saveImage', {
        image: image
      }) //image in base64 code
      .then(function (response) {
        _this.imageLink = response.data.imglink;
        _this.url = response.data.link;
      });
    },
    //async font load, when selected font
    loadAndDrawFont: function loadAndDrawFont(font) {
      var font = new FontFaceObserver(font);
      font.load().then(function () {
        return;
      });
    },
    fontText: function fontText(font) {
      var obj = this.canvas.getActiveObject();

      if (obj) {
        //if have obj
        if (obj.get('type') === 'i-text') {
          var canvas = this.canvas;
          var fontLoad = new FontFaceObserver(font);
          fontLoad.load().then(function () {
            obj.set('fontFamily', font);
            canvas.renderAll();
          });
          this.noSelectObj = false;
        }
      } else {
        this.noSelectObj = true;
      }
    },
    colorSelect: function colorSelect(value) {
      this.colorText(value);
    },
    fontSelect: function fontSelect(value) {
      this.fontText(value);
    },
    addText: function addText() {
      this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('Enter your text here', {
        fontFamily: 'Delicious_500',
        left: this.canvas.width / 2,
        top: this.canvas.height / 2
      }));
    },
    colorText: function colorText(color) {
      var obj = this.canvas.getActiveObject();

      if (obj) {
        if (obj.get('type') === 'i-text') {
          obj.setColor(color);
          this.canvas.renderAll();
          this.noSelectObj = false;
        } else {
          this.noSelectObj = true;
        }
      } else {
        this.noSelectObj = true;
      }
    },
    setStyle: function setStyle(textObject, styleName, value) {
      obj.set({
        styleName: value
      });
      this.canvas.renderAll();
    },
    onChange: function onChange(image) {
      if (image) {
        this.noSelectObj = false; //clear info messages

        this.errorState = false; //clear errors messages

        var imgWidth = 0;
        var imgHeigth = 0;
        this.image = image;
        var imageObj = new Image();
        imageObj.src = this.image;
        var canvas = this.canvas;

        imageObj.onload = function () {
          imgWidth = imageObj.width;
          imgHeigth = imageObj.height;
          var imgInstance = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(imageObj, {
            left: 0,
            top: 0,
            angle: 0,
            width: imgWidth,
            height: imgHeigth
          });

          if (imgWidth <= 800 && imgHeigth <= 800) {
            canvas.clear();
            canvas.backgroundColor = "white";
            canvas.setHeight(imgHeigth);
            canvas.setWidth(imgWidth);
            imgInstance.selectable = false; //off interactivity image

            canvas.add(imgInstance);
          } else {
            alert('Only less then 801x801');
            return;
          }
        }; //imageObj.onload


        this.errorState = false; //clear errors messages

        this.showPanel = true;
      } else {
        alert('FileReader API not supported: use the <form>');
      }
    },
    eventError: function eventError(error) {
      if (error['type'] == 'fileSize') {
        console.log(error);
        this.errorState = true;
        this.errorMsg = error['message'];
      }
    }
  } //methods

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasApp */ "./resources/js/components/CanvasApp.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'canvas-app': _CanvasApp__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.shareInput{\n    background: gainsboro;\n    margin-left: 10px;\n}\n.vk-link{\n    padding: 10px;\n    background: #424cff;\n    margin-left: 10px;\n    color: white;\n    border-radius: 10px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CanvasApp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=template&id=165fc964&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CanvasApp.vue?vue&type=template&id=165fc964& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-app",
        [
          _c(
            "v-content",
            [
              _c(
                "v-container",
                { attrs: { fuild: "", "grid-list-xl": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "", "justify-center": "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c("picture-input", {
                            ref: "pictureInput",
                            attrs: {
                              width: "200",
                              height: "200",
                              margin: "16",
                              accept: "image/jpeg,image/png",
                              size: "0.5",
                              buttonClass: "btn",
                              customStrings: {
                                upload: "<h1>Bummer!</h1>",
                                drag:
                                  "Drag a jpg or png image. Click here for open file browser."
                              }
                            },
                            on: { change: _vm.onChange, error: _vm.eventError }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                color: "red",
                                value: _vm.errorState,
                                type: "error",
                                transition: "scale-transition"
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.errorMsg) +
                                  "\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            { attrs: { value: _vm.noSelectObj, type: "info" } },
                            [
                              _vm._v(
                                "\n                    For change color or font need select text, please select text.\n                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "" } },
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", "justify-center": "" } },
                            [
                              _c("div", [
                                _c(
                                  "canvas",
                                  { ref: "canvas", staticClass: "app-canvas" },
                                  [_vm._v("Sorry, but your browser is old((")]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.showPanel
                            ? _c(
                                "v-layout",
                                { attrs: { row: "", "justify-center": "" } },
                                [
                                  _c("v-btn", { on: { click: _vm.addText } }, [
                                    _vm._v("Add Text")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { md2: "" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          heigth: "20",
                                          items: _vm.colors,
                                          label: "Set color",
                                          solo: ""
                                        },
                                        on: { change: _vm.colorSelect }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { md2: "" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          heigth: "20",
                                          items: _vm.fonts,
                                          label: "Set font",
                                          solo: ""
                                        },
                                        on: { change: _vm.fontSelect }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    { on: { click: _vm.convertToImagen } },
                                    [_vm._v("save")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.imageLink
                            ? _c(
                                "v-layout",
                                {
                                  attrs: {
                                    "justify-center": "",
                                    column: "",
                                    id: "share-form"
                                  }
                                },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { xs2: "" } },
                                    [
                                      _c(
                                        "v-layout",
                                        {
                                          attrs: {
                                            "justify-center": "",
                                            row: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-chip",
                                            {
                                              attrs: {
                                                color: "secondary",
                                                "text-color": "white"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Fill this fields to share"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.titleImage,
                                                expression: "titleImage"
                                              }
                                            ],
                                            staticClass: "shareInput",
                                            attrs: {
                                              color: "",
                                              placeholder: "Title"
                                            },
                                            domProps: { value: _vm.titleImage },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.titleImage =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.descriptionImage,
                                                expression: "descriptionImage"
                                              }
                                            ],
                                            staticClass: "shareInput",
                                            attrs: {
                                              placeholder: "Description"
                                            },
                                            domProps: {
                                              value: _vm.descriptionImage
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.descriptionImage =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.titleImage && _vm.descriptionImage
                                            ? _c(
                                                "a",
                                                {
                                                  staticClass: "vk-link",
                                                  attrs: {
                                                    href:
                                                      "https://vk.com/share.php?url=" +
                                                      _vm.url +
                                                      "&image=" +
                                                      _vm.imageLink +
                                                      "&title= " +
                                                      _vm.titleImage +
                                                      ": " +
                                                      _vm.descriptionImage +
                                                      "&noparse=true",
                                                    target: "_blank"
                                                  }
                                                },
                                                [_vm._v("Share vk.com")]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("canvas-app")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CanvasApp.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/CanvasApp.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanvasApp_vue_vue_type_template_id_165fc964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasApp.vue?vue&type=template&id=165fc964& */ "./resources/js/components/CanvasApp.vue?vue&type=template&id=165fc964&");
/* harmony import */ var _CanvasApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasApp.vue?vue&type=script&lang=js& */ "./resources/js/components/CanvasApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasApp.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CanvasApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CanvasApp_vue_vue_type_template_id_165fc964___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CanvasApp_vue_vue_type_template_id_165fc964___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CanvasApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CanvasApp.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/CanvasApp.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CanvasApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CanvasApp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/CanvasApp.vue?vue&type=template&id=165fc964&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/CanvasApp.vue?vue&type=template&id=165fc964& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_template_id_165fc964___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CanvasApp.vue?vue&type=template&id=165fc964& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CanvasApp.vue?vue&type=template&id=165fc964&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_template_id_165fc964___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CanvasApp_vue_vue_type_template_id_165fc964___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);