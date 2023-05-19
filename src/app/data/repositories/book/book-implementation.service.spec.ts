import { TestBed } from '@angular/core/testing';

import { BookImplementationService } from './book-implementation.service';

describe('BookImplementationService', () => {
  let service: BookImplementationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookImplementationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
