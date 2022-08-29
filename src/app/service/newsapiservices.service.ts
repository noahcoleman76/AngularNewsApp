import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7e1264e76a8f4b4593640dde6d90cfa2";

  // technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7e1264e76a8f4b4593640dde6d90cfa2";

  
  //topheading()

  topHeading(): Observable<any> 
  {
    return this._http.get(this.newsApiUrl);
  }

  // technews()
  techNews(): Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }




}
