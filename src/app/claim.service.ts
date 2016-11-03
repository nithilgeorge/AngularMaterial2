import { Injectable } from '@angular/core';
import{ Intimation} from './ClaimDetails';
import 'rxjs/add/operator/toPromise';

declare var $: any;
var param :Intimation;
@Injectable()
export class ClaimService {

  constructor() { }
  GetPolicyDetails ( policyno ) : Promise<any> 
  {
     return $.cordys.ajax({
        method: "GetPolicy_MasterObject",
        namespace: "http://schemas.cordys.com/OrientMotorClaimDemoMetadata",
        parameters: {
        Policy_No:policyno
    },
        dataType: '* json'})
        .done(function(response) {
            console.log(response);           
            });
  }
  ClaimIntimation(intimation :Intimation) : Promise<any> 
  {
      
      return $.cordys.ajax({
        method: "GetPolicy_MasterObject",
        namespace: "http://schemas.cordys.com/OrientMotorClaimDemoMetadata",
        parameters: {
                new : {
                        POLICYNUMBER: intimation.policyNo ,
                        INSUREDNAME :intimation.InsuredName,
                        EMAILID :intimation.Email, 
                        INS_MOBILE_NUM :intimation.PhoneNo ,
                        VEHICLENO : intimation.RegNo ,
                        H_PRD_VEHICLE_TYPE: intimation.Make ,
                        CRMDRIVERNAME : intimation.DriverName ,
                        DAMAGEDCOMP : intimation.Damage  ,
                        PROPERTY_DAMAGE : intimation.DamageTP  ,
                        INJURY : intimation.Injury  ,
                        LOSS_LOCATION_TYPE : intimation.Place  ,
                        DATE_OF_LOSS : intimation.loss_date
                        }

                    },
        dataType: '* json'})
        .done(function(response) {
            console.log(response);           
            });
  }
}
