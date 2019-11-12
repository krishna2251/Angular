import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'; 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CatalogSelectorComponent } from './catalog-selector/catalog-selector.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';
//import { Component } from '@angular/core';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
//import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { RouterModule } from '@angular/router';
import { EditskuComponent } from './editsku/editsku.component';



@NgModule({
  declarations: [
    AppComponent,
    CatalogSelectorComponent,
    ProductListComponent,
    DropdownsComponent,
    HomeNavbarComponent,
    EditskuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    DropDownsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
