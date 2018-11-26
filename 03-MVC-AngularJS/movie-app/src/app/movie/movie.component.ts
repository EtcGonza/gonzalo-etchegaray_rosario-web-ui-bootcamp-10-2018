// COMPONENT
import { Component, OnInit} from '@angular/core';
import { ActorComponent} from "../actor/actor.component";
// SERVICE
import { MovieService } from "../app/../movie/movie.service";
import { ActorService } from '../actor/actor.service';

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  private title: string;
  private year: number;
  private duration: number;
  private cast: ActorComponent[] = [];
  public _movieservice = new MovieService();
  public _actorService = new ActorService();

  constructor(title: string, year: number, duration: number) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  addActor(actor: ActorComponent) {
    this.cast.push(actor);
    // console.log("Se agrego un nuevo actor, length: " + this.getCastLength());
  }
  showCast() {
    for (let i = 0; i < this.getCastLength(); i++) {
      console.log(this.cast[i].getName() + " " + this.cast[i].getAge());
    }
  }
  getCastLength() {
    return this.cast.length;
  }
  showMovie() {
    return this._movieservice.showMovie(this);
  }
  
  getTitle() {
    return this.title;
  }
  getYear() {
  return this.year;
  }
  getDuration() {
  return this.duration;
  }
  getActorName(actor:ActorComponent){
  return this._actorService.getName(actor);
  }
  getActorAge(actor:ActorComponent){
    return this._actorService.getAge(actor);
  }
  getActor(num:number){
    return this.cast[num];
  }

  setTitle(title:string){
  this.title = title;
  }
  setYear(num: number) {
    this.year = num;
  }
  setDuration(num:number) {
  this.duration = num;
  }
// ///////////////////////////////////////
  // showTitle() {
  //   console.log("Title: " + this.title);
  // }
  // showYear() {
  //   console.log("Year " + this.year);
  // }
  // showDuration() {
  //   console.log("Duration " + this.duration + "min");
  // }
  // showCast() {
  //   for (let i = 0; i < this.getCastLength(); i++) {
  //     console.log(this.cast[i].getName() + " " + this.cast[i].getAge());
  //   }
  // }
  // getCastLength() {
  //   return this.cast.length;
  // }
  // showMovie() {
  //   return this._movieservice.showMovie(this);
  // }

  /////////////////////////////////////////
  // showTitle() {
  //   console.log("Title: " + this.title);
  // }
  // showYear() {
  //   console.log("Year " + this.year);
  // }
  // showDuration() {
  //   console.log("Duration " + this.duration + "min");
  // }
  // showCast() {
  //   for (let i = 0; i < this.getCastLength(); i++) {
  //     console.log(this.cast[i].getName() + " " + this.cast[i].getAge());
  //   }
  // }
  // getCastLength() {
  //   return this.cast.length;
  // }
  // showMovie() {
  //   console.log(this._movieservice.showMovie(this));
  // }

  ///////////////////////////////////
  ngOnInit() {}
}