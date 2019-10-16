Installation

Include Codemirror javascript files in your application (with files for modes)
Install ng2-codemirror
npm install ng2-codemirror

Dependencies

CodeMirror library is required for this component :
npm install codemirror

CodeMirror need to be accessible by import 'codemirror'

Then you need to include base CSS of codemirror located in codemirror/lib/codemirror.css

Sample
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
