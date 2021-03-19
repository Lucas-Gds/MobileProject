(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-topics-topics-module"],{

/***/ "3ENU":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/topics/topics.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{topic.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5 style=\"margin-left: 10px\">Created by: {{userPost.nome}}</h5>\n  <div *ngFor=\"let c of comments\">\n    <ng-container *ngIf=\"c.idtopic == topic.topicId\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>\n      </ion-card-subtitle>\n      <ion-card-title></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{c.comment}}\n    </ion-card-content>\n  </ion-card>\n</ng-container>\n</div>\n  <ion-item>\n    <form (ngSubmit)=\"comentar(form)\" #form=\"ngForm\">\n    <ion-textarea type=\"text\" name=\"comment.comment\" [(ngModel)]=comment.comment required autoGrow=true maxlength=\"200\"></ion-textarea>\n    <ion-button type=\"submit\">Comentar</ion-button>\n  </form>\n  </ion-item>\n \n</ion-content>\n");

/***/ }),

/***/ "4yjA":
/*!***********************************************!*\
  !*** ./src/app/pages/topics/topics.module.ts ***!
  \***********************************************/
/*! exports provided: TopicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsPageModule", function() { return TopicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _topics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topics-routing.module */ "hruN");
/* harmony import */ var _topics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topics.page */ "BKl6");







let TopicsPageModule = class TopicsPageModule {
};
TopicsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _topics_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopicsPageRoutingModule"]
        ],
        declarations: [_topics_page__WEBPACK_IMPORTED_MODULE_6__["TopicsPage"]]
    })
], TopicsPageModule);



/***/ }),

/***/ "BKl6":
/*!*********************************************!*\
  !*** ./src/app/pages/topics/topics.page.ts ***!
  \*********************************************/
/*! exports provided: TopicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsPage", function() { return TopicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_topics_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./topics.page.html */ "3ENU");
/* harmony import */ var _topics_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topics.page.scss */ "uC8y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_models_topic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/topic */ "K5gb");
/* harmony import */ var src_app_models_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/comments */ "yLyI");
/* harmony import */ var src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loadings.service */ "BTuN");
/* harmony import */ var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/content.service */ "NBun");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");











let TopicsPage = class TopicsPage {
    constructor(contentService, activatedRoute, router, msg, userService) {
        this.contentService = contentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.msg = msg;
        this.userService = userService;
        this.id = null;
        this.id2 = null;
        this.id3 = null;
        this.currentUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.userPost = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.topic = new src_app_models_topic__WEBPACK_IMPORTED_MODULE_6__["Topic"]();
        this.comment = new src_app_models_comments__WEBPACK_IMPORTED_MODULE_7__["Comments"]();
        this.comments = [];
        this.usersName = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCommentsByid();
            yield this.getAllUsers();
            yield this.verfUser();
            this.id = this.activatedRoute.snapshot.paramMap.get("id");
            if (this.id) {
                yield this.getTopicInfo();
            }
            else {
                this.router.navigate(["/about"]);
            }
            ;
        });
    }
    ionViewWillEnter() {
        this.verfUser();
    }
    ionViewWillLeave() {
        this.currentUser = null;
        this.id3 = null;
        this.id2 = null;
        this.id = null;
    }
    verfUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.auth.user.subscribe(res => {
                this.id3 = res.uid;
                if (res)
                    this.userService.get(res.uid).subscribe(res => {
                        this.currentUser = res;
                    });
            }, err => {
                this.currentUser = null;
            });
        });
    }
    // async getComments() {
    //   if (!this.id)
    //     return;
    //   if (this.subscription5 && !this.subscription5.closed)
    //     this.subscription5.unsubscribe();
    //   this.subscription5 = this.contentService.getAllFromComments(this.topic.topicId).subscribe(ans => {
    //     this.comments = ans;
    //     this.comments.forEach(value => {
    //       var subscription = this.userService.get(value.idUser).subscribe(ans2 => {
    //         value.user = ans2;
    //         subscription.unsubscribe();
    //       })
    //     })
    //   })
    // }
    getCommentsByid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.contentService.getComments().subscribe(resultado => {
                this.comments = resultado;
            });
        });
    }
    getAllUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.getAll().subscribe(result => {
                this.usersName = result;
                console.log(result);
            });
        });
    }
    // filterComents(test: string){
    //   test = this.id;
    //   Array.filter
    //   this.comments2.filter(comments2 => this.comments. == test)
    //   )
    // }
    getTopicInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.contentService.get(this.id).subscribe((resul) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.topic = resul;
                this.topic.topicId = this.id;
                this.id2 = resul.idUser;
                yield this.userService.get(this.id2).subscribe(res => {
                    this.userPost = res;
                });
            }));
            this.msg.dismissLoading();
        });
    }
    comentar(form) {
        if (form.valid) {
            this.msg.presentLoading();
            this.comment.idUser = this.id3;
            this.comment.idtopic = this.id;
            console.log(this.comment);
            this.contentService.addComment(this.comment).then(res => {
                form.reset();
                this.msg.presentAlert("", "Comentário enviado");
                this.msg.dismissLoading();
                this.router.navigate(["/topics/", this.id]);
            }, err => {
                this.msg.dismissLoading();
                this.msg.presentAlert("Erro:", "Não foi possivel comentar");
            }).finally(() => this.msg.dismissLoading());
        }
    }
};
TopicsPage.ctorParameters = () => [
    { type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_9__["ContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_loadings_service__WEBPACK_IMPORTED_MODULE_8__["LoadingsService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
];
TopicsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-topics',
        template: _raw_loader_topics_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_topics_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TopicsPage);



/***/ }),

/***/ "hruN":
/*!*******************************************************!*\
  !*** ./src/app/pages/topics/topics-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TopicsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsPageRoutingModule", function() { return TopicsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topics.page */ "BKl6");




const routes = [
    {
        path: '',
        component: _topics_page__WEBPACK_IMPORTED_MODULE_3__["TopicsPage"]
    }
];
let TopicsPageRoutingModule = class TopicsPageRoutingModule {
};
TopicsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopicsPageRoutingModule);



/***/ }),

/***/ "uC8y":
/*!***********************************************!*\
  !*** ./src/app/pages/topics/topics.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BpY3MucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-topics-topics-module.js.map