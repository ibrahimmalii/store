import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

  }

  responseData : any;
  firstTable : any;
  secondTable : any;
  thirdTable : any;
  currentArr : any;

  getData(id : string, startDate : string, endDate:string){
    if(id){
      this.http.get(`http://localhost:3000/transactions?page=0&id=${id}&startDate=${startDate}&endDate=${endDate}`).subscribe(res=>{
        this.responseData = res;
        this.firstTable = res;
        this.firstTable = this.firstTable.splice(0, 2);
        this.currentArr = this.firstTable;
        this.secondTable = res;
        this.secondTable = this.secondTable.splice(0,2);
        this.thirdTable = res;
        this.thirdTable = this.thirdTable.splice(0,2);
      });
    }else{
      alert('please insert seller id first');
    }
  };

  paginateTable (arr : any){
    console.log(arr);
    return this.currentArr = arr;
  }

}


