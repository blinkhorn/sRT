import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodListenerInputComponent } from './mood-listener-input.component';

describe('MoodListenerInputComponent', () => {
  let component: MoodListenerInputComponent;
  let fixture: ComponentFixture<MoodListenerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodListenerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodListenerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
