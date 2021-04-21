import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { response } from 'express';
import { concat, fromEvent, interval, merge, Observable, of, timer } from 'rxjs';
import { count, map, subscribeOn } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {


//merge
/*   const interval1$ = interval(1000);
  const interval2$ = interval1$.pipe(map(val => 10 * val));

  const result$ = merge(interval1$, interval2$);
  result$.subscribe(console.log); */


//unsubscription
/*     const interval1$ = interval(1000);

    const sub = interval1$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(),5000); */

    const http$ = createHttpObservable('/api/courses');

    const sub = http$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 0);

  }

}


