import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import { BehaviorSubject} from "rxjs";
import {LoanDataService} from "../../service/loan-data.service";
import {LoanData} from "../../interface/loan-data";

@Component({
  selector: 'app-loan-stepper',
  templateUrl: './loan-stepper.component.html',
  styleUrls: ['./loan-stepper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class LoanStepperComponent implements OnInit {

  loanData!: LoanData;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private data: LoanDataService) {
    this.data.currentLoanData.subscribe(loanData => this.loanData = loanData);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({

    });
  }
}
