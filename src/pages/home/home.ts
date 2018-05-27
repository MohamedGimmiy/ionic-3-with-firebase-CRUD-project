import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// angular fire list observable deprecated 
import { AngularFireDatabase , AngularFireList, AngularFireObject   } from "angularfire2/database"; 

import { Observable } from 'rxjs';
import { forEach } from '@firebase/util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  p : Observable<any>;
  per = {
     fname:"ahmed",
  lname:"mohamed",
  age:12,
  dept:"com"
}

itemArray=[]

  constructor( public navCtrl: NavController , public db: AngularFireDatabase) {

    // -------------- to retrive data from fire base ------------------//

   // this.p =  db.list('/people').valueChanges();

  }

}
export class listing{
   $key : string;
   fname : string;
   lname : string;
   age : string;
   dept : string;
}