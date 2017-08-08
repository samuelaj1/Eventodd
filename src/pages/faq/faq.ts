import { NavController,NavParams,AlertController, Events } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
 
})
export class Faq {

  constructor(public alertCtrl: AlertController, public evts: Events, public navCtrl: NavController, public navParams: NavParams) {
  }

}