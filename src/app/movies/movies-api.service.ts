import { Inject, Injectable, signal } from '@angular/core';
import {HttpResponse} from 'msw';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  private movieListUrl = '/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.movieListUrl);
  }
 getMovieDetails(id:string):Observable<any> {
  return this.http.get<any>(`movies/${id}`);
}
}
