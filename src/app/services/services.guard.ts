import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanActivate {
  constructor(private globalSvc: GlobalService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!localStorage.getItem('token') ) {
        
        this.router.navigateByUrl('/login'); // go to login if not authenticated
        
        return false;
      
      }
    return true;
  }
  
}
