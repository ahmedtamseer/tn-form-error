import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnFormErrorComponent } from './tn-form-error.component';

describe('TnFormErrorComponent', () => {
  let component: TnFormErrorComponent;
  let fixture: ComponentFixture<TnFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
