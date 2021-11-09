import { Component, OnInit } from '@angular/core';
import {LoanData} from "../../interface/loan-data";
import {LoanDataService} from "../../service/loan-data.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-loan-information',
  templateUrl: './user-loan-information.component.html',
  styleUrls: ['./user-loan-information.component.css']
})
export class UserLoanInformationComponent implements OnInit {

  loanData!: LoanData;

  constructor(private data: LoanDataService) {
  }

  ngOnInit(): void {
    this.data.currentLoanData.subscribe(loanData => this.loanData = loanData);
  }

  change() {
    this.data.changeData({
      amount: this.amountFormControl.value,
      duration: this.durationFormControl.value,
      interest: this.interestFormControl.value,
      inflation: this.inflationFormControl.value,
      cost: this.costFormControl.value,
      isIndexed: this.isIndexedFormControl.value == "true"
    })
  }

  // FORM CONTROL

  amountFormControl = new FormControl('',
    [
      Validators.required,
      Validators.min(0),
      Validators.pattern('[0-9]*')
    ]);

  durationFormControl = new FormControl('',
    [
      Validators.required,
      Validators.min(1),
      Validators.max(12 * 40), // max 40 yr loans
      Validators.pattern('[0-9]*')
    ])

  interestFormControl = new FormControl('',
    [
      Validators.min(0),
      Validators.required,  // doesnt accept empty input
      Validators.pattern('[0-9]*.[0-9]*') //regex: only decimal numbers accepted
    ]);

  costFormControl = new FormControl('',
    [
      Validators.min(0),
      Validators.required,  // doesnt accept empty input
      Validators.pattern('[0-9]*') //regex: only numbers accepted
    ]);
  inflationFormControl = new FormControl('',
    [
      Validators.required,  // doesnt accept empty input
      Validators.pattern('-*[0-9]*.[0-9]*') //regex: only decimal numbers accepted
    ]);

  isIndexedFormControl = new FormControl('', Validators.required);

}
