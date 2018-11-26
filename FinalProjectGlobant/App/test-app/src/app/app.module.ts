import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
// COMPONENTS
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserTrackComponent } from './user-track/user-track.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserArtistsComponent } from './user-artists/user-artists.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
//ROUTES
import { ROUTES } from './app.routes';
//PIPES
import { NoimagesPipe } from './pipes/noimages.pipe';
import { DomseguroPipe } from "./pipes/domseguro.pipe";
//SERVICES
// import { SpotifyService } from './services/spotify.service';

// import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NoimagesPipe,
    DomseguroPipe,
    CardComponent,
    ProfileComponent,
    UserTrackComponent,
    UserAlbumsComponent,
    AlbumsComponent,
    UserArtistsComponent,
    BadgeComponent,
    ButtonComponent
  ],
  imports: [
    NgbModule.forRoot(), // IMPPORTS => MODULES
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
