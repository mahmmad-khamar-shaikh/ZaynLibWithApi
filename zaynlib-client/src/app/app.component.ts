import { Component } from '@angular/core';
import 'tzlib';
export class Person {
  Name: string;
  Alias: string;
  /**
   *
   */
  constructor(name, alias) {
    this.Name = name;
    this.Alias = alias;

  }

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'zaynlib-client';


}
