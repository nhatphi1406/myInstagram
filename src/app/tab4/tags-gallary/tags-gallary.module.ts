import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TagsGallaryPage } from './tags-gallary.page';

const routes: Routes = [
  {
    path: '',
    component: TagsGallaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TagsGallaryPage]
})
export class TagsGallaryPageModule {}
