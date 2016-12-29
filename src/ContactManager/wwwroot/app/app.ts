import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-shell',
        templateUrl: 'home/shell'
        //templateUrl: 'app/shell.html'
        //template: `
        //    <h1>Demo with inline template built by {{name}}</h1>
        //    <div>
        //        <button (click)="say()">Click here</button>
        //    </div>
        //`
    }
)

export class App {
    name: string;
    constructor() {
        this.name = "Angular 2 Developer";
    }
    say(): void {
        alert(`Hello from ${this.name}`);
    }
}