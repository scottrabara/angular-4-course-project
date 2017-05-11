import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenanigansComponent } from './shenanigans.component';

describe('ShenanigansComponent', () => {
  let component: ShenanigansComponent;
  let fixture: ComponentFixture<ShenanigansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShenanigansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenanigansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
