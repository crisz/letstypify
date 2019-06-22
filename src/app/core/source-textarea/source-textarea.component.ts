import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lt-source-textarea',
  templateUrl: './source-textarea.component.html',
  styleUrls: ['./source-textarea.component.scss']
})
export class SourceTextareaComponent implements OnInit {

  editorOptions = {language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

}
