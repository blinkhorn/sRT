import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodInputComponent } from './mood-input.component';

describe('MoodInputComponent', () => {
  let component: MoodInputComponent;
  let fixture: ComponentFixture<MoodInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
