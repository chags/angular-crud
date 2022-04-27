import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PeriodicCart, PeriodicProduct } from 'src/app/models/PeriodicElement';
import { PeriodicElementService } from 'src/app/services/PeriodicElement.service';
import { ElementCartComponent } from 'src/app/shared/element-cart/element-cart.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [PeriodicElementService]
})


export class ShopComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['img','position', 'product', 'price', 'quantity', 'actions'];
  dataSource!: PeriodicProduct[];
  DataCart!: PeriodicCart[];
 
  constructor(
    public dialog: MatDialog,
    public PeriodicElementService: PeriodicElementService
    ) {
      this.PeriodicElementService.getProduct('produtos')
      .subscribe((data: PeriodicProduct[]) => {
        this.dataSource = data
      });
    }

  ngOnInit(): void {
  }

openDialog(element: PeriodicProduct): void {
  const dialogRef = this.dialog.open(ElementCartComponent, {
    width: '250px',
    data: element === null ?{
      img: null,
      position: null,
      product: null,
      price: null,
      quantity: null
    }: {
      id: element.id,
      img: element.img,
      position: element.position,
      product: element.product,
      price: element.price,
      quantity: ""
    }

  });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.dataSource.map(p => p.position).includes(result.position)){
          this.PeriodicElementService.createCart(result, 'carrinho')
          .subscribe((data:PeriodicCart) => {
            this.DataCart[result.position - 1] = result;         
            this.table.renderRows();
          });

        }else{
          this.PeriodicElementService.createCart(result, 'carrinho')
          .subscribe((data: PeriodicCart) =>{
            this.DataCart.push(result);
            this.table.renderRows();
          });

        }

      }
    });
  }
  BuyElement(element: PeriodicProduct){
    this.openDialog(element);
  }
}

