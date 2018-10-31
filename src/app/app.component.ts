import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyDJIxQDJwC9BYZGWYtfOyaw3Xmgq3yjhys',
      authDomain: 'portfolio-e9b32.firebaseapp.com'
    };
    firebase.initializeApp(config);
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
