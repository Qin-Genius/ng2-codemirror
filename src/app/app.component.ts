import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import './@plugins/ng2-codemirror/node_modules/codemirror/lib/codemirror.js';
import './@plugins/ng2-codemirror/node_modules/codemirror/mode/sql/sql.js';
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
  isFirst = false;
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
    console.log($event);
    if (!this.isFirst) {
      document.addEventListener('keypress', e => {
        if ((e.keyCode >= 65 && e.keyCode <= 90)) {
          // $event.instance.showHint(true);
          $event.instance.showHint({completeSingle: true});
        } else {
          $event.instance.showHint({completeSingle: false});
        }
      });
    }
    this.isFirst = true;
  }

}
