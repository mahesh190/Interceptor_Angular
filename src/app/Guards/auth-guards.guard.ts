import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../Services/admin-service.service';

@Injectable({
  providedIn: 'root'
})



export class AuthGuardsGuard implements CanActivate {
  constructor(private _ser:AdminServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      // if(!this._ser.isLoggenIn()){
      //   return false;
      // }
      return true;
  }
  
}
