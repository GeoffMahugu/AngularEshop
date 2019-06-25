import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { tap, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CanreadGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private snackbar: MatSnackBar) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
      take(1),
      map(user => user && this.auth.canRead(user) ? true : false), // <-- important line
      tap(canView => {
        if (!canView) {
          this.snackbar.open('Access Denied!', 'CLOSE', { duration: 3000 });

          console.error('Access denied. Must have permission to view content')
        }
      })
    );
  }

}
