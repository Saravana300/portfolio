import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { HomeSVGComponent } from "../../svg/navbarComponents/home-svg/home-svg.component";
import { ServicesComponent } from "../../svg/navbarComponents/services/services.component";
import { ResumeComponent } from "../../svg/navbarComponents/resume/resume.component";
import { SkillsComponent } from "../../svg/navbarComponents/skills/skills.component";
import { ContactsComponent } from "../../svg/navbarComponents/contacts/contacts.component";

@Component({
  selector: 'app-carousel-component',
  imports: [CarouselModule,HomeSVGComponent, ServicesComponent, ResumeComponent, SkillsComponent, ContactsComponent],
  templateUrl: './carousel-component.component.html',
  styleUrl: './carousel-component.component.scss'
})
export class CarouselComponentComponent{
    @ViewChild('owlCarousel', { static: false }) owlCarousel?: CarouselComponentComponent;

    customOptions : OwlOptions = {
        loop: true,
        items: 5,
        center: true,
        dots: false,
        nav: false, 
        autoWidth: true,
    };

}
