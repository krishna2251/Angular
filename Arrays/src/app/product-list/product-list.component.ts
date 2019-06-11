import { Component, OnInit } from '@angular/core';
import { Sku } from '../data';
import { ProductDataService } from '../product-data.service';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    //sku:FormGroup;
    sku: Sku[]=[];
  constructor(private productDataService: ProductDataService,
    fb:FormBuilder) { }

  ngOnInit() {
    
    this.productDataService.retriveSku().subscribe(
      data=>{
        this.sku=<Sku[]>data;
        console.log("result sku is",this.sku);
      },
      error=>console.log(error)
    );
  }

  
}

