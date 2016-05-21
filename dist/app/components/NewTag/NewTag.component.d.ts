import { OnInit } from '@angular/core';
import { EventEmitter } from "@angular/core";
export declare class NewTag implements OnInit {
    text: string;
    textFromNewTag: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onClickMe(): void;
}
