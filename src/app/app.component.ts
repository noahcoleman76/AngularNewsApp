import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsweb';
  searchTerm: any;
  searchApiUrl: any = '';
  constructor(private http: HttpClient) {}
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
}
