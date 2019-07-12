import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following-activity',
  templateUrl: './following-activity.component.html',
  styleUrls: ['./following-activity.component.scss'],
})
export class FollowingActivityComponent implements OnInit {
  status: any = [
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths.",
      images: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
    
  ]
  constructor() { }

  ngOnInit() {}

}
