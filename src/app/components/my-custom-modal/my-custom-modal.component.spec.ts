import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomModalComponent } from './my-custom-modal.component';

describe('MyCustomModalComponent', () => {
  let component: MyCustomModalComponent;
  let fixture: ComponentFixture<MyCustomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
