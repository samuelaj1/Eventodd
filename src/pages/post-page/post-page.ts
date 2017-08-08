import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';
import { Component,ViewChild, NgZone } from '@angular/core';
import {NgForm} from '@angular/Forms';
import{AngularFireDatabase} from 'angularfire2/database';
import { ImagePicker } from '@ionic-native/image-picker';
import 'firebase/storage';
import {FirebaseApp} from 'angularfire2';
import * as firebase from 'firebase/app';
import { Slides } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import {File} from '@ionic-native/file';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-post-page',
  templateUrl: 'post-page.html',
  providers:[AngularFireDatabase, AngularFireAuth]
  
})
export class PostPage {
  imageurl:any;
  user_data = {
    user_key:'',
    user_event:''
  }
  postevent= {
	event_title:"Event title",
	event_type:"birthday",
	description:"Description",
	regions:"accra",
	date_published:"10-10-2017",
	event_date:"2017-12-12",
	venue:"Accra staduim",
	banner:"http://google.com",
	total_seats:"24",
	ticket_type:[],
	location:"madina station",
	publisher_id:"10020202020"
}
  imageData={
    data:""
  };
  beginning:boolean;
  end:boolean;
  postme:boolean;
  //nativepath: any;
 @ViewChild('slider') slides: Slides;
  constructor(public loadingCtrl:LoadingController,public alertCtrl: AlertController, public file:File,public filepath:FilePath,
  public toaster:ToastController,public zone: NgZone, private fileChooser: FileChooser,
   public fireapp: FirebaseApp,private imagePicker: ImagePicker, private db:AngularFireDatabase,
   public navCtrl: NavController, public navParams: NavParams, public afu:AngularFireAuth) {
  this.beginning = false;
  this.end = true;
  this.postme = false;
  
}

  ionViewDidLoad() {
    
   
  }
  ionViewDidEnter(){
    this.afu.auth.onAuthStateChanged(function(user){
      if(user){
        console.log(user.uid);
       // u.email=user.email;
      }
      else{
        //this.rootPage=Login;
      }
    });
  }
  onSlideChanged(){
    if(this.slides.isBeginning()){
      this.beginning = false;
    }else if(this.slides.isEnd()){
      this.end = false;
      this.postme = true;
    }
    else{
     this.beginning = true;
     this.end = true;
     this.postme = false;
    }
  }

  delete(index){
    this.postevent.ticket_type.splice(this.postevent.ticket_type.indexOf(index),1);
  }

  toast(){
   let toasting=  this.toaster.create({
    message:"All Fields Are Required",
    duration:4000
   });
   toasting.present();
  }

  next(){
   this.slides.slideNext();
  }
  previous(){
   this.slides.slidePrev();
  }

filechooser(){
  this.fileChooser.open().then((url)=>{
   this.filepath.resolveNativePath(url).then((res)=>{
     this.imageData.data=res;
     //alert(this.nativepath);
     //this.uploadimage();
   });
  });
}

uploaddata(){
  this.user_data.user_event = this.db.list("/events").push(this.postevent).key;
}

  uploadall() {
   let loading = this.loadingCtrl.create({
     content:"Uploading Data"
   });
   loading.present();

    (<any>window).resolveLocalFileSystemURL(this.imageData.data, (res) => {
    
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
          var imageStore = firebase.storage().ref().child('images/'+(Math.floor(Date.now()/1000).toString()+'.jpg'));
          imageStore.put(imgBlob).then((res) => {
            this.postevent.banner=res.downloadURL;
            this.uploaddata();
            loading.dismiss();
          }).catch((err) => {
            alert('Upload Failed' + err);
            loading.dismiss();
          });
        }
      })
    })
  }

   showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add ticked Type',
      inputs: [
        {
          name: 'type',
          placeholder: 'Type',
         
        },
        {
          name: 'amount',
          placeholder: 'Amount',
           type:"number"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            
          }
          
        },
        {
          text: 'Save',
          handler: data => {
            if(data.amount=="" || data.type==""){
              this.toast();
            }
            else{
                this.postevent.ticket_type.push({name:data.type,amount:data.amount});
            }
          }
        }
      ]
    });
    prompt.present();
  }

}
