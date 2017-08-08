import { AboutEvent } from './../about-event/about-event';
import {NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
   selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.setRoot(AboutEvent, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
  }

}
