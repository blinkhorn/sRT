import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinedResultComponent } from './refined-result.component';

describe('RefinedResultComponent', () => {
  let component: RefinedResultComponent;
  let fixture: ComponentFixture<RefinedResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinedResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
