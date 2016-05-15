import {Component, OnInit} from '@angular/core';
import {NewTag} from "./NewTag.component";

@Component({

    selector: 'app',
    template: `
    <input [(ngModel)]="text" type="text">
    <h2>{{text}}</h2>
    <h5 *ngFor="let item of textsFromNewT">{{item}}</h5>
    <new-tag [text]="text" (textFromNewTag)="onTextFromNewTag($event)"></new-tag>
`,
    directives[NewTag]
})
export class AppComponent {

    text: string;
    textsFromNewT:string[] = [];

    constructor() {
    }


    ngOnInit() {
        console.log('appComp Init');
    }

    onTextFromNewTag(event){
        this.textsFromNewT.push(event);
        console.log('clickedff')
    }
}