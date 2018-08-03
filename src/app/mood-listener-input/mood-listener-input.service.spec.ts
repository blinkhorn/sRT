import { TestBed, inject } from '@angular/core/testing';

import { MoodListenerInputService } from './mood-listener-input.service';

describe('MoodListenerInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoodListenerInputService]
    });
  });

  it('should be created', inject([MoodListenerInputService], (service: MoodListenerInputService) => {
    expect(service).toBeTruthy();
  }));
});
