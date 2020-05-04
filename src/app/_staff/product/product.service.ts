import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {catchError} from 'rxjs/operators';
import {handleError} from '../../_utils/my-core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private advance$: Observable<Product[]>;

  constructor(private http: HttpClient) {
  }

  getProductByChecked(isChecked: boolean) {
    return this.http.get<Product[]>('http://localhost:8080/product/isChecked', {
      params: {
        isChecked: String(isChecked)
      }
    });
  }

  getProductByProblem(isProblem: boolean) {
    return this.http.get<Product[]>('http://localhost:8080/product/isProblem', {
      params: {
        isProblem: String(isProblem)
      }
    });
  }

  putProduct(product: Product) {
    return this.http.put('http://localhost:8080/product/edit', {product})
      .pipe(catchError(handleError));
  }

  detailProduct(product: Product) {
    return this.http.get<Product>('http://localhost:8080/detail', {
      params: {
        id: String(product.id)
      }
    });
  }

  searchAdvance(advancedSearch: any, tabCode: string) {
    this.advance$ = this.http.post<Product[]>('http://localhost:8080/searchAdvance', {
        advancedSearch
      },
      {
        params: {
          tabCode: String(tabCode)
        }
      });
  }

  getCurrentAdvanceData() {
    return this.advance$;
  }
}
