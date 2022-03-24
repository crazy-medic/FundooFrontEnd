import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './app/Services/AuthGaurd/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authguard:AuthguardService,private route:Router){}
  canActivate():boolean{
    if(!this.authguard.getToken()){
      this.route.navigateByUrl("/login")
    }
    return this.authguard.getToken();
  }
  
}
