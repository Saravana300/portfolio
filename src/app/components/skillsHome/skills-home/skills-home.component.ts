import { Component, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { SkillsComponent } from "../../svg/navbarComponents/skills/skills.component";
import { LineComponent } from "../../svg/line/line/line.component";
import { JavaComponent } from "../../svg/languages/java/java.component";
import { JavascriptComponent } from "../../svg/languages/javascript/javascript.component";
import { FabricComponent } from "../../svg/languages/fabric/fabric.component";
import { PhpComponent } from "../../svg/languages/php/php.component";
import { ReactComponent } from "../../svg/languages/react/react.component";
import { AngularComponent } from "../../svg/languages/angular/angular.component";
import { PegaComponent } from "../../svg/languages/pega/pega.component";
import { JavaTestComponent } from "../../svg/test/javaTest/java-test/java-test.component";
import { AngularTestComponent } from "../../svg/test/angulatTest/angular-test/angular-test.component";
import { JavaScriptTestComponent } from "../../svg/test/javaScriptTest/java-script-test/java-script-test.component";
import { FabricTestComponent } from "../../svg/test/fabricTest/fabric-test/fabric-test.component";
import { LaravelTestComponent } from "../../svg/test/laravelTest/laravel-test/laravel-test.component";
import { ReactTestComponent } from "../../svg/test/reactTest/react-test/react-test.component";
import { easing } from 'jquery';

@Component({
  selector: 'app-skills-home',
  imports: [SkillsComponent, LineComponent, JavaComponent, JavascriptComponent, FabricComponent, PhpComponent, ReactComponent, AngularComponent, PegaComponent, JavaTestComponent, AngularTestComponent, JavaScriptTestComponent, FabricTestComponent, LaravelTestComponent, ReactTestComponent],
  templateUrl: './skills-home.component.html',
  styleUrl: './skills-home.component.scss'
})
export class SkillsHomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('.skillsSection svg').height(150) && $('.skillsSection svg').width(150);
    gsap.fromTo(".skillHomeSvg #skillHomePath",
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        stroke: "#c13dcf",
        strokeWidth: 2.3,
        fill: 'none'
      },
      { strokeDashoffset: 0, duration: 5, yoyo: true, repeatDuration: 5, repeatDelay: 0., yoyoEase: "circ.in", repeat: -1, ease: "power1.out" }
    );

    $('.skillHomeSvg #skillsChildLine').map((i, e) => {
      gsap.fromTo(e,
        {
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          stroke: "#8b4ec1",
          strokeWidth: 2.3,
          fill: 'none'
        },
        { strokeDashoffset: 0, duration: 5, yoyo: true, repeatDuration: 5, repeatDelay: 0., yoyoEase: "circ.in", repeat: -1, ease: "circ.inOut" }
      );
    })
    gsap.fromTo('.circle-img #skillsRoundSvgOne',
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        stroke: "#c13dcf",
        // strokeWidth: 2.3,
        fill: 'none'
      },
      { strokeDashoffset: 0, duration: 5, yoyo: true, repeatDuration: 5, repeatDelay: 0., yoyoEase: "circ.in", repeat: -1, ease: "circ.inOut" }
    );

    gsap.fromTo('.circle-img #skillsRoundSvgTwo',
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        stroke: "#8b4ec1",
        // strokeWidth: 2.3,
        fill: 'none'
      },
      { strokeDashoffset: 0, duration: 5, yoyo: true, repeatDuration: 5, repeatDelay: 0., yoyoEase: "circ.in", repeat: -1, ease: "circ.inOut" }
    );
    gsap.fromTo('#skillsSvgTwo',
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        stroke: "#8b4ec1",
        // strokeWidth: 2.3,
        fill: 'none'
      },
      { strokeDashoffset: 0, duration: 5, yoyo: true, repeatDuration: 5, repeatDelay: 0., yoyoEase: "circ.in", repeat: -1, ease: "circ.inOut" }
    );

    // gsap.fromTo('#lineSkillsChild',
    //   { 
    //     strokeDasharray: 1000,
    //     strokeDashoffset: 1000,
    //     stroke: "#8b4ec1",
    //     strokeWidth: 2.3,
    //     fill: 'none'  
    //   },
    //   { strokeDashoffset: 0, duration: 5, repeat: -1, ease: "circ.inOut" }
    // );



  }
}
