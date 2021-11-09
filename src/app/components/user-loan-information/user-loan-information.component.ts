import {Component, OnInit} from '@angular/core';
import {LoanData} from "../../interface/loan-data";
import {LoanDataService} from "../../service/loan-data.service";
import {FormControl, Validators} from "@angular/forms";
import {NonIndexedService} from "../../service/non-indexed-calculator.service";
import {IndexedService} from "../../service/indexed-calculator.service";

@Component({
    selector: 'app-user-loan-information',
    templateUrl: './user-loan-information.component.html',
    styleUrls: ['./user-loan-information.component.css']
})
export class UserLoanInformationComponent implements OnInit {

    isIndexed!: boolean;
    loanData!: LoanData;
    nonIndexedLoan: NonIndexedService;
    indexedLoan: IndexedService;

    constructor(private data: LoanDataService) {
        this.nonIndexedLoan = new NonIndexedService(0, 0, 0, 0);
        this.indexedLoan = new IndexedService(0, 0, 0, 0, 0);
    }

    ngOnInit(): void {
        this.data.currentLoanData.subscribe(loanData => this.loanData = loanData);
        this.data.currentNonIndexedLoan.subscribe(nonIndexedLoan => this.nonIndexedLoan = nonIndexedLoan);
        this.data.currentIndexedLoan.subscribe(indexedLoan => this.indexedLoan = indexedLoan);
    }

    change() {
        this.data.changeData({
            amount: this.amountFormControl.value,
            duration: this.durationFormControl.value,
            interest: this.interestFormControl.value,
            inflation: this.inflationFormControl.value,
            cost: this.costFormControl.value,
            isIndexed: this.isIndexed,
            isValid: this.isValid()
        })
        if (this.isValid()) {
            this.calculateLoans()
        }
    }

    isValid() {
        return (
            this.amountFormControl.valid &&
            this.inflationFormControl.valid &&
            this.costFormControl.valid &&
            this.interestFormControl.valid &&
            this.durationFormControl.valid
        )
    }

    async calculateLoans() {
        await this.nonIndexedLoan.NonIndexedCalculation();
        this.data.changeNonIndexedLoan(this.nonIndexedLoan);
        // this.indexedLoan.IndexedCalculation();
        // this.data.changeIndexedLoan(this.indexedLoan)
    }

    // FORM CONTROLS
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
}
