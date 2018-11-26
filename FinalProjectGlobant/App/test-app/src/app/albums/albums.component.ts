import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  
artist:any = {};
artistId:string;
albumsTracks: any [] = [];

  constructor(private spotify:SpotifyService, 
              private router: ActivatedRoute) { 
    this.router.params.subscribe( params =>{
      this.getAlbumTracks(params['id']);
      this.getArtist(this.artistId);
    });
  }

  getAlbumTracks(Artist_id:string){
    this.spotify.getAlbumTracks(Artist_id)
      .subscribe((data:any)=>{
        this.albumsTracks = data;
        this.artistId = data[0].artists[0].id;
        // console.log(data[0].artists[0].id); //IDArtist
        console.log(this.albumsTracks);
      });
  }

  getArtist(id:string) {
    this.spotify.getArtist(id)
      .subscribe(data => {
         console.log(data);
        this.artist = data;
      });
  }

  ngOnInit() {}

}
