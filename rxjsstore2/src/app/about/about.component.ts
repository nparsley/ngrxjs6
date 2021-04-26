import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, observable, Observable, of, timer, merge, Subject, from, BehaviorSubject, AsyncSubject, ReplaySubject} from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {

      // BEHAVIOR SUBJECT
/*       // const subject = new Subject();
      const subject = new BehaviorSubject(0);

      const series$ = subject.asObservable();
      series$.subscribe(val => console.log("early sub:" + val));



      subject.next(1);
      subject.next(2);
      subject.next(3);

      // subject.complete();
      subject.complete();

      setTimeout(() => {
        series$.subscribe(val => console.log("late sub:" + val));

      // subject.next(4);
      subject.next(4);


      }, 3000); */

      // ASYNC SUBJECT

/*       const subject = new AsyncSubject();

      const series$ = subject.asObservable();
      series$.subscribe(val => console.log("first sub:" + val));



      subject.next(1);
      subject.next(2);
      subject.next(3);

      subject.complete();
      // subject.complete();


      setTimeout(() => {
        series$.subscribe(val => console.log("second sub:" + val));

      }, 3000) */


// REPLAY SUBJECT
/*       const subject = new ReplaySubject();

      const series$ = subject.asObservable();
      series$.subscribe(val => console.log("first sub:" + val));



      subject.next(1);
      subject.next(2);
      subject.next(3);

      // subject.complete();
      // subject.complete();


      setTimeout(() => {
        series$.subscribe(val => console.log("second sub:" + val));

        subject.next(4);

      }, 3000) */

    }


}






