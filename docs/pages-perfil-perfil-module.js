(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"],{

/***/ "5cwg":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <!-- <ion-item lines=\"none\" *ngIf=\"usuario.foto\">\n    <img [src]=\"preview\" (click)=\"alterarFoto()\" *ngIf=\"preview\">\n    <img src=\"assets/perfil.png\" (click)=\"alterarFoto()\" *ngIf=\"!preview\">\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"!usuario.foto\">\n    <img [src]=\"preview\" (click)=\"alterarFoto()\" *ngIf=\"preview\">\n    <img src=\"assets/perfil.png\" (click)=\"alterarFoto()\" *ngIf=\"!preview\">\n  </ion-item> -->\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Nome</ion-label>\n    <ion-text>{{user.nome}}</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Novo Nome</ion-label>\n            <ion-input type=\"text\" name=\"upName\" [(ngModel)]=\"upName\" required\n               #username=\"ngModel\"></ion-input>\n          <ion-button color=\"warning\" (click)=\"changeName()\" [disabled]=\"(!username.value)\">Mudar Nome</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-label>E-mail</ion-label>\n      <ion-text>{{user.email}}</ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Novo E-mail</ion-label>\n            <ion-input type=\"email\" name=\"updateemail\" [(ngModel)]=\"updateemail\" required\n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" #useremail=\"ngModel\"></ion-input>\n          <ion-button color=\"warning\" (click)=\"changeEmail()\" [disabled]=\"useremail.invalid || (!useremail.value)\">Mudar E-mail</ion-button>\n    </ion-item>\n  </ion-list>\n  <!-- <ion-list style=\"margin-top: 20px\">\n      <ion-item>\n        <ion-button color=\"warning\"  (click)=\"ChangePass()\">Mudar Senha</ion-button>\n      </ion-item>\n  </ion-list> -->\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Nova Senha</ion-label>\n            <ion-input type=\"password\" name=\"upPassword\" [(ngModel)]=\"upPassword\" required\n              #userpass=\"ngModel\"></ion-input>\n          <ion-button color=\"warning\" (click)=\"ChangePass()\" [disabled]=\"(!userpass.value)\">Alterar Senha</ion-button>\n    </ion-item>\n  </ion-list>\n \n</ion-content>\n");

/***/ }),

/***/ "UixR":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "5cwg");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "uCJ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loadings.service */ "BTuN");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");









let PerfilPage = class PerfilPage {
    // public preview: string = null;
    constructor(userService, router, msg, appConf) {
        this.userService = userService;
        this.router = router;
        this.msg = msg;
        this.appConf = appConf;
        this.id = null;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.userUpdate = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.updateemail = null;
        this.upPassword = null;
        this.upName = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.verfUser();
        });
    }
    ionViewWillEnter() {
        this.verfUser();
    }
    verfUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.auth.user.subscribe(res => {
                if (res)
                    this.id = res.uid;
                this.userService.get(res.uid).subscribe(res => {
                    this.user = res;
                });
            }, err => {
                this.user = null;
            });
        });
    }
    changeEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.msg.presentLoading();
            this.userUpdate.email = this.updateemail;
            this.userUpdate.nome = this.user.nome;
            this.userUpdate.id = this.id;
            yield this.userService.auth.currentUser.then(ans => { ans.updateEmail(this.updateemail); });
            yield this.userService.updateEmail(this.userUpdate);
            this.updateemail = null;
            this.msg.presentAlert("Aviso", "E-mail atualizado, realize Login novamente para continuar");
            this.appConf.logout();
        });
    }
    changeName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.msg.presentLoading();
            this.userUpdate.email = this.user.email;
            this.userUpdate.nome = this.upName;
            this.userUpdate.id = this.id;
            yield this.userService.updateName(this.userUpdate);
            this.upName = null;
            this.msg.presentAlert("Aviso", "nome alterado com sucesso");
            this.router.navigate(["/"]);
        });
    }
    ChangePass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userService.auth.currentUser.then(ans => {
                ans.updatePassword(this.upPassword);
                if (ans != null) {
                    this.msg.presentAlert("Atenção", "Senha Alterada com sucesso, efetue login novamente!");
                    this.upPassword = null;
                    this.appConf.logout();
                }
                else {
                    this.msg.presentAlert("Erro", "Não foi possivel alterar a senha");
                }
            });
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_6__["LoadingsService"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "dI8l":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "UixR");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "uCJ8":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "wWZX":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "dI8l");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "UixR");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-perfil-perfil-module.js.map