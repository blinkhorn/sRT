import { TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MoodListenerInputService } from './mood-listener-input.service';

describe('MoodListenerInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MoodListenerInputService]
    });
  });

  it('should be created', inject([MoodListenerInputService], (service: MoodListenerInputService) => {
    expect(service).toBeTruthy();
  }));
});
