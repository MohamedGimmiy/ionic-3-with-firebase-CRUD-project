import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EditPersonPage } from '../pages/edit-person/edit-person';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2'; // firebase added

import { AngularFireDatabaseModule  } from "angularfire2/database"; 
import { AngularFireAuthModule } from 'angularfire2/auth';


const config = {
  apiKey: "AIzaSyCCxwk-CvCGR6BPIpOJk7HP1iBXFomHUtY",
  authDomain: "ionicdb-20f52.firebaseapp.com",
  databaseURL: "https://ionicdb-20f52.firebaseio.com",
  //projectId: "ionicdb-20f52",
  storageBucket: "ionicdb-20f52.appspot.com",
  messagingSenderId: "491249965226"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
