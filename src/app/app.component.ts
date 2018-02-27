import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  on = false;

  constructor() {
  }

  toggle() {
    this.on = !this.on;
  }

  /** DRAG EVENTS */

  dragstart(e) {
    console.log('dragstart', e);
  }

  drag(e) {
    if (this.on) {
      console.log('drag', e);
    }
  }

  dragend(e) {
    console.log('dragend', e);
  }

  /** DROP EVENTS */

  dragenter(e) {
    console.log('dragenter', e);
  }

  dragover(e) {
    e.preventDefault(); // necessary to allow drop event
    if (this.on) {
      console.log('dragover', e);
    }
  }

  dragleave(e) {
    console.log('dragleave', e);
  }

  drop(e) {
    console.log('drop', e);
  }
}
