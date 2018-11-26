import { Component, OnInit ,ElementRef,ViewChild } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Observable, observable } from "rxjs";
import { tap, concat } from "rxjs/operators";
import {fromEvent} from 'rxjs';
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { NgbTypeaheadConfig } from "@ng-bootstrap/ng-bootstrap";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [NgbTypeaheadConfig]
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  contentSearch: any[] = [];

  constructor(private spotify:SpotifyService) {}
  
  searching(content: string) {
    this.spotify.getArtists(content).subscribe((data: any) => {
      this.setData(content);
      this.contentSearch = data;
    });
    console.log("New Data Send to API");
    this.getData();
  }
  
  getData() {
    this.spotify.getArtistsAPI().subscribe((data: any) => {
      console.log(data);
    });
  }
  
  setData(content:string) {
    this.spotify.newArtistsAPI(content).subscribe((data:any) =>{
      this.spotify.saveData(data);
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 2
          ? []
          : this.artists
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

  ngOnInit() {
    this.getData();
  }
}