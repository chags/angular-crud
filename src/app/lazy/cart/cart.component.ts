import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  product: string;
  position: number;
  price: number;
  quantity: number;
  img: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {img:'/assets/vida.jpg' , position: 1, product: 'Vida de Jesus', price: 120.00, quantity: 4000},
  {img:'/assets/desejado.jpg' , position: 2, product: 'Desejado de todas as Nações', price: 80.00, quantity: 3000},
  {img:'/assets/conflito.jpg' , position: 3, product: 'O Grande conflito', price: 25.00, quantity: 3000},
];

const CHECKOUT_DATA: PeriodicElement[] = [
  {img:'/assets/vida.jpg' , position: 1, product: 'Vida de Jesus', price: 120.00, quantity: 4000}
] 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['img','position', 'product', 'price', 'quantity', 'actions'];
  dataSource = ELEMENT_DATA;
  dataCheckout = CHECKOUT_DATA;

  constructor() { }

  ngOnInit(): void {
  }



}
