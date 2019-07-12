import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {  Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SideMenuComponent } from '../tab4/side-menu/side-menu.component';
import { myEnterAnimation } from '../animation/enter';
import { myLeaveAnimation } from '../animation/leave';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor(private menu: MenuController, private router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.router.navigate(['tabs/tab4/gallary'])
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SideMenuComponent,
      cssClass: 'my-custom-modal-css',
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation
    });
    return await modal.present();
  }
  // slideChanged(){
  //   this.slides.getActiveIndex().then(x=> {
  //     this.infoToShow = x;
  //   })
    
  // }
 

}
