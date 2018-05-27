import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase , AngularFireList,AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  peopleList : AngularFireList<any>;
  constructor(public navCtrl: NavController , public db:AngularFireDatabase) {
    this.peopleList = db.list('/people'); // add to database 
  }
  
  //  ----------------- inserting in database ----------------------- //
  createPerson(fname,lname,age,dept){
    
    this.peopleList.push({
      "fname":fname,
      "lname":lname,
      "age":age,
      "dept":dept
    });
  }
}
