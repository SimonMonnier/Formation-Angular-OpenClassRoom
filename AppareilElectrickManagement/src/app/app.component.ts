import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { interval, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy {
  
  secondes: number =0;
  isAuth: boolean = false;
  counterSubscription: Subscription;

  constructor(private authService: AuthService) {}

  isAuthOk(): boolean {
    this.isAuth = this.authService.isAuth;
    return this.isAuth;
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value:number) => {
        this.secondes = value + 1;
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
