import { Component, OnInit } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";

@Component({
  selector: "app-angular",
  templateUrl: "./angular.html",
  styleUrls: ["./angular.scss"],
})
export class Angular implements OnInit {
  items: GalleryItem[];

  imageData = data;

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
  ) {}

  ngOnInit() {
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );
    const lightboxRef = this.gallery.ref("lightbox");
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }
}
const data = [
  {
    srcUrl: "https://qrmenu-nine-delta.vercel.app/",
    previewUrl: "assets/images/portfolio/qrmenu.jpg",
  },
  {
    srcUrl: "https://agencyweb-nu.vercel.app/home",
    previewUrl: "assets/images/portfolio/Agency.jpg",
  }
];
