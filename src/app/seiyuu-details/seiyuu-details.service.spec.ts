import { TestBed } from '@angular/core/testing';

import { SeiyuuDetailsService } from './seiyuu-details.service';

describe('SeiyuuDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeiyuuDetailsService = TestBed.get(SeiyuuDetailsService);
    expect(service).toBeTruthy();
  });
});
