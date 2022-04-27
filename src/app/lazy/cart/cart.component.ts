import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatTable } from '@angular/material/table';
import { PeriodicCart } from 'src/app/models/PeriodicElement';
import { PeriodicElementService } from 'src/app/services/PeriodicElement.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [PeriodicElementService]
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['img','position', 'product', 'price', 'quantity', 'actions'];
  dataSource! : PeriodicCart[];


  constructor(

    public PeriodicElementService: PeriodicElementService
    ) {
      this.PeriodicElementService.getCart('carrinho')
      .subscribe((data: PeriodicCart[]) => {
        this.dataSource = data
        console.log(data);
      });
    }

  ngOnInit(): void {
  }

  deleteCart(position: number): void{
    this.PeriodicElementService.deleteCart(position,'carrinho')
    .subscribe(()=>{
       this.dataSource = this.dataSource.filter(p => p.id !== position)
    });
}
}
