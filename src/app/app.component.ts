import {Component} from '@angular/core';
import {ClaimService} from './claim.service';

@Component({
  selector: 'material2-app-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class Material2AppAppComponent {
  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];
  constructor(private claimservice: ClaimService) {
        
    }
  getpolicyDetails(event)
  {
    let value = event.target.value;
     this.claimservice.GetPolicyDetails(value).then( response=>{
            console.log(response);
            
    });
  }
}
