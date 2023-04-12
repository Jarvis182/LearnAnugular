import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
        title: 'Forest',
        description: 'C\'est beau non? ',
        imageUrl: 'https://i.vimeocdn.com/video/1401922789-d1f5ab67f81f72ad61a942eda022df97ffb94ff9de856c13fc12936de0f1375f-d_640',
        createdDate: new Date(),
        snaps: 10,
        location: 'Madrid'
  
      },
      {
        title: 'MotoCross',
        description: 'Je vole ! ',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/07/05/16/44/biker-384921_960_720.jpg',
        createdDate: new Date(),
        snaps: 50,
        location: 'Paris'
      },
      {
        title: 'harrier',
        description:  'Trop la classe ',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/19/00/32/av-8b-harrier-2517552_960_720.jpg',
        createdDate: new Date(),
        snaps: 99,
        location: 'Toulouse'
      },
      {
        title: 'BMW',
        description: 'Drift ? ',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/04/29/08/47/bmw-m3-6216130_960_720.jpg',
        createdDate: new Date(),
        snaps: 200
      },
      {
        title: 'Z1000',
        description: 'le bonheur :)',
        imageUrl:  'https://cdn.pixabay.com/photo/2020/11/12/14/22/motorcycle-5735642_960_720.jpg',
        createdDate: new Date(),
        snaps: 4000
      },
      {
        title: 'RS6',
        description: 'DreamCar',
        imageUrl:  'https://cdn.pixabay.com/photo/2018/04/23/08/00/car-3343430_960_720.jpg',
        createdDate: new Date(),
        snaps: 199
      }
    ];
}