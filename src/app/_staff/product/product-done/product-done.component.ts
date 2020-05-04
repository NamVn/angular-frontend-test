import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-done',
  templateUrl: './product-done.component.html',
  styleUrls: ['./product-done.component.css']
})
export class ProductDoneComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductByChecked(true).subscribe(dataList => {
      let i = 1;
      dataList = dataList.map(data => {
        data.position = i;
        ++i;
        return data;
      });
      this.dataSource = new MatTableDataSource<Product>(dataList);
    });
    this.dataSource.paginator = this.paginator;
  }
}
