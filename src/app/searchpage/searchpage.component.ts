import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  // display data
  searchTerm: string | null | undefined;
  searchApiUrl: string | undefined;
  http: any;
  searchWord: any;
  values: any = '';
  onKey(event: any) {
    this.values = event.target.value;
    localStorage.setItem('searchParam', this.values);
    console.log(localStorage.getItem('searchParam'));
  }
  onClickMe(): Observable<any>
  {
    this.searchTerm = localStorage.getItem('searchParam');
    this.searchApiUrl = `https://newsapi.org/v2/everything?q=${this.searchTerm}&apiKey=7e1264e76a8f4b4593640dde6d90cfa2`;
    return this.http.get(this.searchApiUrl);
  }
  ngOnInit() {
    this._services.onClickMe().subscribe((result) => {
      this.searchResultDisplay = result.articles;
    })
  }
}
