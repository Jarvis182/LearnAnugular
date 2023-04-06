import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySnap01!: FaceSnap;
  mySnap02!: FaceSnap;
  mySnap03!: FaceSnap;
  mySnap04!: FaceSnap;
  mySnap05!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Forest',
      'C\'est beau non? ',
      'https://i.vimeocdn.com/video/1401922789-d1f5ab67f81f72ad61a942eda022df97ffb94ff9de856c13fc12936de0f1375f-d_640',
      new Date(),
      0
    );

    this.mySnap01 = new FaceSnap(
      'MotoCross',
      'Je vole ! ',
      'https://cdn.pixabay.com/photo/2014/07/05/16/44/biker-384921_960_720.jpg',
      new Date(),
      0
    );

    this.mySnap02 = new FaceSnap(
      'harrier',
      'Trop la classe ',
      'https://cdn.pixabay.com/photo/2017/07/19/00/32/av-8b-harrier-2517552_960_720.jpg',
      new Date(),
      0
    );

    this.mySnap03 = new FaceSnap(
      'BMW',
      'Drift ? ',
      'https://cdn.pixabay.com/photo/2021/04/29/08/47/bmw-m3-6216130_960_720.jpg',
      new Date(),
      0
    );

    this.mySnap04 = new FaceSnap(
      'Z1000',
      'le bonheur :)',
      'https://cdn.pixabay.com/photo/2020/11/12/14/22/motorcycle-5735642_960_720.jpg',
      new Date(),
      0
    );

    this.mySnap05 = new FaceSnap(
      'RS6',
      'DreamCar',
      'https://cdn.pixabay.com/photo/2018/04/23/08/00/car-3343430_960_720.jpg',
      new Date(),
      0
    );
  }
}