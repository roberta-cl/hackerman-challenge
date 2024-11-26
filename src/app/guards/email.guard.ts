import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const emailGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const email = localStorage.getItem('userEmail');

  if (email) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
