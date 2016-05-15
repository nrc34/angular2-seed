import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({

    selector: 'new-tag',
    template: `
    <h2>New Tag Component</h2>
    <h5 (click)="onClickMe()">click here!!{{text}}</h5>
`
})
export class NewTag {

    @Input()text:string;
    @Output() textFromNewTag = new EventEmitter<string>();
    constructor() {
    }


    ngOnInit() {
    }
    
    onClickMe(){
        this.textFromNewTag.emit("clickedFromNewTag " + this.text);
    }
}