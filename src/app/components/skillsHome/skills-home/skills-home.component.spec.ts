import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHomeComponent } from './skills-home.component';

describe('SkillsHomeComponent', () => {
  let component: SkillsHomeComponent;
  let fixture: ComponentFixture<SkillsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
