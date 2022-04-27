export interface PeriodicElement {
    id: number;
    matricula: number;
    nome: string;
    date: string;
    cpf: number;
    email: string;
  }
  export interface PeriodicProduct {
    id: number,
    product: string;
    position: number;
    price: number;
    quantity: number;
    img: string;

  }
  export interface PeriodicCart {
    id: number,
    product: string;
    position: number;
    price: number;
    quantity: number;
    img: string;

  }