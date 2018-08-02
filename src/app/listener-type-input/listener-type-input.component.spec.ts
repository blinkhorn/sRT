import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerTypeInputComponent } from './listener-type-input.component';

describe('ListenerTypeInputComponent', () => {
  let component: ListenerTypeInputComponent;
  let fixture: ComponentFixture<ListenerTypeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerTypeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
