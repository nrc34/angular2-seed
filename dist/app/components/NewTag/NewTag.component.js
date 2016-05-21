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
var core_2 = require("@angular/core");
var NewTag = (function () {
    function NewTag() {
        this.textFromNewTag = new core_2.EventEmitter();
    }
    NewTag.prototype.ngOnInit = function () {
    };
    NewTag.prototype.onClickMe = function () {
        this.textFromNewTag.emit("clickedFromNewTag " + this.text);
    };
    __decorate([
        core_1.Input('my-text'), 
        __metadata('design:type', String)
    ], NewTag.prototype, "text", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewTag.prototype, "textFromNewTag", void 0);
    NewTag = __decorate([
        core_1.Component({
            selector: 'new-tag',
            template: "\n    <h2>New Tag Component</h2>\n    <h5 (click)=\"onClickMe()\">click here!!{{text}}</h5>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], NewTag);
    return NewTag;
}());
exports.NewTag = NewTag;
//# sourceMappingURL=NewTag.component.js.map