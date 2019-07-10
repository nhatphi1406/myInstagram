import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  infoToShow: number;
  constructor(private router: Router) {
    this.changeInfoDisplay();
  }
  ngOnInit(){
    this.changeInfoDisplay();
  }
  changeInfoDisplay(){
    setTimeout(()=>{
      if(this.router.url.includes("user")){
        this.infoToShow = 0;
      }
      else {
        this.infoToShow = 1;
      }
      console.log(this.infoToShow)
    },200)
  }
}
