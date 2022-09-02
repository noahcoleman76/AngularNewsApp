import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  technewsDisplay:any = [];
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
  ngOnInit(): void {

    this._services.techNews().subscribe((result) => {
      this.technewsDisplay = result.articles;
    })

  }

}
