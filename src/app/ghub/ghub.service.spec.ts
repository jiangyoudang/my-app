import { TestBed, inject } from '@angular/core/testing';

import { GhubService } from './ghub.service';

describe('GhubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GhubService]
    });
  });

  it('should be created', inject([GhubService], (service: GhubService) => {
    expect(service).toBeTruthy();
  }));
});
