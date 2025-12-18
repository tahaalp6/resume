import { Component } from "@angular/core";

@Component({
  selector: "app-resume-services",
  imports: [],
  templateUrl: "./resume-services.html",
  styleUrls: ["./resume-services.scss"],
})
export class ResumeServices {
  service = [
    {
      img: "assets/images/resume/service-exprience/1.png",
      type: "UI Design",
      description: "Creating visually appealing and user-friendly interfaces for web and mobile applications.",
    },
    {
      img: "assets/images/resume/service-exprience/icons8-ux-100.png",
      type: "UX Design",
      description: "Enhancing user satisfaction by improving the usability and accessibility of digital products.",
    },
    {
      img: "assets/images/resume/service-exprience/icons8-web-design-64.png",
      type: "Web Design",
      description: "Designing and developing responsive and engaging websites that meet client needs.",
    },
    {
      img: "assets/images/resume/service-exprience/4.png",
      type: "Frame Works",
      description: "Utilizing modern frameworks to build efficient and scalable web applications.",
    },
    {
      img: "assets/images/resume/service-exprience/icons8-git-50.png",
      type: "Git proficient",
      description: "Managing code versions and collaborating effectively using Git and GitHub.",
    },
    {
      img: "assets/images/resume/service-exprience/icons8-responsive-64.png",
      type: "Responsive Design",
      description: "Creating designs that adapt seamlessly to various screen sizes and devices.",
    },
    {
      img: "assets/images/resume/service-exprience/icons8-api-100.png",
      type: "API Integration",
      description: "Integrating third-party APIs to enhance application functionality and user experience.",
    },
    {
      img: "assets/images/resume/service-exprience/icons8-development-64.png",
      type: "SDLC",
      description: "Following Software Development Life Cycle methodologies to ensure efficient project delivery.",
    },
  ];
}
