import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

declare var $: any;

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
}
