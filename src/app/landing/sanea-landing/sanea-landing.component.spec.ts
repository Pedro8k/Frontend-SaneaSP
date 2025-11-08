import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaneaLandingComponent } from './sanea-landing.component';

describe('SaneaLandingComponent', () => {
  let component: SaneaLandingComponent;
  let fixture: ComponentFixture<SaneaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaneaLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaneaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
