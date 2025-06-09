import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileComponentComponent } from './mobile-component.component';

describe('MobileComponentComponent', () => {
  let component: MobileComponentComponent;
  let fixture: ComponentFixture<MobileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
