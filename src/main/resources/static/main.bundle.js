webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatStepperModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tag_list_tag_list_component__ = __webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_quiz_results_quiz_results_component__ = __webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_question_list_profile_question_list_component__ = __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quiz_container_quiz_container_component__ = __webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_quiz_results_guard__ = __webpack_require__("../../../../../src/app/guards/quiz-results.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_add_qform_add_qform_component__ = __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_tag_list_tag_list_component__["a" /* TagListComponent */]
    },
    {
        path: 'profile',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__components_tag_list_tag_list_component__["a" /* TagListComponent */]
            },
            {
                path: 'tag-filter',
                component: __WEBPACK_IMPORTED_MODULE_2__components_tag_list_tag_list_component__["a" /* TagListComponent */]
            },
            {
                path: 'questions',
                component: __WEBPACK_IMPORTED_MODULE_5__components_profile_question_list_profile_question_list_component__["a" /* ProfileQuestionListComponent */]
            },
            {
                path: 'settings',
                component: __WEBPACK_IMPORTED_MODULE_6__components_change_password_change_password_component__["a" /* ChangePasswordComponent */]
            }
        ]
    },
    {
        path: 'quiz/:tagName',
        component: __WEBPACK_IMPORTED_MODULE_8__components_quiz_container_quiz_container_component__["a" /* QuizContainerComponent */]
    },
    {
        path: 'results',
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_quiz_results_guard__["a" /* QuizResultsGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_results_quiz_results_component__["a" /* QuizResultsComponent */]
    },
    {
        path: 'addQuestion',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_10__components_add_qform_add_qform_component__["a" /* AddQformComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!-- <app-add-qform></app-add-qform> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_material_module__ = __webpack_require__("../../../../../src/app/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quiz_container_quiz_container_component__ = __webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_quiz_card_quiz_card_component__ = __webpack_require__("../../../../../src/app/components/quiz-card/quiz-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_question_list_question_list_component__ = __webpack_require__("../../../../../src/app/components/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_quiz_results_quiz_results_component__ = __webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tag_list_tag_list_component__ = __webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tag_item_tag_item_component__ = __webpack_require__("../../../../../src/app/components/tag-item/tag-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_profile_question_list_profile_question_list_component__ = __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_add_qform_add_qform_component__ = __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_quiz_results_guard__ = __webpack_require__("../../../../../src/app/guards/quiz-results.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_quiz_container_quiz_container_component__["a" /* QuizContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_quiz_card_quiz_card_component__["a" /* QuizCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_question_list_question_list_component__["a" /* QuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_quiz_results_quiz_results_component__["a" /* QuizResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_tag_list_tag_list_component__["a" /* TagListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_tag_item_tag_item_component__["a" /* TagItemComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_profile_question_list_profile_question_list_component__["a" /* ProfileQuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_add_qform_add_qform_component__["a" /* AddQformComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_change_password_change_password_component__["a" /* ChangePasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_15__components_signup_signup_component__["a" /* SignupComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_9__services_quiz_form_service__["a" /* QuizFormService */], __WEBPACK_IMPORTED_MODULE_19__services_tag_service__["a" /* TagService */], __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_26__guards_quiz_results_guard__["a" /* QuizResultsGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".AddQFormContainer{\r\n    margin-top: 1em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.AddQFormContainer > *{\r\n    width:75%;\r\n}\r\n.AddForm{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.AddForm *{\r\n    margin-bottom: .5em;\r\n}\r\n.AnswerFields{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.Ans{\r\n    -webkit-box-flex:9;\r\n        -ms-flex:9 1 auto;\r\n            flex:9 1 auto;\r\n}\r\n.ArrayErr{\r\n    text-align: right;\r\n}\r\n.SideControl{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1 1 auto;\r\n            flex:1 1 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.BottomControl{\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"AddQFormContainer\">\r\n  <form class=\"AddForm\" [formGroup]=\"QForm\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <textarea matInput formControlName=\"question\" placeholder=\"Question\"></textarea>\r\n      <mat-error *ngIf=\"QForm.get('question').invalid\">*Field Required</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field *ngIf=\"tagList\">\r\n      <mat-select placeholder=\"Tag\" formControlName=\"tag\">\r\n        <mat-option *ngFor=\"let t of tagList\" [value]=\"t\">\r\n          {{t.tagName}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"QForm.get('tag').invalid\">*Field Required</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"AFcontainer\" formArrayName=\"answers\">\r\n      <mat-error class=\"ArrayErr\" *ngIf=\"answers.invalid && (answers.touched||submitAttempted)\">{{getAnswersArrayErrorMessage()}}</mat-error>\r\n      <div class=\"AnswerFields\" *ngFor=\"let a of answers.controls; let i=index\" [formGroupName]=\"i\">\r\n        <mat-form-field class=\"Ans\">\r\n          <textarea matInput formControlName=\"text\" placeholder=\"Answer {{i+1}}\"></textarea>\r\n          <mat-error *ngIf=\"a.get('text').invalid && (a.get('text').touched||submitAttempted)\">*Field Required</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"SideControl\">\r\n          <mat-slide-toggle formControlName=\"correct\">Correct Answer</mat-slide-toggle>\r\n        </div>\r\n        <div *ngIf=\"answers.length>2\" class=\"SideControl\">\r\n          <button mat-icon-button color=\"primary\" (click)=\"deleteAnswer(i)\">\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <span *ngIf=\"answers.length<7\">\r\n        <button (click)=\"addAnswers($event)\" mat-mini-fab color=\"primary\">+</button>\r\n        Add Answer\r\n      </span>\r\n      <span *ngIf=\"answers.length>=7\">Maximum Allowed Choices Reached!</span>\r\n    </div>\r\n    <div class=\"BottomControl\">\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customValidator__ = __webpack_require__("../../../../../src/app/customValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddQformComponent = (function () {
    function AddQformComponent(fb, ts, qs, User, router) {
        this.fb = fb;
        this.ts = ts;
        this.qs = qs;
        this.User = User;
        this.router = router;
        this.submitAttempted = false;
    }
    AddQformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getTags().subscribe(function (res) {
            _this.tagList = res;
        });
        this.QForm = this.fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            tag: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            answers: this.fb.array([], __WEBPACK_IMPORTED_MODULE_6__customValidator__["a" /* CustomValidator */].onlyOneCorrectAnswer)
        });
        this.addAnswers();
        this.addAnswers();
    };
    Object.defineProperty(AddQformComponent.prototype, "answers", {
        // ngAfterViewChecked() {
        //   console.log(this.QForm);
        // }
        get: function () {
            return this.QForm.get('answers');
        },
        enumerable: true,
        configurable: true
    });
    AddQformComponent.prototype.addAnswers = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.answers.push(this.fb.group({
            text: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            correct: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required]
        }));
    };
    AddQformComponent.prototype.deleteAnswer = function (i) {
        this.answers.removeAt(i);
    };
    AddQformComponent.prototype.getAnswersArrayErrorMessage = function () {
        if (this.QForm.get('answers').hasError('moreThanOne')) {
            return 'Only One Correct Answer Allowed';
        }
        else if (this.QForm.get('answers').hasError('noCorrect')) {
            return 'No Correct Answer Selected';
        }
        return null;
    };
    AddQformComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitAttempted = true;
        if (this.QForm.valid) {
            this.User.isLoggedIn().subscribe(function (res) {
                _this.Question2Submit = {
                    q_id: 0,
                    tag: _this.QForm.get('tag').value,
                    user: res,
                    question: _this.QForm.get('question').value,
                    answers: _this.QForm.get('answers').value
                };
                _this.qs.postQuestion(_this.Question2Submit).subscribe();
                _this.router.navigate(['']);
            });
        }
    };
    AddQformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-qform',
            template: __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_tag_service__["a" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_4__services_question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], AddQformComponent);
    return AddQformComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "h3, span {\r\n  font-family: 'Roboto', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Change your password</h3>\r\n<form>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"password\" type=\"password\" id=\"currentPassword\" name=\"currentPassword\" placeholder=\"Current Password\" />\r\n  </mat-form-field><br />\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"newPassword\" type=\"password\" id=\"newPassword\" name=\"newPassword\" placeholder=\"New Password\" />\r\n  </mat-form-field><br />\r\n  <mat-form-field>\r\n      <input matInput [(ngModel)]=\"confirmNewPassword\" type=\"password\" id=\"confirmNewPassword\" name=\"confirmNewPassword\" placeholder=\"Confirm Password\" />\r\n  </mat-form-field><br />\r\n  <button mat-button (click)=\"updatePassword()\">Submit</button>\r\n</form>\r\n<span *ngIf=\"updatePasswordMessage\">{{ updatePasswordMessage }}</span>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (user) {
            if (user !== null) {
                _this.correctPassword = user.password;
                _this.username = user.username;
            }
        });
    };
    ChangePasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        if (this.password !== this.correctPassword) {
            this.updatePasswordMessage = "Wrong current password.";
        }
        else if (this.newPassword.length < 8) {
            this.updatePasswordMessage = "Password must be at least 8 characters.";
        }
        else if (this.newPassword === this.confirmNewPassword) {
            this.updatePasswordMessage = "";
            // make asynchronous call here
            this.http.put("http://52.14.182.231:8181/user/" + this.username, {
                "password": this.newPassword
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).subscribe(function (response) {
                if (_this.newPassword === response.password) {
                    _this.password = '';
                    _this.newPassword = '';
                    _this.confirmNewPassword = '';
                    _this.updatePasswordMessage = "Password updated.";
                    _this.authService.updateUser(response);
                    _this.authService.isLoggedIn().subscribe(function (user) {
                        _this.correctPassword = user.password;
                        _this.username = user.username;
                    });
                }
                else {
                    _this.updatePasswordMessage = "Failed to update password.";
                }
            });
        }
        else {
            this.updatePasswordMessage = "Passwords don't match.";
        }
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-content\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <h1>Log In</h1>\r\n      <mat-form-field class=\"full-width-input\">\r\n        <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width-input\">\r\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" type=\"submit\">Log In</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"close()\">Cancel</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(dialogRef, fb, authService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        });
        this.isLoggedIn$ = this.authService.isLoggedIn();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.authService.login(this.form.value);
        }
        this.isLoggedIn$.subscribe(function (res) {
            if (res) {
                _this.dialogRef.close();
            }
        });
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>\r\n    QuizItUp\r\n  </span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button mat-button routerLink=\"/\">Home</button>\r\n  <button mat-button *ngIf=\"isLoggedIn$ | async\" routerLink=\"/profile\">Profile</button>\r\n  <button mat-button *ngIf=\"isLoggedIn$ | async\" routerLink=\"/addQuestion\">Add Question</button>\r\n  <button mat-button *ngIf=\"isLoggedIn$ | async; else login\" (click)=\"onLogout()\">Log out</button>\r\n  <ng-template #login>\r\n    <button mat-button (click)=\"onLogin()\">Log in</button>\r\n    <button mat-button (click)=\"signUp()\">Sign Up</button>\r\n  </ng-template>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(dialog, authService, router) {
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn();
    };
    NavbarComponent.prototype.onLogin = function () {
        var loginDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], {
            width: '250px'
        });
    };
    NavbarComponent.prototype.signUp = function () {
        var loginDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */], {
            width: '250px'
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.router.navigate(['']);
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container mat-sidenav button {\r\n  text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let q of questions\">\r\n  <mat-card-content>\r\n    <p>{{ q.question }}</p>\r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let a of q.answers\">{{ a.text }}</mat-list-item>\r\n    </mat-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<!-- <div *ngFor=\"let q of questions\" class=\"question\">\r\n  <p>{{ q.question }}</p>\r\n  <ul>\r\n    <li *ngFor=\"let a of q.answers\">{{ a.text }}</li>\r\n  </ul>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileQuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileQuestionListComponent = (function () {
    function ProfileQuestionListComponent(authService, questionService) {
        this.authService = authService;
        this.questionService = questionService;
    }
    ProfileQuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (user) {
            if (user !== null) {
                _this.username = user.username;
                _this.questionService.getQuestionsByUsername(_this.username).subscribe(function (response) {
                    _this.questions = response;
                });
            }
        });
    };
    ProfileQuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-question-list',
            template: __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */]])
    ], ProfileQuestionListComponent);
    return ProfileQuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  text-decoration: none;\r\n  color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav [(opened)]=\"opened\" mode=\"side\">\r\n    <button mat-button><a [routerLink]=\"['tag-filter']\">Performance</a></button><br />\r\n    <button mat-button><a [routerLink]=\"['questions']\">My Questions</a></button><br />\r\n    <button mat-button><a [routerLink]=\"['settings']\">Settings</a></button><br />\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.opened = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list{\r\n    overflow-y: auto;\r\n}\r\n.list::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.list::-webkit-scrollbar\r\n{\r\n\twidth: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n.list::-webkit-scrollbar-thumb\r\n{\r\n\tbackground-color: #673AB7;\r\n\tborder: 2px solid #555555;\r\n}\r\n.item{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n    border-bottom: 1px solid #F2F2F2;\r\n    border-left: 1px solid #F2F2F2;\r\n}\r\n\r\n.item span{\r\n    margin-left: 1.5em;\r\n    margin-right: 1.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<span>Questions</span>\n<mat-list class=\"list\">\n  <mat-list-item\n    class=\"item\"\n    *ngFor=\"let a of answers; let i = index;\" \n    (click)=\"onClick(i)\"\n    [ngStyle]=\"{'background-color': i==currentQ?'#FFD740':''}\"\n  ><span>Question {{i+1}}</span> \n  <span *ngIf=\"a.answer==0||a.answer\">Answered</span>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionListComponent = (function () {
    function QuestionListComponent() {
        this.currentQChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    QuestionListComponent.prototype.ngOnInit = function () {
    };
    QuestionListComponent.prototype.onClick = function (index) {
        this.currentQ = index;
        this.currentQChange.emit(this.currentQ);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], QuestionListComponent.prototype, "answers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], QuestionListComponent.prototype, "currentQ", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], QuestionListComponent.prototype, "currentQChange", void 0);
    QuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-list',
            template: __webpack_require__("../../../../../src/app/components/question-list/question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/question-list/question-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-card/quiz-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  background-color: #ECEFF1;\r\n  height: 100%;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.form-container {\r\n  height: 100%;\r\n}\r\n\r\n.form {\r\n  min-height: 360px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: 2fr 1fr 1fr 1fr 1fr;\r\n      grid-template-rows: 2fr 1fr 1fr 1fr 1fr;\r\n  grid-row-gap: 10px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.question {\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-color: #673AB7;\r\n  color: #ECEFF1;\r\n  height: calc(100% - 50px);\r\n  font-size: 1.5rem;\r\n  padding-top: 25px;\r\n  padding-bottom: 25px;\r\n  text-align: center;\r\n}\r\n\r\n.form .answer {\r\n  text-align: left;\r\n  padding-left: 1em;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\n\r\n[type=\"radio\"]:checked + label,\r\n[type=\"radio\"]:not(:checked) + label\r\n{\r\n    position: relative;\r\n    padding-left: 28px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n}\r\n[type=\"radio\"]:checked + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n    border: 2px solid #FFD740;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 22px;\r\n    height: 22px;\r\n    border: 2px solid #7D7D7D;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n[type=\"radio\"]:checked + label:after{\r\n    content: '';\r\n    width: 16px;\r\n    height: 16px;\r\n    background: #FFD740;\r\n    position: absolute;\r\n    top: 4.5px;\r\n    left: 4.5px;\r\n    border-radius: 100%;\r\n    transition: all 0.2s ease;\r\n}\r\n[type=\"radio\"]:not(:checked) + label:after {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n[type=\"radio\"]:checked + label:after {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-card/quiz-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [formGroup]=\"parent\">\n  <div class=\"form-container\" formArrayName=\"answers\">\n    <div class=\"form\" [formGroupName]=\"index\">\n      <div class=\"question\">\n        {{question.question}}\n      </div>\n      <div class=\"answer\" *ngFor=\"let a of question.answers; let i = index\">\n        <input formControlName=\"answer\" type=\"radio\" [value]=\"i\" id=\"{{i}}\"> \n        <label for=\"{{i}}\">{{a.text}}</label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/quiz-card/quiz-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizCardComponent = (function () {
    function QuizCardComponent() {
    }
    QuizCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], QuizCardComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], QuizCardComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], QuizCardComponent.prototype, "parent", void 0);
    QuizCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-card',
            template: __webpack_require__("../../../../../src/app/components/quiz-card/quiz-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-card/quiz-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizCardComponent);
    return QuizCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".quiz-container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-rows: 3fr 2fr;\r\n      grid-template-rows: 3fr 2fr;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #212121;\r\n  margin-top: 1em;\r\n  text-align: center;\r\n  height: 100vh;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  grid-column-gap: .5em;\r\n  grid-row: 1/2;\r\n  /* autoprefixer: off */\r\n}\r\n.bottombar {\r\n  grid-row: 2/3;\r\n<<<<<<< HEAD\r\n=======\r\n  grid-column-gap: .5em;\r\n>>>>>>> b0ad7c422f71d7670a2c1356fdf89e70dbbe5b53\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  align-items: baseline;\r\n  margin-top: 1em;\r\n  /* autoprefixer: off */\r\n}\r\n.bottombar-right{\r\n    grid-column: 2/3;\r\n    -ms-grid-columns: (1fr)[3];\r\n        grid-template-columns: repeat(3, 1fr);\r\n    display: -ms-grid;\r\n    display: grid;\r\n    background-color:#ECEFF1;\r\n    padding-top:1em;\r\n    padding-bottom:1em;\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.card-container {\r\n  grid-column: 2/3;\r\n  display: block;\r\n}\r\n.button{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.list-container {\r\n  grid-column:1/2;\r\n  display: block;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz-container\">\r\n  <div class=\"content\">\r\n    <div class=\"list-container\">\r\n      <app-question-list *ngIf=\"questions.length>0\" [answers]=\"quizForm.get('answers').value\" [(currentQ)]=\"currentQ\"></app-question-list>\r\n    </div>\r\n    <div class=\"card-container\" *ngIf=\"questions.length>0\">\r\n      <app-quiz-card [parent]=\"quizForm\" [question]=\"questions[currentQ]\" [index]=\"currentQ\">\r\n      </app-quiz-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"bottombar\">\r\n    <div class=\"bottombar-right\">\r\n      <div class=\"button\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!(questions && currentQ > 0)\" (click)=\"prevQ($event)\">Previous</button>\r\n      </div>\r\n      <div class=\"button\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\r\n      </div>\r\n      <div class=\"button\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\" questions && currentQ == questions.length-1\" (click)=\"nextQ($event)\">\r\n            Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizContainerComponent = (function () {
    function QuizContainerComponent(route, qs, qfs, fb, router) {
        this.route = route;
        this.qs = qs;
        this.qfs = qfs;
        this.fb = fb;
        this.router = router;
        this.currentQ = 0;
    }
    Object.defineProperty(QuizContainerComponent.prototype, "answers", {
        get: function () {
            return this.quizForm.get('answers');
        },
        enumerable: true,
        configurable: true
    });
    QuizContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagName = this.route.snapshot.params['tagName'];
        this.qs.getQuestions(this.tagName);
        this.quizForm = this.fb.group({
            answers: this.fb.array([])
        });
        this.subscription = this.qs.questionArray.subscribe(function (response) {
            _this.questions = response;
            for (var i = 0; i < _this.questions.length; i++) {
                _this.addAnswers();
            }
            console.log(response);
        });
    };
    QuizContainerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    QuizContainerComponent.prototype.addAnswers = function () {
        this.answers.push(this.fb.group({
            answer: null
        }));
    };
    QuizContainerComponent.prototype.nextQ = function (event) {
        event.stopPropagation();
        this.currentQ++;
    };
    QuizContainerComponent.prototype.prevQ = function (event) {
        event.stopPropagation();
        this.currentQ--;
    };
    QuizContainerComponent.prototype.onSubmit = function () {
        var _this = this;
        var userAns = this.quizForm.get('answers').value;
        var Ans = this.questions.map(function (q, index) {
            return {
                q_id: q.q_id,
                answer: userAns[index].answer,
                tagName: _this.tagName
            };
        });
        this.qfs.upadte(Ans);
        this.router.navigate(['results']);
    };
    QuizContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-container',
            template: __webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-container/quiz-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__["a" /* QuizFormService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], QuizContainerComponent);
    return QuizContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Correct Answers: {{ correctCount }}</h1>\r\n<h1>Wrong Answers: {{ totalCount - correctCount }}</h1>\r\n<mat-accordion class=\"results-container\">\r\n  <mat-expansion-panel *ngFor=\"let q of questions; let i = index;\" \r\n    [ngStyle]=\"{'background-color': correctAnswerCheck(i) ? 'lightgreen' : 'lightcoral'}\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Question {{i + 1}}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        {{ q.question }}\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div *ngIf = \"userAnswerExist(i); else cheater\">\r\n      <p *ngIf=\"correctAnswerCheck(i); else wrong\">Your Answer: {{ correctAnswers[i].text }}</p>\r\n      <ng-template #wrong>\r\n        <p>Your Answer: {{questions[i].answers[userAnswers[i].answer].text}}</p>\r\n        <p>Correct Answer: {{ correctAnswers[i].text }}</p>\r\n      </ng-template>\r\n    </div>\r\n    <ng-template #cheater>\r\n      <p>You didn't answer this question, why you trying to cheat bruv?</p>\r\n    </ng-template>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"

/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizResultsComponent = (function () {
    function QuizResultsComponent(qs, qfs) {
        this.qs = qs;
        this.qfs = qfs;
        this.totalCount = 0;
        this.correctCount = 0;
    }
    QuizResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qs.questionArray.subscribe(function (res) {
            _this.questions = res;
            console.log(res);
            _this.userAnswers = _this.qfs.get();
            console.log(_this.userAnswers);
            _this.correctAnswers = _this.findCorrect();
        });
    };
    QuizResultsComponent.prototype.ngOnDestroy = function () {
        this.qfs.setQuizTaken(false);
    };
    QuizResultsComponent.prototype.findCorrect = function () {
        var answers = [];
        this.totalCount = this.questions.length;
        for (var i = 0; i < this.questions.length; i++) {
            for (var j = 0; j < this.questions[i].answers.length; j++) {
                var answer = this.questions[i].answers[j];
                if (answer.correct) {
                    answers.push(answer);
                    if (this.userAnswers[i].answer == j)
                        this.correctCount++;
                    break;
                }
            }
        }
        return answers;
    };
    QuizResultsComponent.prototype.correctAnswerCheck = function (index) {
        if (this.userAnswerExist(index)) {
            if (this.questions[index].answers[this.userAnswers[index].answer].correct)
                return true;
            else
                return false;
        }
        return false;
    };
    QuizResultsComponent.prototype.userAnswerExist = function (index) {
        return this.userAnswers[index].answer != null;
    };
    QuizResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-results',
            template: __webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/quiz-results/quiz-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1__services_quiz_form_service__["a" /* QuizFormService */]])
    ], QuizResultsComponent);
    return QuizResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-content\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <h1>Sign Up</h1>\r\n    <mat-error class=\"pass-error\" *ngIf=\"passwordMatched('password', 'confirm')\">Passwords don't match</mat-error>\r\n    <mat-error *ngIf=\"submitFailed\">That username already exists</mat-error>\r\n    <mat-form-field class=\"full-width-input\">\r\n      <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width-input\">\r\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width-inpout\">\r\n      <input matInput type=\"password\" placeholder=\"Confirm\" formControlName=\"confirm\" required> \r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Sign Up</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"close()\">Cancel</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customValidator__ = __webpack_require__("../../../../../src/app/customValidator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(dialogRef, fb, authService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            confirm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        }, { validator: __WEBPACK_IMPORTED_MODULE_4__customValidator__["a" /* CustomValidator */].passwordMatchValidator });
        this.isLoggedIn$ = this.authService.isLoggedIn();
    };
    SignupComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirm').value
            ? null : { 'mismatch': true };
    };
    SignupComponent.prototype.isFieldValid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    SignupComponent.prototype.passwordMatched = function (field1, field2) {
        return (this.form.get(field1).value !== this.form.get(field2).value) &&
            (this.form.get(field1).valid && this.form.get(field1).touched) &&
            (this.form.get(field2).valid && this.form.get(field2).touched);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitFailed = false;
        if (this.form.valid && (this.form.get('password').value === this.form.get('confirm').value)) {
            this.authService.signup(this.form.value);
        }
        this.isLoggedIn$.subscribe(function (res) {
            if (res) {
                _this.dialogRef.close();
            }
            else {
                _this.submitFailed = true;
            }
        });
    };
    SignupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SignupComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tag-item/tag-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tag-item/tag-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"tag-item-card\">\r\n  <img mat-card-image src=\"http://placehold.it/320x150\" />\r\n<mat-card-header>\r\n  <mat-card-title><a [routerLink]=\"[ '/quiz', tag.tagName ]\">{{ tag.tagName }}</a></mat-card-title>\r\n</mat-card-header>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/tag-item/tag-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagItemComponent = (function () {
    function TagItemComponent() {
    }
    TagItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TagItemComponent.prototype, "tag", void 0);
    TagItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tag-item',
            template: __webpack_require__("../../../../../src/app/components/tag-item/tag-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tag-item/tag-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagItemComponent);
    return TagItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tag-list/tag-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tag-list/tag-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n  <mat-grid-tile></mat-grid-tile>\r\n  <mat-grid-tile colspan=\"2\">\r\n    <form>\r\n      <mat-form-field>\r\n        <input matInput [(ngModel)]=\"tagFilter\" placeholder=\"Filter Quizzes\" type=\"text\" id=\"tag-filter\" name=\"tag-filter\" (keyup)=\"updateTagList($event)\" />\r\n      </mat-form-field>\r\n    </form>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile></mat-grid-tile>\r\n  <mat-grid-tile *ngFor=\"let tag of filteredTags\" rowspan=\"3\">\r\n    <app-tag-item [tag]=\"tag\"></app-tag-item>\r\n  </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/components/tag-list/tag-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagListComponent = (function () {
    function TagListComponent(tagService) {
        this.tagService = tagService;
    }
    TagListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.tags = this.tagService.getTags();
        this.tagService.getTags().subscribe(function (response) {
            _this.tags = response;
            _this.filteredTags = [];
            _this.tags.forEach(function (tag) {
                _this.filteredTags.push(tag);
            });
        });
        this.tagFilter = '';
    };
    TagListComponent.prototype.updateTagList = function (event) {
        var _this = this;
        if (this.filteredTags !== undefined) {
            if (this.tagFilter.length === 0) {
                this.filteredTags.splice(0);
                this.tags.forEach(function (tag) {
                    _this.filteredTags.push(tag);
                });
            }
            else {
                var filterTerms_1 = this.tagFilter.trim().split(" ");
                this.filteredTags.splice(0);
                this.tags.forEach(function (tag) {
                    filterTerms_1.forEach(function (term) {
                        if (tag.tagName === term) {
                            _this.filteredTags.push(tag);
                        }
                    });
                });
            }
        }
    };
    TagListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tag-list',
            template: __webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tag-list/tag-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tag_service__["a" /* TagService */]])
    ], TagListComponent);
    return TagListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidator; });
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.onlyOneCorrectAnswer = function (fa) {
        var count = 0;
        fa.controls.forEach(function (el) {
            count += el.get('correct').value ? 1 : 0;
        });
        if (count > 1) {
            return { moreThanOne: true };
        }
        else if (count === 0) {
            return { noCorrect: true };
        }
        return null;
    };
    CustomValidator.passwordMatchValidator = function (g) {
        console.log('runs', g);
        return g.get('password').value === g.get('confirm').value
            ? null : { 'mismatch': true };
    };
    return CustomValidator;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser;
        this.authService.isLoggedIn().subscribe(function (res) { return currentUser = res; });
        if (!currentUser) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/quiz-results.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultsGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__ = __webpack_require__("../../../../../src/app/services/quiz-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizResultsGuard = (function () {
    function QuizResultsGuard(router, qfs) {
        this.router = router;
        this.qfs = qfs;
    }
    QuizResultsGuard.prototype.canActivate = function (next, state) {
        if (this.qfs.getQuizTaken()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    QuizResultsGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_quiz_form_service__["a" /* QuizFormService */]])
    ], QuizResultsGuard);
    return QuizResultsGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.rootURL = 'http://52.14.182.231:8181';
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn.asObservable();
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        this.http.post(this.rootURL + '/login', user).subscribe(function (res) { return _this.loggedIn.next(res); }, function (error) { return _this.loggedIn.next(null); });
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        this.http.post(this.rootURL + '/user', user).subscribe(function (res) { return _this.loggedIn.next(res); }, function (error) { return _this.loggedIn.next(null); });
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(null);
    };
    AuthService.prototype.updateUser = function (newUser) {
        this.loggedIn.next(newUser);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.url = 'http://52.14.182.231:8181';
        this.questions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(QuestionService.prototype, "questionArray", {
        get: function () {
            console.log(this.questions);
            return this.questions.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    QuestionService.prototype.getQuestions = function (tagname) {
        var _this = this;
        if (tagname === void 0) { tagname = 'newTag'; }
        this.http.get(this.url + '/quiz/' + tagname).subscribe(function (res) {
            _this.questions.next(res);
        });
    };
    QuestionService.prototype.postQuestion = function (Q) {
        return this.http.post(this.url + '/question', Q);
    };
    QuestionService.prototype.getQuestionsByUsername = function (username) {
        return this.http.get(this.url + '/question/' + username);
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/quiz-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizFormService = (function () {
    function QuizFormService() {
        this.quizTaken = false;
        this.userAnswer = [];
    }
    QuizFormService.prototype.upadte = function (userAnswer) {
        this.userAnswer = userAnswer;
        this.setQuizTaken(true);
    };
    QuizFormService.prototype.get = function () {
        return this.userAnswer;
    };
    QuizFormService.prototype.getQuizTaken = function () {
        return this.quizTaken;
    };
    QuizFormService.prototype.setQuizTaken = function (quizTaken) {
        this.quizTaken = quizTaken;
    };
    QuizFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuizFormService);
    return QuizFormService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagService = (function () {
    function TagService(http) {
        this.http = http;
    }
    TagService.prototype.getTags = function () {
        // this.tags = this.http.get<Tag[]>('../assets/mocktags.json');
        this.tags = this.http.get('http://52.14.182.231:8181/tag');
        return this.tags;
    };
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map