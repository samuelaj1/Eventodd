import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckIns } from './check-ins';

@NgModule({
  declarations: [
    CheckIns,
  ],
  imports: [
    IonicPageModule.forChild(CheckIns),
  ],
})
export class CheckInsModule {}
