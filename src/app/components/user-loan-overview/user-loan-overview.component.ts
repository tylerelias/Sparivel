import { Component, OnInit } from '@angular/core';
import {LoanDataService} from "../../service/loan-data.service";
import {LoanData} from "../../interface/loan-data";

@Component({
  selector: 'app-user-loan-overview',
  templateUrl: './user-loan-overview.component.html',
  styleUrls: ['./user-loan-overview.component.css']
})
export class UserLoanOverviewComponent implements OnInit {

  loanData!: LoanData;

  constructor(private data: LoanDataService) {
  }

  ngOnInit(): void {
    this.data.currentLoanData.subscribe(loanData => this.loanData = loanData);
  }

}
