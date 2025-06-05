import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricTestComponent } from './fabric-test.component';

describe('FabricTestComponent', () => {
  let component: FabricTestComponent;
  let fixture: ComponentFixture<FabricTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
