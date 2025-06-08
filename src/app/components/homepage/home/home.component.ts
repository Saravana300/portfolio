import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Injectable,
  inject,
} from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import { AngularComponent } from '../../svg/languages/angular/angular.component';
import { DotNetComponent } from '../../svg/languages/dot-net/dot-net.component';
import { FabricComponent } from '../../svg/languages/fabric/fabric.component';
import { JavaComponent } from '../../svg/languages/java/java.component';
import { JavascriptComponent } from '../../svg/languages/javascript/javascript.component';
import { PegaComponent } from '../../svg/languages/pega/pega.component';
import { PhpComponent } from '../../svg/languages/php/php.component';
import { ReactComponent } from '../../svg/languages/react/react.component';
import { SplitTextService } from '../../../service/split-text.service';
import { CoffeeComponent } from '../../svg/coffee/coffee.component';

@Component({
  selector: 'app-home',
  imports: [
    AngularComponent,
    DotNetComponent,
    FabricComponent,
    JavaComponent,
    JavascriptComponent,
    PegaComponent,
    PhpComponent,
    ReactComponent,
    CoffeeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  private splitText = inject(SplitTextService);
  @ViewChild('name') name!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('secondDescription')
  secondDescription!: ElementRef;
  @ViewChild('angular') angular!: ElementRef;
  @ViewChild('dotNet') dotNet!: ElementRef;
  @ViewChild('fabric') fabric!: ElementRef;
  @ViewChild('java') java!: ElementRef;
  @ViewChild('js') js!: ElementRef;
  @ViewChild('pega') pega!: ElementRef;
  @ViewChild('php') php!: ElementRef;
  @ViewChild('react') react!: ElementRef;
  @ViewChild('fullStack') fullStack!: ElementRef;


  gsapValue!: GSAPTween;
  gsapJson: Array<object> = [];
  ProgrammingLanguage: Array<object> = [];
  descriptionClass: boolean = false;
  secondDescriptionClass: boolean = false;

  ngAfterViewInit() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
    this.ProgrammingLanguage = [
      {
        eleAngular: this.angular.nativeElement,
      },
      {
        eledotNet: this.dotNet.nativeElement,
      },
      {
        fabric: this.fabric.nativeElement,
      },
      {
        java: this.java.nativeElement,
      },
      {
        js: this.js.nativeElement,
      },
      {
        pega: this.pega.nativeElement,
      },
      {
        php: this.php.nativeElement,
      },
      {
        react: this.react.nativeElement,
      },
    ];
    this.splitText.splitText(this.name.nativeElement, 'innerNameChar');

    if (window.outerWidth > 1024) {
      this.ProgrammingLanguage.forEach((event, index) => {
        this.gsapJson.push({
          event: (this.gsapValue = gsap.to(Object.values(event)[0], {
            duration: 8,
            repeat: -1,
            delay: index,
            motionPath: {
              path: [
                { x: 285, y: 150 },
                { x: 0, y: 300 },
                { x: -285, y: 150 },
                { x: 0, y: 0 },
              ],
              curviness: 1,
            },
            ease: 'linear',
            onUpdate: () => {
              this.ProgrammingLanguage.forEach((e, i) => {
                Object.values(e)[0].getBoundingClientRect().top < 370
                  ? (Object.values(e)[0].style.zIndex = 90)
                  : (Object.values(e)[0].style.zIndex = 99);
              });
            },
          })),
        });
      });
    }

    gsap.set(this.name.nativeElement, { perspective: 400 });

    gsap.from('#innerNameChar', {
      duration: 2,
      opacity: 0,
      // delay: 1,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back.out',
      stagger: 0.1,
      onComplete: () => {
        this.descriptionClass = true;
        this.splitText.splitText(
          this.description.nativeElement,
          'innerDescriptionChar'
        );
        gsap.from('#innerDescriptionChar', {
          duration: 0.8,
          opacity: 0,
          scale: 0,
          x: 80,
          rotationY: 180,
          // transformOrigin: '0% 50% -50',
          ease: 'back.out',
          stagger: 0.03,
          onComplete: () => {
            this.secondDescriptionClass = true;
            this.splitText.splitText(
              this.secondDescription.nativeElement,
              'innerSecondDescriptionChar'
            );
            gsap.from('#innerSecondDescriptionChar', {
              duration: 1,
              opacity: 0,
              scale: 0,
              x: 80,
              rotationY: 180,
              // transformOrigin: '0% 50% -50',
              ease: 'back.out',
              stagger: 0.03,
            });
          },
        });
      },
    });
  }
}
