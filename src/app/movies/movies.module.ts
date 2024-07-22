import { NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesApiService } from './movies-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DurationPipe } from './duration-time.pipe';


@NgModule({
  declarations: [MoviesComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[MoviesApiService,DurationPipe]
})
export class MoviesModule {

  // moviesService: MoviesApiService = inject(MoviesApiService);

  // ngOnInit(): void {

  // }
}
