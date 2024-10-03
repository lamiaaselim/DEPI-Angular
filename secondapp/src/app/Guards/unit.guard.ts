import { CanActivateFn } from '@angular/router';

export const unitGuard: CanActivateFn = (route, state) => {
  return true;
};
