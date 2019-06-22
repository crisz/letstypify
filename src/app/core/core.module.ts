import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { SourceTextareaComponent } from './source-textarea/source-textarea.component';
import { TargetTextareaComponent } from './target-textarea/target-textarea.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

const SHARED_COMPONENTS = [TopBarComponent, FooterComponent, ContainerComponent, SourceTextareaComponent, TargetTextareaComponent];

@NgModule({
  declarations: [ ...SHARED_COMPONENTS ],
  imports: [ CommonModule, MonacoEditorModule, FormsModule ],
  exports: [ ...SHARED_COMPONENTS ]
})
export class CoreModule { }
