import { Login } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class Slider {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    localStorage.setItem('starter', 'true');
  }


 
 slides = [
    {
      title: "Welcome to Evento!",
      description: "The <b>Post Events </b> and Manage It Where Ever You Are!!"
    },
    
];
login(){
  this.navCtrl.setRoot(Login);
}

}
