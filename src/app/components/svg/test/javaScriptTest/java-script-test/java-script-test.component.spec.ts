import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptTestComponent } from './java-script-test.component';

describe('JavaScriptTestComponent', () => {
  let component: JavaScriptTestComponent;
  let fixture: ComponentFixture<JavaScriptTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaScriptTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaScriptTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
