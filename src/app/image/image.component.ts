import { Component, OnInit } from '@angular/core';
import {ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image: any;
  constructor(private images: ImageService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.image = this.images.getimage(+this.route.snapshot.params['id']);
  }

}
