import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomHttpService } from '../service/custom-http.service';
import { JwtService } from '../service/jwt.service';
import { CommonModule } from '@angular/common';
import { GeneralSetting } from '../Enttity/general-setting';
import { Token } from '../Enttity/token';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.min.css'
})
export class LoginComponent implements OnInit {
  genel: GeneralSetting[]=[];
  private tok: Token = { tokens: "", mesaj: "" , refreshtoken:""};
  loginForms = new FormGroup({
    loginMailAddress: new FormControl('',[Validators.required,Validators.email]),
    loginPassword: new FormControl('',Validators.required),
    //retrunUrl: new FormControl('')
  });
  constructor(private metaService: Meta,private customservice:CustomHttpService, private title: Title, private _activatedRoute: ActivatedRoute, private route: Router,private decodetoken:JwtService) {
    this.metaService.addTag({ charset: 'UTF-8' });
    this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' });
    this.metaService.addTag({ name: 'rating', content: 'all' });
    this.metaService.addTag({ name: 'author', content: 'işte site' });
    this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html; charset=x-mac-turkish' });
    this.metaService.addTag({ httpEquiv: 'Content-Type', content: 'text/html; charset=windows-1254' });
    this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' });
    this.title.setTitle("OTC Depom Ecza Deposu Anonim Şirketi");
    
  }
  ngOnInit(): void {
    this.customservice.makeGetRequest("/SSO/GetGeneral").subscribe(x=>
      {this.genel=x as GeneralSetting[];
      console.log("genel",x); 
      this.genel= this.genel.filter(x=>x.filter=="iletisim")
    console.log("gn",this.genel)
    });
  }
functFormSubmit():boolean {

 // var dd=this._activatedRoute.snapshot.paramMap.get("returnUrl");
var dd='';
this._activatedRoute.paramMap.subscribe(params=>{dd=params.get("returnUrl");console.log("urd",dd)
})
    if( this.loginForms.valid)
     {
     //debugger;
     this.customservice.makeGetRequest<Token>("/Member/TokenSign/?loginMailAddress="+this.loginForms.value.loginMailAddress+"&loginPassword="+this.loginForms.value.loginPassword)
     .subscribe({next: (x)=> {this.tok = x as Token ; console.log("token",x); console.log("girdi",this.tok); 
      if(this.tok!=null)
     {
      localStorage.setItem("token",this.tok.tokens);
      console.log("storage",localStorage.getItem("token"))

      
      console.log("dd",dd);
      if(dd==null || dd=='undefined') { this.route.navigate(['']) ; }
      else{ this.route.navigate([dd],{replaceUrl:true});debugger; }
     // this.route.navigate([this._activatedRoute.snapshot.paramMap.get("returnUrl")==null?['/home']:this._activatedRoute.snapshot.paramMap.get("returnUrl")]);
      
      //debugger
      //return false;
       
     }},error:(v)=>{console.log("hata",v);return false}})
     
   
  return true;
  }

   }

}
