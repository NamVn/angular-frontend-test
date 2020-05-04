import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDoneComponent } from './product-done/product-done.component';
import { ProductWaitComponent } from './product-wait/product-wait.component';
import { ProductProblemComponent } from './product-problem/product-problem.component';
import { DialogSendStaffComponent } from '../../_manager/dialog-send-staff/dialog-send-staff.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AppModule} from '../../app.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProductItemDirective } from './product-item.directive';
import { DialogProductDetailComponent } from './dialog-product-detail/dialog-product-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [ProductComponent, ProductDoneComponent, ProductWaitComponent, ProductProblemComponent, DialogSendStaffComponent, ProductItemDirective, DialogProductDetailComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    AppModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule
  ]
})
export class ProductModule { }
