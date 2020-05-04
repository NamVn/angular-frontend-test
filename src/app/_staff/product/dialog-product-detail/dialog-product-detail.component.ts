import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-product-detail',
  templateUrl: './dialog-product-detail.component.html',
  styleUrls: ['./dialog-product-detail.component.css']
})
export class DialogProductDetailComponent implements OnInit {
  productDto: Product;


  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<DialogProductDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Product) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.productService.detailProduct(this.data)
      .subscribe(pr => {
        this.productDto = pr;
      });

  }

}
