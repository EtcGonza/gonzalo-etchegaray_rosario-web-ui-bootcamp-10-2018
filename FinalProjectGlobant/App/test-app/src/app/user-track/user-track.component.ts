import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../services/spotify.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-track',
  templateUrl: './user-track.component.html',
  styleUrls: ['./user-track.component.css']
})
export class UserTrackComponent implements OnInit {
  userTracks: any[] = [];
  array:any [] = [];

  constructor(private spotify: SpotifyService,
    private router:Router) { 
    this.getTracksProfile();
  }

  getTracksProfile() {
    this.spotify.getTracksUser()
      .subscribe((data: any) => {
        this.userTracks = data;
      });
  }

  getAlbumFromTrack(){
    this.spotify.getAlbumFromTrack()
      .subscribe((data:any)=>{
        console.log(data.id);
        return data.id;
      });
  }

  getIdAlbumFromTrack(){

  }

  showAlbum(album: any) {
    let albumId;
    if (album.album.album_type === "album") {
      albumId = album.album.id;
    } else {
      console.log("ERROR");
    }
    this.router.navigate(['/album', albumId]);
  }

  ngOnInit() {}

}
