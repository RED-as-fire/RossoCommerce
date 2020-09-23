import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirizzoComponent } from './indirizzo.component';

describe('IndirizzoComponent', () => {
  let component: IndirizzoComponent;
  let fixture: ComponentFixture<IndirizzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndirizzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirizzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
