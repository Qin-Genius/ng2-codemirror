# WebSql

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install ng2-codemirror

npm install ng2-codemirror

## Dependencies

CodeMirror library is required for this component :
npm install codemirror

CodeMirror need to be accessible by import 'codemirror'

Then you need to include base CSS of codemirror located in codemirror/lib/codemirror.css

## Sample

Include CodemirrorModule in your main module :

import { CodemirrorModule } from 'ng2-codemirror';

@NgModule({
  // ...
  imports:      [
    CodemirrorModule
  ],
  // ...
})

export class AppModule { }
import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
   <codemirror
    [config]="config"
    (cursorActivity)="onCursorActivity($event)">
   </codemirror>
  `
})


export class Sample{
  constructor(){
    this.config = {};
  }
}

Configuration
config : The configuration object for CodeMirror see http://codemirror.net/doc/manual.html#config
