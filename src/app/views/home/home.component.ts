import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { PeriodicElementService } from 'src/app/services/PeriodicElement.service';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeriodicElementService]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['matricula', 'nome', 'date', 'cpf', 'email', 'actions'];
  dataSource!: PeriodicElement[];
  
  constructor(
    public dialog: MatDialog,
    public PeriodicElementService: PeriodicElementService
    ) {
      this.PeriodicElementService.getElement('usuarios')
      .subscribe((data: PeriodicElement[]) => {
        this.dataSource = data;
      });
    }

  ngOnInit(): void {
  }
  // modal que monta o formulario paracriação e edição do registros
  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent,{
      width: '250px',
      data: element === null ? {
        matricula: null,
        nome: '',
        date:'',
        cpf:'',
        email:''
      } : {
        id: element.id,
        matricula: element.matricula,
        nome: element.nome,
        date: element.date,
        cpf:  element.cpf,
        email: element.email
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
       // console.log(result);
        if (this.dataSource.map(p => p.id).includes(result.id)) {
          // console.log(result);
            this.PeriodicElementService.editElements(result, 'usuarios')
            .subscribe((data: PeriodicElement) => {
              const index = this.dataSource.findIndex(p => p.id === data.id);
              this.dataSource[index] = data; 
              this.table.renderRows();

            });

        }else{
          this.PeriodicElementService.createElements(result, 'usuarios')
          .subscribe((data: PeriodicElement)=>{
            this.dataSource.push(data);
            this.table.renderRows();
          });

        }
      }
    });

  }
  /*
  editando registro na tabela reaproveitando 
  metodo do modal com o formulario de edição. 
  */
  editElement(element: PeriodicElement): void{
    this.openDialog(element);
  }
  //deletando registro na tabela 
  deleteElement(matricula: number): void{
    this.PeriodicElementService.deleteElements(matricula,'usuarios')
    .subscribe(()=>{
       this.dataSource = this.dataSource.filter(p => p.id !== matricula)
    });
   
  }
}
