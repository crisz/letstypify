import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './parts/top-bar/top-bar.component';
import { FooterComponent } from './parts/footer/footer.component';
import { ContainerComponent } from './parts/container/container.component';
import { SourceTextareaComponent } from './components/source-textarea/source-textarea.component';
import { TargetTextareaComponent } from './components/target-textarea/target-textarea.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { TypifierService } from './services/typifier.service'

const SHARED_COMPONENTS = [TopBarComponent, FooterComponent, ContainerComponent, SourceTextareaComponent, TargetTextareaComponent];

@NgModule({
  declarations: [ ...SHARED_COMPONENTS ],
  imports: [ CommonModule, MonacoEditorModule, FormsModule ],
  providers: [ TypifierService ],
  exports: [ ...SHARED_COMPONENTS ]
})
export class CoreModule { }
