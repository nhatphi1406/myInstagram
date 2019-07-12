import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab3-new',
  templateUrl: './tab3-new.page.html',
  styleUrls: ['./tab3-new.page.scss'],
})
export class Tab3NewPage implements OnInit {
  @ViewChild('mySliders') slides: IonSlides;
  infoToShow: number = 0;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor() { }

  ngOnInit() {
  }
  slideChanged(){
    this.slides.getActiveIndex().then(x=> {
      this.infoToShow = x;
    })
    
  }

}
