import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../enviourments/enviourment';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const backendUrl = environment.BACKEND_URL;

  const sessionToken = isBrowser() ? getCookie('hanko') : null;
  if (!sessionToken) {
    return router.parseUrl('/');
  }

  try {
    const response = await fetch(`${backendUrl}/validate`, {
      credentials: "include",
    });

    if (!response.ok) throw new Error('Session validation failed');

    return true;
  } catch (error) {
    console.error('AuthGuard error:', error);
    return router.parseUrl('/');
  }
};

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
