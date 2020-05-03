import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-wait',
  templateUrl: './product-wait.component.html',
  styleUrls: ['./product-wait.component.css']
})
export class ProductWaitComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'code', 'description'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductByChecked(false).subscribe(dataList => {
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
