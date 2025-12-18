import { Component } from "@angular/core";

import { PortfolioGallery } from "../../portfolio-metro/portfolio-gallery/portfolio-gallery";

@Component({
  selector: "app-resume-portfolio",
  imports: [PortfolioGallery],
  templateUrl: "./resume-portfolio.html",
  styleUrls: ["./resume-portfolio.scss"],
})
export class ResumePortfolio {}
