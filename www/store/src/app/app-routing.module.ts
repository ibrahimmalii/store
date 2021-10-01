import { SellerComponent } from './components/seller/seller.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotalIncomeComponent } from './components/total-income/total-income.component';

const routes: Routes = [
  {path : 'transactions', component : SellerComponent},
  {path : 'totalIncome', component : TotalIncomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
