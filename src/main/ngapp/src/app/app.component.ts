import { Component } from '@angular/core';
import { animation } from '@angular/core/src/animation/dsl';
import { slideRightAnimation } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideRightAnimation]
})
export class AppComponent {
  getRouteAnimation(outlet) {
    console.log(outlet, outlet.activatedRouteData);
    return outlet.activatedRouteData['page'] || 'one';
  }
}
