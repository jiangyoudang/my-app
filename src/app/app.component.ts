import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cong';
  repeat = [1, 3];
  private data: Observable<number>;
  values: Array<number> = [];
  private anyErrors;
  private finished;

  constructor() {
  }

  ngOnInit() {
    this.data = Observable.of(1, 2, 3);
    // this.data = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(42);
    //   }, 1000);
    //
    //   setTimeout(() => {
    //     observer.next(43);
    //   }, 2000);
    //
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 3000);
    // });

    this.data.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = true,
      () => this.finished = true
    );
  }

}
