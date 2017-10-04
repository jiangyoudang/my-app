import { TestBed, inject, async } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceService]
    });
  }));

  it('should be created', inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
