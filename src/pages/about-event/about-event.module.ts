import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutEvent } from './about-event';

@NgModule({
  declarations: [
    AboutEvent,
  ],
  imports: [
    IonicPageModule.forChild(AboutEvent),
  ],
})
export class AboutEventModule {}
