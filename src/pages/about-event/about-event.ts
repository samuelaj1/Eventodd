import { Login } from './../login/login';
import { CheckIns } from './../check-ins/check-ins';
import { EventStats } from './../event-stats/event-stats';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-about-event',
  templateUrl: 'about-event.html',
  
})
export class AboutEvent {
  tab1Root:any= EventStats
  tab2Root:any= CheckIns;


  constructor(public af:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    
  }

}
