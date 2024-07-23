import { Component, OnInit, signal, computed, WritableSignal } from '@angular/core';
import { MoviesApiService } from './movies-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from './duration-time.pipe';
import { Movie } from './movies.model';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DurationPipe],
  providers: [MoviesApiService],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:WritableSignal<Movie[]> = signal([])
  searchTitle = signal('');
  searchDate = signal('');

  filteredItems = computed(() => {
    if (this.movies().length === 0) {
      return [];
    }
    return this.movies().filter((item: Movie) =>
      item.title.toLowerCase().includes(this.searchTitle().toLowerCase()) &&
      item.release_date.toLowerCase().includes(this.searchDate().toLowerCase())
    );
  });

  constructor(private moviesService: MoviesApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies.set(data);
      },
      error: (err) => console.error('Error fetching movies:', err)
    });
  }

  showDetails(id: string) {
    this.router.navigate(['/movies', id]);
  }

  searchMovieTitle(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchTitle.set(inputElement.value);
  }

  searchMovieDate(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchDate.set(inputElement.value);
  }
}
