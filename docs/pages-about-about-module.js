(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "6hSs":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "P6uQ":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "fr+C");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "UoYK":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "P6uQ");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "fr+C");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "fr+C":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.page.html */ "zRMW");
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.page.scss */ "6hSs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutPage);



/***/ }),

/***/ "zRMW":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sobre Nós</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Bem vindo ao Fórum Livre</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Seja bem vindo ao Fórum livre, crie conversas e discuta sobre qualquer coisa.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map