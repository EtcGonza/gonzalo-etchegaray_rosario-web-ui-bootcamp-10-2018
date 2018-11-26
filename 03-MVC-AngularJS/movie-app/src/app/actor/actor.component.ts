import {Component} from "@angular/core";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName(){ 
  return this.name;
  }
  getAge() { 
  return this.age;
  }
  getActor(){
    return this;
  }
  ngOnInit() {}
}
