import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Data} from "../data";
import {DATA} from "../mock-data"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'account-detail-card'
  }
})
export class ListComponent implements OnInit {
  datas = DATA;
  selectedField: Data;

  constructor() { }

  ngOnInit() {
  }

  onSelect(data: Data): void {
    this.selectedField = data;
    console.log(this.selectedField)
  }
  
}