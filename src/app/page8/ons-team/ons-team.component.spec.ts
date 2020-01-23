import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsTeamComponent } from './ons-team.component';

describe('OnsTeamComponent', () => {
  let component: OnsTeamComponent;
  let fixture: ComponentFixture<OnsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnsTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
