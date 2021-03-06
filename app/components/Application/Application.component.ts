import {Component, OnInit} from '@angular/core';
import {NewTag} from "../NewTag/NewTag.component";

@Component({

    selector: 'app',
    template: `
    <input [(ngModel)]="text" type="text">
    <h2>{{text}}</h2>
    <h5 *ngFor="let item of textsFromNewT">{{item}}</h5>
    <new-tag [my-text]="text" (textFromNewTag)="onTextFromNewTag($event)"></new-tag>
`,
    directives: [NewTag]
})
export class AppComponent implements OnInit{

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