import { Component, OnInit } from '@angular/core';

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
];



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit {
  displayedColumns: string[] = ['img','position', 'product', 'price', 'quantity', 'actions'];
  dataSource = ELEMENT_DATA;
 
  constructor() { }

  ngOnInit(): void {
  }

}
