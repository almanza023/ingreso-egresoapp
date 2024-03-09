
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  const router=inject(Router);
  return auth.isAuth().pipe(
    tap(estado=> {
      if(!estado) {router.navigate(['/login'])}
    })
  );
};
