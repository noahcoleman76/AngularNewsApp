import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
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
  }

}
