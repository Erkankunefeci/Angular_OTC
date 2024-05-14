import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Claims } from '../Enttity/claims';


import { Member } from '../Enttity/member';
import { Token } from '../Enttity/token';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { CustomHttpService } from '../service/custom-http.service';
import { JwtService } from '../service/jwt.service';



function toDateTime(secs:any) {
  var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
  t.setUTCSeconds(secs);
  return t;
}
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 
  //const decodetoken = inject(JwtService);
  //const customservice = inject(CustomHttpService);
   decodetoken:JwtService;
   customservices!: CustomHttpService;
  constructor(private router: Router,private decodetokens:JwtService,private customservice:CustomHttpService) {this.decodetoken=decodetokens;customservice=this.customservices}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 
    var tok: Token = { tokens: "", mesaj: "", refreshtoken: "" };
  
    var mem: Member[] = [];
    var tokens=localStorage.getItem('token');
    var requestclone=request.clone({setHeaders:{Authorization:`Bearer ${tokens}` }})
   
    return next.handle(requestclone).pipe( tap(() => {},
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      console.log("error",err.status)
      if (err.status == 401) {
        var cl = JSON.stringify(this.decodetoken.DecodeToken(localStorage.getItem("token") || '{}'));

        var role = cl?.split(',')[2].split(':')[2].split('"')[1];
        // var mail=cl?.split(',')[1].split(':')[2].split('"')[1];
        var glns = cl?.split(',')[0].split(':')[2].split('"')[1];
    
        var cls = JSON.parse(cl) as Claims;
    
        
          console.log("cc", cl)
          
          this.customservice.makeGetRequest<Member[]>("/Member/GetMemberBYID?MemberCode=" + cls.MemberCode + "&GLN=" + glns).subscribe(x => {
            mem = x as unknown as Member[], console.log("mn", mem)
            //let queryParams = new HttpParams();
            // queryParams = queryParams.append("refreshtoken",JSON.stringify(mem[0].refreshtoken?.trim()));
            console.log("tt", JSON.stringify(mem[0].refreshtoken?.replaceAll('"', '')))
          //  this.customservice.makeGetRequestByParams<Token>("/SSO/refreshtoken", new HttpParams().set('refreshtoken', JSON.parse(JSON.stringify(mem[0].refreshtoken))))
           // .subscribe(x => (tok = x as Token, localStorage.setItem('token', tok.tokens), console.log("rr", tok)), error => console.log("post error:", error))
          });
        this.router.navigate(['login']);
      }//refreshtoken
   //return;
    }
  }));
    //return next.handle);
  }
}

