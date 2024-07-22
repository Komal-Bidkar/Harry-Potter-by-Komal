import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DurationPipe } from '../duration-time.pipe';
import { MovieDetails} from './movie-details.model'
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,DurationPipe],
  providers: [MoviesApiService],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movieDetails!: MovieDetails;
  id: any;
  constructor(private moviesService: MoviesApiService,private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.id = params.params.id
    });

    setTimeout(()=>{
      this.moviesService.getMovieDetails(this.id).subscribe((data: MovieDetails) => {
        this.movieDetails = data;
      });
    },100)
  }
  backButton(){
    this.router.navigate(['/movies'])
  }
}
