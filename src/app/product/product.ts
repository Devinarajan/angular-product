import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product:any[]=[]; //array declaration 

  constructor(private apiservice:Apiservice){}

  ngOnInit(){  //call the getproduct method from Apiservice
    this.apiservice.getproduct().subscribe((data:any)=>{ //for getting the data from the apiservice
      this.product=data; //assign data to product
      
    })

  }

}
