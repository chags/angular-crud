import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementCartComponent } from 'src/app/shared/element-cart/element-cart.component';

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
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['img','position', 'product', 'price', 'quantity', 'actions'];
  dataSource = ELEMENT_DATA;
  dataCheckout = CHECKOUT_DATA;
 
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementCartComponent, {
      width: '250px',
      data: element === null ?{
        img: null,
        position: null,
        product: null,
        price: null,
        quantity: null
      }: {
        img: element.img,
        position: element.position,
        product: element.product,
        price: element.price,
        quantity: element.quantity = 1
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.dataSource.map(p => p.position).includes(result.position)){
          //this.dataCheckout[result.position - 1] = result;
          this.dataCheckout = result;         
          //this.table.renderRows();
        }else{
          this.dataSource.push(result);
          this.table.renderRows();
        }

      }
    });
  }
  BuyElement(element: PeriodicElement){
    this.openDialog(element);
  }
}
