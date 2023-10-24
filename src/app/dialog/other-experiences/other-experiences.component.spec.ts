import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExperiencesComponent } from './other-experiences.component';

describe('OtherExperiencesComponent', () => {
  let component: OtherExperiencesComponent;
  let fixture: ComponentFixture<OtherExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherExperiencesComponent]
    });
    fixture = TestBed.createComponent(OtherExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
