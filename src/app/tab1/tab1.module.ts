import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { PostComponent } from './post/post.component';
import { PopoverComponent } from './popover/popover.component';
import { StoryComponent } from './story/story.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, PostComponent, PopoverComponent, StoryComponent],
  entryComponents: [PopoverComponent, StoryComponent]
})
export class Tab1PageModule {}
