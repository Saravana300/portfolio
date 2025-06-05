import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaTestComponent } from './java-test.component';

describe('JavaTestComponent', () => {
  let component: JavaTestComponent;
  let fixture: ComponentFixture<JavaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
