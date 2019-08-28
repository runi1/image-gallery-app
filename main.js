(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-index></app-index>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'image-gallery-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _image_tile_image_tile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-tile/image-tile.component */ "./src/app/image-tile/image-tile.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/image.service */ "./src/app/shared/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _image_tile_image_tile_component__WEBPACK_IMPORTED_MODULE_6__["ImageTileComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["StorageServiceModule"]
            ],
            providers: [_shared_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/image-tile/image-tile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/image-tile/image-tile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    .image-holder-container{\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n    \r\n    .overlay {\r\n       transition: -webkit-transform .3s;\r\n       transition: transform .3s;\r\n       transition: transform .3s, -webkit-transform .3s;\r\n    }\r\n    \r\n    .overlay.zoom-in{\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n    }\r\n    \r\n    .overlay.zoom-out{\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    \r\n    .overlay:after {\r\n        position: absolute;\r\n        content:\"\";\r\n        top:0;\r\n        left:0;\r\n        width:100%;\r\n        height:100%;\r\n        opacity:0;\r\n        background-color:rgba(0,0,0,0.5);\r\n        transition: all .3s;\r\n      }\r\n    \r\n    .overlay:hover:after  {\r\n        opacity: .6;\r\n      }\r\n    \r\n    .action-like-image{ \r\n    position: absolute; \r\n    right:20px;\r\n    top:25px;\r\n    z-index: 999;\r\n    cursor: pointer;\r\n  }\r\n    \r\n    .liked-image {\r\n      color:#FF0000;\r\n      display: block;\r\n  }\r\n    \r\n    .unliked-image {\r\n      color:#fff;\r\n  }\r\n    \r\n    .action-zoom-image{\r\n    position: absolute; \r\n    display: none;\r\n    color:#fff;\r\n    z-index: 999;\r\n    cursor: pointer;\r\n   }\r\n    \r\n    .icon-zoom-in,\r\n  .icon-zoom-out {\r\n    top: 20px;\r\n    left: 50%;\r\n}\r\n    \r\n    .image-holder-hover .icon-zoom-in,\r\n.image-holder-hover  .icon-zoom-out{\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/image-tile/image-tile.component.html":
/*!******************************************************!*\
  !*** ./src/app/image-tile/image-tile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #imageHolder class=\"image-holder-container\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnovering()\">\n<span class=\"icon icon-heart action-like-image\" (click)=\"likeImage()\"  [ngClass]=\"isLikedImage?'liked-image':'unliked-image'\"></span>\n<span class=\"icon icon-zoom-in action-zoom-image\" (click)=\"zoomAction()\" [ngClass]=\"isZoomin ? 'icon-zoom-in':'icon-zoom-out'\"></span>\n<div class=\"image-tile overlay\" [ngClass]=\"!isZoomin? 'zoom-in':'zoom-out'\">\n    <img src=\"{{image.regular}}\" />\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/image-tile/image-tile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/image-tile/image-tile.component.ts ***!
  \****************************************************/
/*! exports provided: ImageTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageTileComponent", function() { return ImageTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _shared_image_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image.model */ "./src/app/shared/image.model.ts");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/image.service */ "./src/app/shared/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ImageTileComponent = /** @class */ (function () {
    function ImageTileComponent(_imageService, storage, renderer) {
        this._imageService = _imageService;
        this.storage = storage;
        this.renderer = renderer;
        this.likedImage = [];
        this.isLikedImage = false;
        this.isZoomin = true;
    }
    ImageTileComponent.prototype.ngOnInit = function () {
        var favImageList = this.storage.get('likedImage') ? (String(this.storage.get('likedImage'))).split(',') : [];
        var index = favImageList.indexOf(String(this.image.id));
        if (index > -1) {
            this.isLikedImage = true;
        }
        else {
            this.isLikedImage = false;
        }
    };
    ImageTileComponent.prototype.likeImage = function () {
        var favImageList = this.storage.get('likedImage') ? String((this.storage.get('likedImage'))).split(',') : [];
        console.log('fav-image-list');
        console.log(favImageList);
        var index = favImageList.indexOf(String(this.image.id));
        if (index > -1) {
            favImageList.splice(index, 1);
            this.isLikedImage = false;
        }
        else {
            favImageList.push(String((this.image.id)));
            this.isLikedImage = true;
        }
        this.storage.set('likedImage', favImageList);
    };
    ImageTileComponent.prototype.zoomAction = function () {
        this.isZoomin = !this.isZoomin;
    };
    ImageTileComponent.prototype.onHovering = function () {
        this.renderer.addClass(this.imageHolder.nativeElement, 'image-holder-hover');
    };
    ImageTileComponent.prototype.onUnovering = function () {
        this.renderer.removeClass(this.imageHolder.nativeElement, 'image-holder-hover');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_image_model__WEBPACK_IMPORTED_MODULE_2__["Image"])
    ], ImageTileComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageHolder'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageTileComponent.prototype, "imageHolder", void 0);
    ImageTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-tile',
            template: __webpack_require__(/*! ./image-tile.component.html */ "./src/app/image-tile/image-tile.component.html"),
            styles: [__webpack_require__(/*! ./image-tile.component.css */ "./src/app/image-tile/image-tile.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [_shared_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ImageTileComponent);
    return ImageTileComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /** Common CSS  */\r\n \r\n\r\n.parent-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n \r\n\r\n.section {\r\n    width: 100%;\r\n    height: 500px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n \r\n\r\n.header {\r\n    width: 100%;\r\n    display:flex;\r\n    align-items: flex-start;\r\n    justify-content: stretch;\r\n    flex-direction: column;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;\r\n    height: 390px;\r\n    background-image: url(/assets/images/header.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    box-shadow:inset 0 0 5px rgba(1,1,1,0.2);\r\n    background-attachment: fixed;\r\n}\r\n \r\n\r\n.top-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n    height: 70px;\r\n    width: 100%;\r\n    background: #fff;\r\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;\r\n    padding: 0 48px;\r\n}\r\n \r\n\r\n.logo h1 {\r\n    margin-bottom: 0.8em;\r\n}\r\n \r\n\r\n.logo .icon-leaf{\r\n    color:#698C10;\r\n}\r\n \r\n\r\n.logo span {\r\n    color:#698C10;\r\n    margin-left:10px;\r\n}\r\n \r\n\r\n.nav-bar ul {\r\n    display: flex;\r\n}\r\n \r\n\r\n.nav-bar a{\r\n    height: 70px;\r\n    line-height: 70px;\r\n    display: inline-block;\r\n    padding: 0 20px;\r\n    font-size: 0.7em;\r\n    font-weight: 600;\r\n    letter-spacing: 0.2em;\r\n    text-transform: uppercase;\r\n    color: #698C10;\r\n}\r\n \r\n\r\n.search-bar {\r\n    margin: 4.5em auto 0;\r\n    background: rgba(0,0,0,0.2);\r\n    border-radius: 2px;\r\n    padding: 1.5em;\r\n    max-width: 985px;\r\n    width: 50%;\r\n    box-shadow: rgba(105, 140, 16, 0.2) 0px 4px 8px 0px, rgba(105, 140, 16, 0.19) 0px 6px 20px 0px;\r\n}\r\n \r\n\r\n.search-bar h2{\r\n    color:#fff;\r\n    margin-bottom: 0.8em;\r\n    text-align: center;\r\n}\r\n \r\n\r\n.search-bar  input[type='search']{\r\n    padding: 8px;\r\n    width: 87%;\r\n    height: 44px;\r\n    border: none;\r\n    outline: none;\r\n    margin-bottom: 1.5em;\r\n}\r\n \r\n\r\n.title-content {\r\ncolor: #3d3d3d;\r\nmargin: 0 48px;\r\nfont-weight: bold;\r\n}\r\n \r\n\r\n.container-image-gallery{\r\n    width: 1180px;\r\n    margin: 4em 0 0 2em;\r\n   }\r\n \r\n\r\n.image-image-gallery {\r\n    line-height: 0;\r\n   -webkit-column-count: 5;\r\n   -webkit-column-gap:   0px;\r\n   -moz-column-count:    5;\r\n   -moz-column-gap:      0px;\r\n   -webkit-column-count:         4;\r\n      -moz-column-count:         4;\r\n           column-count:         4;\r\n   -webkit-column-gap:           5px;\r\n      -moz-column-gap:           5px;\r\n           column-gap:           5px;\r\n   position: relative; \r\n   margin-bottom: 40px;\r\n  }\r\n \r\n\r\n@media (max-width: 1200px) {\r\n    .image-image-gallery {\r\n    -moz-column-count:    4;\r\n    -webkit-column-count: 4;\r\n    column-count:         4;\r\n    }\r\n  }\r\n \r\n\r\n@media (max-width: 1000px) {\r\n    .image-image-gallery {\r\n    -moz-column-count:    3;\r\n    -webkit-column-count: 3;\r\n    column-count:         3;\r\n    }\r\n  }\r\n \r\n\r\n@media (max-width: 800px) {\r\n    .image-image-gallery {\r\n    -moz-column-count:    2;\r\n    -webkit-column-count: 2;\r\n    column-count:         2;\r\n    }\r\n\r\n    .top-header {\r\n        flex-direction: column;\r\n        height:auto;\r\n    }\r\n  }\r\n \r\n\r\n@media (max-width: 400px) {\r\n    .image-image-gallery {\r\n    -moz-column-count:    1;\r\n    -webkit-column-count: 1;\r\n    column-count:         1;\r\n    }\r\n   \r\n  }\r\n \r\n\r\nfooter{\r\n      padding: 2em 0 2em 0;\r\n      border-top:solid 1px #698C10;\r\n      width:100%;\r\n    \r\n  }\r\n \r\n\r\nfooter p {\r\n    letter-spacing: 0.2em;\r\n    text-transform: uppercase;\r\n    color: #698C10;\r\n    text-align: center;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\n  <header class=\"section header\">\n    <div class=\"top-header\">\n    <div class=\"logo\">\n      <h1>\n      <a href=\"#\" class=\"icon icon-leaf\">\n      <span>Image Gallery</span>\n      </a>\n      </h1>\n      </div>\n      <nav class=\"nav-bar\"> \n      <ul>\n      <li class=\"active-menu\"><a href=\"#\">Homepage</a></li>\n      <li><a href=\"#\">Portfolio</a></li>\n      <li><a href=\"#\">About Us</a></li>\n      <li><a href=\"#\">Careers</a></li>\n      <li><a href=\"#\">Contact Us</a></li>\n      </ul>\n      </nav>\n</div>\n<div class=\"search-bar\">\n    <form #searchForm=\"ngForm\" (ngSubmit)=\"getPhotos()\">\n      <h2>Looking for high resolution photos?</h2>\n    <input type=\"search\" [(ngModel)]=\"searchTerm\" (keyup.enter)=\"getPhotos()\"  name=\"searchTerm\" id=\"searchTerm\" placeholder=\"Search here...\">\n    <button type=\"submit\">Submit</button>\n  </form>\n  </div>\n\n  </header>\n\n\n<section class=\"section image-gallery\">\n<div class=\"container-image-gallery\"> \n\n <!-- <div class=\"image-image-gallery\" *ngFor=\"let image of imageList$ | async\">\n <img src=\"{{image.regular}}\"  height=\"400px\">\n \n</div>  --> \n\n<div class=\"image-image-gallery\">\n<ng-container *ngFor=\"let image of imageList$ | async\">\n  <app-image-tile [image]=\"image\"></app-image-tile>\n  </ng-container> \n</div>\n</div>\n</section>\n\n\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image.service */ "./src/app/shared/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(_imageservice) {
        this._imageservice = _imageservice;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.getPhotos = function () {
        this.imageList = [];
        // thi(s._imageservice.getImageList().subscribe(data => this.imageList = data);
        var searchkey = this.searchForm.value.searchTerm ? this.searchForm.value.searchTerm : '';
        this.imageList$ = this._imageservice.getImageList(searchkey);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], IndexComponent.prototype, "searchForm", void 0);
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/shared/image.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/image.model.ts ***!
  \***************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _image_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image.model */ "./src/app/shared/image.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseapiurl;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
        'authorization': 'Client-ID febde66e5009df5c75bad77b6e26ca7f445690cd2f293cc497f8af6417e3c6ce' })
};
var ImageService = /** @class */ (function () {
    function ImageService(_httpclient) {
        this._httpclient = _httpclient;
        this.imageList = [];
    }
    ImageService.prototype.getImageList = function (searchkey) {
        var _this = this;
        // const keyword = 'office';
        return this._httpclient.get(BASE_API_URL + "/search/photos?query=" + searchkey, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _this.processData(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
     return  this._httpclient.get<JSON>('https://api.unsplash.com/search/photos?
     client_id=febde66e5009df5c75bad77b6e26ca7f445690cd2f293cc497f8af6417e3c6ce&query=office').pipe(
     catchError(this.handleError)
      );
      */
    };
    ImageService.prototype.likeImage = function (id) {
        return this._httpclient.post(BASE_API_URL + "/photos/" + id + "/like", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ImageService.prototype.processData = function (data) {
        this.imageList = [];
        for (var _i = 0, _a = data.results; _i < _a.length; _i++) {
            var item = _a[_i];
            var img = new _image_model__WEBPACK_IMPORTED_MODULE_4__["Image"]();
            img.raw = item.urls.raw;
            img.full = item.urls.full;
            img.small = item.urls.small;
            img.thumb = item.urls.thumb;
            img.regular = item.urls.regular;
            img.liked_by_user = item.liked_by_user;
            img.description = item.description;
            img.id = item.id;
            img.username = item.user.username;
            img.userid = item.user.id;
            this.imageList.push(img);
        }
        console.log('img-list-processed');
        console.log(this.imageList);
        return this.imageList;
    };
    ImageService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseapiurl: 'https://api.unsplash.com'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\image-gallery-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map