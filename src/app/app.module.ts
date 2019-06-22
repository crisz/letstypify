import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MONACO_DEFAULT_OPTIONS } from './utils/monaco-editor/default-options';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MonacoEditorModule.forRoot(MONACO_DEFAULT_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
