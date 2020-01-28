import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHubComponent } from './start-hub.component';

describe('StartHubComponent', () => {
  let component: StartHubComponent;
  let fixture: ComponentFixture<StartHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
