import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Directive({
  selector: '[appProductItem]'
})
export class ProductItemDirective {
  @Input() appProductItem: Product;
  @Output() emitterProduct = new EventEmitter<Product>();

  constructor() {
  }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.emitterProduct.emit(this.appProductItem);
  }
}
