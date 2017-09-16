import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

  visibleimages = [];

  getimages()
  {
    return this.visibleimages = images.slice(0);
  }

  getimage(id: number)
  {
    return images.slice(0).find(image => image.id == id);
  }

}

const images =
[
  {"id": 1,"category":"games","caption":"games1","url":"assets/img/img01.jpg"},
  {"id":2,"category":"games","caption":"games2","url":"assets/img/img02.jpg"},
  {"id":3,"category":"games","caption":"games3","url":"assets/img/img03.jpg"},
  {"id":4,"category":"games","caption":"games4","url":"assets/img/img04.jpg"},
  {"id":5,"category":"games","caption":"games5","url":"assets/img/img05.jpg"},
  {"id":6,"category":"games","caption":"games6","url":"assets/img/img06.jpg"},
  {"id":7,"category":"games","caption":"games7","url":"assets/img/img07.jpg"},
  {"id":8,"category":"games","caption":"games8","url":"assets/img/img08.jpg"},
  {"id":9,"category":"games","caption":"games9","url":"assets/img/img09.jpg"},
  {"id":10,"category":"games","caption":"games10","url":"assets/img/img10.jpg"},
  {"id":11,"category":"games","caption":"games11","url":"assets/img/img11.jpg"},
  {"id":12,"category":"games","caption":"games12","url":"assets/img/img12.jpg"},
  {"id":13,"category":"games","caption":"games13","url":"assets/img/img13.jpg"},
  {"id":14,"category":"games","caption":"games14","url":"assets/img/img14.jpg"},
  {"id":15,"category":"games","caption":"games14","url":"assets/img/img15.jpg"},
  {"id":16,"category":"games","caption":"games16","url":"assets/img/img16.jpg"},
  {"id":17,"category":"heroes","caption":"heroes1","url":"assets/img/img17.jpg"},
  {"id":18,"category":"heroes","caption":"heroes2","url":"assets/img/img18.jpg"},
  {"id":19,"category":"heroes","caption":"heroes3","url":"assets/img/img19.jpg"},
  {"id":20,"category":"heroes","caption":"heroes4","url":"assets/img/img20.jpg"},
  {"id":21,"category":"heroes","caption":"heroes5","url":"assets/img/img21.jpg"},
  {"id":22,"category":"heroes","caption":"heroes6","url":"assets/img/img22.jpg"},
  {"id":23,"category":"heroes","caption":"heroes7","url":"assets/img/img23.jpg"},
  {"id":24,"category":"heroes","caption":"heroes8","url":"assets/img/img24.jpg"},
  {"id":25,"category":"heroes","caption":"heroes9","url":"assets/img/img25.jpg"},
  {"id":26,"category":"others","caption":"others1","url":"assets/img/img26.jpg"},
  {"id":27,"category":"others","caption":"others2","url":"assets/img/img27.jpg"},
  {"id":28,"category":"others","caption":"others3","url":"assets/img/img28.jpg"},
  {"id":29,"category":"others","caption":"others4","url":"assets/img/img29.jpg"},
  {"id":30,"category":"others","caption":"others5","url":"assets/img/img30.jpg"},
  {"id":31,"category":"others","caption":"others6","url":"assets/img/img31.jpg"},
  {"id":32,"category":"others","caption":"others7","url":"assets/img/img32.jpg"}
]
