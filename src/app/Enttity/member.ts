import { ERole } from "./erole";

export interface Member {
    gln: string | null;
    memberCode: string | null;
    name: string | null;
    mailAddress: string | null;
    nameSurname: string | null;
    phone: string | null;
    role: ERole;
    wStatus: boolean;
    cariAktarim: boolean;
    plasiyerCode: string | null;
    vatOffice: string | null;
    vatNumber: string | null;
    city: string | null;
    district: string | null;
    address: string | null;
    depoType: number | null;
    recDate: string | null;
    iskonto: number | null;
    apiPassword: string | null;
    accessFailedCount: number;
    locktime: string | null;
    refreshtoken:string |null
}