import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
  selector: "app-testimonial",
  imports: [CarouselModule, CommonModule],
  templateUrl: "./testimonial.html",
  styleUrls: ["./testimonial.scss"],
})
export class Testimonial {
  private modalService = inject(NgbModal);

  testimonialcarousel1 = [
    {
      quote: "assets/images/saas1/testimonail-dot.png",
      review: "LinkedIn",
      userImg: "public/assets/images/logo/favicon.png",
      userName: "React: Components, Context, and Accessibility",
      position: "Graphics Designer",
    },
    {
      quote: "assets/images/saas1/testimonail-dot.png",
      review:
        "Life before Company was very chaotic — we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      userImg: "assets/images/saas1/testi-profile.png",
      userName: "Elmer Harvy",
      position: "Graphics Designer",
    },
    {
      quote: "assets/images/saas1/testimonail-dot.png",
      review:
        "Life before Company was very chaotic — we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      userImg: "assets/images/saas1/testi-profile.png",
      userName: "Elmer Harvy",
      position: "Graphics Designer",
    },
  ];

  testimonialcarouselOptions1 = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
  };

  openVerticallyCentered(content: unknown) {
    this.modalService.open(content, { centered: true, size: "lg" });
  }

  testimonialcarousel2 = [
    {
      img: "assets/images/event/testimonial/L3-1.png",
    },
    {
      img: "assets/images/event/testimonial/L3-1.png",
    },
  ];

  testimonialCarouselOptions2 = {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: [
      '<img src="assets/images/music/gallery/gallery-icon/left.png">',
      '<img src="assets/images/music/gallery/gallery-icon/right.png">',
    ],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
  };

  testimonialcarousel3 = [
    {
      img: "assets/images/logo/linkedin_logo.jpg",
      name: "React: Components, Context, and Accessibility",
      designation: "LinkedIn",
      description: "",
    },
    {
      img: "assets/images/logo/hackerrank_logo.jpg",
      name: "CSS (Basic)",
      designation: "HackerRank",
      description: "",
    },
    {
      img: "assets/images/logo/linkedin_logo.jpg",
      name: "Node.js Essential Training",
      designation: "LinkedIn",
      description: "",
    },
    {
      img: "assets/images/logo/linkedin_logo.jpg",
      name: "Node.js: Web Servers, Tests, and Deployment",
      designation: "LinkedIn",
      description: "",
    },
    {
      img: "assets/images/logo/hackerrank_logo.jpg",
      name: "Problem Solving (Basic)",
      designation: "HackerRank",
      description: "",
    },
    {
      img: "assets/images/logo/linkedin_logo.jpg",
      name: "React Essential Training",
      designation: "LinkedIn",
      description: "",
    },
    {
      img: "assets/images/logo/linkedin_logo.jpg",
      name: "What is Generative AI?",
      designation: "LinkedIn",
      description: "",
    },
    {
      img: "assets/images/logo/hackerrank_logo.jpg",
      name: "JavaScript (Basic)",
      designation: "HackerRank",
      description: "",
    },
  ];

  teamcarouselOptions3 = {
    items: 8,
    margin: 30,
    autoHeight: true,
    nav: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
        margin: 10,
      },
      991: {
        items: 4,
        margin: 10,
      },
    },
  };

  testimonialcarousel4 = [
    {
      img: "assets/images/gym/testimonial/quote.png",
    },
    {
      img: "assets/images/gym/testimonial/quote.png",
    },
  ];

  testimonialCarouselOptions4 = {
    items: 1,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
  };

  testimonialcarousel5 = [
    {
      img: "assets/images/agency/testimonial/1.png",
      name: "Kolan Motto",
      designation: "CEO, Therat",
      review:
        "It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
    },
    {
      img: "assets/images/agency/testimonial/2.png",
      name: "Kolan Motto",
      designation: "CEO, Therat",
      review:
        "It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
    },
    {
      img: "assets/images/agency/testimonial/1.png",
      name: "Kolan Motto",
      designation: "CEO, Therat",
      review:
        "It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
    },
    {
      img: "assets/images/agency/testimonial/2.png",
      name: "Kolan Motto",
      designation: "CEO, Therat",
      review:
        "It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
    },
  ];

  testimonialCarouselOptions5 = {
    items: 3,
    margin: 65,
    nav: true,
    dots: false,
    navText: [
      '<img src="/assets/images/agency/testimonial/left.png">',
      '<img src="/assets/images/agency/testimonial/right.png">',
    ],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      575: {
        items: 2,
        margin: 10,
      },
      991: {
        items: 2,
        margin: 30,
      },
      1199: {
        items: 3,
        margin: 30,
      },
    },
  };
}
