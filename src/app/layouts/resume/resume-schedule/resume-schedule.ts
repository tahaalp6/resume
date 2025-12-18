import { Component } from "@angular/core";

@Component({
  selector: "app-resume-schedule",
  imports: [],
  templateUrl: "./resume-schedule.html",
  styleUrls: ["./resume-schedule.scss"],
})
export class ResumeSchedule {
  schedule = [
    {
      name: "Front end Developer",
      img: "assets/images/resume/icon/logo_rtk.png",
      description:
        "Raiffeisen-Tours RT-Reisen GmbH / rtk (Munich, Germany) is a major travel and tourism company. I led the frontend development (Angular 14) and operational management of their core management system, Kairos. My work included design corrections, Karma testing, bug fixes, implementing 2-factor authentication, and integrating various libraries. I also developed responsive landing pages using HTML, CSS, and TypeScript.For the last year, I was the Operational Leader for a 4-person frontend team. I managed bi-weekly sprints and used coaching strategies to boost team efficiency, ensuring smooth project flow through weekly coordination with the project manager and backend team.",
      toTime: "May 2022",
      endTime: "Current",
    },
    {
      name: "Entrepreneurship and Full Stack Develope",
      img: "assets/images/resume/icon/logo-kozmo.png",
      description:
        "Kozmovitalya Health. Kozmovitalya is a company that sells health, supplements and cosmetics on internet markets. I am the founder of this company, which started its aims by achieving high success in a short time. But because I wanted to advance in my own field, I transferred the company and it still continues to work actively.",
      toTime: "Feb 2021",
      endTime: "Oct 2021",
    },
    {
      name: "Frontend Developer Intern",
      img: "assets/images/resume/icon/Akdeniz_Üniversitesi_logosu.IMG_0838.png",
      description:
        "Akdeniz University BAUM. Akdeniz University BAUM(Computer Science Research and Application Center); Providing computer support for academic research and educational activities at national and international level by university lecturers, contributing to the modern level of administration, student affairs and health services by providing computer support to the faculties, colleges and other units of the University.",
      toTime: "Aug 2020",
      endTime: "Nov 2020",
    },
    {
      name: "Frontend Developer Intern",
      img: "assets/images/resume/icon/teknodev_logo.jpg",
      description:
        "Teknodev. Teknodev is an international IT and web/app development since 2011. They have been helping organizations of custom projects to improve IT strategies. Their services are IT consultancy, software consultancy, app development. The name of the project we are developing in my working process is Spica using Angular, Nodejs and MongoDB. Spica is a CMS (Content Management System). I mostly worked on creating components suitable for the design, data bindings between components and connecting services on the Angular side.",
      toTime: "Jul 2019",
      endTime: "Aug 2019",
    },
    {
      name: "Software Developer Intern",
      img: "assets/images/resume/icon/kod-a-20200225153948.png",
      description:
        "Kod-A Bilişim. Kod-A develops document archival and management technologies and provides document processes, records management and digitization outsourcing services. Kod-A develops software-based technologies and products in document scanning, image processing, document archiving and document management. While Angular is used on the web, they develop their own applications with C#. While Angular is used on the web, they develop their own applications with C#. I took part in the accuracy optimization and saving of scanned files to the database using C#.",
      toTime: "Aug 2018",
      endTime: "Oct 2018",
    },
  ];
}
