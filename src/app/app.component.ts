import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as CodeMirror from 'codemirror';
// import './@plugins/ng2-codemirror/node_modules/codemirror/lib/codemirror.js';
// import './@plugins/ng2-codemirror/node_modules/codemirror/mode/sql/sql.js';
import './@plugins/ng2-codemirror/node_modules/codemirror/addon/hint/show-hint.js';
import './@plugins/ng2-codemirror/node_modules/codemirror/addon/hint/sql-hint.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  config: any = {};
  value = '';
  instance;
  keyCode;

  ngOnInit(): void {
    this.config = { // codemirror组件的配置项
      lineNumbers: true,                     //显示行号
      mode: {name: 'text/x-mysql'},          //定义mode
      // theme: 'ambiance', //主题
      lineWrapping: true,
      styleActiveLine: true,
      matchBrackets: true,
      autoRefresh: true,
      dragDrop: true,
      // extraKeys: {
      //   "Ctrl": "autocomplete",
      //   Tab: function (cm) {
      //     const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
      //     cm.replaceSelection(spaces);
      //   }
      // },   //自动提示配置
    };
  }

  onCursorActivity($event) {
    this.instance = $event.instance;
    if (this.keyCode >= 65 && this.keyCode <= 90) {
      CodeMirror.commands.autocomplete(this.instance, null, {completeSingle: true});
    }
  }

  onKeyup($event) {
    this.keyCode = $event.keyCode;
  }

}
