import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventStats } from './event-stats';

@NgModule({
  declarations: [
    EventStats,
  ],
  imports: [
    IonicPageModule.forChild(EventStats),
  ],
})
export class EventStatsModule {}
