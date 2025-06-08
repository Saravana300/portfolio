import { AfterViewInit, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../homepage/home/home.component';
// import { CommonModule } from '@angular/common';
import { flush } from '@angular/core/testing';
import { SplitTextService } from '../../service/split-text.service';
import { ServicesComponent } from "../svg/navbarComponents/services/services.component";
import { ServiceHomeComponent } from "../serviceHome/service-home/service-home.component";
import { SkillsHomeComponent } from "../skillsHome/skills-home/skills-home.component";
import { ResumeHomeComponent } from "../resumeHome/resume-home/resume-home.component";
import { ContactHomeComponent } from "../contactHome/contact-home/contact-home.component";
import { ScrollTrigger } from 'gsap/all';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, NavbarComponent, HomeComponent, ServicesComponent, ServiceHomeComponent, SkillsHomeComponent, ResumeHomeComponent, ContactHomeComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})

export class ParentComponent implements AfterViewInit {
  progressInitComplete: boolean = false;
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger)
    if (window.outerWidth > 768) {
      this.progressInitComplete = false;
      gsap.to(".parentSection.home", {
        scrollTrigger: {
          trigger: ".parentSection.home",
          scrub: 1.5,
          start: 'top 30%',
          end: () => "+=" + $(".parentSection.home")[0].getBoundingClientRect().height,
          markers: false,
        },
        ease: "ease.in",
        y: -100,
        opacity: 0,
      });
      if (window.outerWidth > 1024) {
        gsap.to(".horizontal-wrapper", {
          xPercent: -100,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".horizontal-wrapper",
            pin: true,
            scrub: 1.5,
            end: () => "+=" + $(".horizontal-wrapper")[0].offsetWidth,
            markers: false,
          }
        });
      }
    } else {
      this.progressInitComplete = true;
    }
  }
}
