import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products=[
  {
    id:1,
    name:"Iphone",
    desc:"Black"
  },{
    id:2,
    name:"Vivo",
    desc:"Blue"
  },{
    id:3,
    name:"Samsung",
    desc:"Green"
  },{
    id:4,
    name:"Oppo",
    desc:"Violet"
  }
]

getProducts(){
  return this.products
}
  constructor() { }
}
