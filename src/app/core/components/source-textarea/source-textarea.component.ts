import { Component, OnInit } from '@angular/core';
import { TypifierService } from '../../services/typifier.service';

@Component({
  selector: 'lt-source-textarea',
  templateUrl: './source-textarea.component.html',
  styleUrls: ['./source-textarea.component.scss']
})
export class SourceTextareaComponent implements OnInit {

  editorOptions = {language: 'json'};
  code: string = '{"title": "Hello world!"}';

  constructor(public typifierService: TypifierService) { }

  sourceChange(evt) {
    this.typifierService.update(evt);
  }

  ngOnInit() {
  }

}
