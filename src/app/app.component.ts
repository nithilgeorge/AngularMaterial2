import {Component} from '@angular/core';
import {ClaimService} from './claim.service';
import {Policy} from './ClaimDetails';

@Component({
  selector: 'material2-app-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class Material2AppAppComponent {
  isDarkTheme: boolean = false;
  policy = new Policy();
  constructor(private claimservice: ClaimService) {
        
    }
  getpolicyDetails(event)
  {
    let value = event.target.value;
     this.claimservice.GetPolicyDetails(value).then( response=>{
            let field = response.tuple.old.Policy_Master;
            this.policy.InsuredName = field.Insured_Name;
            this.policy.Email = field.Reporter_Email;
            this.policy.PhoneNo = field.Contact_Number;
            this.policy.RegNo = field.Vehicle_No;
            this.policy.Make = field.Vehicle_Make;
            this.policy.Year = field.Vehicle_Year;  
  });
  }
}
