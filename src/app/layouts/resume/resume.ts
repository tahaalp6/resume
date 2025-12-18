import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

import { ResumeAbout } from "./resume-about/resume-about";
import { ResumeCounter } from "./resume-counter/resume-counter";
import { ResumeFooter } from "./resume-footer/resume-footer";
import { ResumeHeader } from "./resume-header/resume-header";
import { ResumeNav } from "./resume-nav/resume-nav";
import { ResumePortfolio } from "./resume-portfolio/resume-portfolio";
import { ResumePricing } from "./resume-pricing/resume-pricing";
import { ResumeSchedule } from "./resume-schedule/resume-schedule";
import { ResumeServices } from "./resume-services/resume-services";
import { ResumeSubscribe } from "./resume-subscribe/resume-subscribe";
import { Contact } from "./resume-contact/contact";
import { EducationAbout } from "./education-about/education";

@Component({
  selector: "app-resume",
  imports: [
    ResumeAbout,
    ResumeCounter,
    ResumeFooter,
    ResumeHeader,
    ResumeNav,
    ResumePortfolio,
    ResumePricing,
    ResumeSchedule,
    ResumeServices,
    ResumeSubscribe,
    Contact,
    EducationAbout,
  ],
  templateUrl: "./resume.html",
  styleUrls: ["./resume.scss"],
})
export class Resume implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data["title"]);
  }
}
