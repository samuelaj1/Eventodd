import { HomePage } from './../home/home';
import { Register } from './../register/register';
import {LoadingController,ToastController, NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import {NgForm} from '@angular/Forms';
import{AngularFireAuth} from 'angularfire2/auth';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AngularFireAuth],
  
})
export class Login {

  constructor(public network:Network,public loader:LoadingController,public toast: ToastController,private af:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  signUp(){
    this.navCtrl.push(Register);
  }
  

  dashboard(){
    this.navCtrl.setRoot(HomePage);
  }

  toaster(a,b){
  let ts = this.toast.create({
            message:a,
            duration:b
          });
  ts.present();
  }
  Login(form){
    if(this.network.type !== 'none'){
    let loading= this.loader.create({
      content:"Logging In"
    });
    loading.present();
      this.af.auth.signInWithEmailAndPassword(form.value.email, form.value.password).then(()=>{
        loading.dismiss().catch(error=>{});
        this.dashboard();
      }).catch(error=>{
        loading.dismiss().catch(error=>{});
          this.toaster('Check Credentials',3000);
      });
  }
  else{
    this.toaster('No Network connection',4000);
  }
  }
}
