import { Component, OnInit } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss'],
})
export class UserActivityComponent implements OnInit {
  status: any = [
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    {
      avatar: "https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      activity: "The important part here is the ion-button and routerLink directive. RouterLink works on a similar idea as typical hrefs, but instead of building out the URL as a string, it can be built as an array, which can provide more complicated paths."
    },
    
  ]
  constructor() { }

  ngOnInit() { }

}
