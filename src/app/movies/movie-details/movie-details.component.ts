import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DurationPipe } from '../duration-time.pipe';
import { MovieDetails } from './movie-details.model';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  providers: [MoviesApiService],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: MovieDetails;
  id: string | null = null;

  constructor(
    private moviesService: MoviesApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    setTimeout(() => {
      if (this.id) {
        this.moviesService.getMovieDetails(this.id).subscribe((data: MovieDetails) => {
          this.movieDetails = data;
        });
      }
    }, 100);
  }

  backButton(): void {
    this.router.navigate(['/movies']);
  }
}
