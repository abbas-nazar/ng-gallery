import { Component, OnInit } from '@angular/core';
import {ImageService } from '../image.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private image: ImageService) {

   }

  ngOnInit() {
  }

}
