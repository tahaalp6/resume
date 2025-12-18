import { Component } from "@angular/core";

@Component({
  selector: "app-resume-counter",
  imports: [],
  templateUrl: "./resume-counter.html",
  styleUrls: ["./resume-counter.scss"],
})
export class ResumeCounter {
  counter = [
    {
      count: new Date().getFullYear() - 1998,
      img: "assets/images/resume/icon/1.png",
      type: "Age",
    },
    {
      count: 8,
      img: "assets/images/resume/icon/icons8-certification-100.png",
      type: "Certified Courses",
    },
    {
      count: "C1",
      img: "assets/images/resume/icon/icons8-language-100.png",
      type: "English Level",
    },
    {
      count: "5 Years",
      img: "assets/images/resume/icon/3.png",
      type: "Experience",
    },
  ];
}
