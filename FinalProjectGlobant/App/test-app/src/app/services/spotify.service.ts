import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, tap, concat } from "rxjs/operators";
// import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  token: string = "";
  searchData:any;

  constructor(private http: HttpClient) {}

  // QUERY SPOTIFY API Y API PROPIA
  getQuerySpotify(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    let headers = new HttpHeaders({
      Authorization: this.token
    });
    return this.http.get(url, { headers });
  }

  getQueryApi(query: string) {
    const url = `http://localhost:3000/${query}`;
    return this.http.get(url);
  }

  // FUNCIONALIDADES API//
  getArtistsAPI() {
    return this.getQueryApi(`get`);
  }

  newArtistsAPI(name:string) {
    return this.getQueryApi(`add/${name}`);
  }

  saveData(data:any){
    this.searchData = data;
  }
  returnData(){
    console.log(this.searchData);
    return this.searchData;
  }
  // FUNCIONALIDADES SPOTIFY//
  getNewReleases() {
    return this.getQuerySpotify("browse/new-releases?limit=20").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  getArtists(content: string) {
    return this.getQuerySpotify(
      `search?q=${content}&type=artist&limit=50`
    ).pipe(
      map(data => {
        // console.log(data);
        return data["artists"].items;
      })
    );
  }

  getArtist(id: string) {
    console.log("Id Artists " + id);
    return this.getQuerySpotify(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuerySpotify(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => {
        return data["tracks"];
      })
    );
  }

  getProfile() {
    return this.getQuerySpotify(`me`);
  }

  getAlbumsUser() {
    return this.getQuerySpotify(`me/albums?`).pipe(
      map((data: any) => {
        return data.items;
      })
    );
  }

  getTracksUser() {
    return this.getQuerySpotify(`me/tracks?market=ES&limit=15&offset=5`).pipe(
      map((data: any) => {
        return data.items;
      })
    );
  }

  getAlbumFromTrack() {
    return this.getQuerySpotify(`albums/75eP8LZolyNBpqIRyB5pvB?market=ES`);
  }

  getAlbumTracks(id: string) {
    return this.getQuerySpotify(`albums/${id}/tracks?market=ES`).pipe(
      map((data: any) => {
        return data.items;
      })
    );
  }

  getUserArtists() {
    return this.getQuerySpotify(`me/following?type=artist&limit=50`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }
  // TOKEN DE LOGIN //
  getToken(data: any) {
    this.token = this.token.concat("Bearer " + data);
  }
}