import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegaComponent } from './pega.component';

describe('PegaComponent', () => {
  let component: PegaComponent;
  let fixture: ComponentFixture<PegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
