(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MarvinBOST\Documents\DEV\Ai-ang\WanAI\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _teachablemachine_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @teachablemachine/image */ "CA5I");
/* harmony import */ var _teachablemachine_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_teachablemachine_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tensorflow_tfjs_backend_webgl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "7n2I");
/* harmony import */ var _tensorflow_tfjs_backend_cpu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs-backend-cpu */ "ix3U");
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow-models/coco-ssd */ "DP+o");
/* harmony import */ var _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");




//import COCO-SSD model as cocoSSD


class AppComponent {
    constructor() {
        this.count = 0;
        // the link to your model provided by Teachable Machine export panel
        this.URL = 'https://teachablemachine.withgoogle.com/models/onuy11n_f/';
        this.detectFrame = (video, model, model2) => {
            model.detect(video).then((predictions) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(predictions);
                var test = yield model2.predict(video).then((predictions2) => {
                    console.log(predictions2);
                    return predictions2;
                });
                this.renderPredictions(predictions, test);
                requestAnimationFrame(() => {
                    this.detectFrame(video, model, model2);
                });
            }));
        };
        this.renderPredictions = (predictions, predictions2) => {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 640;
            canvas.height = 480;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // Font options.
            const font = '16px sans-serif';
            ctx.font = font;
            ctx.textBaseline = 'top';
            ctx.drawImage(this.video, 0, 0, 640, 480);
            predictions.forEach((prediction) => {
                // create a roi line
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2);
                ctx.lineTo(canvas.width, canvas.height / 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'red';
                ctx.stroke();
            });
            predictions.forEach((prediction) => {
                if (prediction.class == 'person' || prediction.class == 'bottle') {
                    const x = prediction.bbox[0];
                    const y = prediction.bbox[1];
                    const width = prediction.bbox[2];
                    const height = prediction.bbox[3];
                    // Draw the bounding box.
                    ctx.strokeStyle = '#00FF00';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, width, height);
                    // Draw the label background.
                    ctx.fillStyle = '#00FF00';
                    const textWidth = ctx.measureText(prediction.class + Math.round(prediction.score * 100) + '%').width;
                    predictions2.forEach((prediction) => {
                        if (prediction.className) {
                            const textWidth = ctx.measureText(prediction.className +
                                Math.round(prediction.probability * 100) +
                                '%').width;
                            const textHeight = parseInt(font, 10); // base 10
                            ctx.fillRect(x, y + 15, textWidth + 8, textHeight + 8); // if (prediction.class === "person")
                        }
                    });
                    const textHeight = parseInt(font, 10); // base 10
                    ctx.fillRect(x, y, textWidth + 4, textHeight + 4); // if (prediction.class === "person")
                }
            });
            predictions.forEach((prediction) => {
                if (prediction.class == 'person' || prediction.class == 'bottle') {
                    const x = prediction.bbox[0];
                    const y = prediction.bbox[1];
                    // Draw the text last to ensure it's on top.
                    ctx.fillStyle = '#000000';
                    const className = prediction.class.charAt(0).toUpperCase() + prediction.class.slice(1);
                    ctx.fillText(className + ' ' + Math.round(prediction.score * 100) + '%', x, y);
                    predictions2.forEach((prediction) => {
                        if (prediction.probability > 0.5) {
                            ctx.fillText(prediction.className +
                                ' ' +
                                Math.round(prediction.probability * 100) +
                                '%', x, y + 15);
                        }
                    });
                }
            });
        };
    }
    ngOnInit() {
        this.webcam_init();
    }
    predictWithCocoModel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const model = await cocoSSD.load('yolov7');
            // load model yolov7
            const model = yield _tensorflow_models_coco_ssd__WEBPACK_IMPORTED_MODULE_4__["load"]();
            // check if file exists in the directory ./model/model.json
            const modelURL = this.URL + 'model.json';
            const metadataURL = this.URL + 'metadata.json';
            const model2 = yield _teachablemachine_image__WEBPACK_IMPORTED_MODULE_1__["load"](modelURL, metadataURL);
            this.detectFrame(this.video, model, model2);
            console.log('model loaded');
        });
    }
    webcam_init() {
        this.video = document.getElementById('vid');
        navigator.mediaDevices
            .getUserMedia({
            video: { width: 640, height: 480 },
            audio: false,
        })
            .then((stream) => {
            console.log('stream', stream);
            this.video.srcObject = stream;
            // wait for `loadeddata` event on the <video> element.
            this.video.addEventListener('loadeddata', (e) => {
                console.log(e);
                setTimeout(() => {
                    console.log('start');
                    this.video.play();
                }, 2000);
            });
            this.predictWithCocoModel();
        })
            .catch((err) => {
            console.log('error Webcam: ' + err);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[2, "text-align", "center"], ["hidden", "", "id", "vid", "width", "640", "height", "480"], ["id", "canvas"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Count : ", ctx.count, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map