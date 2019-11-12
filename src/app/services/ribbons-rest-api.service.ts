import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RibbonsRestApiService {

  private apiUrl = environment.apiUrl + 's_02_get_ribbon_by_id?secret=wikimodels';
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch article
  getRibbon(ribbonId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + '&ribbon_id=' + ribbonId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
 }

}
