import { Component, OnInit } from '@angular/core';
import {LoanData} from "../../interface/loan-data";
import {LoanDataService} from "../../service/loan-data.service";
import {NonIndexedService} from "../../service/non-indexed-calculator.service";
import {IndexedService} from "../../service/indexed-calculator.service";

@Component({
  selector: 'app-loan-overview-monthly-payments',
  templateUrl: './loan-overview-monthly-payments.component.html',
  styleUrls: ['./loan-overview-monthly-payments.component.css']
})
export class LoanOverviewMonthlyPaymentsComponent implements OnInit {

  loanData!: LoanData;
  nonIndexedLoan!: NonIndexedService;
  indexedLoan!: IndexedService;

  constructor(private data: LoanDataService) {
  }

  ngOnInit(): void {
    this.data.currentLoanData.subscribe(loanData => this.loanData = loanData);
    this.data.currentNonIndexedLoan.subscribe(nonIndexedLoan => this.nonIndexedLoan = nonIndexedLoan);
    this.data.currentIndexedLoan.subscribe(indexedLoan => this.indexedLoan = indexedLoan);
  }

}
