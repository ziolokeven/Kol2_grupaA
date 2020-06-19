import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersRZComponent } from './components/orders-rz/orders-rz.component';
import { OrdersItemRZComponent } from './components/orders-item-rz/orders-item-rz.component';
import { OrdersDetailsRZComponent } from './orders-details-rz/orders-details-rz.component';
import {RZDataService} from "./services/rz-data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrdersRZComponent,
    OrdersItemRZComponent,
    OrdersDetailsRZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RZDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
