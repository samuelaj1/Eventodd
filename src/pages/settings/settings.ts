import { NavController,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',

})
export class Settings {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}
