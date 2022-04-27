import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PeriodicCart } from 'src/app/models/PeriodicElement';

@Component({
  selector: 'app-element-cart',
  templateUrl: './element-cart.component.html',
  styleUrls: ['./element-cart.component.css']
})
export class ElementCartComponent implements OnInit {
  element!: PeriodicCart;
  constructor( 
    @Inject(MAT_DIALOG_DATA) 
    public data: PeriodicCart,
    public dialogRef: MatDialogRef<ElementCartComponent>,) {}

  ngOnInit(): void {
 
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
