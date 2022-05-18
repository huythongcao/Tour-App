import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedRouterOutletComponent } from './named-router-outlet.component';

describe('NamedRouterOutletComponent', () => {
  let component: NamedRouterOutletComponent;
  let fixture: ComponentFixture<NamedRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
