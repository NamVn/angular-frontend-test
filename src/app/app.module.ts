import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { LoginComponent } from './_auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './_components_core/order/order.component';
import { AdvanceSearchComponent } from './_components_core/advance-search/advance-search.component';
import { QuickSearchComponent } from './_components_core/quick-search/quick-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { PageNotFoundComponent } from './_auth/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { AlertComponent } from './_components_core/alert/alert.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './_components_core/menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import { ProductDetailComponent } from './_components_core/product-detail/product-detail.component';
import { PermissionComponent } from './_manager/permission/permission.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OrderComponent,
    AdvanceSearchComponent,
    QuickSearchComponent,
    PageNotFoundComponent,
    AlertComponent,
    MenuComponent,
    ProductDetailComponent,
    PermissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  exports: [
    ProductDetailComponent,
    AdvanceSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
