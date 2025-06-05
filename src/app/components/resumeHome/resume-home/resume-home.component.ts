import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-resume-home',
  imports: [],
  templateUrl: './resume-home.component.html',
  styleUrl: './resume-home.component.scss'
})
export class ResumeHomeComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap.set("#linesvg", { opacity: 1 })
    gsap.set("#motionSVG", {
      scale: 0.3, transformOrigin: "center center"
    });
    gsap.set("#tractor", { transformOrigin: "50% 50%" });
    let rotateTo = gsap.quickTo("#tractor", "rotation"),
      prevDirection = 0;

    gsap.to("#motionSVG", {
      scrollTrigger: {
        trigger: "#motionPath",
        start: '60%',
        end: () => "+=" + $("#motionPath")[0].getBoundingClientRect().height,
        scrub: 1.5,
        markers: false,
        onUpdate: self => {
          if (prevDirection !== self.direction) {
            rotateTo(self.direction === 1 ? 90 : -90);
            prevDirection = self.direction;
          }
        }
      },
      ease: "linear",
      immediateRender: true,
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
      },
    });
  }

}
