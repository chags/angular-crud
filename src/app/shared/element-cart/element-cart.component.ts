import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/views/shop/shop.component';

@Component({
  selector: 'app-element-cart',
  templateUrl: './element-cart.component.html',
  styleUrls: ['./element-cart.component.css']
})
export class ElementCartComponent implements OnInit {
  element!: PeriodicElement;
  constructor( 
    
    @Inject(MAT_DIALOG_DATA) 
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementCartComponent>,) {}

  ngOnInit(): void {
  }
  onClick(): void {
    this.dialogRef.close();
  }
}
