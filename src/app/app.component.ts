import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'ng2-codemirror/node_modules/codemirror/lib/codemirror.js';
import 'ng2-codemirror/node_modules/codemirror/mode/sql/sql.js';
import 'ng2-codemirror/node_modules/codemirror/addon/hint/show-hint.js';
import 'ng2-codemirror/node_modules/codemirror/addon/hint/sql-hint.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  config: any = {};
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
    document.addEventListener('keypress', e => {
      if (e.keyCode == 8) {
        $event.instance.showHint(false);
      } else {
        $event.instance.showHint(true);
      }
    });
  }
}
