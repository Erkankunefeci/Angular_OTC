export interface Claims {
  
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid": string
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
  MemberName: string
  MemberCode: string
  NameSurname: string
  Password: string
  CariAktarim: string
  DepoType: string
  nbf: number
  exp: number
  iss: string
  aud: string
  Gln:string
}
