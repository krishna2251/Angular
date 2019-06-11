import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent{
  
  public isDisabledProducts: boolean = true;
  //public isDisabledOrders: boolean = true;

  public defaultItemOptionName: { optionName: string, optionId: number } = { optionName: "Select category", optionId: null };

  public defaultItemOptionValue: { optionValue: string, valueId: number } = { optionValue: "Select product", valueId: null };


  public dataOption: Array<{ optionName: string, optionId: number }> = [
      { optionName: "color", optionId: 1 },
      { optionName: "size", optionId: 2 }
      
  ];

  public dataOptionValue: Array<{ optionValue: string, valueId: number,optionId:number }> = [
      { optionValue: "Red", valueId: 1,optionId: 1 },
      { optionValue: "Green", valueId: 2,optionId: 1 },
      { optionValue: "Yellow", valueId: 2,optionId: 1 },
      { optionValue: "Blue", valueId: 2,optionId: 1 },
      { optionValue: "Medium ", valueId: 3,optionId: 2 },
      { optionValue: "Large ", valueId: 3,optionId: 2  },
      { optionValue: "Small ", valueId: 3,optionId: 2  },
      { optionValue: "Extra large ", valueId: 3,optionId: 2  }
      
  ];

  
  public dataResultProducts: Array<{ optionValue: string, valueId: number,optionId:number }>;

  public selectedOptionName: { optionName: string, optionId: number};
  public selectedOptionValue: { optionValue: string, valueId: number};
  
  handleCategoryChange(value) {
    this.selectedOptionName = value;
    this.selectedOptionValue = undefined;
    

    if(value.optionId == this.defaultItemOptionName.optionId){
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataOptionValue.filter((s) => s.optionId === value.optionId )
    }

  }

  handleProductChange(value) {
    this.selectedOptionValue = value;
    
    if(value.valueId == this.defaultItemOptionValue.valueId){

    } else {
     
    }
  }


}
