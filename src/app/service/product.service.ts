import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { Product } from '../products/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl='api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap(data=>console.log("data we get from server ", JSON.stringify(data))),
      catchError(this.handleError));
  }
   private handleError(err: HttpErrorResponse){
     let errMessage='';
     if(err.error instanceof ErrorEvent){
       errMessage=`An error has occured ${err.error.message}`;
     }
     else{
       errMessage=`Server returned Code ${err.status}, error message is: ${err.error.message}`;
     }
     console.error(errMessage);
     return throwError(errMessage);
   }
}


