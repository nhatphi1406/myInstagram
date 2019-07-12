import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab3NewPage } from './tab3-new.page';
import { FollowingActivityComponent } from '../tab3/following-activity/following-activity.component';
import { UserActivityComponent } from '../tab3/user-activity/user-activity.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3NewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3NewPage, FollowingActivityComponent, UserActivityComponent]
})
export class Tab3NewPageModule {}
