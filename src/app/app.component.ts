import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-observable';

  ob1$ = new Observable( (subscriber) => {
    subscriber.next(111);
    subscriber.next(222);
    subscriber.next(333);
    subscriber.next(444);
    subscriber.next(555);
    setTimeout(() => {subscriber.next(666)},1000);
    setTimeout(() => {subscriber.next(777)},2000);
    setTimeout(() => {subscriber.next(888)},3000);
    setTimeout(() => {subscriber.complete()}, 4000);
  });

  ar1 = [2, 4, 6, 8];
  ar2 = [1, 3, 5, 7];
  
  ob2$ = of(...this.ar1, this.ar2, "Hello");

  ob3$ = from(this.ar1).pipe(filter((n) => n > 4), map((n) => {return n * 10}));

  ngOnInit(): void {
    this.ob1$.subscribe({
      next(val){console.log("value : " + val)},
      error(val){ console.log("error" + val)},
      complete(){console.log("completed")}
    })};
    
  
}
