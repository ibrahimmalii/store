import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './components/seller/seller.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TotalIncomeComponent } from './components/total-income/total-income.component';
// import { LineChartComponent } from './charts/line-chart/line-chart.component';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    TotalIncomeComponent,
    // LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
