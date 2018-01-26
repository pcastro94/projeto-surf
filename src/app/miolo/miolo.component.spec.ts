import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MioloComponent } from './miolo.component';

describe('MioloComponent', () => {
  let component: MioloComponent;
  let fixture: ComponentFixture<MioloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MioloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MioloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
