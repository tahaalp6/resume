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
  selector: "app-vue",
  imports: [],
  templateUrl: "./vue.html",
  styleUrls: ["./vue.scss"],
})
export class Vue implements OnInit {
  public customizer: string = "all";
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
    srcUrl: "https://minirezervasyon.com/",
    previewUrl: "assets/images/portfolio/minirez.jpg",
  },
];
