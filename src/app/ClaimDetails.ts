
export class Policy {
    PolicyNo: string;
    InsuredName: string;
    Email: string;
    PhoneNo: string;
    RegNo: string;
    Make: string;
    Year: number;
}
export class Intimation {
    policyNo: string;
    InsuredName: string;
    Email: string;
    PhoneNo: string;
    RegNo: string;
    Make: string;
    Year:  number;
    DriverName: string;
    DriverDOB : Date;
    permission : string;
    Damage : string;
    DamageTP : string;
    InsuranceComTP : string;
    Injury : string;
    Place : string;
    loss_date: Date;
    status:string = "Notified to Insurance Company";


}