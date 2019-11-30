import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RibbonsRestApi2Service {

  private apiUrl = environment.apiUrl + 's_02_get_ribbon_by_id?secret=wikimodels';
  private ribbon: Observable<any>;
  constructor(
    private http: HttpClient,
    private router: Router) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch article
  getRibbon(ribbonId: string): Observable<any> {
    if (!this.ribbon) {
      this.ribbon = this.http.get<any>(this.apiUrl + '&ribbon_id=' + ribbonId)
      .pipe(
        shareReplay(1),
        retry(1)
      );
    }    
    return this.ribbon;
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
