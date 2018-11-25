import { Injectable } from '@angular/core';
import { ActorComponent } from './actor.component';


@Injectable({
  providedIn: 'root'
})
export class ActorService{

  constructor() {
    // console.log("ActorService Ready");
   }
  getName(actor:ActorComponent) {
  return actor.getName();
  }
  getAge(actor:ActorComponent) {
  return actor.getAge();
  }
}
