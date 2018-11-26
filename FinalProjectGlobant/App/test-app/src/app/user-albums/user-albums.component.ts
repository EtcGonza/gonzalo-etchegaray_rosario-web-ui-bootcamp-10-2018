import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {

  userAlbums: any[] = [];

  constructor(private spotify: SpotifyService, private router: Router) {
    this.getAlbumsProfile();
  }

  getAlbumsProfile() {
    this.spotify.getAlbumsUser()
      .subscribe((data: any) => {
         console.log(data);
        this.userAlbums = data;
      });
  }

  showAlbum(album:any) {
    let albumId;
    if (album.album.album_type === "album") {
      albumId = album.album.id;
    } else {
      console.log("ERROR");
    }
    this.router.navigate(['/album', albumId]);
  }

  ngOnInit() {
  }

}
