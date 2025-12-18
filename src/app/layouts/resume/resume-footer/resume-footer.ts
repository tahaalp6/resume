import { Component } from "@angular/core";

import { TapToTop } from "../../../shared/components/tap-to-top/tap-to-top";

@Component({
  selector: "app-resume-footer",
  imports: [TapToTop],
  templateUrl: "./resume-footer.html",
  styleUrls: ["./resume-footer.scss"],
})
export class ResumeFooter {
  public currentYear: number = new Date().getFullYear();
}
