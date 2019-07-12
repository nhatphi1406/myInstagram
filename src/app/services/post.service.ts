import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _list: any = [
    {
      user: "SKY1",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY2",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY3",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ]
    },
    {
      user: "SKY1",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY2",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY3",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ]
    },
    {
      user: "SKY1",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY2",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY3",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ]
    },
    {
      user: "SKY1",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY2",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY3",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ]
    },
    {
      user: "SKY1",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY2",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
    },
    {
      user: "SKY3",
      like: 123,
      post: "ádas",
      image: [
        "https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ]
    },
  ]
   
  constructor() { }
  getList(){
    return this._list
  }
}
