import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common'
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviesApiService } from './movies/movies-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DurationPipe } from './movies/duration-time.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,MoviesModule,HttpClientModule,CommonModule ],
  declarations: [ AppComponent,MoviesComponent],
  providers: [MoviesApiService,DurationPipe],
  bootstrap:    [ AppComponent ],
  exports: []
})
export class AppModule { }
