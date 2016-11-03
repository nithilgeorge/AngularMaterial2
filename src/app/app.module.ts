import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {Material2AppAppComponent} from './app.component';
import {ClaimService} from './claim.service';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [Material2AppAppComponent],
  bootstrap: [Material2AppAppComponent],
  providers: [ClaimService]
})
export class MaterialAppModule { }
