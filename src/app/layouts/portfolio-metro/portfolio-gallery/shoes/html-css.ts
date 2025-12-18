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
  selector: "app-html-css",
  templateUrl: "./html-css.html",
  styleUrls: ["./html-css.scss"],
})
export class HtmlCss implements OnInit {
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
    srcUrl: "https://isgenerji-17c7d.web.app/",
    previewUrl: "assets/images/portfolio/Energy.jpg",
  },
];
