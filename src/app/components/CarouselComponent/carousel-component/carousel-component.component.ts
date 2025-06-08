import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/all';
import { CarouselComponent, CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { HomeSVGComponent } from "../../svg/navbarComponents/home-svg/home-svg.component";
import { ServicesComponent } from "../../svg/navbarComponents/services/services.component";
import { ResumeComponent } from "../../svg/navbarComponents/resume/resume.component";
import { SkillsComponent } from "../../svg/navbarComponents/skills/skills.component";
import { ContactsComponent } from "../../svg/navbarComponents/contacts/contacts.component";

@Component({
    selector: 'app-carousel-component',
    imports: [CarouselModule, HomeSVGComponent, ServicesComponent, ResumeComponent, SkillsComponent, ContactsComponent],
    templateUrl: './carousel-component.component.html',
    styleUrl: './carousel-component.component.scss'
})
export class CarouselComponentComponent implements AfterViewInit {
    @ViewChild('owlCarousel', { static: false }) owlCarousel!: CarouselComponent;

    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

        $('.parentSection').map((i: number, event: any) => {
            // gsap.to(event, {
            //     scrollTrigger: {
            //         trigger: event,
            //         start: event[0].getBoundingClientRect().top,
            //         onEnter: () => {
            //             this.owlCarousel.next();
            //         },
            //         onEnterBack: () => {
            //             this.owlCarousel.prev();
            //         },
            //         markers: true // optional for debugging
            //     },
            //     // dummy animation just to activate ScrollTrigger
            //     opacity: 1,
            //     duration: 0.001
            // });

            ScrollTrigger.create({
                trigger: event,
                start: "top center",
                end: "bottom center",
                onEnter: () => this.owlCarousel.to(`owl-slide-${i}`),
                onEnterBack: () => this.owlCarousel.to(`owl-slide-${i}`),
            });
        })

        $('.horizontal-wrapper').map((i: number, event: any) => {
            gsap.to('.horizontal-wrapper', {
                scrollTrigger: {
                    onUpdate: () => {
                        if ($('.horizontal-wrapper')[0].getBoundingClientRect().top < 0 && $('.horizontal-wrapper')[0].getBoundingClientRect().top > -500) {
                            if ($('.horizontal-wrapper')[0].getBoundingClientRect().left > -960) {
                                this.owlCarousel.to(`owl-slide-1`);
                            } else {
                                this.owlCarousel.to(`owl-slide-2`);
                            }
                        }
                    }
                }
            })
        })

        gsap.to('.resume.parentSection', {
            scrollTrigger: {
                onUpdate: () => {
                    if ($('.resume.parentSection')[0].getBoundingClientRect().top < 1475 && $('.resume.parentSection')[0].getBoundingClientRect().top > -812) {
                        this.owlCarousel.to(`owl-slide-3`);
                    }
                }
            }
        })

        // let owlCarouselTemp = this.owlCarousel
        // $('.contact.parentSection')[0].addEventListener('scroll', function (e) {
        //     if ($('.contact.parentSection')[0].getBoundingClientRect().top < 200) {
        //         owlCarouselTemp.to(`owl-slide-3`);
        //     }
        // })


        gsap.to('.contact.parentSection', {
            scrollTrigger: {
                trigger: ".contact.parentSection",
                start: 'top center',
                end: "+=" + ($('.contact.parentSection')[0].getBoundingClientRect().height * 3),
                onUpdate: () => {
                    if ($('.contact.parentSection')[0].getBoundingClientRect().top < 400 && $('.contact.parentSection')[0].getBoundingClientRect().top > 0) {
                        this.owlCarousel.to(`owl-slide-4`);
                    }
                }
            },
            opacity: 1,
            duration: 0.001
        });



    }
    customOptions: OwlOptions = {
        loop: true,
        items: 5,
        center: true,
        nav: false,
        dots: false,
        autoWidth: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
    };

    carouselClickableFunc(event: any, index: number) {
        this.owlCarousel.to(`owl-slide-${index}`);
        const target = document.querySelectorAll('.parentSection')[index];
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target,
                    offsetY: 60
                },
                duration: 1,
                ease: 'power2.out'
            });
        }
    }

    onTranslated(data: SlidesOutputData): void {
        $('.owl-item.active').find('svg').removeClass('activeCarousel') && $('.owl-item.active.center').find('svg').addClass('activeCarousel');
    }


}
