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
        path: 'quiz/:tagId',
        component: __WEBPACK_IMPORTED_MODULE_8__components_quiz_container_quiz_container_component__["a" /* QuizContainerComponent */]
    },
    {
        path: 'results',
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_quiz_results_guard__["a" /* QuizResultsGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_results_quiz_results_component__["a" /* QuizResultsComponent */]
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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

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
exports.push([module.i, ".AddQFormContainer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.AddQFormContainer > *{\n    width:100%;\n}\n.AddForm{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.AnswerFields{\n    width:100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.Ans{\n    width:80%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"AddQFormContainer\">\n  <form class=\"AddForm\" [formGroup]=\"QForm\">\n    <mat-form-field>\n      <textarea matInput formControlName=\"Question\" placeholder=\"Question\"></textarea>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"tagList\">\n      <mat-select placeholder=\"Tag\">\n        <mat-option *ngFor=\"let t of tagList\" [value]=\"t.tagName\">\n          {{t.tagName}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div formArrayName=\"Answers\">\n      <span>\n        <button (click)=\"addAnswers()\" mat-mini-fab color=\"primary\">+</button>\n        Add Answer</span>\n      <div class=\"AnswerFields\" *ngFor=\"let a of Answers.controls; let i=index\" [formGroupName]=\"i\">\n        <mat-form-field class=\"Ans\">\n          <textarea matInput formControlName=\"text\" placeholder=\"Answer {{i+1}}\"></textarea>\n        </mat-form-field>\n        <mat-slide-toggle formControlName=\"correct\">Correct Answer</mat-slide-toggle>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-qform/add-qform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tag_service__ = __webpack_require__("../../../../../src/app/services/tag.service.ts");
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
    function AddQformComponent(fb, ts) {
        this.fb = fb;
        this.ts = ts;
    }
    AddQformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getTags().subscribe(function (res) {
            _this.tagList = res;
            console.log(res);
        });
        this.QForm = this.fb.group({
            Question: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            Tags: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            Answers: this.fb.array([])
        });
        this.addAnswers();
        this.addAnswers();
        console.log(this.QForm.controls.Question.errors);
    };
    Object.defineProperty(AddQformComponent.prototype, "Answers", {
        get: function () {
            return this.QForm.get('Answers');
        },
        enumerable: true,
        configurable: true
    });
    AddQformComponent.prototype.addAnswers = function () {
        this.Answers.push(this.fb.group({
            text: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required],
            correct: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms___["k" /* Validators */].required]
        }));
    };
    AddQformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-qform',
            template: __webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-qform/add-qform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_tag_service__["a" /* TagService */]])
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
exports.push([module.i, "h3, span {\n  font-family: 'Roboto', sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Change your password</h3>\n<form>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"password\" type=\"password\" id=\"currentPassword\" name=\"currentPassword\" placeholder=\"Current Password\" />\n  </mat-form-field><br />\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"newPassword\" type=\"password\" id=\"newPassword\" name=\"newPassword\" placeholder=\"New Password\" />\n  </mat-form-field><br />\n  <mat-form-field>\n      <input matInput [(ngModel)]=\"confirmNewPassword\" type=\"password\" id=\"confirmNewPassword\" name=\"confirmNewPassword\" placeholder=\"Confirm Password\" />\n  </mat-form-field><br />\n  <button mat-button (click)=\"updatePassword()\">Submit</button>\n</form>\n<span *ngIf=\"updatePasswordError\">{{ updatePasswordError }}</span>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
    function ChangePasswordComponent(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn().subscribe(function (user) {
            _this.correctPassword = user.password;
        });
    };
    ChangePasswordComponent.prototype.updatePassword = function () {
        if (this.password !== this.correctPassword) {
            this.updatePasswordError = "Wrong current password.";
        }
        else if (this.newPassword.length < 8) {
            this.updatePasswordError = "Password must be at least 8 characters.";
        }
        else if (this.newPassword === this.confirmNewPassword) {
            this.updatePasswordError = "";
            // make asynchronous call here
            this.http.put("http://192.168.0.2:8181/user/notAdmin", {
                "password": this.newPassword
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).subscribe(function (response) {
                console.log(response);
            });
        }
        else {
            this.updatePasswordError = "Passwords don't match.";
        }
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-content\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <h1>Log In</h1>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Log In</button>\n      <button mat-raised-button color=\"primary\" (click)=\"close()\">Cancel</button>\n    </form>\n  </div>"

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

module.exports = "<mat-toolbar color=\"primary\">\n  <span>\n    QuizItUp\n  </span>\n  <span class=\"fill-remaining-space\"></span>\n  <button mat-button routerLink=\"/\">Home</button>\n  <button mat-button *ngIf=\"isLoggedIn$ | async\" routerLink=\"/profile\">Profile</button>\n  <button mat-button *ngIf=\"isLoggedIn$ | async\" routerLink=\"/addQuestion\">Add Question</button>\n  <button mat-button *ngIf=\"isLoggedIn$ | async; else login\" (click)=\"onLogout()\">Log out</button>\n  <ng-template #login>\n    <button mat-button (click)=\"onLogin()\">Log in</button>\n    <button mat-button (click)=\"signUp()\">Sign Up</button>\n  </ng-template>\n</mat-toolbar>"

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
exports.push([module.i, "mat-sidenav-container mat-sidenav button {\n  text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let q of questions\" class=\"question\">\n  <p>{{ q.question }}</p>\n  <ul>\n    <li *ngFor=\"let a of q.answers\">{{ a.text }}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile-question-list/profile-question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileQuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
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
    function ProfileQuestionListComponent(questionService) {
        this.questionService = questionService;
    }
    ProfileQuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (response) {
            _this.questions = response;
            console.log(response);
            console.log(_this.questions);
        });
    };
    ProfileQuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-question-list',
            template: __webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-question-list/profile-question-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_question_service__["a" /* QuestionService */]])
    ], ProfileQuestionListComponent);
    return ProfileQuestionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none;\n  color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #sidenav [(opened)]=\"opened\" mode=\"side\">\n    <button mat-button><a [routerLink]=\"['tag-filter']\">Performance</a></button><br />\n    <button mat-button><a [routerLink]=\"['questions']\">My Questions</a></button><br />\n    <button mat-button><a [routerLink]=\"['settings']\">Settings</a></button><br />\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>>\n</mat-sidenav-container>"

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
exports.push([module.i, ".list{\n    overflow-y: auto;\n}\n.list::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tbackground-color: #F5F5F5;\n}\n\n.list::-webkit-scrollbar\n{\n\twidth: 10px;\n\tbackground-color: #F5F5F5;\n}\n\n.list::-webkit-scrollbar-thumb\n{\n\tbackground-color: #673AB7;\n\tborder: 2px solid #555555;\n}\n.item{\n    border-bottom: 1px solid #F2F2F2;\n    border-left: 1px solid #F2F2F2;\n}\n\n.item span{\n    margin-left: 1.5em;\n    margin-right: 1.5em;\n}", ""]);

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
exports.push([module.i, ".card {\n  background-color: #ECEFF1;\n  height: 100%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.form-container {\n  height: 100%;\n}\n\n.form {\n  min-height: 360px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 2fr 1fr 1fr 1fr 1fr;\n      grid-template-rows: 2fr 1fr 1fr 1fr 1fr;\n  grid-row-gap: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.question {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #673AB7;\n  color: #ECEFF1;\n  height: calc(100% - 50px);\n  font-size: 1.5rem;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  text-align: center;\n}\n\n.form .answer {\n  text-align: left;\n  padding-left: 1em;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\n[type=\"radio\"]:checked + label,\n[type=\"radio\"]:not(:checked) + label\n{\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n}\n[type=\"radio\"]:checked + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 22px;\n    height: 22px;\n    border: 2px solid #FFD740;\n    border-radius: 100%;\n    background: #fff;\n}\n[type=\"radio\"]:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 22px;\n    height: 22px;\n    border: 2px solid #7D7D7D;\n    border-radius: 100%;\n    background: #fff;\n}\n[type=\"radio\"]:checked + label:after{\n    content: '';\n    width: 16px;\n    height: 16px;\n    background: #FFD740;\n    position: absolute;\n    top: 4.5px;\n    left: 4.5px;\n    border-radius: 100%;\n    transition: all 0.2s ease;\n}\n[type=\"radio\"]:not(:checked) + label:after {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n[type=\"radio\"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}", ""]);

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
exports.push([module.i, ".quiz-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 3fr 2fr;\n      grid-template-rows: 3fr 2fr;\n  font-family: 'Roboto', sans-serif;\n  color: #212121;\n  margin-top: 1em;\n  text-align: center;\n  height: 100vh;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-column-gap: .5em;\n  grid-row: 1/2;\n  /* autoprefixer: off */\n}\n.bottombar {\n  grid-row: 2/3;\n<<<<<<< HEAD\n=======\n  grid-column-gap: .5em;\n>>>>>>> b0ad7c422f71d7670a2c1356fdf89e70dbbe5b53\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  align-items: baseline;\n  margin-top: 1em;\n  /* autoprefixer: off */\n}\n.bottombar-right{\n    grid-column: 2/3;\n    -ms-grid-columns: (1fr)[3];\n        grid-template-columns: repeat(3, 1fr);\n    display: -ms-grid;\n    display: grid;\n    background-color:#ECEFF1;\n    padding-top:1em;\n    padding-bottom:1em;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.card-container {\n  grid-column: 2/3;\n  display: block;\n}\n.button{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.list-container {\n  grid-column:1/2;\n  display: block;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-container/quiz-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz-container\">\n  <div class=\"content\">\n    <div class=\"list-container\">\n      <app-question-list *ngIf=\"questions\" [answers]=\"quizForm.get('answers').value\" [(currentQ)]=\"currentQ\"></app-question-list>\n    </div>\n    <div class=\"card-container\">\n      <app-quiz-card *ngIf=\"questions\" [parent]=\"quizForm\" [question]=\"questions[currentQ]\" [index]=\"currentQ\">\n      </app-quiz-card>\n    </div>\n  </div>\n  <div class=\"bottombar\">\n    <div class=\"bottombar-right\">\n      <div class=\"button\">\n        <button mat-raised-button color=\"primary\" [disabled]=\"!(questions && currentQ > 0)\" (click)=\"prevQ($event)\">Previous</button>\n      </div>\n      <div class=\"button\">\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\n      </div>\n      <div class=\"button\">\n        <button mat-raised-button color=\"primary\" [disabled]=\" questions && currentQ == questions.length-1\" (click)=\"nextQ($event)\">\n            Next\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.tagId = parseInt(this.route.snapshot.params['tagId']);
        this.quizForm = this.fb.group({
            answers: this.fb.array([])
        });
        this.subscription = this.qs.getQuestions().subscribe(function (res) {
            _this.questions = res;
            for (var i = 0; i < _this.questions.length; i++) {
                _this.addAnswers();
            }
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
        var userAns = this.quizForm.get('answers').value;
        var Ans = this.questions.map(function (q, index) {
            return {
                q_id: q.q_id,
                answer: userAns[index].answer
            };
        });
        this.qfs.upadte(Ans);
        console.log(this.qfs.get());
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
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quiz-results/quiz-results.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Correct Answers: {{ correctCount }}</h1>\n<h1>Wrong Answers: {{ totalCount - correctCount }}</h1>\n<mat-accordion class=\"results-container\">\n  <mat-expansion-panel *ngFor=\"let q of questions; let i = index;\" \n    [ngStyle]=\"{'background-color': correctAnswerCheck(i) ? 'lightgreen' : 'lightcoral'}\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Question {{i + 1}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{ q.question }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <div *ngIf = \"userAnswerExist(i); else cheater\">\n      <p *ngIf=\"correctAnswerCheck(i); else wrong\">Your Answer: {{ correctAnswers[i].text }}</p>\n      <ng-template #wrong>\n        <p>Your Answer: {{questions[i].answers[userAnswers[i].answer].text}}</p>\n        <p>Correct Answer: {{ correctAnswers[i].text }}</p>\n      </ng-template>\n    </div>\n    <ng-template #cheater>\n      <p>You didn't answer this question, why you trying to cheat bruv?</p>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>"

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
        this.qs.getQuestions().subscribe(function (res) {
            _this.questions = res;
            _this.correctAnswers = _this.findCorrect();
        });
        this.userAnswers = this.qfs.get();
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

module.exports = "<div class=\"signup-content\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <h1>Sign Up</h1>\n    <mat-error class=\"pass-error\" *ngIf=\"passwordMatched('password', 'confirm')\">Passwords don't match</mat-error>\n    <mat-error *ngIf=\"submitFailed\">That username already exists</mat-error>\n    <mat-form-field class=\"full-width-input\">\n      <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n    </mat-form-field>\n    <mat-form-field class=\"full-width-input\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n    </mat-form-field>\n    <mat-form-field class=\"full-width-inpout\">\n      <input matInput type=\"password\" placeholder=\"Confirm\" formControlName=\"confirm\" required> \n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Sign Up</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close()\">Cancel</button>\n  </form>\n</div>"

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
        }, this.passwordMatchValidator);
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

module.exports = "<mat-card class=\"tag-item-card\">\n  <img mat-card-image src=\"http://placehold.it/320x150\" />\n<mat-card-header>\n  <mat-card-title><a [routerLink]=\"[ '/quiz', tag.tagId ]\">{{ tag.tagName }}</a></mat-card-title>\n</mat-card-header>\n</mat-card>"

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

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile></mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <form>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"tagFilter\" placeholder=\"Filter Quizzes\" type=\"text\" id=\"tag-filter\" name=\"tag-filter\" (keypress)=\"updateTagList($event)\" />\n      </mat-form-field>\n    </form>\n  </mat-grid-tile>\n  <mat-grid-tile></mat-grid-tile>\n  <mat-grid-tile *ngFor=\"let tag of filteredTags\" rowspan=\"3\">\n    <app-tag-item [tag]=\"tag\"></app-tag-item>\n  </mat-grid-tile>\n</mat-grid-list>"

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
    };
    TagListComponent.prototype.updateTagList = function (event) {
        var _this = this;
        if (event.charCode === 32) {
            this.filteredTags.splice(0);
            this.tags.forEach(function (tag) {
                if (tag.tagName === _this.tagFilter.trim()) {
                    _this.filteredTags.push(tag);
                }
            });
        }
        else if (this.tagFilter !== undefined && this.tagFilter.length === 0) {
            this.filteredTags.splice(0);
            this.tags.forEach(function (tag) {
                _this.filteredTags.push(tag);
            });
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
        this.rootURL = 'http://192.168.61.3:8181';
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
    }
    QuestionService.prototype.getQuestions = function () {
        this.questions = this.http.get('../assets/mockdata.json');
        return this.questions;
    };
    QuestionService.prototype.postQuestion = function (Q) {
        return this.http.post('/', Q);
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
        this.tags = this.http.get('../assets/mocktags.json');
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