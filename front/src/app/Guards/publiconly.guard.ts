import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const publiconlyGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.hasToken()) {
        router.navigate(['/home']);
        return false;
    }

    return true;
};
