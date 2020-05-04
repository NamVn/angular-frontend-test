import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatTab} from '@angular/material/tabs';
import {TabService} from '../tab.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private tabService: TabService) {
  }

  ngOnInit(): void {

  }

  setTypeTabView(data: any) {
    this.tabService.addTabType(data);
  }
}
