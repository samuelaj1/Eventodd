import { ScanPage } from './../pages/scan-page/scan-page';
import { HomePage } from './../pages/home/home';
import { Login } from './../pages/login/login';
import { Slider } from './../pages/slider/slider';
import { Faq } from './../pages/faq/faq';
import { Settings } from './../pages/settings/settings';
import { HistoryPage } from './../pages/history/history';
import { PostPage } from './../pages/post-page/post-page';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth} from 'angularfire2/auth';



@Component({
  templateUrl: 'app.html',
  providers:[AngularFireAuth]
  
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  dashboard:any = HomePage;
  history:any = HistoryPage;
  postpage:any = PostPage;
  settings:any = Settings;
  faq:any = Faq;
  slider:any=Slider;
  scanPage:any =ScanPage;
 
  user = {
    email:''
  }


  constructor(public angularfire:AngularFireAuth,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
     this.checklogin(this.user);
    this.initializeApp();
    localStorage.getItem('starter')=='true'?this.rootPage=HomePage:this.rootPage=Slider;

   

    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    this.nav.setRoot(page);
  }
  pushPage(page) {
    
    this.nav.push(page);
  }

  logOut(){
    this.angularfire.auth.signOut();
    this.nav.setRoot(Login);
  }
  checklogin(u){
    this.angularfire.auth.onAuthStateChanged(function(user){
      if(user){
        u.email=user.email;
      }
      else{
        this.rootPage=Login;
      }
    });
  }
}
