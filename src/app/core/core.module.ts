import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { SourceTextareaComponent } from './source-textarea/source-textarea.component';
import { TargetTextareaComponent } from './target-textarea/target-textarea.component';

const SHARED_COMPONENTS = [TopBarComponent, FooterComponent, ContainerComponent, SourceTextareaComponent, TargetTextareaComponent];

@NgModule({
  declarations: [ ...SHARED_COMPONENTS ],
  imports: [ CommonModule ],
  exports: [ ...SHARED_COMPONENTS ]
})
export class CoreModule { }
