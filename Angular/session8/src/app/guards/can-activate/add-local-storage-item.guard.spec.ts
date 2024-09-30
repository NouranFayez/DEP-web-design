import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { addLocalStorageItemGuard } from './add-local-storage-item.guard';

describe('addLocalStorageItemGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => addLocalStorageItemGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
