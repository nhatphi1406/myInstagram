import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {}
  close() {
    this.viewCtrl.dismiss();
  }
}
