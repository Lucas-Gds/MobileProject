(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menssage-menssage-module"],{

/***/ "7WqI":
/*!***************************************************!*\
  !*** ./src/app/pages/menssage/menssage.module.ts ***!
  \***************************************************/
/*! exports provided: MenssagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenssagePageModule", function() { return MenssagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menssage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menssage-routing.module */ "xy/2");
/* harmony import */ var _menssage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menssage.page */ "saai");







let MenssagePageModule = class MenssagePageModule {
};
MenssagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menssage_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenssagePageRoutingModule"]
        ],
        declarations: [_menssage_page__WEBPACK_IMPORTED_MODULE_6__["MenssagePage"]]
    })
], MenssagePageModule);



/***/ }),

/***/ "C4A7":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menssage/menssage.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Meus Tópicos</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngFor=\"let topic of topics\">\n    <ng-container *ngIf=\"topic.idUser == currentUser.id\">\n      <ion-item lines=\"inset\" routerLink=\"/topics/{{topic.id}}\">\n        <ion-text>{{topic.title}}</ion-text>\n      </ion-item>\n</ng-container>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "Gi1g":
/*!***************************************************!*\
  !*** ./src/app/pages/menssage/menssage.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW5zc2FnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "saai":
/*!*************************************************!*\
  !*** ./src/app/pages/menssage/menssage.page.ts ***!
  \*************************************************/
/*! exports provided: MenssagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenssagePage", function() { return MenssagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menssage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menssage.page.html */ "C4A7");
/* harmony import */ var _menssage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menssage.page.scss */ "Gi1g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loadings.service */ "BTuN");
/* harmony import */ var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/content.service */ "NBun");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");









let MenssagePage = class MenssagePage {
    constructor(contentService, activatedRoute, router, msg, userService) {
        this.contentService = contentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.msg = msg;
        this.userService = userService;
        this.id = null;
        this.currentUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.userPost = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.topics = [];
    }
    ngOnInit() {
        this.contentService.gerarTodos().subscribe(resultado => {
            this.topics = resultado;
        });
    }
    ionViewWillEnter() {
        this.verfUser();
    }
    ionViewWillLeave() {
        this.currentUser = null;
        this.id = null;
    }
    verfUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.auth.user.subscribe(res => {
                this.id = res.uid;
                if (res)
                    this.userService.get(res.uid).subscribe(res => {
                        this.currentUser = res;
                        this.currentUser.id = this.id;
                    });
            }, err => {
                this.currentUser = null;
            });
        });
    }
};
MenssagePage.ctorParameters = () => [
    { type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_7__["ContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_6__["LoadingsService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
MenssagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menssage',
        template: _raw_loader_menssage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menssage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenssagePage);



/***/ }),

/***/ "xy/2":
/*!***********************************************************!*\
  !*** ./src/app/pages/menssage/menssage-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MenssagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenssagePageRoutingModule", function() { return MenssagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menssage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menssage.page */ "saai");




const routes = [
    {
        path: '',
        component: _menssage_page__WEBPACK_IMPORTED_MODULE_3__["MenssagePage"]
    }
];
let MenssagePageRoutingModule = class MenssagePageRoutingModule {
};
MenssagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenssagePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-menssage-menssage-module.js.map