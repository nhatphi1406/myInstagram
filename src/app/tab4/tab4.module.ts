import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
import { Tab4PageRoutingModule } from './tab4.router.module';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, SideMenuComponent],
  entryComponents: [SideMenuComponent]
})
export class Tab4PageModule {}
