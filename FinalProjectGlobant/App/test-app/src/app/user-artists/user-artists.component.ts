import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-artists',
  templateUrl: './user-artists.component.html',
  styleUrls: ['./user-artists.component.css']
})
export class UserArtistsComponent implements OnInit {

  userArtists:any [] = [];

  constructor(private spotofy:SpotifyService,
              private router: Router) {
    this.getUserArtists();
   }

  getUserArtists(){
    this.spotofy.getUserArtists()
      .subscribe((data:any) => {
        this.userArtists = data;
        // console.log(data);
      });
  }

  showArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }

  ngOnInit() {
  }

}
