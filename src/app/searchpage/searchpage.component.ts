import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
  searchText!: string;
  articles: any = [];

  constructor(private _services:AppComponent) { }

  searchResultDisplay: any = [];

  ngOnInit() {
    this._services.onClickMe().subscribe((result) => {
      this.searchResultDisplay = result.articles;
    })
  }
}
