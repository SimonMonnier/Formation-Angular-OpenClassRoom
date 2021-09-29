import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Import the functions you need from the SDKs you need
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDvlhvY4_WrRrFd2j02ol5ctF9ZnjTKndE",
      authDomain: "booksshelve-4f429.firebaseapp.com",
      projectId: "booksshelve-4f429",
      storageBucket: "booksshelve-4f429.appspot.com",
      messagingSenderId: "597425612265",
      appId: "1:597425612265:web:58695874eb88f30e121778"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
  }
}
