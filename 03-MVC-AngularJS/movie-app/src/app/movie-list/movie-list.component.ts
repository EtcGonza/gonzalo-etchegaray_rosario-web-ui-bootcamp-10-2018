// SERVICE
import { MovieService } from "../app/../movie/movie.service";
// COMPONENT
import { MovieComponent } from "../app/../movie/movie.component";
import { ActorComponent } from "../actor/actor.component";
import { Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent{

public movies:MovieComponent [] = [];
private _movieservice = new MovieService();

  constructor() {
  }
  
  createMovie(title:string ,year:number ,duration:number){
    let newMovie = new MovieComponent(title,year,duration);
    // console.log(newMovie);
    this.addMovie(newMovie);
  }

  addMovie(movie:MovieComponent){
    this.movies.push(movie);
  }
  getMovies(num:number){
    return this.movies[num];
  }
  ShowMovie(movie:MovieComponent){
  return this._movieservice.showMovie(movie);
  }
  ShowMovies(){
    for (let i = 0 ; i < this.getMovieLength() ; i++){
      console.log(this.getMovies(i).showMovie());
    }
  }
  getActorLength(movie:MovieComponent){
    return this._movieservice.getLengthCast(movie);
  }
  getMovieLength(){
    return this.movies.length;
  }

  removeMovie(movie:MovieComponent) {
    this.movies.forEach((item, index) => {
      if (item === movie) this.movies.splice(index, 1);
    });
  }
  setTitle(title:string,num:number){
  this.getMovies(num).setTitle(title);
  }
  setYear(year:number, num: number){
    this.getMovies(num).setYear(year);
  }
  setDuration(duration:number, num:number) {
    this.getMovies(num).setDuration(duration);
  }
  setMovie(year: number,title:string,duration:number,index:number){
    this.setTitle(title, index);
    this.setDuration(duration,index);
    this.setYear(year, index);
  }
  
  ngOnInit() {
  let movie1 = new MovieComponent("El señor de los Anillos la comunidad del anillo", 2001, 180);
  let movie2 = new MovieComponent("El señor de los Anillos las dos torres", 2002, 180);
  let movie3 = new MovieComponent("El señor de los Anillos retorno del rey", 2003, 180);
  this.movies[0] = movie1;
  this.movies[1] = movie2;
  this.movies[2] = movie3;
  // console.log(this.movies);
  }
}




// movie_list.ShowMovies();

// let movie_list = new MovieListComponent();

// let movie1 = new MovieComponent("El señor de los Anillos la comunidad del anillo", 2001, 180);
// let movie2 = new MovieComponent("El señor de los Anillos las dos torres", 2001, 180);
// let movie3 = new MovieComponent("El señor de los Anillos retorno del rey", 2001, 180);

// let actor1 = new ActorComponent("Viggo", 61);
// let actor2 = new ActorComponent("Ian", 65);
// let actor3 = new ActorComponent("Orlando", 67);
// let actor4 = new ActorComponent("Sean", 63);
// let actor5 = new ActorComponent("Elijah", 65);
// let actor6 = new ActorComponent("Sean Bean", 20);
// let actor7 = new ActorComponent("Cate", 45);
// let actor8 = new ActorComponent("Andy", 50);

// movie_list.addMovie(movie1);
// movie_list.addMovie(movie2);
// movie_list.addMovie(movie3);

// movie1.addActor(actor1);
// movie1.addActor(actor2);
// movie1.addActor(actor3);
// movie1.addActor(actor4);
// movie1.addActor(actor5);
// movie1.addActor(actor6);
// movie1.addActor(actor7);
// movie1.addActor(actor8);

// movie2.addActor(actor3);
// movie2.addActor(actor6);

// movie3.addActor(actor7);
// movie3.addActor(actor8);

// console.log(movie_list.movies);
// movie_list.setMovie(123,"nemo",1234,0);
// console.log("--------");
// console.log(movie_list.movies);

// console.log(movie_list.ShowMovie(movie1));
