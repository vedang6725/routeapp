import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
name='Abcd'
price=20
  products:any
  productData:any
constructor(private prod:ProductService,private apiser:ApiserviceService){}
ngOnInit(): void{
  this.products = this.prod.getProducts()
  this.apiser.getProducts().subscribe(data=>{
    this.productData = data
    console.log(this.productData)
  })
}

  
}

