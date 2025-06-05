import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelTestComponent } from './laravel-test.component';

describe('LaravelTestComponent', () => {
  let component: LaravelTestComponent;
  let fixture: ComponentFixture<LaravelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaravelTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaravelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
