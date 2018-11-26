import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * as Collections from "typescript-collections";

// COMPONENT
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
// import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { ButtonComponent } from './button/button.component';
import { TextBoxComponent } from './text-box/text-box.component';
// SERVICE
// import { MovieService } from "./movie/movie.service";
import { ActorService } from "./actor/actor.service";
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorComponent,
    ButtonComponent,
    TextBoxComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
