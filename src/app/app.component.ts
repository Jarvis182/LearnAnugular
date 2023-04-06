import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Coucher de soleil',
      'C\'est beau non? ',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      new Date(),
      0
    );
  }
}