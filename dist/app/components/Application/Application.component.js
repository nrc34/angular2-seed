"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NewTag_component_1 = require("../NewTag/NewTag.component");
var AppComponent = (function () {
    function AppComponent() {
        this.textsFromNewT = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('appComp Init');
    };
    AppComponent.prototype.onTextFromNewTag = function (event) {
        this.textsFromNewT.push(event);
        console.log('clickedff');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <input [(ngModel)]=\"text\" type=\"text\">\n    <h2>{{text}}</h2>\n    <h5 *ngFor=\"let item of textsFromNewT\">{{item}}</h5>\n    <new-tag [my-text]=\"text\" (textFromNewTag)=\"onTextFromNewTag($event)\"></new-tag>\n",
            directives: [NewTag_component_1.NewTag]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=Application.component.js.map