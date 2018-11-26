import { Injectable } from '@angular/core';
// COMPONENT
import { MovieComponent } from './movie.component';
import { ActorComponent } from '../actor/actor.component';
// SERVICE
import { ActorService } from "../actor/actor.service";

@Injectable({
  providedIn: "root"
})

export class MovieService {

  private _actorService = new ActorService();

  constructor() {
    // console.log("Movie Service Ready.");
  }
  showMovie (movie:MovieComponent){
    movie.getTitle()
    movie.getDuration();
    movie.getYear();
    movie.showCast();
  }
  getLengthCast(movie:MovieComponent){
  return movie.getCastLength();
  }
  setTitle(movie: MovieComponent,title:string){
  movie.setTitle(title);
  }
  setYear(movie: MovieComponent,num:number) {
  movie.setYear(num);
  }
  setDuration(movie: MovieComponent,num:number) {
  movie.setDuration(num);
  }
  
  // getTitle(movie:MovieComponent){
  //   return movie.getTitle();
  // }
  // getYear(movie:MovieComponent){
  // return movie.getYear();
  // }
  // getDuration(movie:MovieComponent){
  //   return movie.getDuration();
  // }
  // getActor(movie:MovieComponent,num:number){
  // return movie.getActor(num);
  // }
  // getCastLength(movie:MovieComponent){
  // return movie.getCastLength();
  // }
}