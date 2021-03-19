(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-form-content-form-module"],{

/***/ "0JLk":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-form/content-form-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContentFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFormPageRoutingModule", function() { return ContentFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _content_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-form.page */ "pbJG");




const routes = [
    {
        path: '',
        component: _content_form_page__WEBPACK_IMPORTED_MODULE_3__["ContentFormPage"]
    }
];
let ContentFormPageRoutingModule = class ContentFormPageRoutingModule {
};
ContentFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContentFormPageRoutingModule);



/***/ }),

/***/ "NP/e":
/*!***********************************************************!*\
  !*** ./src/app/pages/content-form/content-form.module.ts ***!
  \***********************************************************/
/*! exports provided: ContentFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFormPageModule", function() { return ContentFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _content_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-form-routing.module */ "0JLk");
/* harmony import */ var _content_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-form.page */ "pbJG");







let ContentFormPageModule = class ContentFormPageModule {
};
ContentFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _content_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentFormPageRoutingModule"]
        ],
        declarations: [_content_form_page__WEBPACK_IMPORTED_MODULE_6__["ContentFormPage"]]
    })
], ContentFormPageModule);



/***/ }),

/***/ "OP6w":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-form/content-form.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>content-form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"CreateTopic(form)\" #form=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">titulo</ion-label>\n      <ion-input type=\"text\" name=\"title\" [(ngModel)]=topic.title required></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"floating\">texto</ion-label>\n      <ion-textarea type=\"text\" name=\"content\" [(ngModel)]=topic.content required></ion-textarea>\n    </ion-item> -->\n<div>\n  <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"form.invalid\">Criar Tópico</ion-button>\n</div>\n\n    <ion-button color=\"danger\" expand=\"block\" routerLink=\"/\">Cancelar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "P797":
/*!***********************************************************!*\
  !*** ./src/app/pages/content-form/content-form.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "pbJG":
/*!*********************************************************!*\
  !*** ./src/app/pages/content-form/content-form.page.ts ***!
  \*********************************************************/
/*! exports provided: ContentFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentFormPage", function() { return ContentFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-form.page.html */ "OP6w");
/* harmony import */ var _content_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-form.page.scss */ "P797");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_topic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/topic */ "K5gb");
/* harmony import */ var src_app_models_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/comments */ "yLyI");
/* harmony import */ var src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loadings.service */ "BTuN");
/* harmony import */ var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/content.service */ "NBun");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");










let ContentFormPage = class ContentFormPage {
    constructor(contentService, activatedRoute, router, msg, appComponent) {
        this.contentService = contentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.msg = msg;
        this.appComponent = appComponent;
        this.idUser = null;
        this.topic = new src_app_models_topic__WEBPACK_IMPORTED_MODULE_5__["Topic"];
        this.comment = new src_app_models_comments__WEBPACK_IMPORTED_MODULE_6__["Comments"];
    }
    ngOnInit() {
        this.verfUserIdForTopic();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.verfUserIdForTopic();
        });
    }
    ionViewWillLeave() {
        this.idUser = null;
    }
    verfUserIdForTopic() {
        this.idUser = this.appComponent.user;
        this.idUser.id = this.appComponent.id;
    }
    CreateTopic(form) {
        {
            this.msg.presentLoading();
            this.topic.idUser = this.idUser.id;
            this.topic.active = true;
            this.topic.date = new Date();
            this.contentService.add(this.topic).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                form.reset;
                this.msg.dismissLoading();
                this.msg.presentAlert("", "Topico criado");
                this.topic = null;
                this.router.navigate(["/"]);
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.msg.presentAlert("Error", "não foi possível criar um tópico");
                this.router.navigate(["/"]);
            }));
        }
    }
};
ContentFormPage.ctorParameters = () => [
    { type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_8__["ContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_7__["LoadingsService"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }
];
ContentFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-content-form',
        template: _raw_loader_content_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_content_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContentFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-content-form-content-form-module.js.map