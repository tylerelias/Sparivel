import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import {LoanData} from "../interface/loan-data";

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
    isIndexed: false
  });

  currentLoanData = this.loanData.asObservable();

  constructor() { }

  changeData(loanData: LoanData) {
    this.loanData.next(loanData);
  }
}
