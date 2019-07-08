import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  list: any = 
    {
      user: "đasa",
      like: 123,
      post: "ádas",
      image: [
        "1",
        "2"
      ]
    }
  
  constructor() { }

  ngOnInit() { }

}
