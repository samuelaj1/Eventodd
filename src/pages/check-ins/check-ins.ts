import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-check-ins',
  templateUrl: 'check-ins.html',
  
})
export class CheckIns {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckIns');
  }

}
