import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer, Subscription } from 'rxjs/Rx';
import { Params } from '@angular/router';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  mycustomSubscription: Subscription;
  constructor() { }

  ngOnInit() {
  // const myNumber = Observable.interval(1000);
  // myNumber.subscribe(
  //   (number: number) => {
  //   console.log(number);
  //   }
  // );

  const myObservable = Observable.create((observer: Observer<string>) => {
    setTimeout(
      () => {
      observer.next('first package');
      }, 2000);
      setTimeout(
        () => {
        observer.next('second package');
        }, 4000);
        setTimeout(
          () => {
         // observer.error('this doesnt work');
         observer.complete();
          }, 5000);
          setTimeout(
            () => {
            observer.next('third package');
            }, 6000);
    });

    this.mycustomSubscription = myObservable.subscribe(
      (data: string) => {
      console.log(data);
      },
      (error: string) => {
      console.log(error);
      },
      () => {
      console.log('completed');
      }
    );
  }
  ngDestroy() {
    this.mycustomSubscription.unsubscribe();
  }
  


}
