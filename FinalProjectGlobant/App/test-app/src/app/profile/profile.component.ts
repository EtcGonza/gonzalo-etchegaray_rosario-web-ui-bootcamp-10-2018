import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { RouterModule, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

userData:any;
token:any;

  constructor(private spotify:SpotifyService, private route:ActivatedRoute) {
    
  }
  
  getProfile(){
  this.spotify.getProfile()
    .subscribe((data:any)=>{
      this.userData = data;
      // console.log(this.userData);
    });
  }
  
  ngOnInit() {
    this.route.fragment.subscribe(
      (tokenData) => {
        this.token = tokenData.split(/[=&]+/);
        this.spotify.getToken(this.token[1]);
      }
    );
    this.getProfile();
  }
}