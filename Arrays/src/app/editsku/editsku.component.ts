import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Sku } from '../data';

@Component({
  selector: 'app-editsku',
  templateUrl: './editsku.component.html',
  styleUrls: ['./editsku.component.scss']
})
export class EditskuComponent implements OnInit {

  sku:Sku[];
  constructor(private router: Router,
    private produDataService: ProductDataService) { }

  ngOnInit() {
  }

  update(id){
    //this.produDataService.updateSku()
    //this.router.navigate({'sku',id})
  }

}
