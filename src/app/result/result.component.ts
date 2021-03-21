import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { SearchFilter } from '../menu/search-filter';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  subject: WebSocketSubject<string>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {searchPhrase: string, path: string, searchFilter: SearchFilter}
  ) {
    this.subject = webSocket({
      url: 'ws://localhost:8081/echo',
      deserializer: ({data}) => data
    });

  }

  results: string[] = [];

  ngOnInit(): void {
    this.results = [];
    this.subject
      .subscribe(
        (msg) => this.results.push(msg),
        (err) => console.error(err),
        () => {}
      );
    this.subject.next(JSON.stringify(this.data));
  }

}
