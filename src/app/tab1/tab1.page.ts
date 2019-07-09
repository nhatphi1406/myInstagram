import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PostService } from '../services/post.service';
import { ModalController } from '@ionic/angular';
import { StoryComponent } from './story/story.component'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public myPhoto: any;
  list: any;
  story: any = [
    {
      img: 'https://images.pexels.com/photos/2611813/pexels-photo-2611813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2439625/pexels-photo-2439625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2611813/pexels-photo-2611813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2439625/pexels-photo-2439625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2611813/pexels-photo-2611813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2439625/pexels-photo-2439625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/1698482/pexels-photo-1698482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      img: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ]
  constructor(private camera: Camera, private PostSVC: PostService, public modalController: ModalController) { 
  }

  ngOnInit(){
    this.list = this.PostSVC.getList();
  }

  async presentModal(img: any) {
    const modal = await this.modalController.create({
      component: StoryComponent,
      componentProps: {
        'img':  img,
      }
    });
    return await modal.present();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  


}
