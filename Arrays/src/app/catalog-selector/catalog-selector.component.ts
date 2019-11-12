import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-selector',
  templateUrl: './catalog-selector.component.html',
  styleUrls: ['./catalog-selector.component.scss']
})
export class CatalogSelectorComponent {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Men' },
      { item_id: 2, item_text: 'Women' },
      { item_id: 3, item_text: 'Kids' },
      { item_id: 4, item_text: 'Gift Items' },
      { item_id: 5, item_text: 'Shirts' },
      { item_id: 5, item_text: 'Pants' },
      { item_id: 5, item_text: 'Sarees' },{ item_id: 5, item_text: 'Sarees' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  
}


