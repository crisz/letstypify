import { Component, OnInit } from '@angular/core';
import { TypifierService } from '../../services/typifier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lt-target-textarea',
  templateUrl: './target-textarea.component.html',
  styleUrls: ['./target-textarea.component.scss']
})
export class TargetTextareaComponent implements OnInit {

  editorOptions = {language: 'typescript', readOnly: true};
  code: string= '{"title": "Hello world!"}';

  codeWithTypes$: Observable<string>;

  constructor(typifierService: TypifierService) {
    this.codeWithTypes$ = typifierService.get();
  }

  ngOnInit() {
  }

}
