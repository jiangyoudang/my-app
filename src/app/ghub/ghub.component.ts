import {Component, OnInit} from '@angular/core';
import {GhubService} from './ghub.service';

@Component({
  selector: 'app-ghub',
  templateUrl: './ghub.component.html',
  styleUrls: ['./ghub.component.css']
})
export class GhubComponent implements OnInit {
  data: {};

  constructor(private ghub: GhubService) {
  }

  ngOnInit() {
    this.ghub.getRepo().subscribe(
      data => {
        console.log(data);
        this.data = data;
      })
    ;
  }

}
