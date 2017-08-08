import { Login } from './../login/login';
import { LoadingController, NavParams, NavController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import{AngularFireAuth, FirebaseAuthStateObservable} from 'angularfire2/auth';
import { Network } from '@ionic-native/network';

import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/Forms';
import{AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[AngularFireAuth, AngularFireDatabase]

})
export class Register {



  
  constructor(public toast:ToastController,public network: Network,public loadCtrl:LoadingController ,private db: AngularFireDatabase,private af: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  login(){

    this.navCtrl.push(Login);
  }
 checknetwork(){
   if (this.network.type === 'none') {
      return false;
    }
    else{
      return true;
    }
 }

  signup(param){
    if(this.checknetwork()){
     let loading=this.loadCtrl.create({
        content:"Signing Up !!"
      });
      loading.present();
    this.af.auth.createUserWithEmailAndPassword(param.value.email,param.value.password).then(()=>{
        this.db.list('/publisher').push({username:param.value.username, email:param.value.email, picture:"http://google.com"});
        loading.dismiss().catch(error=>{});
        this.login();
    });
  }
  else{
    let toaster= this.toast.create({
      message: "No Network Connection!",
      duration: 4000
    });
  toaster.present();
}
}

}
