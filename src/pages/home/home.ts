import { AboutEvent } from './../about-event/about-event';
import { PostPage } from './../post-page/post-page';
import { Login } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  postpage:any=PostPage;
  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(Login);
  }

  openPage(page){
     this.navCtrl.setRoot(page);
  }
  statsTab(page){
    this.navCtrl.push(AboutEvent);
  }

  
}
