import { Injectable, NgZone, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesRestApiService {

  private apiUrl = environment.apiUrl + 's_01_get_article_by_id?secret=wikimodels';
  private article: Observable<any>;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private injector: Injector,
    private zone: NgZone) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch article
  getArticle(articleId: string): Observable<any> {
    this.article = this.http.get<any>(this.apiUrl + '&article_id=' + articleId)
    .pipe(
      retry(1),
      // catchError((error: HttpErrorResponse) => {
      //   if (error) {
      //     console.error(error);
      //     this.router.navigate(['error']);
      //     return throwError(error);
      //   }
      // })
    );
    return this.article;
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