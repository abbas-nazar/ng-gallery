import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image.service';
import { FilterPipe } from './filter.pipe';
import {RouterModule, Routes } from '@angular/router';

  const appRoutes: Routes =
[
  {
    path: 'gallery',
    component: GalleryComponent
  }
  ,
  {
    path: 'image/:id',
    component: ImageComponent
  },
  {
    path: '', redirectTo: '/gallery', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
