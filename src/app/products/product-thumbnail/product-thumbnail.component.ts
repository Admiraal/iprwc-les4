import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';



@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  public boudewijn: Product;

  @Input() public index: number;
  @Input() public product: Product;
  @Output() addToCart = new EventEmitter<Product>();


  constructor() { }

  ngOnInit(): void {
  }

  public onAddToCart(): void{
    this.addToCart.emit(this.product);
  }

}

