import { ERole } from "./erole";

export class uye {
    public readonly GLN!: string | null;
    public readonly MemberCode: string | undefined;
    public readonly Name!: string;
    public readonly MailAddress!: string;
    public readonly NameSurname!: string;
    public readonly  Phone!: string |null;
    public readonly  Role!: ERole;
    public readonly WStatus!: boolean;
    public readonly CariAktarim!: boolean;
    public readonly  PlasiyerCode!: string |null ;
    public readonly VatOffice!: string |null;
    public readonly  VatNumber!: string |null;
    public readonly City!: string|null;
    public readonly District!: string|null ;
    public readonly Address!: string|null
    public readonly  DepoType!: number ;
    public readonly   RecDate!: string |null;
    public readonly Iskonto!: number | null;
    public readonly  ApiPassword!: string | null;
    public readonly AccessFailedCount!: number;

    constructor(GLN: string ,
        memberCode: string,
        name: string ,
        mailAddress: string ,
        nameSurname: string ,
        phone: string |null ,
        role: ERole,
        wStatus: boolean,
        cariAktarim: boolean,
        plasiyerCode: string  ,
        vatOffice: string | null ,
        vatNumber: string | null,
        city: string | null ,
        district: string |null ,
        address: string |null,
        depoType: number ,
        recDate: string | null,
        iskonto: number ,
        apiPassword: string | null,
        accessFailedCount: number
       ) {
            this.GLN=GLN;
            this.MemberCode=memberCode;
            this.Name=name;
            this.MailAddress=mailAddress;
            this.NameSurname=nameSurname;
            this.Phone=phone;
            this.Role=role;
            this.WStatus=wStatus;
            this.CariAktarim=cariAktarim;
            this.PlasiyerCode=plasiyerCode;
            this.VatOffice=vatOffice;
            this.VatNumber=vatNumber;
            this.City=city;
            this.District=district;
            this.Address=address;
            this.DepoType=depoType;
            this.RecDate=recDate;
            this.Iskonto=iskonto;
            this.ApiPassword=apiPassword;
            this.AccessFailedCount=accessFailedCount;
         
           

        }
}