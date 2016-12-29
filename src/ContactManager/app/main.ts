//export class Main {
//    test(): void {
//        alert("Hello!");
//    }
//}

//var main = new Main();
//main.test();

//import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./appModule";

platformBrowserDynamic().bootstrapModule(AppModule);
