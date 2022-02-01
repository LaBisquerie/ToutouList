import { TestBed } from '@angular/core/testing';

import { ToutouListService } from './toutou-list.service';

describe('ToutouListService', () => {
  let service: ToutouListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToutouListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
