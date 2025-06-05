import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSVGComponent } from './home-svg.component';

describe('HomeSVGComponent', () => {
  let component: HomeSVGComponent;
  let fixture: ComponentFixture<HomeSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
