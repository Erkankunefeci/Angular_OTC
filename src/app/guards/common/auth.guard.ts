import { CanActivateFn, Router } from '@angular/router';
import { _isAuthenticated } from '../../service/common/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  console.log("gg",_isAuthenticated)
  if (!_isAuthenticated) {

    console.log("uer",state.url)
    router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    //this.toastrService.message("Oturum açmanız gerekiyor!", "Yetkisiz Erişim!", {
      //messageType: ToastrMessageType.Warning,
      //position: ToastrPosition.TopRight
    //})
  }
  //else { router.navigate([state.url]); }
  return true;
};
