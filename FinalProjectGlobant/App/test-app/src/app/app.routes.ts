import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { ProfileComponent } from './profile/profile.component';
import { UserTrackComponent } from './user-track/user-track.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserArtistsComponent } from './user-artists/user-artists.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistComponent}, //Con el /id me aseguro de recibir el id del artista en la ruta.
    {path: 'tracks', component: UserTrackComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'albums', component: UserAlbumsComponent },
    {path: 'album/:id', component: AlbumsComponent },
    { path: 'artists', component: UserArtistsComponent },
    // {path: '', pathMatch:'full', redirectTo:'home'},
    // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];