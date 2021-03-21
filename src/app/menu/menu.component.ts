import { Component, OnInit } from '@angular/core';
import { SearchFilter } from './search-filter';
import {MatDialog} from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  path: string = "";

  searchPhrase: string = "";

  searchFilter: SearchFilter = {
    textFileFilter: {
      txt: true,
      pdf: true,
      odt: true,
      doc: true,
      rtf: true,
      audio: true,
      video: true,
      audioMetadata: true,
      videoMetadata: true,
    },
    translate: true,
    subdirectories: true,
  };

  search = () => {
    this.openDialog();
  }

  openDialog = () => {
    this.dialog.open(ResultComponent, {
      width: '1000px',
      data: {
        path: this.path,
        searchPhrase: this.searchPhrase,
        searchFilter: this.searchFilter
      }
    });
  }  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}
