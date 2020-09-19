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
  myArray: Array<number>;
  sArray: Array<string>;
  oArray: Array<Person>;
  /**
   *
   */
  constructor() {
    this.myArray = new Array<number>();
    this.myArray.push(1);
    this.myArray.push(3);
    this.myArray.push(100);
    this.myArray.push(2);
    this.myArray.push(10);
    this.myArray.push(4);

    this.sArray = new Array<string>();
    this.sArray.push('IronMan');
    this.sArray.push('Thor');
    this.sArray.push('Captain America');
    this.sArray.push('Hulk');




    this.oArray =
      [{ Name: 'Tony Stark', Alias: 'Iron Man' },
      { Name: 'Banner', Alias: 'Hulk' },
      { Name: 'Steve Rogers', Alias: 'Captain America' },
      { Name: 'Natasha Romanov', Alias: 'Black Widow' }];


    // console.log(this.myArray.where(ele => ele > 3));
    // console.log(this.sArray.where(item => item.length > 5).first());
    // console.log(this.sArray.where(item => item.length > 5).last());

    // const augArray = [5, 6, 7];
    // this.myArray.addRange(augArray);
    // console.log(this.myArray);

    // console.log(this.oArray.orderBy(item => item.HeroicNema, false));
    console.log(this.sArray.strictSort());



  }

}
