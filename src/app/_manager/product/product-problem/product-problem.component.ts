import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {DialogSendStaffComponent} from '../dialog-send-staff/dialog-send-staff.component';
import {DialogProductDetailComponent} from '../dialog-product-detail/dialog-product-detail.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-product-problem',
  templateUrl: './product-problem.component.html',
  styleUrls: ['./product-problem.component.css']
})
export class ProductProblemComponent implements OnInit {
  productList: Product[];
  toolTipPosition: string;

  constructor(private productService: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.toolTipPosition = 'above';
    /**
     * Nhận lại các san phẩm có vấn đề
     */
    this.productService.getProductByProblem(true).subscribe(dataList => {
      this.setProducts(dataList);
    });
    /**
     * Nhận lại các sản phẩm tìm kiếm theo advance search
     *
     */
    this.productService.getCurrentAdvanceData().subscribe(dataList => {
      this.setProducts(dataList);
    });
  }

  openDetailDialog(product: Product) {
    const dialogRef = this.dialog.open(DialogProductDetailComponent, {
      width: '500px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Gửi request đến server để chỉnh sửa ghi chú của sản phẩm');
      this.productService.putProduct(result)
        .subscribe(data => {
          this.productService.getProductByProblem(true).subscribe(dataList => {
            this.setProducts(dataList);
          });
        });
    });
  }

  setProducts(dataList: Product[]) {
    let i = 1;
    dataList = dataList.map(data => {
      data.position = i;
      ++i;
      return data;
    });
    this.productList = dataList;
  }
}
