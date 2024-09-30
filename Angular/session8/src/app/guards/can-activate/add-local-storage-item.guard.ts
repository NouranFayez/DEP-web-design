import { CanActivateFn } from '@angular/router';

export const addLocalStorageItemGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')) localStorage.setItem('userName' , 'Ahmed')
  return true;
};
