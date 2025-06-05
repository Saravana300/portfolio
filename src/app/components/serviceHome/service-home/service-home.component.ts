import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import $ from 'jquery';
import 'jquery-ui';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-service-home',
  imports: [],
  templateUrl: './service-home.component.html',
  styleUrl: './service-home.component.scss'
})
export class ServiceHomeComponent implements AfterViewInit {
  @ViewChild('shineLine') shineLine!: ElementRef;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)


    $('.cardParent').map((i: any, e: any) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: ".parentSection.service",
          // pin: true,
          scrub: 1.5,
          start: 'top 60%',
          end: () => "top 55%",
          markers: false,
        },
        duration: 2,
        scale: 1,
        height: '50px',
        opacity: 0,
        rotationZ: 20,
        ease: 'ease.in',
        onComplete: () => {
          $('.line').map((i: any, e: any) => {
            gsap.to(e, {
              scale: 1.5,
              left: "200%",
              duration: 3,
              repeat: -1,
              repeatDelay: 1,
            });
          });
        }
      })
    })
  }
}
