import { Routes } from "@angular/router";

export const Layout: Routes = [
  {
    path: "resume",
    loadComponent: () => import("./resume/resume").then((m) => m.Resume),
    data: {
      title: "Resume | Unice Landing Page",
    },
  },
];
