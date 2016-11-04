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
      //console.log(JSON.stringify(intimation));
      return $.cordys.ajax({
        method: "UpdateMoClaimNotifDetails",
        namespace: "http://schemas.cordys.com/OrientMotorClaimDemoMetadata",
        parameters: {
            tuple:{
                new : {
                    MO_CLAIM_NOTIF_DETAILS:{
                        POLICYNUMBER: intimation.policyNo ,
                        INSUREDNAME :intimation.InsuredName,
                        EMAILID :intimation.Email, 
                        INS_MOBILE_NUM :intimation.PhoneNo ,
                        VEHICLENO : intimation.RegNo ,
                        H_PRD_VEHICLE_TYPE: intimation.Make ,
                        MODEL :intimation.Year,
                        CRMDRIVERNAME : intimation.DriverName ,
                        DRIVERDETAILS : intimation.DriverDOB,
                        AUTORIZED_TO_DRIVE : intimation.permission,
                        DAMAGEDCOMP : intimation.Damage  ,
                        PROPERTY_DAMAGE : intimation.DamageTP  ,
                        TP_INSURANCE_COMPANY: intimation.InsuranceComTP,
                        INJURY : intimation.Injury  ,
                        LOSS_LOCATION_TYPE : intimation.Place  ,
                        DATE_OF_LOSS : intimation.loss_date,
                        STATUS :intimation.status
                    }
                }
            }
        },
        dataType: '* json'})
        .done(function(response) {
            console.log(response);           
            });
            
  }
}
