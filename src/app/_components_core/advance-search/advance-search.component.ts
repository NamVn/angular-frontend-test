import {Component, OnInit} from '@angular/core';
import {TabService} from '../../_manager/product/tab.service';
import {ProductService} from '../../_manager/product/product.service';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {
  tab: any;
  advanceData: any;

  constructor(private tabService: TabService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.tabService.getCurrentTab().subscribe(data => {
      this.tab = data;
    });
  }

  search() {
    const codeTab = this.tab.code;
    this.productService.searchAdvance(this.advanceData, codeTab);
  }

}
