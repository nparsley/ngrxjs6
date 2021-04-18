import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { count } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

/*     --STREAM OF VALUES, AN INTERVAL OVER TIME

    document.addEventListener('click', evt => {
      console.log(evt);

      setTimeout(() => {

        console.log("finished...");

        let counter = 0;

        setInterval(() => {

          console.log(counter);
          counter++;

        }, 1000);

      }, 3000);

    }); */

/*     --OBSERVABLE EX, observable is a blueprint for a stream

    const interval$ = timer(3000, 1000);

    interval$.subscribe(val => console.log("stream 1 => " + val));

    interval$.subscribe(val => console.log("stream 2 => " + val));

    const click$ = fromEvent(document, 'click');

    click$.subscribe(evt => console.log(evt)); */


    const interval$ = timer(3000, 1000);

    const sub = interval$.subscribe(val => console.log("stream 1 => " + val));

    setTimeout(() => sub.unsubscribe(), 5000);

    const click$ = fromEvent(document, 'click');

    click$.subscribe(
      evt => console.log(evt),
      err => console.log(err),
      () => console.log("completed")

    );



  }

}
