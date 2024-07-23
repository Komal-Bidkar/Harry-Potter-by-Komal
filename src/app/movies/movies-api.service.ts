import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movies.model';
import { MovieDetails } from './movie-details/movie-details.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  private movieListUrl = '/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieListUrl);
  }
 getMovieDetails(id:string):Observable<MovieDetails> {
  return this.http.get<MovieDetails>(`movies/${id}`);
}
}
