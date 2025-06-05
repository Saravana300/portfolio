import gsap from 'gsap';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  inject,
  viewChild,
} from '@angular/core';
import { FaviconComponent } from '../svg/favicon/favicon.component';
import { SplitTextService } from '../../service/split-text.service';
import $, { Tween } from 'jquery';
import { HomeSVGComponent } from '../svg/navbarComponents/home-svg/home-svg.component';
import { ServicesComponent } from '../svg/navbarComponents/services/services.component';
import { ContactsComponent } from '../svg/navbarComponents/contacts/contacts.component';
import { ResumeComponent } from '../svg/navbarComponents/resume/resume.component';
import { SkillsComponent } from '../svg/navbarComponents/skills/skills.component';
import { AngularComponent } from '../svg/languages/angular/angular.component';
import { CarouselComponentComponent } from "../CarouselComponent/carousel-component/carousel-component.component";

@Component({
  selector: 'app-navbar',
  imports: [
    FaviconComponent,
    HomeSVGComponent,
    ServicesComponent,
    ContactsComponent,
    ResumeComponent,
    SkillsComponent,
    AngularComponent,
    CarouselComponentComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})

export class NavbarComponent implements AfterViewInit {
  private splitText = inject(SplitTextService);
  @ViewChild('portfolio') portfolio!: ElementRef;

  ngAfterViewInit() {
    this.splitText.splitText(
            this.portfolio.nativeElement,
            'innerPortfolioChar'
          );

    $('.portfolio ')
      .children()
      .map((event, val) => {
        if (val.innerHTML == 'i') {
          $(val).addClass('iAnimationClass');
        }
      });

      gsap.from('#innerPortfolioChar', {
        duration: 2,
        opacity: 0,
        scale: 1,
        rotationX: 450,
        ease: 'back.out',
        stagger: 0.1,
        onComplete: () => {
          if ($('.iAnimationClass').length != 0) {
            gsap.to('.iAnimationClass', {
              rotationX: 180,
              duration: 1,
              delay: 3,
              yoyo: true,
              repeat: -1,
              transformOrigin: '0px 25px',
              ease: 'power2.inOut',
            });
          }
        },
      });

    // $('.centerNavBlocks').ready(() => {
    //     this.navSwiper = new Swiper('.navbar .swiper',{
    //         // loop: true,
    //         // slidesPerView: 3.5,
    //         // spaceBetween: 10,
    //         // grabCursor: true,
    //         // centeredSlides: true,
    //         slidesPerView: 5,
    //         spaceBetween: 10,
    //         centeredSlides: true,
    //         loop: true,
    //         initialSlide: 0,
            
    //     })
    // })
  }
}
