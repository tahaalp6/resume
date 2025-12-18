import { Component } from "@angular/core";

@Component({
  selector: "app-resume-about",
  imports: [],
  templateUrl: "./resume-about.html",
  styleUrls: ["./resume-about.scss"],
})
export class ResumeAbout {
  about = [
    {
      name: "Angular",
      timer: 100,
      exp: "5 Years Experince",
    },
    {
      name: "React",
      timer: 90,
      exp: "2 Years Experince",
    },
    {
      name: "Vue Js",
      timer: 85,
      exp: "2 Years Experince",
    },
    {
      name: "JavaScript TypeScript",
      timer: 95,
      exp: "5 Years Experince",
    },
    {
      name: "Node Js",
      timer: 90,
      exp: "2 Years Experince",
    },
    {
      name: "Bootstrap",
      timer: 90,
      exp: "5 Years Experince",
    },
    {
      name: "HTML CSS",
      timer: 100,
      exp: "5 Years Experince",
    },
    {
      name: "MongoDB",
      timer: 90,
      exp: "3 Years Experince",
    },
  ];
}
