import { Component, OnInit } from '@angular/core';
import {LoanDataService} from "../../service/loan-data.service";
import {LoanData} from "../../interface/loan-data";
import {NonIndexedService} from "../../service/non-indexed-calculator.service";
import {IndexedService} from "../../service/indexed-calculator.service";

@Component({
  selector: 'app-user-loan-overview',
  templateUrl: './user-loan-overview.component.html',
  styleUrls: ['./user-loan-overview.component.css']
})
export class UserLoanOverviewComponent implements OnInit {

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
