import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { LoanStepperComponent } from './components/loan-stepper/loan-stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { UserLoanInformationComponent } from './components/user-loan-information/user-loan-information.component';
import { UserLoanOverviewComponent } from './components/user-loan-overview/user-loan-overview.component';
import { UserLoanDownpaymentComponent } from './components/user-loan-downpayment/user-loan-downpayment.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import { LoanInfoInvalidComponent } from './components/loan-info-invalid/loan-info-invalid.component';
import { LoanOverviewDetailsComponent } from './components/loan-overview-details/loan-overview-details.component';
import { LoanOverviewMonthlyPaymentsComponent } from './components/loan-overview-monthly-payments/loan-overview-monthly-payments.component';
import { LoanOverviewInterestComponent } from './components/loan-overview-interest/loan-overview-interest.component';
import { LoanOverviewIndexationComponent } from './components/loan-overview-indexation/loan-overview-indexation.component';
import { LoanOverviewTotalCostComponent } from './components/loan-overview-total-cost/loan-overview-total-cost.component';
import { LoanOverviewComparisonComponent } from './components/loan-overview-comparison/loan-overview-comparison.component';
import { LoanOverviewPaymentChartComponent } from './components/loan-overview-payment-chart/loan-overview-payment-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ButtonComponent,
    LoanStepperComponent,
    UserLoanInformationComponent,
    UserLoanOverviewComponent,
    UserLoanDownpaymentComponent,
    LoanInfoInvalidComponent,
    LoanOverviewDetailsComponent,
    LoanOverviewMonthlyPaymentsComponent,
    LoanOverviewInterestComponent,
    LoanOverviewIndexationComponent,
    LoanOverviewTotalCostComponent,
    LoanOverviewComparisonComponent,
    LoanOverviewPaymentChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
