import { Component } from '@angular/core';

@Component({
  selector: 'lt-root',
  templateUrl: './app.component.html',
  styles: [`
    .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .expand {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent {
}
