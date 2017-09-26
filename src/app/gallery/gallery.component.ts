import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {ImageService } from '../image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title="Recent Photos";
  @Input() filterBy?: string = "all";
  images: any[]= [];
  constructor(private image: ImageService) {
    this.images = this.image.getimages();
   }

  ngOnChanges()
  {
    this.images = this.image.getimages();
  }

}
