import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import {LoanData} from "../interface/loan-data";
import {IndexedService} from "./indexed-calculator.service";
import {NonIndexedService} from "./non-indexed-calculator.service";

@Injectable({
  providedIn: 'root'
})
export class LoanDataService {

  private loanData = new BehaviorSubject<LoanData>({
    amount: 0,
    duration: 0,
    interest: 0.0,
    inflation: 0.0,
    cost: 0,
    isIndexed: false,
    isValid: false
  });

  private indexedLoan = new BehaviorSubject<IndexedService>(new IndexedService(0, 0, 0, 0,0));
  private nonIndexedLoan = new BehaviorSubject<NonIndexedService>(new NonIndexedService(0, 0, 0, 0));

  currentLoanData = this.loanData.asObservable();
  currentIndexedLoan = this.indexedLoan.asObservable();
  currentNonIndexedLoan = this.nonIndexedLoan.asObservable();

  constructor() { }

  changeData(loanData: LoanData) {
    this.loanData.next(loanData);
    if(loanData.isValid) {
      this.updateIndexedLoans(loanData);
      this.updateNonIndexedLoans(loanData);
    }
  }

  changeIndexedLoan(indexedLoan: IndexedService) {
    this.indexedLoan.next(indexedLoan);
  }

  changeNonIndexedLoan(nonIndexedLoan: NonIndexedService) {
    this.nonIndexedLoan.next(nonIndexedLoan);
  }

  updateIndexedLoans(loanData: LoanData) {
    this.indexedLoan.next(new IndexedService(
        loanData.amount,
        loanData.duration,
        loanData.interest,
        loanData.inflation,
        loanData.cost
    ))
    // this.indexedLoan.value.IndexedCalculation();
  }

  updateNonIndexedLoans(loanData: LoanData) {
    this.nonIndexedLoan.next(new NonIndexedService(
        loanData.amount,
        loanData.duration,
        loanData.interest,
        loanData.cost
    ))
    // this.nonIndexedLoan.value.NonIndexedCalculation();
  }
}
