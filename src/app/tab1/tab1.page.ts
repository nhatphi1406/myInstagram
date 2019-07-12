import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PostService } from '../services/post.service';
import { ModalController } from '@ionic/angular';
import { StoryComponent } from './story/story.component';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myPhoto: any;
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
  constructor(private camera: Camera, private PostSVC: PostService, public modalController: ModalController, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.list = this.PostSVC.getList();
  }

  async presentModal(img: any) {
    const modal = await this.modalController.create({
      component: StoryComponent,
      componentProps: {
        'img': img,
      }
    });
    return await modal.present();
  }

  async takePicture() {
    // const image = await Plugins.Camera.getPhoto({
    //   quality: 100,
    //   allowEditing: false,
    //   resultType: CameraResultType.DataUrl,
    //   source: CameraSource.Camera
    // });

    // this.myPhoto = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myPhoto = base64Image;
    }, (err) => {
      // Handle error
    });
  }




}
