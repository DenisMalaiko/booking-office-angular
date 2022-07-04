import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import * as StoreGeneral from "../../store";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAuthorized = false;

    this.store.select("auth").subscribe(state => {
      let token = state.token;
      if(!token) {
        isAuthorized = false;
        this.router.navigate(["403"]);
      } else {
        isAuthorized = true;
      }
    });

    return isAuthorized;
  }
}
