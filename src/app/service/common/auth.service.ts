import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../../Enttity/token';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomHttpService } from '../custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tok: Token = { tokens: "", mesaj: "", refreshtoken: "" };
  constructor(private customservice: CustomHttpService, private jwtHelper: JwtHelperService, private _activatedRoute: ActivatedRoute, private route: Router) { }

  identityCheck() {

    const token: string = localStorage.getItem("token") || 'null';

    // 
    //const expirationDate: Date = this.jwtHelper.getTokenExpirationDate(token);
    // debugger
    let expired: boolean;
    let decodeToken: any;
    try {
      expired = this.jwtHelper.isTokenExpired(token);
      decodeToken = this.jwtHelper.decodeToken(token);
    
      console.log("decode", decodeToken)
    } catch {
      expired = true;

    }
    if (expired == true && token != 'null') {
      this.customservice.makeGetRequest<Token>("/Member/TokenSign/?loginMailAddress=" + decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] + "&granttype=refresh")
        .subscribe({
          next: (x) => {
            this.tok = x as Token; console.log("token", x); console.log("süre doldu", this.tok);
            if (this.tok != null) {
              localStorage.setItem("token", this.tok.tokens);
              console.log("storage", localStorage.getItem("token"))
              _isAuthenticated = true;
             // this.route.navigate([this._activatedRoute.snapshot.paramMap.get("returnUrl") == null ? [""] : this._activatedRoute.snapshot.paramMap.get("returnUrl")])
              //debugger


            }
          }, error: (v) => { console.log("hata", v);_isAuthenticated=false }
        })


    } else if (expired == true && token == null) {
      
      _isAuthenticated = false;
    } else if (expired == false && token != null) { _isAuthenticated = true;  }
    console.log("exp", expired)
    // _isAuthenticated = token != null && !expired;
  }

  get isAuthenticated(): boolean {
    return _isAuthenticated;
  }
}

export let _isAuthenticated: boolean;