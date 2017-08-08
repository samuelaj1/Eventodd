import { ScanPage } from './../pages/scan-page/scan-page';
import { Network } from '@ionic-native/network';
import { Slider } from './../pages/slider/slider';
import { CheckIns } from './../pages/check-ins/check-ins';
import { EventStats } from './../pages/event-stats/event-stats';
import { AboutEvent } from './../pages/about-event/about-event';
import { Settings } from './../pages/settings/settings';
import { Faq } from './../pages/faq/faq';
import { PostPage } from './../pages/post-page/post-page';
import { Register } from './../pages/register/register';
import { HistoryPage } from './../pages/history/history';
import { Login } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ AngularFireModule } from 'angularfire2';
import { ImagePicker } from '@ionic-native/image-picker';
import { Chart } from 'chart.js';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';

export const firebaseConfig={
  apiKey: "AIzaSyD8c-4xOB4ANfMgPcZh10U92c-k704KTww",
    authDomain: "evento-df046.firebaseapp.com",
    databaseURL: "https://evento-df046.firebaseio.com",
    projectId: "evento-df046",
    storageBucket: "evento-df046.appspot.com",
    messagingSenderId: "832605425945"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    HistoryPage,
    Register,
    PostPage,
    Faq,
    Settings,
    AboutEvent,
    EventStats,
    CheckIns,
    Settings,
    Slider,
    ScanPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Login,
    HistoryPage, 
    Register,
    PostPage,
    Faq,
    AboutEvent,
    EventStats,
    CheckIns,
    Settings,
    Slider,
    ScanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Network,
    ImagePicker,
    FileChooser,FilePath,File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
