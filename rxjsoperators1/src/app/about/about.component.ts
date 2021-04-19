import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { response } from 'express';
import { fromEvent, interval, Observable, timer } from 'rxjs';
import { count, map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    const http$ = createHttpObservable('/api/courses');

    const courses$ = http$
    .pipe(
      map(res => res['payload'])
    );

    courses$.subscribe(
      courses => console.log(courses),
      () => {}, // noop can be used here in place
      () => console.log('completed')
    );

  }

}


