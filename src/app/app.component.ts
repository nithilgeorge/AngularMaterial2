import {Component} from '@angular/core';
import {ClaimService} from './claim.service';
import {Policy, Intimation } from './ClaimDetails';


@Component({
  selector: 'material2-app-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class Material2AppAppComponent {
  isDarkTheme: boolean = false;
  policy = new Policy();
  intimation = new Intimation();
  UserPolicies = [];
  selectedList:string="--Please select a policy number--" 
  constructor(private claimservice: ClaimService) { 
    this.GetPolicyNumbersByUserID();
    }
  GetPolicyNumbersByUserID(){
    let UserID="Admin";
    this.claimservice.GetPolicyNumbersForUserID(UserID).then(response=>{
      var obj=response.tuple;
            let result = response.tuple;
         //  console.log(response);
                for (let i = 0; i < result.length; i++) { 
                  this.UserPolicies.push(result[i].old.Policy_Master.Policy_No);
                  //console.log(this.UserPolicies);
                  if(i == 0) {
                    this.selectedList = this.UserPolicies[i];
                    this.getpolicyDetails(this.selectedList);
                  }
                }
    });
  }
  getpolicyDetails(value)
  {
    
     this.claimservice.GetPolicyDetails(value).then( response=>{
            let field = response.tuple.old.Policy_Master;
            this.policy.PolicyNo=field.Policy_No;
            this.policy.InsuredName = field.Insured_Name;
            this.policy.Email = field.Reporter_Email;
            this.policy.PhoneNo = field.Contact_Number;
            this.policy.RegNo = field.Vehicle_No;
            this.policy.Make = field.Vehicle_Make;
            this.policy.Year = field.Vehicle_Year; 
             console.log(this.policy.Year);
  });
  }
  submit()
  {
    this.intimation.policyNo=this.policy.PolicyNo;
    this.intimation.InsuredName=this.policy.InsuredName;
    this.intimation.Email=this.policy.Email;
    this.intimation.PhoneNo=this.policy.PhoneNo;
    this.intimation.RegNo=this.policy.RegNo;
    this.intimation.Make=this.policy.Make;
    this.intimation.Year=this.policy.Year;

    this.claimservice.ClaimIntimation(this.intimation);
  }
}
