import { Component, OnInit } from '@angular/core';
import {RZDataService} from "../../services/rz-data.service";

@Component({
  selector: 'orders-rz',
  templateUrl: './orders-rz.component.html',
  styleUrls: ['./orders-rz.component.css']
})
export class OrdersRZComponent implements OnInit {
  public item$: any;
  items$: any;
  constructor(private service : RZDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getALL().subscribe(response =>{
      this.item$ = response;
    })
  }

}
