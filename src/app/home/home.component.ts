import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
name='Abcd'
price=20
  products:any
constructor(private prod:ProductService){}
ngOnInit(): void{
  this.products = this.prod.getProducts();
}

}
