import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";

import { MongoDB } from "./bags/mongo-db";
import { Angular } from "./fashion/angular";
import { HtmlCss } from "./shoes/html-css";
import { Vue } from "./watch/vue";

@Component({
  selector: "app-portfolio-gallery",
  imports: [MongoDB, Angular, HtmlCss, Vue, CommonModule],
  templateUrl: "./portfolio-gallery.html",
  styleUrls: ["./portfolio-gallery.scss"],
})
export class PortfolioGallery implements OnInit {
  public customizer: string = "all";
  items: GalleryItem[];
  imageData = data;

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox
  ) {}

  ngOnInit() {
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    const lightboxRef = this.gallery.ref("lightbox");
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }

  openGallery(val: string) {
    this.customizer = val;
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
  },
  {
    srcUrl: "https://isgenerji-17c7d.web.app/",
    previewUrl: "assets/images/portfolio/Energy.jpg",
  },
  {
    srcUrl: "https://minirezervasyon.com/",
    previewUrl: "assets/images/portfolio/minirez.jpg",
  },
];
