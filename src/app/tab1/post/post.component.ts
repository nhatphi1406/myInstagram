import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, IonSlides } from '@ionic/angular';
import { PopoverComponent } from '../../tab1/popover/popover.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() item;
  @ViewChild(IonSlides) slides: IonSlides;
  currentIndex: any = 0;
  list: any = 
  {
    user: "đasa",
    like: 123,
    post: "ádas",
    image: [
      "1",
      "2"
    ]
  };

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    scrollbar: true
  };

  constructor(public popoverController: PopoverController) { }

  ngOnInit() { }

   async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  
  slideChanged() {
    this.slides.getActiveIndex().then(x =>{
      this.currentIndex = x
    });
    console.log(this.currentIndex)
    return this.currentIndex;
  }
  dotShow(dot: any){
    console.log(dot)
  }
}
