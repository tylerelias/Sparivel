import { Injectable } from '@angular/core';
import {LoanDataService} from "./loan-data.service";
import {LoanData} from "../interface/loan-data";
import {NonIndexedService} from "./non-indexed-calculator.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatedNonIndexedService {

  loanData!: LoanData;
  nonIndexedLoan!: NonIndexedService;

  constructor(private data: LoanDataService) {
    this.data.currentLoanData.subscribe(loanData => this.loanData = loanData);
  }


}
