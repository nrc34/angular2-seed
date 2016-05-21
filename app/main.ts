import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./components/Application/Application.component";
//import {enableProdMode} from "@angular/core";

//enableProdMode();

bootstrap(AppComponent).catch(err => console.error(err));
